#!/usr/bin/env bash
# Village RPG master cron job — ONE shot, do everything, report briefly.
# Family-aware: gates on should_run, respects shared budget, reports stale
# siblings, then checks in to the ledger with a resolve-delta summary.
# Self-healing: clones the village repo if missing, pulls if present.
set -uo pipefail

REPO=/root/workspace/village
GIT_URL=https://github.com/Focusingpulse/permies-skip-pep-data.git

# ---- [0] Bootstrap: ensure the village repo is present ----
if [ ! -d "$REPO/.git" ]; then
  echo "[0] Repo missing — cloning"
  mkdir -p "$REPO"
  if ! git clone --quiet --depth 1 "$GIT_URL" "$REPO" 2>&1 | tail -2; then
    echo "CLONE_FAILED"
    exit 1
  fi
  echo "  cloned into $REPO"
fi
cd "$REPO"

# ---- Locate the shared coordination repo (attached shared memory) ----
FAMILY=""
for cand in \
  "$MEMORY_DIR/../cron-coordination/family.py" \
  /root/workspace/cron-coordination/family.py \
  /root/workspace/.letta/agents/agent-b73ac550-5671-471e-b3e1-721f948ea063/cron-coordination/family.py; do
  if [ -f "$cand" ]; then FAMILY="$cand"; break; fi
done
if [ -z "$FAMILY" ]; then
  echo "WARN: cron-coordination shared repo not found; running uncoordinated"
fi

# ---- [1] Family gate: gate on should_run before doing work ----
echo "[1] Family gate"
if [ -n "$FAMILY" ]; then
  if ! python3 "$FAMILY" run-gate --member village --essential 2>/dev/null; then
    MODE=$(python3 -c "import json,os;d=json.load(open(os.path.join('${FAMILY%/*}','cron_ledger.json')));print(d.get('family_budget',{}).get('mode','high'))" 2>/dev/null || echo high)
    if [ "$MODE" = "low" ]; then
      echo "  Family budget LOW — village skipping non-essential work this cycle"
      python3 "$FAMILY" check-in --member village --status skipped --summary "budget low, skipped" 2>/dev/null || true
      exit 0
    fi
  fi
  STALE=$(python3 "$FAMILY" staleness 2>/dev/null || echo "")
  if [ -n "$STALE" ]; then
    echo "  Watchdog: $STALE"
  fi
fi

echo "[2] Pull latest"
git stash --quiet 2>/dev/null || true
git pull --rebase --quiet origin main 2>&1 | tail -1 || git pull --quiet origin main 2>&1 | tail -1
git stash pop --quiet 2>/dev/null || true

echo "[3] Link check"
python3 check_links.py 2>&1 | tail -8

echo "[4] Auto-fix + resource enrichment"
MAINT=$(python3 village_maintain.py 2>&1)
echo "$MAINT" | tail -12

echo "[5] Commit and push"
git add -A
if git diff --cached --quiet; then
  echo "  Nothing to commit this run; checking in clean"
  # Pull any resolve-delta from this run's outputs for the ledger summary.
  SUMMARY=$( { printf '%s\n' "$MAINT" | grep -iE "fixed|added|changes|cross-feed" | head -3; echo "check ok, no changes"; } | grep -v '^$' | tr '\n' ' ' | cut -c1-280 )
else
  git commit -q -m "Village daily: link fixes + resources + improvements

Co-Authored-By: Chris FocusAndExcell <user-9d03ff11-1357-46de-b0be-8561e6285f7c>"
  if [ -n "${VILLAGEKEY:-}" ]; then
    git -c credential.helper= -c credential.username=x-access-token \
      -c 'credential.helper=!f() { echo username=x-access-token; echo "password=$VILLAGEKEY"; }; f' \
      push --quiet origin main 2>&1 | grep -iv "password\|token" | tail -2 || true
  else
    git push --quiet origin main 2>&1 | tail -2 || true
  fi
  SUMMARY=$(git log -1 --format=%s)
fi

echo "[6] Family check-in"
if [ -n "$FAMILY" ]; then
  python3 "$FAMILY" check-in --member village --status ok --summary "$SUMMARY" 2>/dev/null || true
fi

echo "DONE"