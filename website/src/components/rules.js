import { t } from '../i18n.js';

/**
 * Rules section — 4 clean criteria cards with 2D vector icons.
 */
export function renderRules() {
  const section = document.createElement('section');
  section.id = 'rules';
  section.className = 'section';

  const cards = [
    {
      titleKey: 'rules.card1Title',
      items: ['rules.card1_1', 'rules.card1_2'],
      icon: 'icon-user',
    },
    {
      titleKey: 'rules.card2Title',
      items: ['rules.card2_1', 'rules.card2_2', 'rules.card2_3'],
      icon: 'icon-globe',
    },
    {
      titleKey: 'rules.card3Title',
      items: ['rules.card3_1', 'rules.card3_2'],
      icon: 'icon-tag',
    },
    {
      titleKey: 'rules.card4Title',
      items: ['rules.card4_1', 'rules.card4_2'],
      icon: 'icon-video',
    },
  ];

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 data-i18n="rules.heading">${t('rules.heading')}</h2>
      </div>

      <p class="text-center text-muted" style="max-width: 600px; margin: 0 auto var(--space-2xl); font-size: var(--font-size-base);" data-i18n="rules.subheading">
        ${t('rules.subheading')}
      </p>

      <div class="rules-standards-grid">
        ${cards.map(card => `
          <div class="card rule-standard-card">
            <div class="rule-standard-card__title">
              <svg class="icon icon--md" aria-hidden="true"><use href="/icons.svg#${card.icon}"></use></svg>
              <span data-i18n="${card.titleKey}">${t(card.titleKey)}</span>
            </div>
            <ul class="checklist">
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
