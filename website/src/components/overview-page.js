import { renderHero } from './hero.js';
import { renderAwards } from './awards.js';
import { renderChallenge } from './challenge.js';
import { renderSuggestions } from './suggestions.js';
import { renderRules } from './rules.js';

/**
 * Dedicated Page 1: Tổng quan (Overview page).
 * Flow: Hero -> Giải thưởng -> Thử thách ("Em sẽ tạo sản phẩm gì?") -> Gợi ý website -> Tiêu chuẩn bài làm.
 */
export function renderOverviewPage() {
  const page = document.createElement('div');
  page.id = 'page-overview';
  page.className = 'page-container';

  // 1. Hero
  page.appendChild(renderHero());
  
  // 2. Giải thưởng
  page.appendChild(renderAwards());

  // 3. Thử thách ("Em sẽ tạo sản phẩm gì?")
  page.appendChild(renderChallenge());

  // 4. Gợi ý website
  page.appendChild(renderSuggestions());

  // 5. Tiêu chuẩn bài làm
  page.appendChild(renderRules());

  return page;
}
