import { renderHero } from './hero.js';
import { renderAwards } from './awards.js';
import { renderChallenge } from './challenge.js';
import { renderSuggestions } from './suggestions.js';
import { renderRules } from './rules.js';

/**
 * Dedicated Page 1: Tổng quan (Overview page).
 * Flow: Hero -> Giải thưởng -> Thử thách ("Em sẽ tạo sản phẩm gì?") -> Quy định bài làm -> Gợi ý website & video.
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

  // 4. Quy định bài làm
  page.appendChild(renderRules());

  // 5. Gợi ý website & video
  page.appendChild(renderSuggestions());

  return page;
}
