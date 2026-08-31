import { t } from '../i18n.js';

/**
 * Rules section — grouped into 4 clean, structured criteria cards.
 */
export function renderRules() {
  const section = document.createElement('section');
  section.id = 'rules';
  section.className = 'section';

  const cards = [
    {
      titleKey: 'rules.card1Title',
      items: ['rules.card1_1', 'rules.card1_2'],
      icon: '👤',
    },
    {
      titleKey: 'rules.card2Title',
      items: ['rules.card2_1', 'rules.card2_2', 'rules.card2_3'],
      icon: '🌐',
    },
    {
      titleKey: 'rules.card3Title',
      items: ['rules.card3_1', 'rules.card3_2'],
      icon: '🏷️',
    },
    {
      titleKey: 'rules.card4Title',
      items: ['rules.card4_1', 'rules.card4_2'],
      icon: '🎬',
    },
  ];

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 data-i18n="rules.heading">${t('rules.heading')}</h2>
      </div>

      <p class="text-center text-muted mb-2xl" style="max-width: 600px; margin: 0 auto var(--space-2xl); font-size: var(--font-size-md);" data-i18n="rules.subheading">
        ${t('rules.subheading')}
      </p>

      <div class="rules-standards-grid">
        ${cards.map(card => `
          <div class="card rule-standard-card">
            <h4 data-i18n="${card.titleKey}">${t(card.titleKey)}</h4>
            <ul class="checklist" style="margin-top: var(--space-md);">
              ${card.items.map(item => `
                <li data-i18n="${item}">${t(item)}</li>
              `).join('')}
            </ul>
          </div>
        `).join('')}
      </div>

      <div class="blockquote text-center" style="max-width: 800px; margin: var(--space-2xl) auto 0;" data-i18n="rules.assessmentNote">
        ${t('rules.assessmentNote')}
      </div>
    </div>
  `;

  return section;
}
