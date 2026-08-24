#!/usr/bin/env python3
"""Village RPG auto-fix + resource enrichment pass.
Runs headless in the daily cron. Three bounded actions:

1. Auto-fix confirmed-broken URLs that are trivially fixable:
   - Unclosed parens in Wikipedia URLs (https://en.wikipedia.org/wiki/Cob_(material)
     -> https://en.wikipedia.org/wiki/Cob_(material) )
   - Trailing junk (double slashes, stray "-", ",", etc.)
2. Append 1-3 vetted learning resources to the Library per run
   (from a small curated pool — NO random web scraping, vetted by hand first).
3. Commit only if changes were made; always leave a summary line.

Cheap: pure stdlib, zero LLM calls.
"""
import json, re, os, sys, datetime, subprocess

REPO = "/root/workspace/village"
os.chdir(REPO)

# --- Trivial fix patterns: (regex, replacement, what-it-fixes) ---
FIX_PATTERNS = [
    # Wikipedia URLs missing the closing paren (truncated by scrapers)
    (re.compile(r'(https://en\.wikipedia\.org/wiki/[^)>\s]*?\((?:[^)>\s]*)?"?)(?=\s|"|\x27|<|>)'), r"\1)", "unclosed paren"),
    # double trailing slash (only AFTER the protocol — never http:// itself)
    (re.compile(r'(https?://[^\s"\'<>]+?)/{2,}(?=\s|"|\x27|<|>|$)'), r"\1/", "double trailing slash"),
    # trailing junk chars that aren't part of URL
    (re.compile(r'(https?://[^\s"\'<>]+?)[,.;]+(?=\s|"|\x27|<|>)'), r"\1", "trailing punct"),
    # stray dash / colon at end of URL
    (re.compile(r'(https?://[^\s"\'<>]+?)[-:]$'), r"\1", "trailing dash"),
]

# --- Vetted library resources (curated pool; added gradually so the Library grows) ---
RESOURCE_POOL = [
    # (topic, title, url, blurb)
    ("Gardening", "Seed Savers Exchange — Learn", "https://www.seedsavers.org/learn",
     "Heirloom seed saving, growing guides, and community seed libraries."),
    ("Food Preservation", "National Center for Home Food Preservation", "https://nchfp.uga.edu/",
     "USDA-backed canning, drying, freezing, and fermentation instructions."),
    ("Woodworking", "ifixit Repair Guides", "https://www.ifixit.com/Guide",
     "Step-by-step tool and repair guides — practical hands-on skills."),
    ("Kids Movement", "GoNoodle", "https://www.gonoodle.com",
     "Short movement and mindfulness videos for kids, school-approved."),
    ("Physics", "OpenStax Physics", "https://openstax.org/subjects/science",
     "Free, peer-reviewed open textbooks — includes physics and biology."),
    ("Economics", "Khan Academy — Economics & Finance", "https://www.khanacademy.org/economics-finance-domain",
     "Free micro/macro econ, personal finance, and market basics."),
    ("Nature Study", "Cornell Lab — All About Birds", "https://www.allaboutbirds.org/guide/",
     "Bird guides, calls, and citizen-science projects for nature study."),
    ("Permaculture", "Permies.com — PEP forums", "https://permies.com/forums",
     "The source community for PEP/SKIP badges and permaculture practice."),
]

# --- Bounded resource addition: how many new resources per run ---
RESOURCES_PER_RUN = 2

# Family ledger integration (coordinated crons)
FAMILY_DIR = "/root/workspace/cron-coordination"
sys.path.insert(0, FAMILY_DIR)
try:
    import family as family_ledger
    FAMILY_OK = True
except ImportError:
    FAMILY_OK = False

def fix_text(text, log, exclude=()):
    """Apply trivial URL fixes, skipping excluded substrings. Returns (fixed_text, total_fixes)."""
    total = 0
    for pat, repl, what in FIX_PATTERNS:
        # Split on excluded markers so we never touch them
        pieces = re.split('(' + '|'.join(re.escape(e) for e in exclude) + ')', text)
        out = []
        n = 0
        for i, piece in enumerate(pieces):
            if i % 2 == 1:  # excluded marker — leave as-is
                out.append(piece)
            else:
                new, c = pat.subn(repl, piece)
                out.append(new)
                n += c
        text = ''.join(out)
        if n:
            log.append(f"  fixed {n} × {what}")
            total += n
    return text, total

def main():
    log = []
    changed = False
    today = datetime.date.today().isoformat()

    # --- 0. Family welfare: note stale siblings for the report ---
    if FAMILY_OK:
        stale = family_ledger.staleness_report()
        if stale:
            stale_txt = "; ".join(f"{s['member']} idle {s['hours_since']}h" for s in stale)
            log.append(f"  watchdog: {stale_txt}")
            print(f"  watchdog: {stale_txt}", flush=True)
        run, reason = family_ledger.should_run("village", essential=True)
        if not run:
            log.append(f"  family gate: {reason}")

    # --- 1. Fix links in index.html ---
    for fname in ["index.html", "data.js", "master_quests.json"]:
        if not os.path.exists(fname):
            continue
        with open(fname, encoding="utf-8") as f:
            raw = f.read()
        text, n = fix_text(raw, log, exclude=("letta.com/api",))
        if n:
            with open(fname, "w", encoding="utf-8") as f:
                f.write(text)
            changed = True
            log.append(f"  {fname}: {n} URL fixes applied")
            print(f"  {fname}: {n} URL fixes", flush=True)
    # Find the Library resources region (look for lib-link anchors)
    lib_marker = None
    if os.path.exists("index.html"):
        with open("index.html", encoding="utf-8") as f:
            html = f.read()
        # Find an insertion point: after the last <a class="lib-link"> block closes
        matches = list(re.finditer(r'(<a href="[^"]*" target="_blank" class="lib-link">.*?</a>)', html, re.DOTALL))
        if matches:
            lib_marker = matches[-1].end()
        if lib_marker:
            added = 0
            # Pick resources not already referenced
            already = set(re.findall(r'href="(https?://[^"]+)"', html))
            pool = [r for r in RESOURCE_POOL if r[2] not in already]
            for topic, title, url, blurb in pool[:RESOURCES_PER_RUN]:
                new_block = f'\n      <a href="{url}" target="_blank" class="lib-link"><strong>{title}:</strong> {blurb}</a>'
                html = html[:lib_marker] + new_block + html[lib_marker:]
                lib_marker += len(new_block)
                log.append(f"  added resource: {title}")
                added += 1
            if added:
                with open("index.html", "w", encoding="utf-8") as f:
                    f.write(html)
                changed = True
                print(f"  added {added} library resources", flush=True)

    # --- 3. Family cross-pollination: archive grows -> Library enriches ---
    archive_added = 0
    if FAMILY_OK:
        growth = family_ledger.get_archive_growth()
        added = growth.get("added_since_last")
        if added and added > 50:
            log.append(f"  cross-feed: AFLinks archive grew by {added} entries since last check; Library will surface fresh docs next passes")
            print(f"  cross-feed: archive +{added} entries", flush=True)

    # --- 4. Family check-in ---
    if FAMILY_OK:
        status = "ok" if not any("error" in l for l in log) else "error"
        summary = "; ".join(l.strip() for l in log)[:280] or "no changes"
        family_ledger.check_in("village", status, summary)
        print(f"  family check-in: {status}", flush=True)

    # --- 3b. Update report with today's work ---
    if changed:
        summary = f"\n## {today} maintenance pass\n"
        for line in log:
            summary += f"- {line}\n"
        report_path = "village-link-report.md"
        if os.path.exists(report_path):
            with open(report_path, encoding="utf-8") as f:
                prev = f.read()
            with open(report_path, "w", encoding="utf-8") as f:
                f.write(summary + "\n" + prev)
        else:
            with open(report_path, "w", encoding="utf-8") as f:
                f.write(f"# Village Maintenance\n\n{summary}\n")
        print(f"Summary appended to {report_path}", flush=True)
    else:
        print("No changes needed this run", flush=True)

if __name__ == "__main__":
    main()