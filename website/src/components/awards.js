import { CONFIG } from '../config.js';
import { t } from '../i18n.js';

/**
 * Awards section — Structured into 2 distinct sub-sections:
 * Section 1: "Dành cho tất cả học sinh tham gia"
 * Section 2: "Top 3 Vinh danh xuất sắc" (with certificate tag on cards)
 */
export function renderAwards() {
  const section = document.createElement('section');
  section.id = 'awards';
  section.className = 'section awards-section-v2';

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
    <div class="container awards-container-v2">
      <!-- Main Title -->
      <div class="awards-header-v2">
        <h2 data-i18n="awards.heading">${t('awards.heading')}</h2>
        <div class="awards-header-line"></div>
      </div>

      <!-- ==========================================
           MỤC 1: DÀNH CHO TẤT CẢ HỌC SINH THAM GIA
           ========================================== -->
      <div class="awards-subsection">
        <div class="awards-subsection__title-row">
          <span class="subsection-icon">🎁</span>
          <h3 data-i18n="awards.sec1Title">${t('awards.sec1Title')}</h3>
        </div>

        <div class="all-rewards-card">
          <div class="all-rewards-card__left">
            <div class="all-rewards-card__icon-wrap">
              <svg class="icon icon--lg" aria-hidden="true"><use href="/icons.svg#icon-gift"></use></svg>
              <span class="sparkle-star">✦</span>
            </div>
            <h4 data-i18n="awards.allTitle">${t('awards.allTitle')}</h4>
          </div>
          
          <div class="all-rewards-card__item">
            <div class="round-check-icon">
              <svg class="icon icon--sm" aria-hidden="true"><use href="/icons.svg#icon-check"></use></svg>
            </div>
            <div>
              <h5 data-i18n="awards.item1Title">${t('awards.item1Title')}</h5>
              <p data-i18n="awards.item1Desc">${t('awards.item1Desc')}</p>
            </div>
          </div>

          <div class="all-rewards-card__item">
            <div class="round-check-icon">
              <svg class="icon icon--sm" aria-hidden="true"><use href="/icons.svg#icon-check"></use></svg>
            </div>
            <div>
              <h5 data-i18n="awards.item2Title">${t('awards.item2Title')}</h5>
              <p data-i18n="awards.item2Desc">${t('awards.item2Desc')}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ==========================================
           MỤC 2: TOP 3 VINH DANH XUẤT SẮC
           ========================================== -->
      <div class="awards-subsection" style="margin-top: 36px;">
        <div class="awards-subsection__title-row">
          <span class="subsection-icon">🏆</span>
          <h3 data-i18n="awards.sec2Title">${t('awards.sec2Title')}</h3>
        </div>

        <!-- Big Glow Golden Banner with 3 Perks -->
        <div class="top3-glow-banner">
          <div class="top3-glow-header">
            <div class="top3-title-row">
              <span class="laurel-branch left">🌿</span>
              <h4 data-i18n="awards.topSectionTitle">${t('awards.topSectionTitle')}</h4>
              <span class="laurel-branch right">🌿</span>
            </div>
            <div class="top3-star-divider">
              <span class="divider-line"></span>
              <span class="star-icon">★</span>
              <span class="divider-line"></span>
            </div>
            <p class="top3-subtitle" data-i18n="awards.topSubTitle">${t('awards.topSubTitle')}</p>
          </div>

          <!-- 3 Perks Cards -->
          <div class="top3-perks-grid">
            <div class="perk-card">
              <div class="perk-card__icon-box">
                <span class="perk-emoji-2d">💵</span>
              </div>
              <div class="perk-card__amount" data-i18n="awards.perk1Amount">${t('awards.perk1Amount')}</div>
              <div class="perk-card__label" data-i18n="awards.perk1Desc">${t('awards.perk1Desc')}</div>
            </div>

            <div class="perk-card">
              <div class="perk-card__icon-box">
                <span class="perk-emoji-2d">💻</span>
              </div>
              <div class="perk-card__title" data-i18n="awards.perk2Title">${t('awards.perk2Title')}</div>
            </div>

            <div class="perk-card">
              <div class="perk-card__icon-box">
                <span class="perk-emoji-2d">📢</span>
              </div>
              <div class="perk-card__title" data-i18n="awards.perk3Title">${t('awards.perk3Title')}</div>
            </div>
          </div>
        </div>

        <!-- 3 Title Podium Cards with Certificate Tag -->
        <div class="top3-titles-grid">
          ${topAwards.map(a => `
            <div class="title-award-card">
              <div class="title-award-card__tag" data-i18n="${a.tagKey}">${t(a.tagKey)}</div>
              <div class="title-award-card__medal">
                <div class="medal-circle">
                  <svg class="icon icon--md" aria-hidden="true"><use href="/icons.svg#${a.icon}"></use></svg>
                </div>
              </div>
              <h4 data-i18n="${a.titleKey}">${t(a.titleKey)}</h4>
              <p data-i18n="${a.descKey}">${t(a.descKey)}</p>
              <div class="cert-pill">
                <svg class="icon icon--xs" style="stroke: #B8860B;"><use href="/icons.svg#icon-sparkles"></use></svg>
                <span data-i18n="awards.certBadge">${t('awards.certBadge')}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 3. MENTOR DOMAINS SHOWCASE -->
      <div class="awards-mentor-box" style="margin-top: 36px;">
        <span class="awards-mentor-title" data-i18n="awards.mentorTitle">${t('awards.mentorTitle')}</span>
        <div class="awards-mentor-list">
          ${CONFIG.mentorDomains.map(m => `
            <a href="${m.url}" target="_blank" rel="noopener" class="mentor-pill" title="Xem website của ${m.name}">
              <span class="mentor-pill__dot"></span>
              <strong class="mentor-pill__domain">${m.domain}</strong>
              <span class="mentor-pill__name">${m.name}</span>
              <svg class="icon icon--sm" style="opacity: 0.45;" aria-hidden="true"><use href="/icons.svg#icon-external"></use></svg>
            </a>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  return section;
}
