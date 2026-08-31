import { CONFIG } from '../config.js';
import { t } from '../i18n.js';

/**
 * Hero / Overview section with challenge question, deadline, prize, and CTAs.
 */
export function renderHero() {
  const section = document.createElement('section');
  section.id = 'overview';
  section.className = 'hero section';

  // Calculate countdown
  const deadlineDate = new Date(CONFIG.deadline);
  const now = new Date();
  const diffMs = deadlineDate - now;
  const daysLeft = Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));

  section.innerHTML = `
    <div class="container">
      <div class="hero__label">
        <span class="badge badge--orange" data-i18n="hero.label">${t('hero.label')}</span>
      </div>
      <h1 class="hero__title" data-i18n="hero.title">${t('hero.title')}</h1>
      <p class="hero__question" data-i18n="hero.question">${t('hero.question')}</p>
      <p class="hero__description" data-i18n="hero.description">${t('hero.description')}</p>
      <div class="hero__deadline">
        <span class="badge badge--gold">
          ⏰ <span data-i18n="hero.deadline">${t('hero.deadline')}</span>
          ${daysLeft > 0 ? ` · ${daysLeft} days` : ''}
        </span>
      </div>
      <div class="hero__prize">
        🎁 <span data-i18n="hero.prize">${t('hero.prize')}</span>
      </div>
      <div class="hero__ctas">
        <a href="${CONFIG.simbaUrl}" target="_blank" rel="noopener" class="btn btn--primary" data-i18n="hero.ctaPrimary">${t('hero.ctaPrimary')}</a>
        <a href="${CONFIG.simbaUrl}" target="_blank" rel="noopener" class="btn btn--secondary" data-i18n="hero.ctaSecondary">${t('hero.ctaSecondary')}</a>
      </div>
    </div>
  `;

  return section;
}
