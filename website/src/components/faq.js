import { t } from '../i18n.js';

/**
 * FAQ accordion section with 4 category groups.
 */
export function renderFAQ() {
  const section = document.createElement('section');
  section.id = 'faq';
  section.className = 'section';

  const categories = [
    {
      titleKey: 'faq.cat1',
      items: [
        { q: 'faq.q1_1', a: 'faq.a1_1' },
        { q: 'faq.q1_2', a: 'faq.a1_2' },
        { q: 'faq.q1_3', a: 'faq.a1_3' },
      ],
    },
    {
      titleKey: 'faq.cat2',
      items: [
        { q: 'faq.q2_1', a: 'faq.a2_1' },
        { q: 'faq.q2_2', a: 'faq.a2_2' },
        { q: 'faq.q2_3', a: 'faq.a2_3' },
      ],
    },
    {
      titleKey: 'faq.cat3',
      items: [
        { q: 'faq.q3_1', a: 'faq.a3_1' },
        { q: 'faq.q3_2', a: 'faq.a3_2' },
        { q: 'faq.q3_3', a: 'faq.a3_3' },
        { q: 'faq.q3_4', a: 'faq.a3_4' },
      ],
    },
    {
      titleKey: 'faq.cat4',
      items: [
        { q: 'faq.q4_1', a: 'faq.a4_1' },
        { q: 'faq.q4_2', a: 'faq.a4_2' },
        { q: 'faq.q4_3', a: 'faq.a4_3' },
      ],
    },
  ];

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 data-i18n="faq.heading">${t('faq.heading')}</h2>
      </div>

      <div class="faq-categories">
        ${categories.map(cat => `
          <div class="faq-category">
            <h3 class="faq-category__title" data-i18n="${cat.titleKey}">${t(cat.titleKey)}</h3>
            ${cat.items.map(item => `
              <div class="faq-item">
                <button class="faq-item__question" aria-expanded="false" type="button">
                  <span data-i18n="${item.q}">${t(item.q)}</span>
                  <span class="faq-item__chevron" aria-hidden="true">▼</span>
                </button>
                <div class="faq-item__answer" role="region">
                  <div class="faq-item__answer-inner" data-i18n="${item.a}">${t(item.a)}</div>
                </div>
              </div>
            `).join('')}
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Accordion behaviour
  section.querySelectorAll('.faq-item__question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all in same category
      item.closest('.faq-category').querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-item__question').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });

    // Keyboard support
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });

  return section;
}
