/**
 * Lightweight i18n system for VI / EN bilingual support.
 * Technical terms (Cloudflare Pages, Google Antigravity, 4F Reflection, domain) stay in English.
 */

const translations = {
  vi: {
    // Navbar
    'nav.overview': 'Tổng quan',
    'nav.challenge': 'Thử thách',
    'nav.howToJoin': 'Cách tham gia',
    'nav.rules': 'Quy định',
    'nav.awards': 'Giải thưởng',
    'nav.faq': 'Câu hỏi',

    // Hero
    'hero.label': 'AI Teen Challenge',
    'hero.title': 'My Personal Website Challenge',
    'hero.question': 'Nếu có một góc trên Internet để giới thiệu thế giới của mình, em muốn cho người đó xem gì?',
    'hero.description': 'Tạo một website cá nhân bằng Google Antigravity, giới thiệu thế giới của mình với một người xem cụ thể.',
    'hero.deadline': 'Hạn nộp: 23:59, 06/09/2026',
    'hero.prize': 'Mỗi học sinh hoàn thành đủ yêu cầu nhận một domain cá nhân trong 1 năm.',
    'hero.ctaPrimary': 'Make Your Website',
    'hero.ctaSecondary': 'Do Your Reflection',

    // Challenge
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
    'challenge.cta': 'Make Your Website',

    // How to Join
    'howToJoin.heading': 'Cách tham gia',
    'howToJoin.stepsHeading': '5 bước thực hiện',
    'howToJoin.step1Title': 'Chọn người xem',
    'howToJoin.step1': 'Chọn một người xem cụ thể.',
    'howToJoin.step2Title': 'Lên kế hoạch',
    'howToJoin.step2': 'Nghĩ xem người đó muốn biết gì thêm về con.',
    'howToJoin.step3Title': 'Xây dựng website',
    'howToJoin.step3': 'Tạo website với Google Antigravity.',
    'howToJoin.step4Title': 'Chọn domain',
    'howToJoin.step4': 'Kiểm tra domain trên Cloudflare, lưu bằng chứng và giải thích lý do chọn.',
    'howToJoin.step5Title': 'Thử nghiệm & cải thiện',
    'howToJoin.step5': 'Cho người xem trải nghiệm, ghi lại phản hồi và nâng cấp website.',
    'howToJoin.submissionsHeading': '3 phần cần nộp',
    'howToJoin.sub1Title': 'Website/Product',
    'howToJoin.sub1Where': 'Nộp trên Simba',
    'howToJoin.sub1What': 'Link website, câu trả lời product thinking và bằng chứng.',
    'howToJoin.sub2Title': '4F Reflection',
    'howToJoin.sub2Where': 'Nộp trên Simba',
    'howToJoin.sub2What': 'Facts, Feelings, Findings và Future.',
    'howToJoin.sub3Title': 'Video giới thiệu',
    'howToJoin.sub3Where': 'Gửi qua Zalo',
    'howToJoin.sub3What': 'Upload video lên Google Drive hoặc YouTube, gửi link trong nhóm AI Teen trên Zalo.',
    'howToJoin.ctaWebsite': 'Make Your Website',
    'howToJoin.ctaReflection': 'Do Your Reflection',
    'howToJoin.videoNote': 'Gửi link video vào nhóm Zalo AI Teen',

    // Rules
    'rules.heading': 'Quy định',
    'rules.r1': 'Người tham gia là học sinh AI Teen.',
    'rules.r2': 'Mỗi học sinh nộp một bài riêng.',
    'rules.r3': 'Sử dụng Google Antigravity để tạo website.',
    'rules.r4': 'Website phải được deploy trên Cloudflare Pages.',
    'rules.r5': 'Hạn nộp: 23:59 ngày 06/09/2026.',
    'rules.r6': 'Cần có một domain chính và một domain dự phòng.',
    'rules.r7': 'Phải kiểm tra domain trên Cloudflare và nộp bằng chứng.',
    'rules.r8': 'Phải giải thích lý do chọn domain.',
    'rules.r9': 'Website phải có ít nhất 3 phần nội dung và 3 hình ảnh thật.',
    'rules.r10': 'Phải nhờ người xem dùng thử và ghi lại phản hồi.',
    'rules.r11': 'Phải giải thích ít nhất một cải thiện và lý do thực hiện.',
    'rules.r12': 'Phải tạo video 60–90 giây có mặt thật, giọng thật và màn hình website.',
    'rules.r13': 'Phải hoàn thành 4F Reflection trên Simba.',
    'rules.assessmentNote': 'Rubric chi tiết của Website nằm trên trang nộp bài Website/Product của Simba. Rubric chi tiết của 4F Reflection nằm trên trang 4F Reflection của Simba. Con hãy đọc rubric để hiểu thế nào là một bài làm tốt.',

    // Awards
    'awards.heading': 'Giải thưởng',
    'awards.everyoneTitle': 'Phần thưởng cho tất cả',
    'awards.everyoneDesc': 'Mỗi học sinh hoàn thành đủ yêu cầu sẽ nhận được:',
    'awards.everyoneItem1': 'Một domain cá nhân trong 1 năm.',
    'awards.everyoneItem2': 'Ghi nhận hoàn thành My Personal Website Challenge.',
    'awards.topTitle': 'Top 3 — Giải thưởng nổi bật',
    'awards.topDesc': 'Ba học sinh xuất sắc nhận mỗi người một danh hiệu:',
    'awards.award1Title': 'Best Website Experience',
    'awards.award1Desc': 'Cho website tạo giá trị rõ ràng nhất và trải nghiệm phù hợp nhất cho người xem.',
    'awards.award2Title': 'Best Website Story',
    'awards.award2Desc': 'Cho sự kết hợp tốt nhất giữa câu chuyện cá nhân, lý do chọn domain và video giới thiệu.',
    'awards.award3Title': 'Best Reflection',
    'awards.award3Desc': 'Cho 4F Reflection thể hiện rõ ràng nhất những gì học sinh đã học, đã làm và sẽ làm tiếp.',
    'awards.extraTitle': 'Quyền lợi thêm cho Top 3',
    'awards.extra1': 'Thưởng thêm 200.000 VND.',
    'awards.extra2': 'Cơ hội được chọn làm bài mẫu trên Simba.',
    'awards.extra3': 'Được giới thiệu trên website Sư Tử Con.',
    'awards.extra4': 'Được đưa vào tài liệu truyền thông của Nemo12.',
    'awards.ruleNote': 'Mỗi học sinh chỉ nhận tối đa một danh hiệu. Ba danh hiệu dành cho ba học sinh khác nhau.',

    // FAQ
    'faq.heading': 'Câu hỏi thường gặp',
    'faq.cat1': 'Về thử thách',
    'faq.q1_1': 'Em có thể chọn chủ đề khác với bài mẫu không?',
    'faq.a1_1': 'Được. Bài mẫu chỉ là gợi ý. Em hoàn toàn tự do chọn chủ đề, miễn là website giới thiệu thế giới của em cho một người xem cụ thể.',
    'faq.q1_2': 'Website của em có phải giống bài mẫu không?',
    'faq.a1_2': 'Không. Điều quan trọng là em hiểu người xem của mình, giải thích được lựa chọn và có bằng chứng phù hợp. Thiết kế và cách trình bày là của em.',
    'faq.q1_3': 'Thế nào là một website cá nhân?',
    'faq.a1_3': 'Website cá nhân là một trang web giới thiệu về em — sở thích, hoạt động, thành tích, hoặc sản phẩm em tạo ra. Nó giúp người xem hiểu thêm về em.',

    'faq.cat2': 'Về domain',
    'faq.q2_1': 'Kiểm tra domain ở đâu?',
    'faq.a2_1': 'Em vào trang Cloudflare để kiểm tra xem domain mong muốn có còn trống không. Nhớ chụp ảnh bằng chứng kết quả kiểm tra.',
    'faq.q2_2': 'Nếu domain em chọn đã có người dùng thì sao?',
    'faq.a2_2': 'Em hãy chọn domain khác. Đó là lý do em cần chuẩn bị cả domain dự phòng. Hãy kiểm tra cả hai trước khi nộp bài.',
    'faq.q2_3': 'Tại sao cần domain dự phòng?',
    'faq.a2_3': 'Vì domain có thể bị người khác đăng ký bất cứ lúc nào. Domain dự phòng đảm bảo em vẫn có tên miền nếu lựa chọn đầu tiên không còn.',

    'faq.cat3': 'Về video',
    'faq.q3_1': 'Video dài bao lâu?',
    'faq.a3_1': 'Từ 60 đến 90 giây. Không cần dài hơn — hãy tập trung vào nội dung chính.',
    'faq.q3_2': 'Em có phải xuất hiện mặt thật không?',
    'faq.a3_2': 'Có. Video cần có mặt thật và giọng thật của em, cùng với màn hình website. Đây là cách em giới thiệu bản thân và sản phẩm.',
    'faq.q3_3': 'Video có cần chỉnh sửa chuyên nghiệp không?',
    'faq.a3_3': 'Không. Em chỉ cần quay rõ ràng, nói rõ ràng, và cho thấy website. Không cần hiệu ứng hay phần mềm chỉnh sửa phức tạp.',
    'faq.q3_4': 'Nộp video ở đâu?',
    'faq.a3_4': 'Upload video lên Google Drive hoặc YouTube, sau đó gửi link vào nhóm AI Teen trên Zalo.',

    'faq.cat4': 'Về nộp bài và reflection',
    'faq.q4_1': 'Nộp website ở đâu?',
    'faq.a4_1': 'Vào Simba, tìm phần Website/Product và nộp ở đó. Em sẽ cần gửi link website, trả lời câu hỏi product thinking và nộp bằng chứng.',
    'faq.q4_2': 'Nộp 4F Reflection ở đâu?',
    'faq.a4_2': 'Vào Simba, tìm phần 4F Reflection và làm ở đó. Phần này tách biệt với phần nộp website.',
    'faq.q4_3': 'Em có thể lưu bài và làm tiếp sau không?',
    'faq.a4_3': 'Có. Simba cho phép em lưu và quay lại hoàn thành bài sau. Hãy nhớ nộp trước hạn 23:59 ngày 06/09/2026.',
    'faq.q4_4': 'AI score cao có phải là phần quan trọng nhất của 4F Reflection không?',
    'faq.a4_4': 'Không. Điều quan trọng nhất là con hiểu mình đã học được gì, làm được gì và sẽ làm gì tiếp theo. AI score chỉ là gợi ý để con và mentor nhìn lại bài reflection.',

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
    'hero.label': 'AI Teen Challenge',
    'hero.title': 'My Personal Website Challenge',
    'hero.question': 'If you had a corner on the Internet to introduce your world, what would you show?',
    'hero.description': 'Create a personal website using Google Antigravity to introduce your world to a specific viewer.',
    'hero.deadline': 'Deadline: 23:59, 06/09/2026',
    'hero.prize': 'Every student who completes all requirements receives a personal domain for 1 year.',
    'hero.ctaPrimary': 'Make Your Website',
    'hero.ctaSecondary': 'Do Your Reflection',

    // Challenge
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
    'challenge.cta': 'Make Your Website',

    // How to Join
    'howToJoin.heading': 'How to Join',
    'howToJoin.stepsHeading': '5 Steps',
    'howToJoin.step1Title': 'Choose a Viewer',
    'howToJoin.step1': 'Pick a specific person to create for.',
    'howToJoin.step2Title': 'Plan Your Story',
    'howToJoin.step2': 'Think about what that person would want to know about you.',
    'howToJoin.step3Title': 'Build with Antigravity',
    'howToJoin.step3': 'Create your website using Google Antigravity.',
    'howToJoin.step4Title': 'Choose Your Domain',
    'howToJoin.step4': 'Check domain availability on Cloudflare, save evidence and explain your choice.',
    'howToJoin.step5Title': 'Test & Improve',
    'howToJoin.step5': 'Let your viewer try the website, record feedback and upgrade.',
    'howToJoin.submissionsHeading': '3 Submission Components',
    'howToJoin.sub1Title': 'Website/Product',
    'howToJoin.sub1Where': 'Submit on Simba',
    'howToJoin.sub1What': 'Website link, product thinking answers and evidence.',
    'howToJoin.sub2Title': '4F Reflection',
    'howToJoin.sub2Where': 'Submit on Simba',
    'howToJoin.sub2What': 'Facts, Feelings, Findings and Future.',
    'howToJoin.sub3Title': 'Introduction Video',
    'howToJoin.sub3Where': 'Send via Zalo',
    'howToJoin.sub3What': 'Upload video to Google Drive or YouTube, send the link in the AI Teen Zalo group.',
    'howToJoin.ctaWebsite': 'Make Your Website',
    'howToJoin.ctaReflection': 'Do Your Reflection',
    'howToJoin.videoNote': 'Send video link in the AI Teen Zalo group',

    // Rules
    'rules.heading': 'Rules',
    'rules.r1': 'Participants are AI Teen students.',
    'rules.r2': 'Each student submits an individual project.',
    'rules.r3': 'Use Google Antigravity to build the website.',
    'rules.r4': 'Website must be deployed on Cloudflare Pages.',
    'rules.r5': 'Deadline: 23:59 on 06/09/2026.',
    'rules.r6': 'You need one primary domain and one backup domain.',
    'rules.r7': 'Check domain availability on Cloudflare and submit evidence.',
    'rules.r8': 'Explain why you chose your domain.',
    'rules.r9': 'Website must include at least 3 content sections and 3 real images.',
    'rules.r10': 'Ask a viewer to try your website and record their feedback.',
    'rules.r11': 'Explain at least one improvement and why you made it.',
    'rules.r12': 'Create a 60–90 second video with your real face, real voice and website screen.',
    'rules.r13': 'Complete the 4F Reflection on Simba.',
    'rules.assessmentNote': 'The detailed Website rubric is on the Website/Product submission page on Simba. The 4F Reflection rubric is on the 4F Reflection page on Simba. Read the rubrics to understand what makes a good submission.',

    // Awards
    'awards.heading': 'Awards',
    'awards.everyoneTitle': 'Everyone Can Earn',
    'awards.everyoneDesc': 'Every student who completes all requirements receives:',
    'awards.everyoneItem1': 'One personal domain for 1 year.',
    'awards.everyoneItem2': 'Recognition for completing My Personal Website Challenge.',
    'awards.topTitle': 'Top 3 Featured Awards',
    'awards.topDesc': 'Three different students each receive one title:',
    'awards.award1Title': 'Best Website Experience',
    'awards.award1Desc': 'For the website that creates the clearest value and most suitable experience for its audience.',
    'awards.award2Title': 'Best Website Story',
    'awards.award2Desc': 'For the strongest combination of personal story, domain rationale and introduction video.',
    'awards.award3Title': 'Best Reflection',
    'awards.award3Desc': 'For the 4F Reflection that most clearly shows what the student learned, did and will do next.',
    'awards.extraTitle': 'Extra Benefits for Top 3',
    'awards.extra1': 'An additional 200,000 VND prize.',
    'awards.extra2': 'Opportunity to be selected as a model submission on Simba.',
    'awards.extra3': 'Featured placement on the Sư Tử Con website.',
    'awards.extra4': 'Inclusion in suitable Nemo12 communication materials.',
    'awards.ruleNote': 'Each student can receive a maximum of one featured title. The three titles go to three different students.',

    // FAQ
    'faq.heading': 'Frequently Asked Questions',
    'faq.cat1': 'The Challenge',
    'faq.q1_1': 'Can I choose a different topic from the examples?',
    'faq.a1_1': 'Yes. The examples are just suggestions. You are free to choose any topic, as long as your website introduces your world to a specific viewer.',
    'faq.q1_2': 'Does my website have to look like the sample?',
    'faq.a1_2': 'No. What matters is that you understand your viewer, explain your choices and provide suitable evidence. The design is entirely up to you.',
    'faq.q1_3': 'What counts as a personal website?',
    'faq.a1_3': 'A personal website is a site that introduces you — your interests, activities, achievements or products you have created. It helps the viewer learn more about you.',

    'faq.cat2': 'Domain',
    'faq.q2_1': 'Where do I check whether a domain is available?',
    'faq.a2_1': 'Go to Cloudflare to check if your desired domain is still available. Remember to take a screenshot as evidence.',
    'faq.q2_2': 'What should I do if my first domain is no longer available?',
    'faq.a2_2': 'Choose a different domain. That is why you need a backup domain. Check both before submitting.',
    'faq.q2_3': 'Why do I need a backup domain?',
    'faq.a2_3': 'Because domains can be registered by others at any time. A backup domain ensures you still have a domain name if your first choice is taken.',

    'faq.cat3': 'Video',
    'faq.q3_1': 'How long should the video be?',
    'faq.a3_1': 'Between 60 and 90 seconds. No need to go longer — focus on the key content.',
    'faq.q3_2': 'Do I need to show my face?',
    'faq.a3_2': 'Yes. The video needs your real face, real voice and your website on screen. This is how you introduce yourself and your product.',
    'faq.q3_3': 'Does the video need advanced editing?',
    'faq.a3_3': 'No. Just record clearly, speak clearly and show your website. No special effects or complex editing software needed.',
    'faq.q3_4': 'Where do I submit the video?',
    'faq.a3_4': 'Upload your video to Google Drive or YouTube, then send the link in the AI Teen Zalo group.',

    'faq.cat4': 'Submission & Reflection',
    'faq.q4_1': 'Where do I submit the website?',
    'faq.a4_1': 'Go to Simba and find the Website/Product section. You will need to submit your website link, answer product thinking questions and provide evidence.',
    'faq.q4_2': 'Where do I submit 4F Reflection?',
    'faq.a4_2': 'Go to Simba and find the 4F Reflection section. This is separate from the website submission.',
    'faq.q4_3': 'Can I save my work and finish later?',
    'faq.a4_3': 'Yes. Simba allows you to save and return to complete your submission later. Remember to submit before the deadline: 23:59 on 06/09/2026.',
    'faq.q4_4': 'Is a high AI score the most important part of 4F Reflection?',
    'faq.a4_4': 'No. What matters most is that you understand what you learned, what you did and what you will do next. The AI score is just a suggestion for you and your mentor to review your reflection.',

    // Footer
    'footer.message': 'This is not just a website-building competition. It is your chance to create a real corner of the Internet that truly represents you, and to reflect on what you learned along the way.',
    'footer.brand': '© 2026 Sư Tử Con · Nemo12',
  },
};

let currentLang = localStorage.getItem('challenge-lang') || 'vi';

/**
 * Get a translation string by key.
 */
export function t(key) {
  return translations[currentLang]?.[key] || translations['vi']?.[key] || key;
}

/**
 * Get current language code.
 */
export function getLang() {
  return currentLang;
}

/**
 * Set language and update all [data-i18n] elements on the page.
 */
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

  // Dispatch custom event for components that need special re-render
  window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}
