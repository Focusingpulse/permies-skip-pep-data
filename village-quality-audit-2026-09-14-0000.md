# Village Quality Audit — 2026-09-14 00:00 UTC

## Summary

**Status**: ✅ PASSED

| Check | Result | Details |
|-------|--------|---------|
| data.js validation | ✅ Valid | 27 quest guilds, proper structure |
| translations.js | ✅ Valid | 3 languages (es, fr, de), all sections present |
| master_quests.json | ✅ Valid | 399 badges, no duplicate titles, valid JSON |
| index.html | ✅ Valid | Proper structure, DOCTYPE present, all script refs |
| Link check | ✅ Complete | 770 URLs checked: 752 OK (97.7%), 18 problematic |

## Data Integrity

### Quest Structure (data.js)
- **27 quest guilds** defined with proper tier structure (sand/straw/wood/iron)
- All quests have required fields: type, biomes, name, desc
- PEP badges properly marked, RPG add-on quests properly distinguished

### Master Quests Database
- **399 unique badges** from Permies PEP system
- No duplicate quest titles detected
- Valid JSON structure throughout
- All entries have title, framework, url, total_tasks, tasks

### Cross-Reference Check
The following data.js quest names are custom RPG additions (not in master_quests.json by design):
- Food Prep, Animal Care, Foraging, Community Living
- Textiles, Greywater and Willow Feeders, Metalworking
- Plumbing and Hot Water, Electricity, Commerce
- Natural Medicine, Nest, Homesteading, Vitality
- Water Vortex — Aetherforce, Biocircuitry — Eeman, Aetherforce — Power

These are **intentional custom quests** for the Village RPG and do not count toward official PEP certification.

### Translations
- Spanish (es): all sections present (ui, quests, guilds, roles, subjects, tiers, name)
- French (fr): all sections present
- German (de): all sections present
- UTF-8 encoding valid throughout
- No incomplete translations detected

## Link Report

**770 external URLs checked:**
- ✅ 752 working (97.7%)
- ⚠️ 14 HTTP errors (403/404/500/502/429 - external sites)
- ⚠️ 4 unreachable/timeouts

Broken links are in external reference materials — not actionable without finding replacement resources.

## Issues Found & Fixed

**None this run.** All validation checks passed.

## Data Integrity Score

**97.7%** — Excellent

All core data structures valid. External link rot (2.3%) is within acceptable bounds for a curated link collection.
