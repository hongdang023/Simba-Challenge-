import { CONFIG } from '../config.js';
import { t } from '../i18n.js';

/**
 * Awards section — Ultra-clean, modular, no massive nested boxes:
 * 1. Sub-section 1: Dành cho tất cả học sinh tham gia (2 separate clean cards)
 * 2. Sub-section 2: Top 3 Vinh danh xuất sắc (3 Title cards with 2D stroke medal + small perks bar)
 * 3. Sub-section 3: Tham khảo domain của các Mentor (Clean pill strip)
 */
export function renderAwards() {
  const section = document.createElement('section');
  section.id = 'awards';
  section.className = 'section awards-clean-section';

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
    <div class="container awards-clean-container">
      <!-- Main Title -->
      <div class="section-header" style="margin-bottom: var(--space-xl);">
        <h2 data-i18n="awards.heading">${t('awards.heading')}</h2>
      </div>

      <!-- ==========================================
           1. DÀNH CHO TẤT CẢ HỌC SINH THAM GIA (2 Cards)
           ========================================== -->
      <div class="awards-clean-block">
        <h3 class="awards-clean-heading" data-i18n="awards.sec1Title">${t('awards.sec1Title')}</h3>

        <div class="awards-grid-2">
          <!-- Card 1: Domain 1 năm -->
          <div class="award-clean-card award-clean-card--gold">
            <div class="award-clean-card__header">
              <div class="icon-circle icon-circle--gold">
                <svg class="icon icon--md"><use href="/icons.svg#icon-gift"></use></svg>
              </div>
              <div>
                <h4 data-i18n="awards.item1Title">${t('awards.item1Title')}</h4>
                <p data-i18n="awards.item1Desc">${t('awards.item1Desc')}</p>
              </div>
            </div>
          </div>

          <!-- Card 2: Chứng nhận hoàn thành -->
          <div class="award-clean-card award-clean-card--green">
            <div class="award-clean-card__header">
              <div class="icon-circle icon-circle--green">
                <svg class="icon icon--md"><use href="/icons.svg#icon-check"></use></svg>
              </div>
              <div>
                <h4 data-i18n="awards.item2Title">${t('awards.item2Title')}</h4>
                <p data-i18n="awards.item2Desc">${t('awards.item2Desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ==========================================
           2. TOP 3 VINH DANH XUẤT SẮC (3 Title Cards)
           ========================================== -->
      <div class="awards-clean-block" style="margin-top: 36px;">
        <div class="awards-top3-header">
          <h3 class="awards-clean-heading" data-i18n="awards.sec2Title">${t('awards.sec2Title')}</h3>
          
          <!-- Clean Perks Strip (No giant container box) -->
          <div class="top3-perks-pills">
            <span class="perk-pill" data-i18n="awards.topPerk1">${t('awards.topPerk1')}</span>
            <span class="perk-pill-dot">•</span>
            <span class="perk-pill" data-i18n="awards.topPerk2">${t('awards.topPerk2')}</span>
            <span class="perk-pill-dot">•</span>
            <span class="perk-pill" data-i18n="awards.topPerk3">${t('awards.topPerk3')}</span>
          </div>
        </div>

        <div class="awards-grid-3">
          ${topAwards.map(a => `
            <div class="award-clean-card award-clean-card--top3">
              <span class="award-clean-tag" data-i18n="${a.tagKey}">${t(a.tagKey)}</span>
              
              <div class="icon-circle icon-circle--orange">
                <svg class="icon icon--md"><use href="/icons.svg#${a.icon}"></use></svg>
              </div>

              <h4 data-i18n="${a.titleKey}">${t(a.titleKey)}</h4>
              <p data-i18n="${a.descKey}">${t(a.descKey)}</p>

              <div class="cert-micro-badge">
                <svg class="icon icon--xs" style="stroke: #B8860B;"><use href="/icons.svg#icon-sparkles"></use></svg>
                <span data-i18n="awards.certBadge">${t('awards.certBadge')}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- ==========================================
           3. MENTOR DOMAINS SHOWCASE (Clean strip)
           ========================================== -->
      <div class="awards-clean-mentor">
        <span class="awards-mentor-label" data-i18n="awards.mentorTitle">${t('awards.mentorTitle')}</span>
        <div class="mentor-pills-row">
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
