import { renderHero } from './hero.js';
import { renderAwards } from './awards.js';
import { renderChallenge } from './challenge.js';
import { renderHowToJoin } from './how-to-join.js';
import { renderRules } from './rules.js';

/**
 * Dedicated Page 1: Tổng quan (Overview page).
 * Flow: Hero -> Giải thưởng (Được đẩy lên đầu) -> Thử thách -> 3 Yêu cầu làm bài -> Tiêu chuẩn bài làm.
 */
export function renderOverviewPage() {
  const page = document.createElement('div');
  page.id = 'page-overview';
  page.className = 'page-container';

  // 1. Hero
  page.appendChild(renderHero());
  
  // 2. Giải thưởng (Đẩy lên ngay sau Hero, trước phần Thử thách)
  page.appendChild(renderAwards());

  // 3. Thử thách ("Em sẽ tạo sản phẩm gì?")
  page.appendChild(renderChallenge());

  // 4. 3 Yêu cầu làm bài
  page.appendChild(renderHowToJoin());

  // 5. Tiêu chuẩn bài làm
  page.appendChild(renderRules());

  return page;
}
