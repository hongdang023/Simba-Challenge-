import { CONFIG } from '../config.js';
import { t } from '../i18n.js';

/**
 * Hero section — clean, only 1 CTA button ("Khám phá thử thách").
 * No mentor domain box in hero (moved to Awards section).
 */
export function renderHero() {
  const section = document.createElement('section');
  section.id = 'overview';
  section.className = 'hero section';

  const deadlineDate = new Date(CONFIG.deadline);
  const now = new Date();
  const diffMs = deadlineDate - now;
  const daysLeft = Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));

  section.innerHTML = `
    <div class="container">
      <div class="hero__badge-container">
        <span class="badge badge--brand" data-i18n="hero.badge">${t('hero.badge')}</span>
      </div>
      
      <h1 class="hero__title" data-i18n="hero.title">${t('hero.title')}</h1>
      
      <p class="hero__question" data-i18n="hero.question">"${t('hero.question')}"</p>
      
      <div class="hero__deadline-badge">
        <svg class="icon icon--sm" aria-hidden="true"><use href="/icons.svg#icon-clock"></use></svg>
        <span data-i18n="hero.deadline">${t('hero.deadline')}</span>
        ${daysLeft > 0 ? `<span>· Còn ${daysLeft} ngày</span>` : ''}
      </div>

      <!-- Hero CTA: Only 1 primary button -->
      <div class="hero__ctas">
        <a href="#challenge" class="btn btn--primary" data-i18n="hero.ctaPrimary">
          ${t('hero.ctaPrimary')}
        </a>
      </div>
    </div>
  `;

  return section;
}
