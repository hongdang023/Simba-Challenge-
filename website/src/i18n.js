/**
 * Lightweight i18n system for VI / EN bilingual support.
 */

const translations = {
  vi: {
    // Navbar
    'nav.overview': 'Tổng quan',
    'nav.challenge': 'Thử thách',
    'nav.howToJoin': 'Cách tham gia',
    'nav.rules': 'Quy định',
    'nav.awards': 'Giải thưởng',
    'nav.faq': 'FAQ',

    // Hero
    'hero.badge': 'AI Teen Challenge',
    'hero.title': 'My Personal Website Challenge',
    'hero.question': 'Nếu có một góc trên Internet để giới thiệu thế giới của mình, em muốn cho người đó xem gì?',
    'hero.deadline': 'Hạn nộp: 23:59, 06/09/2026',
    'hero.prizeTitle': '100% Hoàn thành = Nhận ngay 1 Tên Miền (Domain) riêng trong 1 năm',
    'hero.ctaPrimary': 'Làm Website trên Simba',
    'hero.ctaSecondary': 'Làm 4F Reflection',
    'hero.mentorTitle': 'Tham khảo website & domain của các Mentor:',

    // Challenge
    'challenge.badge': 'Website Cá Nhân',
    'challenge.heading': 'Em sẽ tạo sản phẩm gì?',
    'challenge.intro': 'Website của em sẽ giúp một người xem cụ thể hiểu về:',
    'challenge.point1': 'Em là ai.',
    'challenge.point2': 'Em thích hoặc quan tâm điều gì.',
    'challenge.point3': 'Một sản phẩm, hoạt động, thành tích hoặc trải nghiệm mà em tự hào.',
    'challenge.point4': 'Người xem có thể tìm hiểu thêm về em ở đâu.',
    'challenge.example1Title': 'Ví dụ 1',
    'challenge.example1': 'Một website cho bạn mới cùng lớp thích bóng đá — giới thiệu trò chơi yêu thích, cuộc sống trường học và một sản phẩm em đã tạo.',
    'challenge.example2Title': 'Ví dụ 2',
    'challenge.example2': '"Thế Giới Của Mình" cho ba mẹ — bao gồm trò chơi yêu thích, môn học yêu thích, một ngày ở trường và một trò chơi nhỏ em tự tạo.',
    'challenge.note': 'Website không cần giống bài mẫu. Điều quan trọng là con hiểu người xem, giải thích được lựa chọn của mình và có bằng chứng phù hợp.',
    'challenge.cta': 'Làm Website trên Simba',

    // How to Join (Nút bấm ngắn gọn, 1 dòng chuẩn xác)
    'howToJoin.heading': 'Cách tham gia',
    'howToJoin.subheading': 'Các bước làm bài trên Simba thì con đã quá quen thuộc rồi! Điểm mới mẻ duy nhất là chiếc video ngắn 60–90s để con tự tin giới thiệu sản phẩm của mình thôi!',
    'howToJoin.sub1Title': '1. Website / Product',
    'howToJoin.sub1Where': 'Nộp trên Simba (như mọi tuần)',
    'howToJoin.sub1What': 'Nộp link website, câu trả lời product thinking và bằng chứng kết quả.',
    'howToJoin.sub2Title': '2. 4F Reflection',
    'howToJoin.sub2Where': 'Nộp trên Simba (như mọi tuần)',
    'howToJoin.sub2What': 'Ghi lại Facts, Feelings, Findings và Future sau khi hoàn thành.',
    'howToJoin.sub3Title': '3. Video Giới Thiệu',
    'howToJoin.sub3Where': 'Gửi vào nhóm Zalo AI Teen',
    'howToJoin.sub3What': 'Video 60–90s có mặt thật, giọng thật và màn hình website của con. Upload lên Google Drive/YouTube rồi gửi link vào Zalo.',
    'howToJoin.ctaWebsite': 'Nộp trên Simba',
    'howToJoin.ctaReflection': 'Làm Reflection',
    'howToJoin.videoNote': 'Gửi Video qua Zalo',

    // Rules
    'rules.heading': 'Quy định bài làm',
    'rules.subheading': 'Chỉ 4 tiêu chuẩn đơn giản, trong tầm tay con làm được tuốt!',
    'rules.card1Title': '1. Bài làm & Thời hạn',
    'rules.card1_1': 'Dành riêng cho học sinh AI Teen (mỗi con làm 1 bài cá nhân).',
    'rules.card1_2': 'Hạn chót nộp bài: 23:59 ngày 06/09/2026.',
    'rules.card2Title': '2. Yêu cầu Website',
    'rules.card2_1': 'Dùng Google Antigravity & deploy lên Cloudflare Pages.',
    'rules.card2_2': 'Có tối thiểu 3 phần nội dung + 3 hình ảnh thật.',
    'rules.card2_3': 'Cho 1 người xem trải nghiệm & có ít nhất 1 cải tiến sau góp ý.',
    'rules.card3Title': '3. Tên miền (Domain)',
    'rules.card3_1': 'Chuẩn bị 1 domain chính + 1 domain dự phòng.',
    'rules.card3_2': 'Kiểm tra trước trên Cloudflare và giải thích lý do con chọn tên miền đó.',
    'rules.card4Title': '4. Video & Reflection',
    'rules.card4_1': 'Video 60–90s có mặt thật, giọng thật và quay màn hình website.',
    'rules.card4_2': 'Hoàn thành bài viết 4F Reflection trên hệ thống Simba.',
    'rules.assessmentNote': 'Rubric đánh giá chi tiết cho Website và 4F Reflection đều có sẵn trực tiếp trên Simba như mọi tuần con nhé!',

    // Awards
    'awards.heading': 'Giải thưởng',
    'awards.everyoneTitle': 'Phần Thưởng Cho Tất Cả Học Sinh Tham Gia',
    'awards.everyoneDesc': 'Mỗi học sinh hoàn thành đủ 3 yêu cầu trên chắc chắn nhận được:',
    'awards.everyoneItem1': '1 Tên miền (Domain) cá nhân riêng chính chủ dùng trong 1 năm.',
    'awards.everyoneItem2': 'Chứng nhận hoàn thành My Personal Website Challenge từ Sư Tử Con.',
    'awards.topTitle': 'Top 3 — Giải Thưởng Nổi Bật',
    'awards.topDesc': 'Ba giải thưởng xuất sắc vinh danh 3 gương mặt tiêu biểu:',
    'awards.award1Title': 'Best Website Experience',
    'awards.award1Desc': 'Website mang lại trải nghiệm xem mượt mà, hữu ích và phù hợp nhất cho người xem.',
    'awards.award2Title': 'Best Website Story',
    'awards.award2Desc': 'Website kết hợp ấn tượng nhất giữa câu chuyện cá nhân, lý do chọn domain và video giới thiệu.',
    'awards.award3Title': 'Best Reflection',
    'awards.award3Desc': 'Bài 4F Reflection sâu sắc nhất, thể hiện rõ con đã học được gì, làm được gì và hướng đi tiếp theo.',
    'awards.extraTitle': 'Quyền Lợi Dành Riêng Cho Top 3',
    'awards.extra1': 'Thưởng thêm 200.000 VNĐ tiền mặt.',
    'awards.extra2': 'Được chọn làm bài mẫu xuất sắc trên Simba.',
    'awards.extra3': 'Được vinh danh trên trang chủ Sư Tử Con.',
    'awards.extra4': 'Xuất hiện trong các ấn phẩm truyền thông của Nemo12.',
    'awards.ruleNote': 'Mỗi học sinh nhận tối đa 1 danh hiệu Top 3 để khích lệ nhiều bạn cùng toả sáng.',

    // FAQ
    'faq.heading': 'Câu hỏi thường gặp',
    'faq.cat1': 'Về thử thách',
    'faq.q1_1': 'Em có thể chọn chủ đề khác với bài mẫu không?',
    'faq.a1_1': 'Được chứ! Bài mẫu chỉ là gợi ý. Em hoàn toàn tự do chọn bất cứ chủ đề nào để giới thiệu thế giới của mình.',
    'faq.q1_2': 'Website của em có phải giống bài mẫu không?',
    'faq.a1_2': 'Không cần. Quan trọng nhất là website phục vụ đúng người xem em chọn và thể hiện được chất riêng của em.',
    'faq.q1_3': 'Thế nào là một website cá nhân?',
    'faq.a1_3': 'Là trang web giới thiệu về em — sở thích, đam mê, trường lớp, bạn bè hoặc bất kỳ sản phẩm/dự án nào em tự hào.',

    'faq.cat2': 'Về domain',
    'faq.q2_1': 'Kiểm tra domain ở đâu?',
    'faq.a2_1': 'Em vào Cloudflare để tra cứu xem tên miền mong muốn còn trống không, sau đó chụp lại ảnh màn hình bằng chứng.',
    'faq.q2_2': 'Nếu domain em chọn đã có người mua rồi thì sao?',
    'faq.a2_2': 'Đó là lý do em cần chuẩn bị thêm 1 domain dự phòng. Em hãy kiểm tra cả 2 domain trước khi nộp nhé.',
    'faq.q2_3': 'Tên miền được tặng có giống của các thầy cô không?',
    'faq.a2_3': 'Đúng rồi! Tên miền riêng có đuôi .com, .me, .dev... chính chủ mang tên em, hoạt động hoàn toàn như website của các Mentor.',

    'faq.cat3': 'Về video',
    'faq.q3_1': 'Video dài bao lâu?',
    'faq.a3_1': 'Chỉ cần từ 60 đến 90 giây. Rất ngắn gọn, em chỉ cần khoe website và nói đôi lời tự tin.',
    'faq.q3_2': 'Em có phải xuất hiện mặt thật không?',
    'faq.a3_2': 'Có. Video cần có khuôn mặt thật và giọng nói tự tin của em cùng màn hình website đang chạy.',
    'faq.q3_3': 'Video có cần edit hiệu ứng xịn sò không?',
    'faq.a3_3': 'Không cần! Em chỉ cần quay rõ ràng bằng điện thoại/máy tính là được rồi.',
    'faq.q3_4': 'Nộp video ở đâu?',
    'faq.a3_4': 'Upload video lên Google Drive hoặc YouTube, sau đó gửi link vào nhóm AI Teen trên Zalo.',

    'faq.cat4': 'Về nộp bài trên Simba',
    'faq.q4_1': 'Nộp website và 4F Reflection ở đâu?',
    'faq.a4_1': 'Vào trang web Simba quen thuộc, tìm phần Website/Product và 4F Reflection để nộp bài.',
    'faq.q4_2': 'Em có thể lưu bài và làm tiếp sau không?',
    'faq.a4_2': 'Hoàn toàn được! Simba cho phép em lưu nháp và quay lại hoàn thiện trước 23:59 ngày 06/09/2026.',
    'faq.q4_3': 'AI score cao có phải là mục tiêu lớn nhất của 4F Reflection không?',
    'faq.a4_3': 'Không. Điều quan trọng nhất là con hiểu mình đã học được gì, làm được gì và tiến bộ thế nào. AI score chỉ là gợi ý tham khảo.',

    // Footer
    'footer.message': 'Đây không chỉ là một cuộc thi làm website. Đây là cơ hội để con tạo ra một góc Internet thật sự thể hiện mình, rồi nhìn lại xem mình đã học được gì trong quá trình đó.',
    'footer.brand': '© 2026 Sư Tử Con · Nemo12',
  },

  en: {
    // Navbar
    'nav.overview': 'Overview',
    'nav.challenge': 'Challenge',
    'nav.howToJoin': 'How to Join',
    'nav.rules': 'Rules',
    'nav.awards': 'Awards',
    'nav.faq': 'FAQ',

    // Hero
    'hero.badge': 'AI Teen Challenge',
    'hero.title': 'My Personal Website Challenge',
    'hero.question': 'If you had a corner on the Internet to introduce your world, what would you show?',
    'hero.deadline': 'Deadline: 23:59, 06/09/2026',
    'hero.prizeTitle': '100% Completion = 1 Custom Domain for 1 Full Year',
    'hero.ctaPrimary': 'Submit on Simba',
    'hero.ctaSecondary': 'Do Reflection',
    'hero.mentorTitle': 'Explore Mentors\' websites & domains:',

    // Challenge
    'challenge.badge': 'Personal Website',
    'challenge.heading': 'What will you create?',
    'challenge.intro': 'Your website should help a specific viewer understand:',
    'challenge.point1': 'Who you are.',
    'challenge.point2': 'What you like or care about.',
    'challenge.point3': 'A product, activity, achievement or experience you are proud of.',
    'challenge.point4': 'How the viewer can learn more about you.',
    'challenge.example1Title': 'Example 1',
    'challenge.example1': 'A website for a new classmate who likes football — introducing your favourite game, school life and a product you created.',
    'challenge.example2Title': 'Example 2',
    'challenge.example2': '"My World" for a parent — including favourite games, favourite subjects, a day at school and a small game you created.',
    'challenge.note': 'Your website does not need to look like the examples. What matters is that you understand your viewer, explain your choices and provide suitable evidence.',
    'challenge.cta': 'Submit on Simba',

    // How to Join
    'howToJoin.heading': 'How to Join',
    'howToJoin.subheading': 'You already know how to submit work on Simba! The only new exciting thing is a 60–90s short video to show off your website!',
    'howToJoin.sub1Title': '1. Website / Product',
    'howToJoin.sub1Where': 'Submit on Simba (as usual)',
    'howToJoin.sub1What': 'Submit website link, product thinking answers and evidence.',
    'howToJoin.sub2Title': '2. 4F Reflection',
    'howToJoin.sub2Where': 'Submit on Simba (as usual)',
    'howToJoin.sub2What': 'Reflect on Facts, Feelings, Findings and Future upon completion.',
    'howToJoin.sub3Title': '3. Introduction Video',
    'howToJoin.sub3Where': 'Send to AI Teen Zalo Group',
    'howToJoin.sub3What': '60–90s video showing your face, real voice and website screen. Upload to Google Drive/YouTube and send link in Zalo.',
    'howToJoin.ctaWebsite': 'Submit on Simba',
    'howToJoin.ctaReflection': 'Do Reflection',
    'howToJoin.videoNote': 'Send via Zalo',

    // Rules
    'rules.heading': 'Submission Rules',
    'rules.subheading': '4 simple criteria — well within your capability!',
    'rules.card1Title': '1. Project & Deadline',
    'rules.card1_1': 'Exclusive for AI Teen students (individual submission).',
    'rules.card1_2': 'Final deadline: 23:59, 06/09/2026.',
    'rules.card2Title': '2. Website Requirements',
    'rules.card2_1': 'Built with Google Antigravity & deployed on Cloudflare Pages.',
    'rules.card2_2': 'At least 3 content sections + 3 real photos.',
    'rules.card2_3': 'Get feedback from 1 viewer & explain at least 1 improvement.',
    'rules.card3Title': '3. Domain Wishlist',
    'rules.card3_1': 'Prepare 1 primary domain + 1 backup domain.',
    'rules.card3_2': 'Check availability on Cloudflare and explain your choice.',
    'rules.card4Title': '4. Video & Reflection',
    'rules.card4_1': '60–90s video with your real face, voice and screen recording.',
    'rules.card4_2': 'Complete 4F Reflection on the Simba platform.',
    'rules.assessmentNote': 'Detailed assessment rubrics for Website and 4F Reflection are available directly on Simba as usual!',

    // Awards
    'awards.heading': 'Awards & Prizes',
    'awards.everyoneTitle': 'Rewards For All Participants',
    'awards.everyoneDesc': 'Every student who completes all 3 tasks will receive:',
    'awards.everyoneItem1': '1 Custom personal domain for 1 full year.',
    'awards.everyoneItem2': 'Certificate of Completion for My Personal Website Challenge from Sư Tử Con.',
    'awards.topTitle': 'Top 3 Featured Awards',
    'awards.topDesc': 'Three outstanding titles recognising three standout students:',
    'awards.award1Title': 'Best Website Experience',
    'awards.award1Desc': 'For the website that creates the clearest value and smoothest experience for its audience.',
    'awards.award2Title': 'Best Website Story',
    'awards.award2Desc': 'For the strongest combination of personal story, domain rationale and introduction video.',
    'awards.award3Title': 'Best Reflection',
    'awards.award3Desc': 'For the 4F Reflection that most clearly shows what the student learned, did and will do next.',
    'awards.extraTitle': 'Top 3 Exclusive Perks',
    'awards.extra1': 'An extra 200,000 VND cash prize.',
    'awards.extra2': 'Opportunity to be featured as a model submission on Simba.',
    'awards.extra3': 'Featured placement on the Sư Tử Con official website.',
    'awards.extra4': 'Featured in Nemo12 media materials.',
    'awards.ruleNote': 'Each student receives a maximum of one Top 3 title to celebrate multiple talents.',

    // FAQ
    'faq.heading': 'Frequently Asked Questions',
    'faq.cat1': 'The Challenge',
    'faq.q1_1': 'Can I choose a different topic from the examples?',
    'faq.a1_1': 'Absolutely! The examples are just inspiration. You are free to choose any topic to introduce your world.',
    'faq.q1_2': 'Does my website have to look like the sample?',
    'faq.a1_2': 'No. What matters is that you understand your viewer, explain your choices and provide authentic content.',
    'faq.q1_3': 'What counts as a personal website?',
    'faq.a1_3': 'A website that introduces you — your passions, school life, friends, achievements or creations you are proud of.',

    'faq.cat2': 'Domain',
    'faq.q2_1': 'Where do I check whether a domain is available?',
    'faq.a2_1': 'Check on Cloudflare to see if your desired domain is available, and take a screenshot as evidence.',
    'faq.q2_2': 'What should I do if my first domain choice is already taken?',
    'faq.a2_2': 'That is why you need 1 backup domain. Make sure to check both before submitting.',
    'faq.q2_3': 'Will my domain be like the mentors\' domains?',
    'faq.a2_3': 'Yes! Custom domains (.com, .me, .dev...) with your own name, working exactly like our mentors\' sites.',

    'faq.cat3': 'Video',
    'faq.q3_1': 'How long should the video be?',
    'faq.a3_1': 'Between 60 and 90 seconds. Quick and concise — just introduce yourself and tour your website.',
    'faq.q3_2': 'Do I need to show my face?',
    'faq.a3_2': 'Yes. Show your real face and voice along with your website on screen.',
    'faq.q3_3': 'Does the video need fancy editing?',
    'faq.a3_3': 'No fancy editing needed! A clear screen and audio recording from your phone or laptop is perfect.',
    'faq.q3_4': 'Where do I submit the video?',
    'faq.a3_4': 'Upload your video to Google Drive or YouTube, then send the link in the AI Teen Zalo group.',

    'faq.cat4': 'Submitting on Simba',
    'faq.q4_1': 'Where do I submit the website and reflection?',
    'faq.a4_1': 'Log in to Simba, and find the Website/Product and 4F Reflection sections to submit as usual.',
    'faq.q4_2': 'Can I save my work and finish later?',
    'faq.a4_2': 'Yes! Simba allows you to save drafts and return before 23:59 on 06/09/2026.',
    'faq.q4_3': 'Is a high AI score the main goal of 4F Reflection?',
    'faq.a4_3': 'No. What matters most is understanding your learning journey. The AI score is just a helpful reference.',

    // Footer
    'footer.message': 'This is not just a website-building competition. It is your chance to create a real corner of the Internet that truly represents you, and to reflect on what you learned along the way.',
    'footer.brand': '© 2026 Sư Tử Con · Nemo12',
  },
};

let currentLang = localStorage.getItem('challenge-lang') || 'vi';

export function t(key) {
  return translations[currentLang]?.[key] || translations['vi']?.[key] || key;
}

export function getLang() {
  return currentLang;
}

export function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('challenge-lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = value;
    } else {
      el.textContent = value;
    }
  });

  window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}
