#!/usr/bin/env node
/**
 * Assemble the Capacitor web root (www/).
 *
 * The Village is a static site served from the repo root by GitHub Pages.
 * Capacitor needs a dedicated webDir, and the CLI rejects `webDir: "."`.
 *
 * We do NOT commit a www/ copy of the site. The daily village cron rebuilds
 * root JS files; a committed copy would go stale silently. Instead www/ is
 * assembled on demand and gitignored — it is a build output, not a source.
 *
 * Runtime set (verified 2026-10-02):
 *   - index.html, index_standalone.html
 *   - the root *.js modules
 *   - crystal-skull/, money-lab/
 *
 * NOT included: the large JSON files (master_quests.json,
 * permies_all_skip_pep_pem_tasks.json, permies_pep_tasks.json). Those are
 * BUILD INPUTS for the Python scripts — the site never fetches them, so
 * shipping them into the app bundle would be ~9 MB of dead weight.
 */
import { cp, mkdir, rm, readdir, stat } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const WWW = join(ROOT, 'www');

// Content directories the site links into.
const SUBDIRS = ['crystal-skull', 'money-lab'];

// Root file types that are part of the running site.
const FILE_RE = /\.(html|js)$/;

await rm(WWW, { recursive: true, force: true });
await mkdir(WWW, { recursive: true });

let files = 0;
for (const entry of await readdir(ROOT)) {
  const src = join(ROOT, entry);
  const s = await stat(src);
  if (!s.isFile() || !FILE_RE.test(entry)) continue;
  await cp(src, join(WWW, entry));
  files++;
}

let dirs = 0;
for (const dir of SUBDIRS) {
  try {
    await cp(join(ROOT, dir), join(WWW, dir), { recursive: true });
    dirs++;
  } catch (err) {
    console.warn(`warn: skipped ${dir}/ — ${err.code ?? err.message}`);
  }
}

console.log(`assembled www/ — ${files} files, ${dirs} directories`);
