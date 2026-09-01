import { RUBRICS_DATA } from '../rubrics-data.js';
import { t, getLang } from '../i18n.js';

/**
 * Dedicated Page 2: Tiêu chuẩn đánh giá (Assessment Rubrics).
 * Ultra-clean layout:
 * - No subtitle under page title
 * - No card box headers
 * - Clean 1-line interactive list items
 */
export function renderRubricsPage() {
  const lang = getLang() === 'en' ? 'en' : 'vi';
  const data = RUBRICS_DATA[lang] || RUBRICS_DATA.vi;

  const page = document.createElement('div');
  page.id = 'page-rubrics';
  page.className = 'page-container';

  page.innerHTML = `
    <section class="section rubrics-section">
      <div class="container">
        <!-- 1. Header (Clean title only, no subtitle) -->
        <div class="section-header" style="margin-bottom: var(--space-xl);">
          <h2 data-i18n="rubrics.heading">${t('rubrics.heading')}</h2>
        </div>

        <!-- 2. Tab Switcher -->
        <div class="rubrics-tabs-container">
          <div class="rubrics-tabs" role="tablist">
            <button class="rubrics-tab active" data-tab="website" role="tab" aria-selected="true">
              <svg class="icon icon--sm"><use href="/icons.svg#icon-box"></use></svg>
              <span>1. Website</span>
            </button>
            <button class="rubrics-tab" data-tab="reflection" role="tab" aria-selected="false">
              <svg class="icon icon--sm"><use href="/icons.svg#icon-reflection"></use></svg>
              <span>2. 4F Reflection</span>
            </button>
            <button class="rubrics-tab" data-tab="video" role="tab" aria-selected="false">
              <svg class="icon icon--sm"><use href="/icons.svg#icon-video"></use></svg>
              <span>3. Video</span>
            </button>
          </div>
        </div>

        <!-- Tab 1: Website / Product (Clean 1-line rows) -->
        <div class="rubrics-tab-content active" id="tab-website">
          ${data.website.groups.map((grp, gIdx) => `
            <div class="rubric-group">
              <div class="rubric-group__title-row">
                <span class="rubric-group__badge">${gIdx + 1}</span>
                <h4>${grp.name.replace(/^[0-9.]+\s*/, '')}</h4>
              </div>
              
              <div class="rubric-items-container">
                ${grp.criteria.map((crit, cIdx) => `
                  <div class="rubric-item ${gIdx === 0 && cIdx === 0 ? 'open' : ''}">
                    <button class="rubric-item__header" type="button" aria-expanded="${gIdx === 0 && cIdx === 0 ? 'true' : 'false'}">
                      <span class="rubric-item__title">${crit.title}</span>
                      <span class="rubric-toggle-icon">▼</span>
                    </button>
                    <div class="rubric-item__body">
                      <div class="rubric-levels-grid">
                        ${crit.levels.map(lvl => `
                          <div class="rubric-level-card">
                            <div class="rubric-level-card__title">${lvl.lvl}</div>
                            <p class="rubric-level-card__desc">${lvl.text}</p>
                          </div>
                        `).join('')}
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Tab 2: 4F Reflection (Clean 1-line rows) -->
        <div class="rubrics-tab-content" id="tab-reflection">
          <div class="rubric-items-container" style="margin-top: var(--space-lg);">
            ${data.reflection.criteria.map((crit, idx) => `
              <div class="rubric-item ${idx === 0 ? 'open' : ''}">
                <button class="rubric-item__header" type="button" aria-expanded="${idx === 0 ? 'true' : 'false'}">
                  <span class="rubric-item__title">${crit.title}</span>
                  <span class="rubric-toggle-icon">▼</span>
                </button>
                <div class="rubric-item__body">
                  <div class="rubric-levels-grid">
                    ${crit.levels.map(lvl => `
                      <div class="rubric-level-card">
                        <div class="rubric-level-card__title">${lvl.lvl}</div>
                        <p class="rubric-level-card__desc">${lvl.text}</p>
                      </div>
                    `).join('')}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Tab 3: Video (Clean 1-line rows) -->
        <div class="rubrics-tab-content" id="tab-video">
          <div class="rubric-items-container" style="margin-top: var(--space-lg);">
            ${data.video.criteria.map((crit, idx) => `
              <div class="rubric-item ${idx === 0 ? 'open' : ''}">
                <button class="rubric-item__header" type="button" aria-expanded="${idx === 0 ? 'true' : 'false'}">
                  <span class="rubric-item__title">${crit.title}</span>
                  <span class="rubric-toggle-icon">▼</span>
                </button>
                <div class="rubric-item__body">
                  <div class="rubric-levels-grid">
                    ${crit.levels.map(lvl => `
                      <div class="rubric-level-card">
                        <div class="rubric-level-card__title">${lvl.lvl}</div>
                        <p class="rubric-level-card__desc">${lvl.text}</p>
                      </div>
                    `).join('')}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;

  // Tab switching logic
  const tabs = page.querySelectorAll('.rubrics-tab');
  const tabContents = page.querySelectorAll('.rubrics-tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tabContents.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const targetContent = page.querySelector(`#tab-${target}`);
      if (targetContent) targetContent.classList.add('active');
    });
  });

  // Accordion toggle on ALL rubric items across all tabs
  page.querySelectorAll('.rubric-item__header').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.rubric-item');
      const isOpen = item.classList.contains('open');
      item.classList.toggle('open', !isOpen);
      btn.setAttribute('aria-expanded', !isOpen);
    });
  });

  return page;
}
