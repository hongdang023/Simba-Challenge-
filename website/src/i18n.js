/**
 * Lightweight i18n system for VI / EN bilingual support.
 * Ultra-clean, concise copy, 2D vector style.
 */

const translations = {
  vi: {
    // Navbar
    'nav.overview': 'Tổng quan',
    'nav.suggestions': 'Gợi ý làm bài',
    'nav.rubrics': 'Tiêu chuẩn đánh giá',
    'nav.faq': 'Câu hỏi thường gặp',

    // Hero
    'hero.badge': 'AI Teen Challenge',
    'hero.title': 'My Personal Website Challenge',
    'hero.question': 'Nếu có một góc trên Internet để giới thiệu thế giới của mình, em muốn cho người đó xem gì?',
    'hero.deadline': 'Hạn nộp: 23:59, 06/09/2026',
    'hero.ctaPrimary': 'Khám phá thử thách',

    // Challenge
    'challenge.badge': 'Website Cá Nhân',
    'challenge.heading': 'Em sẽ tạo sản phẩm gì?',

    // Suggestions Page Header & Tabs
    'suggestionsPage.heading': 'Gợi ý làm bài',
    'suggestionsPage.subheading': 'Khung sườn và hướng dẫn chi tiết giúp con hoàn thiện xuất sắc Website, Video giới thiệu và bài viết 4F Reflection.',
    'suggestionsPage.tabWebsite': '1. Gợi ý Website',
    'suggestionsPage.tabVideo': '2. Gợi ý cho Video',
    'suggestionsPage.tabReflection': '3. Gợi ý 4F Reflection',

    // Suggestions - 1. Website
    'suggestions.heading': 'Gợi ý Website',
    'challenge.intro': 'Tạo Website cá nhân giúp một người xem cụ thể hiểu về:',
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

    // Suggestions - 2. Video
    'videoSuggestions.heading': 'Gợi ý cho Video',
    'videoSuggestions.subheading': 'Con có thể tham khảo cấu trúc gợi ý dưới đây khi quay video giới thiệu:',
    'videoSuggestions.step1Title': '1. Giới thiệu',
    'videoSuggestions.step1Quote': '“Xin chào, mình là…”',
    'videoSuggestions.step2Title': '2. Website',
    'videoSuggestions.step2Quote': '“Đây là website cá nhân của mình, tên là…”',
    'videoSuggestions.step3Title': '3. Người xem mục tiêu',
    'videoSuggestions.step3Quote': '“Mình tạo website này cho…”',
    'videoSuggestions.step4Title': '4. Nội dung & Giá trị',
    'videoSuggestions.step4Quote': '“Trên website, bạn có thể tìm thấy…”',
    'videoSuggestions.step5Title': '5. Domain',
    'videoSuggestions.step5Quote': '“Mình chọn domain này vì…”',
    'videoSuggestions.step6Title': '6. Điểm cải tiến',
    'videoSuggestions.step6Quote': '“Phần mình thích nhất hoặc đã cải tiến nhiều nhất là…”',
    'videoSuggestions.step7Title': '7. Đúc kết & Tương lai',
    'videoSuggestions.step7Quote': '“Sau bài này, mình học được… Tiếp theo, mình muốn…”',
    'videoSuggestions.step8Title': '8. Lời kết',
    'videoSuggestions.step8Quote': '“Mời mọi người ghé thăm website của mình…”',
    'videoSuggestions.note': 'Con không cần phải nói từng câu rập khuôn từng chữ theo mẫu. Cấu trúc này là khung sườn gợi ý giúp con tự tin nói lưu loát, không phải là kịch bản bắt buộc phải học thuộc lòng.',

    // Suggestions - 3. 4F Reflection
    'reflectionSuggestions.heading': 'Gợi ý viết 4F Reflection',
    'reflectionSuggestions.subheading': 'Khung câu hỏi gợi ý giúp con hoàn thành 4 phần Facts - Feelings - Findings - Future:',
    'reflectionSuggestions.factsTitle': 'Facts (Sự thật & Quá trình)',
    'reflectionSuggestions.facts1': 'Con đã làm những phần nào của website?',
    'reflectionSuggestions.facts2': 'Con đã gặp vấn đề hoặc sự kiện đáng nhớ nào?',
    'reflectionSuggestions.facts3': 'Con đã nhận được feedback gì từ người xem?',
    
    'reflectionSuggestions.feelingsTitle': 'Feelings (Cảm xúc)',
    'reflectionSuggestions.feelings1': 'Con cảm thấy thế nào khi bắt đầu và hoàn thành website?',
    'reflectionSuggestions.feelings2': 'Phần nào khiến con vui, khó hoặc bất ngờ nhất?',
    'reflectionSuggestions.feelings3': 'Cảm xúc của con thay đổi thế nào sau khi nhận feedback?',

    'reflectionSuggestions.findingsTitle': 'Findings (Bài học rút ra)',
    'reflectionSuggestions.findings1': 'Con đã học được gì về cách xây website?',
    'reflectionSuggestions.findings2': 'Con hiểu thêm gì về người xem và nhu cầu của họ?',
    'reflectionSuggestions.findings3': 'Điều gì trong website đã thay đổi sau quá trình thử nghiệm?',

    'reflectionSuggestions.futureTitle': 'Future (Tương lai & Ứng dụng)',
    'reflectionSuggestions.future1': 'Nếu có thêm thời gian, con muốn cải thiện điều gì?',
    'reflectionSuggestions.future2': 'Con sẽ làm gì để website hữu ích hơn với người xem?',
    'reflectionSuggestions.future3': 'Con muốn áp dụng bài học này vào sản phẩm nào tiếp theo?',

    'reflectionSuggestions.note': 'Hãy viết bằng lời của mình. Không cần viết thật “hay” hay cố đạt điểm AI cao; điều quan trọng là con hiểu mình đã học được gì và sẽ làm gì tiếp theo.',

    // How to Join
    'howToJoin.heading': 'Cách tham gia',
    'howToJoin.subheading': 'Các bước làm bài trên Simba thì con đã quá quen thuộc rồi! Điểm mới mẻ duy nhất là chiếc video ngắn 60–90s để con tự tin giới thiệu sản phẩm của mình thôi!',
    'howToJoin.sub1Title': '1. Website cá nhân',
    'howToJoin.sub1Where': 'Nộp trên Simba (như mọi tuần)',
    'howToJoin.sub1What': 'Nộp link website, câu trả lời product thinking và bằng chứng kết quả.',
    'howToJoin.sub2Title': '2. 4F Reflection',
    'howToJoin.sub2Where': 'Nộp trên Simba (như mọi tuần)',
    'howToJoin.sub2What': 'Ghi lại Facts, Feelings, Findings và Future sau khi hoàn thành.',
    'howToJoin.sub3Title': '3. Video Giới Thiệu',
    'howToJoin.sub3Where': 'Gửi vào nhóm Zalo AI Teen',
    'howToJoin.sub3What': 'Video 60–90s có mặt thật, giọng thật và màn hình website của con. Upload lên Google Drive/YouTube rồi gửi link vào Zalo.',
    'howToJoin.ctaWebsite': 'Nộp trên Simba',
    'howToJoin.ctaReflection': 'Nộp trên Simba',
    'howToJoin.videoNote': 'Nộp trên Group Zalo AI Teen',

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
    'rules.card2_4': 'Nộp sản phẩm ở mục Products trên hệ thống Simba.',
    'rules.card3Title': '3. Domain',
    'rules.card3_1': 'Chuẩn bị 1 domain chính + 1 domain dự phòng (đuôi .com). Kiểm tra trước trên Cloudflare để đảm bảo domain còn trống (available).',
    'rules.card3_2': 'Giải thích ngắn gọn lý do con chọn tên miền đó trong bài nộp trên hệ thống Simba.',
    'rules.card3_3': 'Sau khi bài làm đạt chất lượng và được mentor duyệt ở Checkpoint 2 (ngày 4/9), con tự tiến hành đăng ký mua trên Cloudflare để sở hữu chính chủ (BTC sẽ chuyển khoản hoàn lại chi phí mua domain).',
    'rules.card4Title': '4. Video & Reflection',
    'rules.card4_1': 'Video 60–90s có mặt thật, giọng thật và quay màn hình website.',
    'rules.card4_2': 'Hoàn thành bài viết 4F Reflection trên hệ thống Simba.',
    'rules.assessmentNote': 'Xem trang Tiêu chuẩn đánh giá để tự tin đạt điểm xuất sắc con nhé!',

    // Timeline
    'timeline.heading': 'Lịch trình cuộc thi',
    'timeline.subheading': 'Các mốc thời gian quan trọng từ khi nhận đề, gửi bản nháp, nhận feedback đến khi chốt bài chính thức:',
    'timeline.thTime': 'Thời gian',
    'timeline.thActivity': 'Hoạt động',
    'timeline.thChannel': 'Kênh nộp',
    'timeline.thPurpose': 'Mục đích và quy định',
    'timeline.noteTitle': 'Lưu ý quan trọng',
    'timeline.note1': 'Checkpoint 1 và Checkpoint 2 là các mốc nhận feedback trong quá trình làm bài. Mentor duyệt Checkpoint 2 chỉ có nghĩa là học sinh đủ điều kiện mua domain, không phải kết quả chấm chính thức.',
    'timeline.note2': 'Checkpoint 3 là mốc nộp video để mentor góp ý nâng cấp. Học sinh vẫn được chỉnh sửa Website, 4F Reflection và Video trước hạn chốt bài cuối.',
    'timeline.note3': 'Bản cuối cùng gồm đầy đủ Website, 4F Reflection và Video được nộp đúng hạn ngày 06/09/2026 sẽ là phiên bản duy nhất được dùng để chấm và lựa chọn ra Top 3.',

    // Awards
    'awards.heading': 'Giải thưởng',
    'awards.sec1Title': 'Dành cho tất cả học sinh tham gia',
    'awards.item1Title': 'Domain cá nhân 1 năm (trị giá $10.46 = 270.000 VNĐ)',
    'awards.item1Desc': 'Domain cá nhân đuôi .com như anhdac.com, thongphan.com (như các mentor).',
    'awards.item2Title': 'Chứng nhận hoàn thành Challenge',
    'awards.item2Desc': 'Chứng nhận chính thức từ Sư Tử Con.',
    
    'awards.sec2Title': 'Top 3 Vinh danh xuất sắc',
    'awards.topSubtitle': 'Mỗi học sinh lọt Top 3 sẽ nhận thêm 3 quyền lợi lớn:',
    'awards.perk1Amount': '200.000 VNĐ',
    'awards.perk1Title': 'Tiền thưởng',
    'awards.perk2Title': 'Bài mẫu chuẩn trên Simba',
    'awards.perk3Title': 'Featured trên website Sư Tử Con & Nemo12',

    'awards.award1Tag': 'Trải Nghiệm Tốt Nhất',
    'awards.award1Title': 'Best Website Experience',
    'awards.award1Desc': 'Trải nghiệm mượt mà, hữu ích nhất cho người xem mục tiêu.',
    
    'awards.award2Tag': 'Câu Chuyện Hay Nhất',
    'awards.award2Title': 'Best Website Story',
    'awards.award2Desc': 'Câu chuyện cá nhân và lý do chọn domain ấn tượng nhất.',
    
    'awards.award3Tag': 'Đúc Kết Sâu Sắc Nhất',
    'awards.award3Title': 'Best Reflection',
    'awards.award3Desc': 'Bài phản tư 4F sâu sắc và hành động tương lai rõ ràng nhất.',
    
    'awards.certBadge': 'Kèm Chứng nhận Top 3',
    'awards.mentorTitle': 'THAM KHẢO DOMAIN CỦA CÁC MENTOR',

    // Rubrics
    'rubrics.heading': 'Tiêu chuẩn đánh giá',

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
    'faq.a2_1': 'Em vào Cloudflare để tra cứu xem domain mong muốn còn trống không, sau đó chụp lại ảnh màn hình bằng chứng.',
    'faq.q2_2': 'Nếu domain em chọn đã có người mua rồi thì sao?',
    'faq.a2_2': 'Đó là lý do em cần chuẩn bị thêm 1 domain dự phòng. Em hãy kiểm tra cả 2 trước khi nộp nhé.',
    'faq.q2_3': 'Domain được tặng có giống của các thầy cô không?',
    'faq.a2_3': 'Đúng rồi! Domain riêng có đuôi .com, .me, .dev... chính chủ mang tên em, hoạt động hoàn toàn như website của các Mentor.',

    'faq.cat3': 'Về video',
    'faq.q3_1': 'Video dài bao lâu?',
    'faq.a3_1': 'Chỉ cần từ 60 đến 90 giây. Rất ngắn gọn, em chỉ cần khoe website và nói đôi lời tự tin.',
    'faq.q3_2': 'Em có phải xuất hiện mặt thật không?',
    'faq.a3_2': 'Có. Video cần có khuôn mặt thật và giọng nói tự tin của em cùng màn hình website đang chạy.',
    'faq.q3_3': 'Video có cần chỉnh sửa hiệu ứng phức tạp không?',
    'faq.a3_3': 'Không cần! Em chỉ cần quay rõ ràng bằng điện thoại/máy tính là được rồi.',
    'faq.q3_4': 'Nộp video ở đâu?',
    'faq.a3_4': 'Upload video lên Google Drive hoặc YouTube, sau đó gửi link vào nhóm AI Teen trên Zalo.',

    'faq.cat4': 'Về nộp bài trên Simba',
    'faq.q4_1': 'Nộp website và 4F Reflection ở đâu?',
    'faq.a4_1': 'Vào trang web Simba quen thuộc, tìm phần Website/Product và 4F Reflection để nộp bài.',
    'faq.q4_2': 'Em có thể lưu bài và làm tiếp sau không?',
    'faq.a4_2': 'Hoàn toàn được! Simba cho phép em lưu nháp và quay lại hoàn thiện trước 23:59 ngày 06/09/2026.',
    'faq.q4_3': 'Điểm AI có phải là mục tiêu lớn nhất của 4F Reflection không?',
    'faq.a4_3': 'Không. Điều quan trọng nhất là con hiểu mình đã học được gì, làm được gì và tiến bộ thế nào. Điểm AI chỉ là gợi ý tham khảo.',

    // Footer
    'footer.message': 'Đây không chỉ là một cuộc thi làm website. Đây là cơ hội để con tạo ra một góc Internet thật sự thể hiện mình, rồi nhìn lại xem mình đã học được gì trong quá trình đó.',
    'footer.brand': '© 2026 Sư Tử Con · Nemo12',
  },

  en: {
    // Navbar
    'nav.overview': 'Overview',
    'nav.suggestions': 'Suggestions',
    'nav.rubrics': 'Assessment Rubrics',
    'nav.faq': 'FAQ',

    // Hero
    'hero.badge': 'AI Teen Challenge',
    'hero.title': 'My Personal Website Challenge',
    'hero.question': 'If you had a corner on the Internet to introduce your world, what would you show?',
    'hero.deadline': 'Deadline: 23:59, 06/09/2026',
    'hero.ctaPrimary': 'Explore Challenge',

    // Challenge
    'challenge.badge': 'Personal Website',
    'challenge.heading': 'What will you create?',

    // Suggestions Page Header & Tabs
    'suggestionsPage.heading': 'Project Suggestions & Guides',
    'suggestionsPage.subheading': 'Helpful frameworks and suggestions to help you excel in your Website, Video, and 4F Reflection.',
    'suggestionsPage.tabWebsite': '1. Website Suggestions',
    'suggestionsPage.tabVideo': '2. Video Structure',
    'suggestionsPage.tabReflection': '3. 4F Reflection Guide',

    // Suggestions - 1. Website
    'suggestions.heading': 'Website Ideas & Suggestions',
    'challenge.intro': 'Create a Personal Website helping a specific viewer understand:',
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

    // Suggestions - 2. Video
    'videoSuggestions.heading': 'Suggested Video Structure',
    'videoSuggestions.subheading': 'Students may follow this suggested structure when recording the video:',
    'videoSuggestions.step1Title': '1. Introduction',
    'videoSuggestions.step1Quote': '“Hello, my name is…”',
    'videoSuggestions.step2Title': '2. Website',
    'videoSuggestions.step2Quote': '“This is my personal website, named…”',
    'videoSuggestions.step3Title': '3. Audience',
    'videoSuggestions.step3Quote': '“I created this website for…”',
    'videoSuggestions.step4Title': '4. Content & Value',
    'videoSuggestions.step4Quote': '“On the website, you can find…”',
    'videoSuggestions.step5Title': '5. Domain',
    'videoSuggestions.step5Quote': '“I chose this domain because…”',
    'videoSuggestions.step6Title': '6. Improvement',
    'videoSuggestions.step6Quote': '“The part I like best or improved the most is…”',
    'videoSuggestions.step7Title': '7. Findings & Future',
    'videoSuggestions.step7Quote': '“From this project, I learned that… Next, I want to…”',
    'videoSuggestions.step8Title': '8. Closing',
    'videoSuggestions.step8Quote': '“I invite everyone to visit my website…”',
    'videoSuggestions.note': 'Students do not need to say every sentence exactly as written. The structure is a guide, not a script that must be memorized.',

    // Suggestions - 3. 4F Reflection
    'reflectionSuggestions.heading': '4F Reflection Writing Guide',
    'reflectionSuggestions.subheading': 'Guiding prompts for Facts - Feelings - Findings - Future:',
    'reflectionSuggestions.factsTitle': 'Facts (Process & Reality)',
    'reflectionSuggestions.facts1': 'Which parts of the website did you create?',
    'reflectionSuggestions.facts2': 'What challenges or memorable moments did you encounter?',
    'reflectionSuggestions.facts3': 'What feedback did you receive from viewers?',
    
    'reflectionSuggestions.feelingsTitle': 'Feelings (Emotions & Experiences)',
    'reflectionSuggestions.feelings1': 'How did you feel when starting and finishing the website?',
    'reflectionSuggestions.feelings2': 'Which part made you happiest, most challenged, or most surprised?',
    'reflectionSuggestions.feelings3': 'How did your feelings evolve after receiving feedback?',

    'reflectionSuggestions.findingsTitle': 'Findings (Lessons Learned)',
    'reflectionSuggestions.findings1': 'What did you learn about building a website?',
    'reflectionSuggestions.findings2': 'What more did you understand about your audience and their needs?',
    'reflectionSuggestions.findings3': 'What on your website changed after testing with users?',

    'reflectionSuggestions.futureTitle': 'Future (Next Steps & Applications)',
    'reflectionSuggestions.future1': 'If you had more time, what would you improve?',
    'reflectionSuggestions.future2': 'How will you make the website even more valuable for viewers?',
    'reflectionSuggestions.future3': 'Which future project do you want to apply these lessons to?',

    'reflectionSuggestions.note': 'Write in your own words. You don’t need fancy wording or try to chase high AI scores; what matters is truly understanding what you learned and what you will do next.',

    // How to Join
    'howToJoin.heading': 'How to Join',
    'howToJoin.subheading': 'You already know how to submit work on Simba! The only new exciting thing is a 60–90s short video to show off your website!',
    'howToJoin.sub1Title': '1. Personal Website',
    'howToJoin.sub1Where': 'Submit on Simba (as usual)',
    'howToJoin.sub1What': 'Submit website link, product thinking answers and evidence.',
    'howToJoin.sub2Title': '2. 4F Reflection',
    'howToJoin.sub2Where': 'Submit on Simba (as usual)',
    'howToJoin.sub2What': 'Reflect on Facts, Feelings, Findings and Future upon completion.',
    'howToJoin.sub3Title': '3. Introduction Video',
    'howToJoin.sub3Where': 'Send to AI Teen Zalo Group',
    'howToJoin.sub3What': '60–90s video showing your face, real voice and website screen. Upload to Google Drive/YouTube and send link in Zalo.',
    'howToJoin.ctaWebsite': 'Submit on Simba',
    'howToJoin.ctaReflection': 'Submit on Simba',
    'howToJoin.videoNote': 'Submit to AI Teen Zalo Group',

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
    'rules.card2_4': 'Submit product in the Products section on the Simba platform.',
    'rules.card3Title': '3. Domain',
    'rules.card3_1': 'Prepare 1 primary domain + 1 backup domain (.com). Check on Cloudflare beforehand to ensure availability.',
    'rules.card3_2': 'Briefly explain why you chose that domain name in your submission on the Simba platform.',
    'rules.card3_3': 'Once your project meets quality standards and is approved by mentors at Checkpoint 2 (04/09), register the domain on Cloudflare for 100% personal ownership (Organizer will reimburse the domain cost).',
    'rules.card4Title': '4. Video & Reflection',
    'rules.card4_1': '60–90s video with your real face, voice and screen recording.',
    'rules.card4_2': 'Complete 4F Reflection on the Simba platform.',
    'rules.assessmentNote': 'Check the Assessment Rubrics page to aim for excellence!',

    // Timeline
    'timeline.heading': 'Competition Timeline',
    'timeline.subheading': 'Important milestones from project kickoff, draft checkpoints, feedback rounds to final submission:',
    'timeline.thTime': 'Time',
    'timeline.thActivity': 'Activity',
    'timeline.thChannel': 'Channel',
    'timeline.thPurpose': 'Purpose & Guidelines',
    'timeline.noteTitle': 'Important Notes',
    'timeline.note1': 'Checkpoint 1 and Checkpoint 2 are feedback milestones during the project. Mentor approval at Checkpoint 2 only means the student is eligible to purchase the domain, not the final evaluation.',
    'timeline.note2': 'Checkpoint 3 is for mentors to provide feedback and upgrade suggestions for the draft video. Students can still refine their Website, 4F Reflection, and Video before the final deadline.',
    'timeline.note3': 'The final version consisting of Website, 4F Reflection, and Video submitted on time by 06/09/2026 will be the only version used for evaluation and selecting the Top 3.',

    // Awards
    'awards.heading': 'Awards & Prizes',
    'awards.sec1Title': 'For All Participants',
    'awards.item1Title': '1-Year Custom Domain (Value $10.46 = 270,000 VND)',
    'awards.item1Desc': 'Personal .com domain like anhdac.com, thongphan.com (just like mentors).',
    'awards.item2Title': 'Completion Certificate',
    'awards.item2Desc': 'Official Certificate from Sư Tử Con.',
    
    'awards.sec2Title': 'Top 3 Outstanding Honors',
    'awards.topSubtitle': 'Each student reaching Top 3 will receive 3 major rewards:',
    'awards.perk1Amount': '200,000 VND',
    'awards.perk1Title': 'Cash prize',
    'awards.perk2Title': 'Featured model project on Simba',
    'awards.perk3Title': 'Featured on website & Nemo12 media',

    'awards.award1Tag': 'Best Experience',
    'awards.award1Title': 'Best Website Experience',
    'awards.award1Desc': 'Smoothest, most helpful viewer experience.',
    
    'awards.award2Tag': 'Best Storytelling',
    'awards.award2Title': 'Best Website Story',
    'awards.award2Desc': 'Most engaging personal story and domain rationale.',
    
    'awards.award3Tag': 'Best Reflection',
    'awards.award3Title': 'Best Reflection',
    'awards.award3Desc': 'Deepest reflection with actionable next steps.',
    
    'awards.certBadge': 'Includes Top 3 Certificate',
    'awards.mentorTitle': 'EXPLORE MENTORS\' DOMAINS',

    // Rubrics
    'rubrics.heading': 'Assessment Rubrics',

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
