#!/usr/bin/env python3
"""Cognitive & EMF Defense schema validator.

Guards `cognitive-defense.js` — the defense library section (prebunking,
cognitive warfare, EMF distance, shielding, tinfoil, sleep/light, attention).

An entry that is missing a lineage, a practice, or an honest evidence label
is rejected: the whole point of the section is that every entry carries its
label — including the entries that describe something that does NOT work.

Also validates the Clear Signal guild against the Village quest-tuple shape,
so a malformed quest cannot ship into VILLAGE_QUESTS.

Run: python3 validate_cognitive.py
Exit 0 = valid, exit 1 = the section is malformed (do not push).
"""
import json
import os
import re
import subprocess
import sys

REPO = os.path.dirname(os.path.abspath(__file__))
COGNITIVE = os.path.join(REPO, "cognitive-defense.js")

REQUIRED = [
    "id", "icon", "name", "esName", "tagline", "lineage", "what", "esWhat",
    "practice", "reps", "evidence", "evClass", "research", "verify", "village", "quest",
]
EV_CLASSES = {"strong", "moderate", "weak"}

# The subject vocabulary the Village quest data actually uses. A proposed quest
# must stay inside it or it will not render as a real quest.
SUBJECTS = {
    "Art", "Constitution", "Economics", "Engineering", "Geography",
    "Health", "History", "Math", "PE", "Science", "Writing",
}

# Guild tiers, in the order the house quest data uses them.
TIERS = ["sand", "straw", "wood", "iron"]


def load_data():
    """Evaluate cognitive-defense.js in node and return the exported data as JSON."""
    source = open(COGNITIVE, encoding="utf-8").read()
    js = source + (
        "\nprocess.stdout.write(JSON.stringify("
        "{systems:COGNITIVE_DEFENSE_SYSTEMS,quests:COGNITIVE_DEFENSE_QUESTS,"
        "depot:COGNITIVE_DEFENSE_DEPOT,crosslinks:COGNITIVE_CROSSLINKS}));"
    )
    try:
        out = subprocess.run(
            ["node", "-e", js], capture_output=True, text=True, timeout=60, check=True
        )
    except FileNotFoundError:
        print("WARNING: node not found — skipping JS evaluation, doing text checks only")
        return None
    except subprocess.CalledProcessError as e:
        print("CRITICAL: cognitive-defense.js failed to evaluate in node:")
        print(e.stderr.strip()[:2000])
        sys.exit(1)
    return json.loads(out.stdout)


def check_text_level(text):
    """Cheap checks that do not need a JS runtime."""
    issues = []
    for name in ("COGNITIVE_DEFENSE_SYSTEMS", "COGNITIVE_DEFENSE_QUESTS",
                 "COGNITIVE_DEFENSE_DEPOT", "COGNITIVE_CROSSLINKS"):
        if f"const {name}" not in text:
            issues.append(f"CRITICAL: {name} not found in cognitive-defense.js")
    # The guild must be guarded against double-loading, like the other guilds.
    if "VILLAGE_QUESTS.some(" not in text:
        issues.append("CRITICAL: guild push is not guarded against double-loading "
                      "(VILLAGE_QUESTS.some(...) missing)")
    # A citation-shaped string with no publisher is a smell.
    for m in re.finditer(r'"source"\s*:\s*"([^"]{0,40})"', text):
        if len(m.group(1).strip()) < 8:
            issues.append(f"WARNING: suspiciously short research source: {m.group(1)!r}")
    return issues


def check_systems(data):
    issues = []
    systems = data["systems"]
    if not systems:
        issues.append("CRITICAL: COGNITIVE_DEFENSE_SYSTEMS is empty")
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

        if s.get("evClass") not in EV_CLASSES:
            issues.append(f"ERROR: {sid} evClass must be one of {sorted(EV_CLASSES)}")

        # Honest-label rule: the evidence string must say something.
        ev = (s.get("evidence") or "").strip()
        if len(ev) < 4:
            issues.append(f"ERROR: {sid} evidence label is empty — every entry must carry its label")

        # Practice must be a non-empty list of strings.
        prac = s.get("practice")
        if not isinstance(prac, list) or not prac:
            issues.append(f"ERROR: {sid} practice must be a non-empty list")
        elif not all(isinstance(p, str) and p.strip() for p in prac):
            issues.append(f"ERROR: {sid} practice contains an empty step")

        # Research must be a non-empty list with a real-shaped source.
        res = s.get("research")
        if not isinstance(res, list) or not res:
            issues.append(f"ERROR: {sid} needs at least one research entry")
        else:
            for r in res:
                for key in ("source", "claim", "medium", "confidence", "year"):
                    if not r.get(key):
                        issues.append(f"ERROR: {sid} research entry missing '{key}'")
                if len((r.get("source") or "").strip()) < 8:
                    issues.append(f"ERROR: {sid} research source too short to be real: {r.get('source')!r}")

        # Quest must match the Village quest tuple shape.
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
                        issues.append(f"ERROR: {sid} quest subject '{sub}' is not in the Village subject vocabulary")
            if not isinstance(emoji, str) or not emoji.strip():
                issues.append(f"ERROR: {sid} quest emoji empty")

        # The 'how to test it' field is the honesty backstop — required content.
        if len((s.get("verify") or "").strip()) < 20:
            issues.append(f"ERROR: {sid} 'verify' (how to test it) is missing or too thin")

    return issues


def check_guild(data):
    """The Clear Signal guild must match the house guild + quest-tuple shape."""
    issues = []
    quests = data.get("quests") or []
    if not quests:
        issues.append("CRITICAL: COGNITIVE_DEFENSE_QUESTS is empty")
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
                                  f"[name, desc, subjects, emoji]: {row!r}"[:120])
                    continue
                qname, qdesc, qsubs, qemoji = row
                if not isinstance(qname, str) or not qname.strip():
                    issues.append(f"ERROR: guild {gname}/{tier} quest name empty")
                if not isinstance(qdesc, str) or len(qdesc.strip()) < 20:
                    issues.append(f"ERROR: guild {gname}/{tier} quest '{qname}' description too short")
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
        issues.append("ERROR: COGNITIVE_DEFENSE_DEPOT is empty")
    for l in depot:
        for key in ("t", "u", "d"):
            if not l.get(key):
                issues.append(f"ERROR: depot link missing '{key}': {l!r}"[:120])
        u = (l.get("u") or "")
        if u and not u.startswith("https://"):
            issues.append(f"ERROR: depot link is not https: {u!r}")
    return issues


def check_crosslinks(data):
    issues = []
    crosslinks = data.get("crosslinks") or []
    if not crosslinks:
        issues.append("ERROR: COGNITIVE_CROSSLINKS is empty — the section must "
                      "point at the practices that live elsewhere")
    for c in crosslinks:
        for key in ("id", "icon", "name", "esName", "where", "note"):
            if not c.get(key):
                issues.append(f"ERROR: crosslink {c.get('id', '?')} missing '{key}'")
    return issues


def main():
    if not os.path.exists(COGNITIVE):
        print("CRITICAL: cognitive-defense.js not found")
        return 1
    text = open(COGNITIVE, encoding="utf-8").read()
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
    print("COGNITIVE & EMF DEFENSE — schema validation")
    print("=" * 60)
    if data is not None:
        guilds = data.get("quests") or []
        tiers = 0
        for g in guilds:
            tiers += sum(len(g.get(t) or []) for t in TIERS)
        print(f"Systems: {len(data['systems'])} | Guilds: {len(guilds)} | "
              f"Guild quests: {tiers} | Depot: {len(data.get('depot') or [])} | "
              f"Cross-links: {len(data.get('crosslinks') or [])}")
    for i in issues:
        print(" ", i)
    print()
    print(f"Errors: {len(errors)}  Warnings: {len(warnings)}")
    print("STATUS:", "FAILED" if errors else "PASSED")
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
