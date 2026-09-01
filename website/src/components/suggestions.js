import { t } from "../i18n.js";

/**
 * Dedicated Page: Gợi ý làm bài (Suggestions Page)
 * Features 3 Clean Tabbed Views in consistent order:
 * 1. Website
 * 2. 4F Reflection
 * 3. Video
 */
export function renderSuggestionsPage() {
  const page = document.createElement("div");
  page.id = "page-suggestions";
  page.className = "page-container";

  const points = [
    { key: "challenge.point1", icon: "icon-user" },
    { key: "challenge.point2", icon: "icon-heart" },
    { key: "challenge.point3", icon: "icon-star" },
    { key: "challenge.point4", icon: "icon-link" },
  ];

  const reflectionCards = [
    {
      titleKey: "reflectionSuggestions.factsTitle",
      icon: "icon-box",
      colorClass: "facts",
      items: [
        "reflectionSuggestions.facts1",
        "reflectionSuggestions.facts2",
        "reflectionSuggestions.facts3",
      ]
    },
    {
      titleKey: "reflectionSuggestions.feelingsTitle",
      icon: "icon-heart",
      colorClass: "feelings",
      items: [
        "reflectionSuggestions.feelings1",
        "reflectionSuggestions.feelings2",
        "reflectionSuggestions.feelings3",
      ]
    },
    {
      titleKey: "reflectionSuggestions.findingsTitle",
      icon: "icon-sparkles",
      colorClass: "findings",
      items: [
        "reflectionSuggestions.findings1",
        "reflectionSuggestions.findings2",
        "reflectionSuggestions.findings3",
      ]
    },
    {
      titleKey: "reflectionSuggestions.futureTitle",
      icon: "icon-arrow-right",
      colorClass: "future",
      items: [
        "reflectionSuggestions.future1",
        "reflectionSuggestions.future2",
        "reflectionSuggestions.future3",
      ]
    }
  ];

  const videoSteps = [
    { titleKey: "videoSuggestions.step1Title", quoteKey: "videoSuggestions.step1Quote" },
    { titleKey: "videoSuggestions.step2Title", quoteKey: "videoSuggestions.step2Quote" },
    { titleKey: "videoSuggestions.step3Title", quoteKey: "videoSuggestions.step3Quote" },
    { titleKey: "videoSuggestions.step4Title", quoteKey: "videoSuggestions.step4Quote" },
    { titleKey: "videoSuggestions.step5Title", quoteKey: "videoSuggestions.step5Quote" },
    { titleKey: "videoSuggestions.step6Title", quoteKey: "videoSuggestions.step6Quote" },
    { titleKey: "videoSuggestions.step7Title", quoteKey: "videoSuggestions.step7Quote" },
    { titleKey: "videoSuggestions.step8Title", quoteKey: "videoSuggestions.step8Quote" },
  ];

  page.innerHTML = `
    <section class="section rubrics-section">
      <div class="container">
        <!-- 1. Header -->
        <div class="section-header" style="margin-bottom: var(--space-xl);">
          <h2 data-i18n="suggestionsPage.heading">${t("suggestionsPage.heading")}</h2>
        </div>

        <!-- 2. Tab Switcher (Consistent order: 1. Website, 2. 4F Reflection, 3. Video) -->
        <div class="rubrics-tabs-container">
          <div class="rubrics-tabs" role="tablist">
            <button class="rubrics-tab active" data-tab="tab-website" role="tab" aria-selected="true">
              <svg class="icon icon--sm" aria-hidden="true"><use href="/icons.svg#icon-box"></use></svg>
              <span data-i18n="suggestionsPage.tabWebsite">${t("suggestionsPage.tabWebsite")}</span>
            </button>
            <button class="rubrics-tab" data-tab="tab-reflection" role="tab" aria-selected="false">
              <svg class="icon icon--sm" aria-hidden="true"><use href="/icons.svg#icon-reflection"></use></svg>
              <span data-i18n="suggestionsPage.tabReflection">${t("suggestionsPage.tabReflection")}</span>
            </button>
            <button class="rubrics-tab" data-tab="tab-video" role="tab" aria-selected="false">
              <svg class="icon icon--sm" aria-hidden="true"><use href="/icons.svg#icon-video"></use></svg>
              <span data-i18n="suggestionsPage.tabVideo">${t("suggestionsPage.tabVideo")}</span>
            </button>
          </div>
        </div>

        <!-- ==========================================
             TAB 1: 1. WEBSITE
             ========================================== -->
        <div id="tab-website" class="rubrics-tab-content active" role="tabpanel">
          <p class="text-center text-muted" style="max-width: 680px; margin: 0 auto var(--space-2xl); font-size: var(--font-size-base);" data-i18n="challenge.intro">
            ${t("challenge.intro")}
          </p>

          <div class="challenge__points" style="margin-bottom: var(--space-xl);">
            ${points.map(p => `
              <div class="challenge__point">
                <div class="challenge__point-icon">
                  <svg class="icon icon--lg" aria-hidden="true"><use href="/icons.svg#${p.icon}"></use></svg>
                </div>
                <div>
                  <p style="margin: 0; font-weight: 600; color: var(--color-midnight-blue);" data-i18n="${p.key}">${t(p.key)}</p>
                </div>
              </div>
            `).join("")}
          </div>

          <div class="challenge__examples" style="margin-bottom: var(--space-xl);">
            <div class="card" style="background: #FFFFFF;">
              <h4 data-i18n="challenge.example1Title">${t("challenge.example1Title")}</h4>
              <p style="margin: 0; font-size: var(--font-size-sm);" data-i18n="challenge.example1">${t("challenge.example1")}</p>
            </div>
            <div class="card" style="background: #FFFFFF;">
              <h4 data-i18n="challenge.example2Title">${t("challenge.example2Title")}</h4>
              <p style="margin: 0; font-size: var(--font-size-sm);" data-i18n="challenge.example2">${t("challenge.example2")}</p>
            </div>
          </div>

          <div class="blockquote" style="max-width: 800px; margin: 0 auto;" data-i18n="challenge.note">${t("challenge.note")}</div>
        </div>

        <!-- ==========================================
             TAB 2: 2. 4F REFLECTION
             ========================================== -->
        <div id="tab-reflection" class="rubrics-tab-content" role="tabpanel">
          <p class="text-center text-muted" style="max-width: 680px; margin: 0 auto var(--space-2xl); font-size: var(--font-size-base);" data-i18n="reflectionSuggestions.subheading">
            ${t("reflectionSuggestions.subheading")}
          </p>

          <div class="reflection-grid" style="margin-bottom: var(--space-xl);">
            ${reflectionCards.map(card => `
              <div class="card reflection-card reflection-card--${card.colorClass}" style="background: #FFFFFF;">
                <div class="reflection-card__header">
                  <div class="reflection-card__icon">
                    <svg class="icon icon--md"><use href="/icons.svg#${card.icon}"></use></svg>
                  </div>
                  <h4 class="reflection-card__title" data-i18n="${card.titleKey}">${t(card.titleKey)}</h4>
                </div>
                <ul class="reflection-card__list">
                  ${card.items.map(itemKey => `
                    <li data-i18n="${itemKey}">${t(itemKey)}</li>
                  `).join("")}
                </ul>
              </div>
            `).join("")}
          </div>

          <div class="blockquote" style="max-width: 800px; margin: 0 auto;" data-i18n="reflectionSuggestions.note">${t("reflectionSuggestions.note")}</div>
        </div>

        <!-- ==========================================
             TAB 3: 3. VIDEO
             ========================================== -->
        <div id="tab-video" class="rubrics-tab-content" role="tabpanel">
          <p class="text-center text-muted" style="max-width: 680px; margin: 0 auto var(--space-2xl); font-size: var(--font-size-base);" data-i18n="videoSuggestions.subheading">
            ${t("videoSuggestions.subheading")}
          </p>

          <div class="video-steps-grid" style="margin-bottom: var(--space-xl);">
            ${videoSteps.map(s => `
              <div class="video-step-card">
                <h4 class="video-step-card__title" data-i18n="${s.titleKey}">${t(s.titleKey)}</h4>
                <p class="video-step-card__quote" data-i18n="${s.quoteKey}">${t(s.quoteKey)}</p>
              </div>
            `).join("")}
          </div>

          <div class="blockquote" style="max-width: 800px; margin: 0 auto;" data-i18n="videoSuggestions.note">${t("videoSuggestions.note")}</div>
        </div>
      </div>
    </section>
  `;

  // Attach tab switching events
  const tabs = page.querySelectorAll(".rubrics-tab");
  const tabContents = page.querySelectorAll(".rubrics-tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetTabId = tab.dataset.tab;

      tabs.forEach(t => {
        t.classList.toggle("active", t === tab);
        t.setAttribute("aria-selected", t === tab ? "true" : "false");
      });

      tabContents.forEach(content => {
        content.classList.toggle("active", content.id === targetTabId);
      });
    });
  });

  return page;
}
