#!/usr/bin/env python3
"""Vitality & Movement schema validator.

Guards `vitality.js` — the PE / energy-movement library section that the
`vitality-engine` cron grows. An entry that is missing a lineage, a
practice, or an honest evidence label is rejected: the whole point of the
section is that every system carries its label.

Run: python3 validate_vitality.py
Exit 0 = valid, exit 1 = the section is malformed (do not push).
"""
import json
import os
import re
import subprocess
import sys

REPO = os.path.dirname(os.path.abspath(__file__))
VITALITY = os.path.join(REPO, "vitality.js")
DATA = os.path.join(REPO, "data.js")

REQUIRED = [
    "id", "icon", "name", "esName", "tagline", "lineage", "what", "esWhat",
    "practice", "reps", "evidence", "evClass", "research", "verify", "village", "quest",
]
EV_CLASSES = {"strong", "moderate", "weak"}

# The subject vocabulary the Village quest data actually uses. A proposed PE
# quest must stay inside it or it will not render as a real quest.
SUBJECTS = {
    "Art", "Constitution", "Economics", "Engineering", "Geography",
    "Health", "History", "Math", "PE", "Science", "Writing",
}


def load_systems():
    """Evaluate vitality.js in node and return MOVEMENT_SYSTEMS as JSON."""
    # Concatenate rather than eval: `const` declarations are block-scoped to
    # the eval, so an indirect eval leaves the symbols undefined.
    source = open(VITALITY, encoding="utf-8").read()
    js = source + (
        "\nprocess.stdout.write(JSON.stringify("
        "{systems:MOVEMENT_SYSTEMS,domains:MOVEMENT_DOMAINS,crosslinks:MOVEMENT_CROSSLINKS}));"
    )
    try:
        out = subprocess.run(
            ["node", "-e", js], capture_output=True, text=True, timeout=60, check=True
        )
    except FileNotFoundError:
        print("WARNING: node not found — skipping JS evaluation, doing text checks only")
        return None
    except subprocess.CalledProcessError as e:
        print("CRITICAL: vitality.js failed to evaluate in node:")
        print(e.stderr.strip()[:2000])
        sys.exit(1)
    return json.loads(out.stdout)


def check_text_level(text):
    """Cheap checks that do not need a JS runtime."""
    issues = []
    if "const MOVEMENT_SYSTEMS" not in text:
        issues.append("CRITICAL: MOVEMENT_SYSTEMS not found in vitality.js")
    if "const MOVEMENT_DOMAINS" not in text:
        issues.append("CRITICAL: MOVEMENT_DOMAINS not found in vitality.js")
    # A citation-shaped string with no year and no publisher is a smell.
    for m in re.finditer(r'"source"\s*:\s*"([^"]{0,40})"', text):
        if len(m.group(1).strip()) < 8:
            issues.append(f"WARNING: suspiciously short research source: {m.group(1)!r}")
    return issues


def check_systems(data):
    issues = []
    systems = data["systems"]
    if not systems:
        issues.append("CRITICAL: MOVEMENT_SYSTEMS is empty")
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


def check_domains(data):
    issues = []
    domains = data.get("domains") or []
    if not domains:
        issues.append("ERROR: MOVEMENT_DOMAINS is empty — the growth rotation has no route")
    if len(set(domains)) != len(domains):
        issues.append("ERROR: MOVEMENT_DOMAINS contains duplicates")
    return issues


def check_crosslinks(data):
    issues = []
    for c in (data.get("crosslinks") or []):
        for key in ("id", "icon", "name", "esName", "where", "note"):
            if not c.get(key):
                issues.append(f"ERROR: crosslink {c.get('id', '?')} missing '{key}'")
    return issues


def main():
    if not os.path.exists(VITALITY):
        print("CRITICAL: vitality.js not found")
        return 1
    text = open(VITALITY, encoding="utf-8").read()
    issues = check_text_level(text)

    data = load_systems()
    if data is not None:
        issues += check_systems(data)
        issues += check_domains(data)
        issues += check_crosslinks(data)

    errors = [i for i in issues if i.startswith(("ERROR", "CRITICAL"))]
    warnings = [i for i in issues if i.startswith("WARNING")]

    print("=" * 60)
    print("VITALITY & MOVEMENT — schema validation")
    print("=" * 60)
    if data is not None:
        print(f"Systems: {len(data['systems'])} | Domains: {len(data.get('domains') or [])} | "
              f"Cross-links: {len(data.get('crosslinks') or [])}")
    for i in issues:
        print(" ", i)
    print()
    print(f"Errors: {len(errors)}  Warnings: {len(warnings)}")
    print("STATUS:", "FAILED" if errors else "PASSED")
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
