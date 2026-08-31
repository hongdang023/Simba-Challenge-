import { t } from '../i18n.js';

/**
 * Rules section — checklist of all competition rules.
 */
export function renderRules() {
  const section = document.createElement('section');
  section.id = 'rules';
  section.className = 'section';

  const rules = Array.from({ length: 13 }, (_, i) => ({
    num: i + 1,
    key: `rules.r${i + 1}`,
  }));

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 data-i18n="rules.heading">${t('rules.heading')}</h2>
      </div>

      <div class="rules-grid">
        ${rules.map(r => `
          <div class="rule-item">
            <span class="rule-item__number">${r.num}</span>
            <p data-i18n="${r.key}">${t(r.key)}</p>
          </div>
        `).join('')}
      </div>

      <div class="blockquote" data-i18n="rules.assessmentNote">${t('rules.assessmentNote')}</div>
    </div>
  `;

  return section;
}
