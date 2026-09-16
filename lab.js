/*
 * The Quest Lab — renders the quest-card feed (QUEST_CARDS, generated from the
 * living-library quest-queue by the Engine of Practicality + village-quest-sync
 * cron). Every dynamic field is escaped; no raw HTML from card data. The Lab
 * is a display layer only — proposed cards become playable Quest Board quests
 * only after human approval + merge (see quest-queue README).
 */
(function () {
  "use strict";

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  // i18n: look up key in LANG[lang].ui, fall back to English (house pattern).
  function L(key) {
    try {
      var lang = (typeof window.lang !== "undefined") ? window.lang : "en";
      var block = (typeof LANG !== "undefined" && LANG[lang]) ? LANG[lang].ui : null;
      if (block && Object.prototype.hasOwnProperty.call(block, key)) return block[key];
    } catch (e) {}
    return key;
  }

  function labBadge(status) {
    if (status === "merged") {
      return '<span class="lab-badge lab-merged">' + esc(L("Merged")) + "</span>";
    }
    return '<span class="lab-badge">' + esc(L("Proposed")) + "</span>";
  }

  function labCard(c) {
    var h = '<div class="quest-card ' + esc(c.tier) + '">';
    h += '<div class="lab-card-head"><span class="lab-title">' + esc(c.emoji) + " " + esc(c.title) + "</span>" + labBadge(c.status) + "</div>";
    h += '<div class="lab-meta">' + esc(c.guild) + " · " + esc(c.tier) + " · " + esc(c.date) + "</div>";
    if (c.desc) h += '<p class="lab-desc">' + esc(c.desc) + "</p>";
    if (c.steps) {
      h += '<details class="lab-detail"><summary>▶ ' + esc(L("What to do")) + "</summary><p>" + esc(c.steps) + "</p></details>";
    }
    if (c.passFail) {
      h += '<details class="lab-detail"><summary>✓ ' + esc(L("Passes when")) + "</summary><p>" + esc(c.passFail) + "</p></details>";
    }
    h += '<div class="lab-foot">';
    (c.subjects || []).forEach(function (s) { h += '<span class="lab-subj">' + esc(s) + "</span> "; });
    h += '<a href="' + esc(c.vaultUrl) + '" target="_blank" rel="noopener">' + esc(L("From the Vault")) + " ↗</a>";
    h += ' · <a href="' + esc(c.aetherforceUrl) + '" target="_blank" rel="noopener">Aetherforce ↗</a>';
    if (c.sourceNote) h += '<div class="lab-src">' + esc(L("Source")) + ": " + esc(c.sourceNote) + "</div>";
    h += "</div></div>";
    return h;
  }

  function labBench(b) {
    var h = '<details class="lab-bench" open>';
    h += "<summary>" + esc(b.emoji) + " <strong>" + esc(b.name) + "</strong> — " + esc(b.subtitle);
    h += ' <span class="lab-count">' + b.cards.length + "</span></summary>";
    b.cards.forEach(function (c) { h += labCard(c); });
    h += "</details>";
    return h;
  }

  function labCSS() {
    return [
      ".lab-bench { margin: 0 auto 1.2rem; max-width: 900px; border: 1px solid var(--border, #444); border-radius: 10px; padding: 0.6rem 0.9rem; background: rgba(0,0,0,0.15); }",
      ".lab-bench summary { cursor: pointer; font-size: 1.02rem; padding: 0.3rem 0; }",
      ".lab-count { display: inline-block; background: var(--accent-gold, #c9a227); color: #111; border-radius: 10px; padding: 0 0.55em; font-size: 0.8em; font-weight: bold; margin-left: 0.35em; }",
      ".lab-card-head { display: flex; justify-content: space-between; gap: 0.5rem; align-items: baseline; flex-wrap: wrap; }",
      ".lab-title { font-weight: bold; }",
      ".lab-badge { font-size: 0.72rem; border: 1px solid #b8860b; color: #b8860b; border-radius: 8px; padding: 0 0.5em; white-space: nowrap; }",
      ".lab-badge.lab-merged { border-color: #4a7c3a; color: #4a7c3a; }",
      ".lab-meta { font-size: 0.78rem; opacity: 0.75; margin: 0.15rem 0 0.4rem; }",
      ".lab-desc { margin: 0.3rem 0; }",
      ".lab-detail summary { cursor: pointer; font-size: 0.88rem; margin-top: 0.35rem; }",
      ".lab-detail p { margin: 0.35rem 0 0.1rem 0.9rem; font-size: 0.92rem; }",
      ".lab-foot { margin-top: 0.5rem; font-size: 0.85rem; }",
      ".lab-subj { display: inline-block; border: 1px solid var(--border, #444); border-radius: 8px; padding: 0 0.45em; font-size: 0.75rem; margin-right: 0.25rem; }",
      ".lab-src { font-size: 0.75rem; opacity: 0.65; margin-top: 0.3rem; }"
    ].join("\n");
  }

  function labRender() {
    var panel = document.getElementById("lab-panel");
    if (!panel || typeof QUEST_CARDS === "undefined") return;

    if (!document.getElementById("lab-css")) {
      var st = document.createElement("style");
      st.id = "lab-css";
      st.textContent = labCSS();
      document.head.appendChild(st);
    }

    var h = '<p style="text-align:center; max-width:640px; margin:0 auto 1rem;" data-i18n="Quest cards from the knowledge fleet — buildable, testable family experiments. A quest card is a TEST of a claim, not an endorsement. Proposed cards appear here before merging into the Quest Board.">' +
      esc(L("Quest cards from the knowledge fleet — buildable, testable family experiments. A quest card is a TEST of a claim, not an endorsement. Proposed cards appear here before merging into the Quest Board.")) + "</p>";
    (QUEST_CARDS.benches || []).forEach(function (b) { h += labBench(b); });
    h += '<p style="text-align:center; font-size:0.75rem; opacity:0.6; max-width:640px; margin:1rem auto;">' +
      esc(QUEST_CARDS.generated ? "Feed: " + QUEST_CARDS.generated + " · " : "") +
      esc(L("Grows daily with the knowledge fleet")) + "</p>";
    panel.innerHTML = h;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", labRender);
  } else {
    labRender();
  }
  window.labRender = labRender;
})();
