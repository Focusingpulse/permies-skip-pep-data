#!/usr/bin/env python3
"""Meditation & Abilities schema validator.

Guards `meditation.js` — the practice-to-ability map that the
`meditation-abilities` cron grows.

The gate the doctrine specifies (living-library/synthesis/meditation-abilities/README.md):
a run fails on a MISSING LABEL, a MISSING SOURCE, or an ENTRY WITH NO
APPLICATION. This validator enforces exactly that, plus the four-link chain
(PRACTICE -> ENERGY-BODY EFFECT -> ABILITY -> LONG-TERM MEANING) that every
entry must carry with each link labeled separately.

An entry with `measurable: "none identified"` is VALID — the doctrine's rule
is that falsifiable-but-untested is a category, not a refutation. It gets
filed, not deleted. Only a missing or empty `measurable` field fails.

Run: python3 validate_meditation.py
Exit 0 = valid, exit 1 = the section is malformed (do not push).
"""
import json
import os
import re
import subprocess
import sys

REPO = os.path.dirname(os.path.abspath(__file__))
MEDITATION = os.path.join(REPO, "meditation.js")

REQUIRED = [
    "id", "icon", "name", "esName", "tagline", "lineage", "what", "esWhat",
    "chain", "claimed", "measurable", "correlate", "label",
    "practice", "reps", "evidence", "evClass", "research", "verify", "village", "quest",
]

# The lane's own evidence vocabulary (doctrine: meditation-abilities/README.md).
LABELS = {"replicated", "documented", "plausible", "folklore"}
# The Village's badge vocabulary, used for rendering.
EV_CLASSES = {"strong", "moderate", "weak"}
# The four links of the chain — all required, each labeled separately.
CHAIN_LINKS = ["practice", "energyBody", "ability", "meaning"]

SUBJECTS = {
    "Art", "Constitution", "Economics", "Engineering", "Geography",
    "Health", "History", "Math", "PE", "Science", "Writing",
}
TIERS = ["sand", "straw", "wood", "iron"]


def load_data():
    """Evaluate meditation.js in node and return the exported data as JSON."""
    source = open(MEDITATION, encoding="utf-8").read()
    js = source + (
        "\nprocess.stdout.write(JSON.stringify("
        "{systems:MEDITATION_SYSTEMS,quests:MEDITATION_QUESTS,"
        "depot:MEDITATION_DEPOT,crosslinks:MEDITATION_CROSSLINKS}));"
    )
    try:
        out = subprocess.run(
            ["node", "-e", js], capture_output=True, text=True, timeout=60, check=True
        )
    except FileNotFoundError:
        print("WARNING: node not found — skipping JS evaluation, doing text checks only")
        return None
    except subprocess.CalledProcessError as e:
        print("CRITICAL: meditation.js failed to evaluate in node:")
        print(e.stderr.strip()[:2000])
        sys.exit(1)
    return json.loads(out.stdout)


def check_text_level(text):
    issues = []
    for name in ("MEDITATION_SYSTEMS", "MEDITATION_QUESTS",
                 "MEDITATION_DEPOT", "MEDITATION_CROSSLINKS"):
        if f"const {name}" not in text:
            issues.append(f"CRITICAL: {name} not found in meditation.js")
    if "VILLAGE_QUESTS.some(" not in text:
        issues.append("CRITICAL: guild push is not guarded against double-loading")
    for m in re.finditer(r'"source"\s*:\s*"([^"]{0,40})"', text):
        if len(m.group(1).strip()) < 8:
            issues.append(f"WARNING: suspiciously short research source: {m.group(1)!r}")
    return issues


def check_systems(data):
    issues = []
    systems = data["systems"]
    if not systems:
        issues.append("CRITICAL: MEDITATION_SYSTEMS is empty")
        return issues

    seen_ids = set()
    for s in systems:
        sid = s.get("id", "<no id>")
        for key in REQUIRED:
            if not s.get(key):
                issues.append(f"ERROR: {sid} missing required field '{key}'")
        if sid in seen_ids:
            issues.append(f"ERROR: duplicate system id '{sid}'")
        seen_ids.add(sid)

        # --- THE DOCTRINE'S GATE 1: a missing label fails the run ---
        if s.get("label") not in LABELS:
            issues.append(f"ERROR: {sid} label must be one of {sorted(LABELS)} "
                          f"(got {s.get('label')!r}) — a missing label fails the run")

        if s.get("evClass") not in EV_CLASSES:
            issues.append(f"ERROR: {sid} evClass must be one of {sorted(EV_CLASSES)}")

        # --- the four-link chain, each link labeled separately ---
        chain = s.get("chain")
        if not isinstance(chain, dict):
            issues.append(f"ERROR: {sid} chain must be an object with the four links")
        else:
            for link in CHAIN_LINKS:
                val = chain.get(link)
                if not isinstance(val, str) or len(val.strip()) < 15:
                    issues.append(f"ERROR: {sid} chain link '{link}' is missing or too thin "
                                  f"— every link must be labeled separately")

        # --- measurable must be PRESENT; "none identified" is valid ---
        meas = (s.get("measurable") or "").strip()
        if not meas:
            issues.append(f"ERROR: {sid} 'measurable' is empty — write 'none identified' "
                          f"if there is no instrument; an empty field is not a filing")

        ev = (s.get("evidence") or "").strip()
        if len(ev) < 4:
            issues.append(f"ERROR: {sid} evidence label is empty")

        # --- THE DOCTRINE'S GATE 3: an entry with no application fails ---
        # Application = a dose AND a way to tell whether it worked.
        reps = (s.get("reps") or "").strip()
        verify = (s.get("verify") or "").strip()
        if len(reps) < 15:
            issues.append(f"ERROR: {sid} 'reps' (the dose) is missing or too thin — "
                          f"an entry with no application is storage, not instrumentation")
        if len(verify) < 20:
            issues.append(f"ERROR: {sid} 'verify' (how to tell if it worked) is missing "
                          f"or too thin — an entry with no application is storage, "
                          f"not instrumentation")

        prac = s.get("practice")
        if not isinstance(prac, list) or not prac:
            issues.append(f"ERROR: {sid} practice must be a non-empty list")
        elif not all(isinstance(p, str) and p.strip() for p in prac):
            issues.append(f"ERROR: {sid} practice contains an empty step")

        # --- THE DOCTRINE'S GATE 2: a missing source fails the run ---
        res = s.get("research")
        if not isinstance(res, list) or not res:
            issues.append(f"ERROR: {sid} needs at least one research entry — "
                          f"a missing source fails the run")
        else:
            for r in res:
                for key in ("source", "claim", "medium", "confidence", "year"):
                    if not r.get(key):
                        issues.append(f"ERROR: {sid} research entry missing '{key}'")
                if len((r.get("source") or "").strip()) < 8:
                    issues.append(f"ERROR: {sid} research source too short to be real: "
                                  f"{r.get('source')!r}")

        q = s.get("quest")
        if not isinstance(q, list) or len(q) != 4:
            issues.append(f"ERROR: {sid} quest must be [title, desc, subjects, emoji]")
        else:
            title, desc, subjects, emoji = q
            if not isinstance(title, str) or not title.strip():
                issues.append(f"ERROR: {sid} quest title empty")
            if not isinstance(desc, str) or len(desc.strip()) < 20:
                issues.append(f"ERROR: {sid} quest description too short")
            if not isinstance(subjects, list) or not subjects:
                issues.append(f"ERROR: {sid} quest subjects must be a non-empty list")
            else:
                for sub in subjects:
                    if sub not in SUBJECTS:
                        issues.append(f"ERROR: {sid} quest subject '{sub}' is not in the "
                                      f"Village subject vocabulary")
            if not isinstance(emoji, str) or not emoji.strip():
                issues.append(f"ERROR: {sid} quest emoji empty")

    return issues


def check_guild(data):
    issues = []
    quests = data.get("quests") or []
    if not quests:
        issues.append("CRITICAL: MEDITATION_QUESTS is empty")
        return issues
    for g in quests:
        gname = g.get("name", "<no name>")
        for key in ("type", "biomes", "name", "desc"):
            if not g.get(key):
                issues.append(f"ERROR: guild {gname} missing '{key}'")
        if not isinstance(g.get("biomes"), list) or not g.get("biomes"):
            issues.append(f"ERROR: guild {gname} biomes must be a non-empty list")
        for tier in TIERS:
            rows = g.get(tier)
            if not isinstance(rows, list) or not rows:
                issues.append(f"ERROR: guild {gname} tier '{tier}' is missing or empty")
                continue
            for row in rows:
                if not isinstance(row, list) or len(row) != 4:
                    issues.append(f"ERROR: guild {gname}/{tier} row must be "
                                  f"[name, desc, subjects, emoji]")
                    continue
                qname, qdesc, qsubs, qemoji = row
                if not isinstance(qname, str) or not qname.strip():
                    issues.append(f"ERROR: guild {gname}/{tier} quest name empty")
                if not isinstance(qdesc, str) or len(qdesc.strip()) < 20:
                    issues.append(f"ERROR: guild {gname}/{tier} quest '{qname}' "
                                  f"description too short")
                if not isinstance(qsubs, list) or not qsubs:
                    issues.append(f"ERROR: guild {gname}/{tier} quest '{qname}' subjects empty")
                else:
                    for sub in qsubs:
                        if sub not in SUBJECTS:
                            issues.append(f"ERROR: guild {gname}/{tier} quest '{qname}' "
                                          f"subject '{sub}' is not in the Village subject vocabulary")
                if not isinstance(qemoji, str) or not qemoji.strip():
                    issues.append(f"ERROR: guild {gname}/{tier} quest '{qname}' emoji empty")
    return issues


def check_depot(data):
    issues = []
    depot = data.get("depot") or []
    if not depot:
        issues.append("ERROR: MEDITATION_DEPOT is empty")
    for l in depot:
        for key in ("t", "u", "d"):
            if not l.get(key):
                issues.append(f"ERROR: depot link missing '{key}'")
        if (l.get("u") or "") and not l["u"].startswith("https://"):
            issues.append(f"ERROR: depot link is not https: {l.get('u')!r}")
    return issues


def check_crosslinks(data):
    issues = []
    crosslinks = data.get("crosslinks") or []
    if not crosslinks:
        issues.append("ERROR: MEDITATION_CROSSLINKS is empty — the section must point "
                      "at the practices that live elsewhere")
    for c in crosslinks:
        for key in ("id", "icon", "name", "esName", "where", "note"):
            if not c.get(key):
                issues.append(f"ERROR: crosslink {c.get('id', '?')} missing '{key}'")
    return issues


def main():
    if not os.path.exists(MEDITATION):
        print("CRITICAL: meditation.js not found")
        return 1
    text = open(MEDITATION, encoding="utf-8").read()
    issues = check_text_level(text)

    data = load_data()
    if data is not None:
        issues += check_systems(data)
        issues += check_guild(data)
        issues += check_depot(data)
        issues += check_crosslinks(data)

    errors = [i for i in issues if i.startswith(("ERROR", "CRITICAL"))]
    warnings = [i for i in issues if i.startswith("WARNING")]

    print("=" * 60)
    print("MEDITATION & ABILITIES — schema validation")
    print("=" * 60)
    if data is not None:
        guilds = data.get("quests") or []
        tiers = sum(len(g.get(t) or []) for g in guilds for t in TIERS)
        labels = {}
        for s in data["systems"]:
            labels[s.get("label")] = labels.get(s.get("label"), 0) + 1
        print(f"Systems: {len(data['systems'])} | Labels: {labels} | "
              f"Guilds: {len(guilds)} | Guild quests: {tiers} | "
              f"Depot: {len(data.get('depot') or [])} | "
              f"Cross-links: {len(data.get('crosslinks') or [])}")
    for i in issues:
        print(" ", i)
    print()
    print(f"Errors: {len(errors)}  Warnings: {len(warnings)}")
    print("STATUS:", "FAILED" if errors else "PASSED")
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
