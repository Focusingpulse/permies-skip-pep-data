#!/usr/bin/env python3
"""Cultural Elements ledger validator.

Guards `culture.js` — the enrichment layer over the 64 cultural elements
(CONNECTION_RING in index.html). Every enriched element must carry the
science, an honest evidence label, at least one use case, and a tip-jar
list. The tip jar must only reference real element keys.

Run: python3 validate_culture.py
Exit 0 = valid, exit 1 = malformed (do not push).
"""
import json
import os
import re
import subprocess
import sys

REPO = os.path.dirname(os.path.abspath(__file__))
CULTURE = os.path.join(REPO, "culture.js")

# Must be present AND non-empty.
REQUIRED = ["science", "evClass", "useCases"]
# Must be present (an empty tip jar is honest — it means "not yet recorded").
REQUIRED_PRESENT = ["expressions"]
EV_CLASSES = {"strong", "moderate", "weak", "traditional"}
DOMAINS = {"family", "fleet", "project", "village"}
KEY_RE = re.compile(r"^([1-8])\.([1-8])$")


def load():
    source = open(CULTURE, encoding="utf-8").read()
    js = source + (
        "\nprocess.stdout.write(JSON.stringify("
        "{elements:CULTURE_ELEMENTS,tipjar:CULTURE_TIP_JAR}));"
    )
    try:
        out = subprocess.run(["node", "-e", js], capture_output=True, text=True,
                             timeout=60, check=True)
    except FileNotFoundError:
        print("WARNING: node not found — skipping JS evaluation")
        return None
    except subprocess.CalledProcessError as e:
        print("CRITICAL: culture.js failed to evaluate in node:")
        print(e.stderr.strip()[:2000])
        sys.exit(1)
    return json.loads(out.stdout)


def check(data):
    issues = []
    elements = data["elements"]
    if not elements:
        issues.append("CRITICAL: CULTURE_ELEMENTS is empty")
        return issues

    for key, e in elements.items():
        if not KEY_RE.match(key):
            issues.append(f"ERROR: '{key}' is not a valid '<ring>.<shield>' key (1-8)")
        for field in REQUIRED:
            if e.get(field) in (None, "", []):
                issues.append(f"ERROR: {key} missing required field '{field}'")
        for field in REQUIRED_PRESENT:
            if field not in e:
                issues.append(f"ERROR: {key} missing required field '{field}'")
        if e.get("evClass") not in EV_CLASSES:
            issues.append(f"ERROR: {key} evClass must be one of {sorted(EV_CLASSES)}")
        if len((e.get("science") or "").strip()) < 40:
            issues.append(f"ERROR: {key} science line is too thin to be a real explanation")
        uc = e.get("useCases")
        if not isinstance(uc, list) or not uc:
            issues.append(f"ERROR: {key} needs at least one use case")
        else:
            for u in uc:
                if u.get("domain") not in DOMAINS:
                    issues.append(f"ERROR: {key} use case domain '{u.get('domain')}' not in {sorted(DOMAINS)}")
                if not (u.get("how") or "").strip():
                    issues.append(f"ERROR: {key} use case has no 'how'")
        if not isinstance(e.get("expressions"), list):
            issues.append(f"ERROR: {key} expressions must be a list")

    # The tip jar must only reference real elements.
    for t in data["tipjar"]:
        for field in ("date", "element", "domain", "what"):
            if not t.get(field):
                issues.append(f"ERROR: tip-jar entry missing '{field}': {t}")
        if t.get("element") not in elements:
            issues.append(f"ERROR: tip-jar entry references unknown element '{t.get('element')}'")
        if not re.match(r"^\d{4}-\d{2}-\d{2}$", t.get("date") or ""):
            issues.append(f"ERROR: tip-jar entry has a malformed date: {t.get('date')}")
    return issues


def main():
    if not os.path.exists(CULTURE):
        print("CRITICAL: culture.js not found")
        return 1
    data = load()
    issues = check(data) if data else []
    errors = [i for i in issues if i.startswith(("ERROR", "CRITICAL"))]
    print("=" * 60)
    print("CULTURAL ELEMENTS LEDGER — schema validation")
    print("=" * 60)
    if data:
        print(f"Elements enriched: {len(data['elements'])} / 64 | Tip jar: {len(data['tipjar'])} expressions")
    for i in issues:
        print(" ", i)
    print()
    print(f"Errors: {len(errors)}")
    print("STATUS:", "FAILED" if errors else "PASSED")
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
