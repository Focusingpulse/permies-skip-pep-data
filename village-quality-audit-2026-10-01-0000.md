# Village Quality Audit — 2026-10-01 00:00 UTC

## Summary

**Status: PASSED**

All core data structures validated successfully.

## Checks Performed

### 1. data.js Validation
- **27 guilds** found with complete tier structure
- All quests have required fields (title, description, subjects, emoji)
- No malformed entries detected
- Quest-like arrays: 214 entries parsed

### 2. translations.js Validation
- Languages present: **es, fr, de**
- No encoding issues (mojibake) detected
- Translation structure valid

### 3. master_quests.json Validation
- **411 badges** loaded (valid JSON)
- All badge objects have required `title` field
- 5 duplicate URLs detected (may be intentional - same badge in multiple contexts)

### 4. index.html Validation
- HTML structure complete (html, body, head tags closed)
- Script references present for data.js, translations.js
- No missing critical elements

### 5. Link Check
- **860 URLs** checked
- **834 OK** (96.7%)
- **20 HTTP errors** (403/404/429/500/502)
- **6 unreachable/timeouts**

## Broken Links (Not Fixed)

The following links are genuinely broken (404):
- `http://byjillb.com`
- `http://innoperma.weebly.com/old`
- `http://onceuponeayarden.blogspot.com/`
- `http://www.sasez.com`
- `https://skipthejourney.wordpress.com/`

Rate-limited (429) - may work later:
- `https://calearth.org`
- `https://culturesforhealth.com/blogs/learn`
- `https://goingtoseed.org/collections/courses`
- `https://www.blackdragonforge.com/products/smithing101`

Permission denied (403) - site blocking automated requests:
- `http://www.fws.gov/whitenosesyndrome/`
- `https://blog.lostartpress.com/...`
- `https://handtoolwoodworking.com/green-woodworking-videos/`
- `https://www.allaboutbirds.org/`
- `https://www.kickstarter.com/...`
- `https://www.patreon.com/slowfilms`

## Data Integrity Score

**96.7%** — Excellent

All critical data structures intact. Link rot is external and minimal.

## Actions Taken

- Ran validate_village.py — PASSED
- Ran check_links.py — 834/860 links healthy
- Validated JSON/JS structures — No issues
- No fixes required this run

## Next Steps

- Monitor 429 rate-limited links on next run
- Consider replacing 404 links with archived versions
