import { RUBRICS_DATA } from '../rubrics-data.js';
import { t } from '../i18n.js';

/**
 * Dedicated Page 2: Tiêu chuẩn đánh giá (Assessment Rubrics).
 * Supports toggle accordion on all 3 Tabs (Website, Reflection, Video).
 */
export function renderRubricsPage() {
  const page = document.createElement('div');
  page.id = 'page-rubrics';
  page.className = 'page-container';

  page.innerHTML = `
    <section class="section rubrics-section">
      <div class="container">
        <!-- Clean Centered Aligned Header -->
        <div class="section-header">
          <h2 data-i18n="rubrics.heading">${t('rubrics.heading')}</h2>
          <p class="text-muted" style="max-width: 650px; margin: var(--space-xs) auto 0; font-size: var(--font-size-base);" data-i18n="rubrics.intro">
            ${t('rubrics.intro')}
          </p>
        </div>

        <!-- Tab Buttons -->
        <div class="rubrics-tabs-container">
          <div class="rubrics-tabs" role="tablist">
            <button class="rubrics-tab active" data-tab="website" role="tab" aria-selected="true">
              <svg class="icon icon--sm"><use href="/icons.svg#icon-box"></use></svg>
              <span>1. Website / Product</span>
            </button>
            <button class="rubrics-tab" data-tab="reflection" role="tab" aria-selected="false">
              <svg class="icon icon--sm"><use href="/icons.svg#icon-reflection"></use></svg>
              <span>2. 4F Reflection</span>
            </button>
            <button class="rubrics-tab" data-tab="video" role="tab" aria-selected="false">
              <svg class="icon icon--sm"><use href="/icons.svg#icon-video"></use></svg>
              <span>3. Video Giới Thiệu</span>
            </button>
          </div>
        </div>

        <!-- Tab 1: Website / Product -->
        <div class="rubrics-tab-content active" id="tab-website">
          <div class="rubrics-header-card">
            <h4>${RUBRICS_DATA.website.title}</h4>
            <p>${RUBRICS_DATA.website.desc}</p>
          </div>

          ${RUBRICS_DATA.website.groups.map((grp, gIdx) => `
            <div class="rubric-group">
              <div class="rubric-group__header">
                <h4>${grp.name}</h4>
                <p>${grp.desc}</p>
              </div>
              
              <div class="rubric-items-container">
                ${grp.criteria.map((crit, cIdx) => `
                  <div class="rubric-item ${gIdx === 0 && cIdx === 0 ? 'open' : ''}">
                    <button class="rubric-item__header" type="button" aria-expanded="${gIdx === 0 && cIdx === 0 ? 'true' : 'false'}">
                      <span>${crit.title}</span>
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

        <!-- Tab 2: 4F Reflection (Collapsible Accordion) -->
        <div class="rubrics-tab-content" id="tab-reflection">
          <div class="rubrics-header-card">
            <h4>${RUBRICS_DATA.reflection.title}</h4>
            <p>${RUBRICS_DATA.reflection.desc}</p>
          </div>

          <div class="rubric-items-container">
            ${RUBRICS_DATA.reflection.criteria.map((crit, idx) => `
              <div class="rubric-item ${idx === 0 ? 'open' : ''}">
                <button class="rubric-item__header" type="button" aria-expanded="${idx === 0 ? 'true' : 'false'}">
                  <div>
                    <span style="font-weight: 700;">${crit.title}</span>
                    <span style="font-size: 0.8125rem; font-weight: 400; color: var(--color-text-muted); margin-left: 8px;">— ${crit.desc}</span>
                  </div>
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

        <!-- Tab 3: Video (Official 4 Criteria with Level 1 to 4 Collapsible Accordion) -->
        <div class="rubrics-tab-content" id="tab-video">
          <div class="rubrics-header-card">
            <h4>${RUBRICS_DATA.video.title}</h4>
            <p>${RUBRICS_DATA.video.desc}</p>
          </div>

          <div class="rubric-items-container">
            ${RUBRICS_DATA.video.criteria.map((crit, idx) => `
              <div class="rubric-item ${idx === 0 ? 'open' : ''}">
                <button class="rubric-item__header" type="button" aria-expanded="${idx === 0 ? 'true' : 'false'}">
                  <div>
                    <span style="font-weight: 700;">${crit.title}</span>
                    <span style="font-size: 0.8125rem; font-weight: 400; color: var(--color-text-muted); margin-left: 8px;">— ${crit.desc}</span>
                  </div>
                  <span class="rubric-toggle-icon">▼</span>
                </button>
                <div class="rubric-item__body">
                  <div class="rubric-levels-grid rubric-levels-grid--4">
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
