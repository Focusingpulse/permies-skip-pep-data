#!/usr/bin/env python3
"""Village RPG link checker.
Scans master_quests.json + index.html + data.js for external URLs,
issues HTTP requests with a short timeout + concurrency,
writes village-link-report.md with dead/broken links.

Cheap by design: pure stdlib, no LLM calls. Runs headless in the cron.
"""
import json, re, os, urllib.request, urllib.error, concurrent.futures, time, datetime

REPO = "/root/workspace/village"
os.chdir(REPO)

URL_RE = re.compile(r'https?://[^\s"\'<>)\]}]+')

def collect_urls():
    urls = set()
    for p in ["master_quests.json", "index.html", "data.js"]:
        if os.path.exists(p):
            raw = open(p, encoding="utf-8").read()
            for m in URL_RE.findall(raw):
                urls.add(m.rstrip('.,;:!?'))
    noise = ("letta.com/api", "example.com", "w3.org", "localhost", "schema.org")
    return [u for u in urls if not any(n in u for n in noise)]

def check(u):
    headers = {"User-Agent": "Mozilla/5.0 (compatible; VillageRPG-LinkChecker/1.0)"}
    req = urllib.request.Request(u, headers=headers, method="HEAD")
    try:
        with urllib.request.urlopen(req, timeout=12) as r:
            return u, r.status, ""
    except urllib.error.HTTPError as e:
        # some servers reject HEAD; retry with GET
        if e.code in (405, 403):
            try:
                req2 = urllib.request.Request(u, headers=headers, method="GET")
                with urllib.request.urlopen(req2, timeout=12) as r2:
                    return u, r2.status, ""
            except Exception as e2:
                return u, e.code, str(type(e2).__name__)
        return u, e.code, ""
    except Exception as e:
        return u, 0, str(type(e).__name__)

def main():
    urls = collect_urls()
    print(f"Collected {len(urls)} unique external URLs", flush=True)
    if not urls:
        print("No URLs found — aborting", flush=True)
        return
    results = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=20) as ex:
        for res in ex.map(check, urls):
            results.append(res)

    good = [r for r in results if r[1] and 200 <= r[1] < 400]
    bad  = [r for r in results if not r[1]]
    redirect = [r for r in results if r[1] and 300 <= r[1] < 400]
    http_err = [r for r in results if r[1] and r[1] >= 400]

    lines = []
    lines.append(f"# Village Link Report — {datetime.date.today()}")
    lines.append("")
    lines.append(f"Checked **{len(results)}** URLs: **{len(good)}** OK, "
                 f"**{len(http_err)}** HTTP errors, **{len(redirect)}** redirects, **{len(bad)}** unreachable/timeouts.")
    lines.append("")
    if bad:
        lines.append(f"## Unreachable / timeout ({len(bad)})")
        lines.append("")
        for u, code, err in sorted(bad):
            lines.append(f"- `{u}`  (error: {err})")
        lines.append("")
    if http_err:
        lines.append(f"## HTTP errors ({len(http_err)})")
        lines.append("")
        for u, code, err in sorted(http_err):
            lines.append(f"- [`{u}`]({u})  (HTTP {code})")
        lines.append("")
    lines.append("_Generated automatically. Review then delete broken links or replace with live alternatives._")
    open("village-link-report.md", "w", encoding="utf-8").write("\n".join(lines) + "\n")
    print(f"Wrote village-link-report.md — {len(good)} good, {len(http_err)} http_err, {len(bad)} bad", flush=True)

if __name__ == "__main__":
    main()