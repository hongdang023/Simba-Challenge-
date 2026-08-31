import { t } from '../i18n.js';

/**
 * Awards section — Option 1: 2-Tier Split Banner & Podium with Top 3 Badges.
 */
export function renderAwards() {
  const section = document.createElement('section');
  section.id = 'awards';
  section.className = 'section';

  const topAwards = [
    { 
      tagKey: 'awards.award1Tag',
      titleKey: 'awards.award1Title', 
      descKey: 'awards.award1Desc', 
      icon: 'icon-globe' 
    },
    { 
      tagKey: 'awards.award2Tag',
      titleKey: 'awards.award2Title', 
      descKey: 'awards.award2Desc', 
      icon: 'icon-heart' 
    },
    { 
      tagKey: 'awards.award3Tag',
      titleKey: 'awards.award3Title', 
      descKey: 'awards.award3Desc', 
      icon: 'icon-reflection' 
    },
  ];

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 data-i18n="awards.heading">${t('awards.heading')}</h2>
      </div>

      <!-- TIER 1: 100% Guaranteed Hero Banner -->
      <div class="awards-hero-banner">
        <div class="awards-hero-banner__left">
          <div class="awards-hero-banner__badge" data-i18n="awards.everyoneBadge">${t('awards.everyoneBadge')}</div>
          <div class="awards-hero-banner__icon-box">
            <svg class="icon icon--xl" aria-hidden="true"><use href="/icons.svg#icon-gift"></use></svg>
          </div>
          <h3 data-i18n="awards.everyoneTitle">${t('awards.everyoneTitle')}</h3>
          <p class="text-muted" style="font-size: var(--font-size-sm); margin: 0;" data-i18n="awards.everyoneDesc">${t('awards.everyoneDesc')}</p>
        </div>
        
        <div class="awards-hero-banner__right">
          <ul class="awards-hero-banner__list">
            <li>
              <div class="awards-check-icon">
                <svg class="icon icon--sm" aria-hidden="true"><use href="/icons.svg#icon-check"></use></svg>
              </div>
              <div>
                <strong data-i18n="awards.everyoneItem1">${t('awards.everyoneItem1')}</strong>
              </div>
            </li>
            <li>
              <div class="awards-check-icon">
                <svg class="icon icon--sm" aria-hidden="true"><use href="/icons.svg#icon-check"></use></svg>
              </div>
              <div>
                <strong data-i18n="awards.everyoneItem2">${t('awards.everyoneItem2')}</strong>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- TIER 2: Top 3 Podium Cards -->
      <div class="awards-top-header">
        <h3 data-i18n="awards.topSectionTitle">${t('awards.topSectionTitle')}</h3>
      </div>
      
      <div class="awards-top-grid">
        ${topAwards.map(a => `
          <div class="card award-podium-card">
            <div class="award-podium-card__tag" data-i18n="${a.tagKey}">${t(a.tagKey)}</div>
            <div class="award-podium-card__icon">
              <svg class="icon icon--lg" aria-hidden="true"><use href="/icons.svg#${a.icon}"></use></svg>
            </div>
            <h4 data-i18n="${a.titleKey}">${t(a.titleKey)}</h4>
            <p data-i18n="${a.descKey}">${t(a.descKey)}</p>
          </div>
        `).join('')}
      </div>

      <!-- Extra Perks Strip -->
      <div class="awards-perks-strip">
        <div class="awards-perks-strip__badge" data-i18n="awards.extraStripTitle">${t('awards.extraStripTitle')}</div>
        <div class="awards-perks-strip__text" data-i18n="awards.extraStripText">${t('awards.extraStripText')}</div>
      </div>

      <p class="text-center text-muted" style="margin-top: var(--space-lg); font-size: var(--font-size-xs);" data-i18n="awards.ruleNote">
        ${t('awards.ruleNote')}
      </p>
    </div>
  `;

  return section;
}
