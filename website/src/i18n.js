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
    'suggestionsPage.tabWebsite': '1. Website',
    'suggestionsPage.tabReflection': '2. 4F Reflection',
    'suggestionsPage.tabVideo': '3. Video',

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
    'challenge.note': 'Website không cần giống bài mẫu. Điều quan trọng là em hiểu người xem, giải thích được lựa chọn của mình và có bằng chứng phù hợp.',
    'challenge.cta': 'Làm Website trên Simba',

    // Suggestions - 2. Video
    'videoSuggestions.heading': 'Gợi ý cho Video',
    'videoSuggestions.subheading': 'Em có thể tham khảo cấu trúc gợi ý dưới đây khi quay video giới thiệu:',
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
    'videoSuggestions.note': 'Em không cần phải nói từng câu rập khuôn từng chữ theo mẫu. Cấu trúc này là khung sườn gợi ý giúp em tự tin nói lưu loát, không phải là kịch bản bắt buộc phải học thuộc lòng.',

    // Suggestions - 3. 4F Reflection
    'reflectionSuggestions.heading': 'Gợi ý viết 4F Reflection',
    'reflectionSuggestions.subheading': 'Khung câu hỏi gợi ý giúp em hoàn thành 4 phần Facts - Feelings - Findings - Future:',
    'reflectionSuggestions.factsTitle': 'Facts (Sự thật & Quá trình)',
    'reflectionSuggestions.facts1': 'Em đã làm những phần nào của website?',
    'reflectionSuggestions.facts2': 'Em đã gặp vấn đề hoặc sự kiện đáng nhớ nào?',
    'reflectionSuggestions.facts3': 'Em đã nhận được feedback gì từ người xem?',
    
    'reflectionSuggestions.feelingsTitle': 'Feelings (Cảm xúc)',
    'reflectionSuggestions.feelings1': 'Em cảm thấy thế nào khi bắt đầu và hoàn thành website?',
    'reflectionSuggestions.feelings2': 'Phần nào khiến em vui, khó hoặc bất ngờ nhất?',
    'reflectionSuggestions.feelings3': 'Cảm xúc của em thay đổi thế nào sau khi nhận feedback?',

    'reflectionSuggestions.findingsTitle': 'Findings (Bài học rút ra)',
    'reflectionSuggestions.findings1': 'Em đã học được gì về cách xây website?',
    'reflectionSuggestions.findings2': 'Em hiểu thêm gì về người xem và nhu cầu của họ?',
    'reflectionSuggestions.findings3': 'Điều gì trong website đã thay đổi sau quá trình thử nghiệm?',

    'reflectionSuggestions.futureTitle': 'Future (Tương lai & Ứng dụng)',
    'reflectionSuggestions.future1': 'Nếu có thêm thời gian, em muốn cải thiện điều gì?',
    'reflectionSuggestions.future2': 'Em sẽ làm gì để website hữu ích hơn với người xem?',
    'reflectionSuggestions.future3': 'Em muốn áp dụng bài học này vào sản phẩm nào tiếp theo?',

    'reflectionSuggestions.note': 'Hãy viết bằng lời của mình. Không cần viết thật “hay” hay cố đạt điểm AI cao; điều quan trọng là em hiểu mình đã học được gì và sẽ làm gì tiếp theo.',

    // How to Join
    'howToJoin.heading': 'Cách tham gia',
    'howToJoin.subheading': 'Các bước làm bài trên Simba thì em đã quá quen thuộc rồi! Điểm mới mẻ duy nhất là chiếc video ngắn 60–90s để em tự tin giới thiệu sản phẩm của mình thôi!',
    'howToJoin.sub1Title': '1. Website cá nhân',
    'howToJoin.sub1Where': 'Nộp trên Simba (như mọi tuần)',
    'howToJoin.sub1What': 'Nộp link website, câu trả lời product thinking và bằng chứng kết quả.',
    'howToJoin.sub2Title': '2. 4F Reflection',
    'howToJoin.sub2Where': 'Nộp trên Simba (như mọi tuần)',
    'howToJoin.sub2What': 'Ghi lại Facts, Feelings, Findings và Future sau khi hoàn thành.',
    'howToJoin.sub3Title': '3. Video Giới Thiệu',
    'howToJoin.sub3Where': 'Nộp trên Google Drive',
    'howToJoin.sub3What': 'Đăng video giới thiệu dài 60–90 giây lên Google Drive của cuộc thi để được nhận feedback. Video đặt tên theo cú pháp [Tên học sinh]_[Tên domain].',
    'howToJoin.ctaWebsite': 'Nộp trên Simba',
    'howToJoin.ctaReflection': 'Nộp trên Simba',
    'howToJoin.ctaVideo': 'Nộp trên Google Drive',
    'howToJoin.videoNote': 'Nộp trên Google Drive',

    // Rules
    'rules.heading': 'Quy định bài làm',
    'rules.subheading': 'Chỉ 4 tiêu chuẩn đơn giản, trong tầm tay em làm được tuốt!',
    'rules.card1Title': '1. Bài làm & Thời hạn',
    'rules.card1_1': 'Dành riêng cho học sinh AI Teen (mỗi em làm 1 bài cá nhân).',
    'rules.card1_2': 'Hạn chót nộp bài: 23:59 ngày 06/09/2026.',
    'rules.card2Title': '2. Yêu cầu Website',
    'rules.card2_1': 'Dùng Google Antigravity & deploy lên Cloudflare Pages.',
    'rules.card2_2': 'Có tối thiểu 3 phần nội dung + 3 hình ảnh thật.',
    'rules.card2_3': 'Cho 1 người xem trải nghiệm & có ít nhất 1 cải tiến sau góp ý.',
    'rules.card2_4': 'Nộp sản phẩm ở mục Products trên hệ thống Simba.',
    'rules.card3Title': '3. Domain',
    'rules.card3_1': 'Chuẩn bị 1 domain chính + 1 domain dự phòng (đuôi .com). Kiểm tra trước trên Cloudflare để đảm bảo domain còn trống (available).',
    'rules.card3_2': 'Giải thích ngắn gọn lý do em chọn tên miền đó trong bài nộp trên hệ thống Simba.',
    'rules.card3_3': 'Sau khi bài làm đạt chất lượng và được mentor duyệt ở Checkpoint 2 (ngày 4/9), em tự tiến hành đăng ký mua trên Cloudflare để sở hữu chính chủ (BTC sẽ chuyển khoản hoàn lại chi phí mua domain).',
    'rules.card4Title': '4. Video & Reflection',
    'rules.card4_1': 'Video 60–90s có mặt thật, giọng thật và quay màn hình website.',
    'rules.card4_2': 'Hoàn thành bài viết 4F Reflection trên hệ thống Simba.',
    'rules.assessmentNote': 'Xem trang Tiêu chuẩn đánh giá để tự tin đạt điểm xuất sắc em nhé!',

    // Timeline
    'timeline.heading': 'Lịch trình cuộc thi',
    'timeline.subheading': 'Các mốc thời gian quan trọng từ khi nhận đề, gửi bản nháp, nhận feedback đến khi chốt bài chính thức:',
    'timeline.thTime': 'Thời gian',
    'timeline.thActivity': 'Hoạt động chính',
    'timeline.thStudentAction': 'Học sinh cần làm',
    'timeline.noteTitle': 'Lưu ý quan trọng',
    'timeline.note1': 'Checkpoint 1 và Checkpoint 2 là các mốc nhận một lần feedback tổng hợp trong quá trình làm bài. Mentor duyệt Checkpoint 2 chỉ có nghĩa là học sinh đủ điều kiện mua domain, chưa phải kết quả chấm chính thức.',
    'timeline.note2': 'Checkpoint 3 là mốc nộp video để mentor góp ý nâng cấp. Học sinh vẫn được chỉnh sửa Website, 4F Reflection và Video trước hạn chốt bài.',
    'timeline.note3': 'Bản cuối gồm đầy đủ Website, 4F Reflection và Video phải được nộp trước 23:59 ngày 06/09/2026. Đây là phiên bản duy nhất được dùng để chấm và chọn Top 3.',
    'timeline.note4': 'Sau thời hạn trên, Ban tổ chức không nhận bổ sung, đổi link hoặc chỉnh sửa bài.',
    'timeline.note5': 'Mỗi học sinh chỉ nhận tối đa một danh hiệu Top 3. Top 3 gồm ba học sinh khác nhau. Điểm AI chỉ mang tính tham khảo; mentor là người chấm chính thức theo rubric.',

    // Awards
    'awards.heading': 'Giải thưởng',
    'awards.sec1Title': 'Dành cho tất cả học sinh tham gia',
    'awards.item1Title': 'Domain .com chính chủ 1 năm',
    'awards.item1Desc': 'Được tài trợ $10.46 (270.000 VNĐ) mua tên miền .com như anhdac.com, thongphan.com.',
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
    'awards.mentorTitle': 'THAM KHẢO WEBSITE CỦA CÁC MENTOR',

    // Rubrics
    'rubrics.heading': 'Tiêu chuẩn đánh giá',

    // FAQ
    'faq.heading': 'Câu hỏi thường gặp',
    'faq.cat1': '1. Nộp bài, Deadline & Bản chấm chính thức',
    'faq.q1_1': 'Làm sao để chắc chắn bài làm được ghi nhận nộp đúng hạn?',
    'faq.a1_1': 'Thời điểm hệ thống Simba (với Website & 4F Reflection) và Google Drive (với Video) ghi nhận thành công trước 23:59 ngày 06/09/2026 là căn cứ duy nhất. Sau 23:59, hệ thống không nhận bổ sung, đổi link hoặc chỉnh sửa bài.',
    'faq.q1_2': 'Em có được sửa bài sau các Checkpoint không, và mentor sẽ chấm bản nào?',
    'faq.a1_2': 'Được! Checkpoint 1, 2, 3 là các mốc gửi bản nháp để nhận góp ý nâng cấp. Bản cuối cùng nộp trước 23:59 ngày 06/09/2026 là phiên bản DUY NHẤT được dùng để chấm và lựa chọn Top 3.',
    'faq.q1_3': 'Nếu không kịp nộp bản nháp ở Checkpoint 1 hoặc 2 thì có được nộp bài cuối không?',
    'faq.a1_3': 'Có. Em vẫn được nộp bản cuối đúng hạn 06/09/2026. Tuy nhiên, em sẽ không nhận được feedback nâng cấp từ mentor ở các vòng trước.',
    'faq.q1_4': 'Nếu sau khi nộp mà link website gặp sự cố kỹ thuật thì xử lý thế nào?',
    'faq.a1_4': 'Em nên chụp ảnh màn hình bằng chứng deploy thành công khi nộp bài. Mentor sẽ kiểm tra lại link trong ngày 07/09 và đối chiếu bản deploy ổn định của em.',

    'faq.cat2': '2. Mua Domain & Hoàn tiền',
    'faq.q2_1': 'Điều kiện để được hoàn tiền mua domain cá nhân là gì?',
    'faq.a2_1': 'Em cần đáp ứng 2 điều kiện: (1) Đạt chất lượng và được mentor duyệt ở Checkpoint 2 (ngày 04/09); (2) Tự mua domain chính chủ đuôi .com trên Cloudflare và lưu lại ảnh/hóa đơn thanh toán. BTC sẽ chuyển khoản hoàn lại $10.46 (270.000 VNĐ).',
    'faq.q2_2': 'Nếu domain mong muốn bị người khác mua mất hoặc tăng giá thì sao?',
    'faq.a2_2': 'Đó là lý do em cần chuẩn bị trước 1 domain chính + 1 domain dự phòng (đuôi .com) và kiểm tra trên Cloudflare. Em chỉ tiến hành mua sau khi mentor duyệt để đảm bảo domain khả dụng và đúng mức tài trợ.',
    'faq.q2_3': 'Tài khoản domain thuộc sở hữu của ai và nhận hoàn tiền khi nào?',
    'faq.a2_3': 'Tài khoản Cloudflare và domain thuộc sở hữu chính chủ 100% của học sinh/gia đình. BTC sẽ chuyển khoản hoàn tiền vào ngày 08/09/2026 sau khi em gửi bằng chứng thanh toán.',

    'faq.cat3': '3. Feedback Mentor & Điểm số AI',
    'faq.q3_1': 'Mentor sẽ gửi feedback nâng cấp bài làm qua đâu và theo hình thức nào?',
    'faq.a3_1': 'Mỗi học sinh sẽ nhận một feedback tổng hợp theo cùng một checklist tiêu chuẩn qua Zalo cá nhân, phân rõ các điểm cần sửa và gợi ý nâng cấp sáng tạo.',
    'faq.q3_2': 'Điểm gợi ý từ AI trên Simba có quyết định kết quả cuối cùng không?',
    'faq.a3_2': 'Không. Điểm AI trên Simba chỉ mang tính chất tham khảo tức thì để em tự rà soát. Kết quả chính thức hoàn toàn do Hội đồng Mentor đánh giá dựa trên rubric và sản phẩm thực tế.',

    'faq.cat4': '4. Tiêu chuẩn Top 3 & Giải thưởng',
    'faq.q4_1': 'Top 3 được lựa chọn như thế nào? Một bạn có thể nhận nhiều giải không?',
    'faq.a4_1': 'Top 3 gồm 3 học sinh khác nhau đạt điểm xuất sắc ở 3 nhóm tiêu chí: Trải Nghiệm Tốt Nhất, Câu Chuyện Hay Nhất, và Đúc Kết Sâu Sắc Nhất. Mỗi học sinh chỉ nhận tối đa 1 danh hiệu Top 3.',
    'faq.q4_2': 'Phần thưởng 200.000 VNĐ và tiền domain được trao thế nào?',
    'faq.a4_2': 'Vào ngày 08/09/2026, tất cả học sinh hoàn thành đạt yêu cầu sẽ được hoàn tiền domain 270.000 VNĐ ($10.46). Riêng 3 bạn Top 3 sẽ được trao thêm giải thưởng 200.000 VNĐ tiền mặt chuyển khoản.',

    'faq.cat5': '5. Bản quyền, Quyền riêng tư & Vai trò Phụ huynh',
    'faq.q5_1': 'Video giới thiệu 60–90s cần đáp ứng những tiêu chuẩn gì?',
    'faq.a5_1': 'Video cần có mặt thật, giọng nói thật của em và quay màn hình website. Video đăng tải lên Google Drive của cuộc thi và đặt tên theo cú pháp: [Tên học sinh]_[Tên domain].',
    'faq.q5_2': 'Hình ảnh và nội dung sử dụng trên website cần tuân thủ quy định gì?',
    'faq.a5_2': 'Khuyến khích dùng hình ảnh cá nhân, gia đình hoặc sản phẩm tự làm. Nếu dùng hình ảnh hoặc nhạc từ Internet, em cần ghi rõ nguồn và tuyệt đối không sử dụng nội dung nhạy cảm.',
    'faq.q5_3': 'Thông tin và hình ảnh của em có được bảo vệ quyền riêng tư không?',
    'faq.a5_3': 'Có. BTC cam kết bảo mật thông tin. Mọi sản phẩm xuất sắc được chọn làm bài mẫu truyền thông đều có sự trao đổi và đồng thuận trước từ phụ huynh.',
    'faq.q5_4': 'Ba mẹ có thể hỗ trợ em những phần việc nào trong suốt cuộc thi?',
    'faq.a5_4': 'Ba mẹ đóng vai trò là "khán giả đầu tiên" trải nghiệm website và hỗ trợ kỹ thuật thanh toán khi mua domain. Toàn bộ nội dung website, reflection và video thuyết trình phải do chính học sinh tự thực hiện.',

    // Footer
    'footer.message': 'Đây không chỉ là một cuộc thi làm website. Đây là cơ hội để em tạo ra một góc Internet thật sự thể hiện mình, rồi nhìn lại xem mình đã học được gì trong quá trình đó.',
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
    'suggestionsPage.heading': 'Suggestions',
    'suggestionsPage.tabWebsite': '1. Website',
    'suggestionsPage.tabReflection': '2. 4F Reflection',
    'suggestionsPage.tabVideo': '3. Video',

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
    'howToJoin.sub3Where': 'Submit on Google Drive',
    'howToJoin.sub3What': 'Upload a 60–90s introduction video to the competition Google Drive to receive feedback. Name the video format: [Student Name]_[Domain Name].',
    'howToJoin.ctaWebsite': 'Submit on Simba',
    'howToJoin.ctaReflection': 'Submit on Simba',
    'howToJoin.ctaVideo': 'Submit on Google Drive',
    'howToJoin.videoNote': 'Submit on Google Drive',

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
    'timeline.thActivity': 'Main Activity',
    'timeline.thStudentAction': 'What Students Need To Do',
    'timeline.noteTitle': 'Important Notes',
    'timeline.note1': 'Checkpoint 1 and Checkpoint 2 are milestones to receive a one-time consolidated feedback during the project. Mentor approval at Checkpoint 2 only means the student is eligible to purchase the domain, not the final evaluation.',
    'timeline.note2': 'Checkpoint 3 is for mentors to provide feedback and upgrade suggestions for the draft video. Students can still refine their Website, 4F Reflection, and Video before the final deadline.',
    'timeline.note3': 'The final submission consisting of Website, 4F Reflection, and Video must be submitted before 23:59 on 06/09/2026. This will be the only version used for evaluation and selecting the Top 3.',
    'timeline.note4': 'After the deadline, the Organizing Committee will not accept additions, link changes, or edits.',
    'timeline.note5': 'Each student can receive at most one Top 3 award. The Top 3 consists of three distinct students. AI scores are for reference only; mentors are the official evaluators based on the rubric.',

    // Awards
    'awards.heading': 'Awards & Prizes',
    'awards.sec1Title': 'For All Participants',
    'awards.item1Title': '1-Year Personal .com Domain',
    'awards.item1Desc': 'Sponsored $10.46 (270,000 VND) for a custom .com domain like anhdac.com, thongphan.com.',
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
    'awards.mentorTitle': 'EXPLORE MENTORS\' WEBSITES',

    // Rubrics
    'rubrics.heading': 'Assessment Rubrics',

    // FAQ
    'faq.heading': 'Frequently Asked Questions',
    'faq.cat1': '1. Submission, Deadline & Official Grading',
    'faq.q1_1': 'How do I make sure my submission is recorded on time?',
    'faq.a1_1': 'The timestamp recorded on Simba (for Website & 4F Reflection) and Google Drive (for Video) before 23:59 on 06/09/2026 is the sole basis. After 23:59, additions, link changes, or edits will not be accepted.',
    'faq.q1_2': 'Can I edit my project after checkpoints, and which version will mentors grade?',
    'faq.a1_2': 'Yes! Checkpoints 1, 2, 3 are draft milestones for improvement feedback. The final submission before 23:59 on 06/09/2026 is the ONLY version evaluated for scoring and Top 3 selection.',
    'faq.q1_3': 'If I miss submitting drafts at Checkpoint 1 or 2, can I still submit the final project?',
    'faq.a1_3': 'Yes. You can still submit your final work by 06/09/2026. However, you will miss out on valuable feedback rounds from mentors.',
    'faq.q1_4': 'What if my website link has technical issues after submission?',
    'faq.a1_4': 'We recommend taking a screenshot of your successful deployment when submitting. Mentors will re-check links on 07/09 and verify against your stable deployment.',

    'faq.cat2': '2. Domain Purchase & Reimbursement',
    'faq.q2_1': 'What are the conditions for domain reimbursement?',
    'faq.a2_1': 'You need 2 conditions: (1) Meet quality criteria and receive mentor approval at Checkpoint 2 (04/09); (2) Purchase your custom .com domain directly on Cloudflare and save payment receipt. The Organizer will reimburse $10.46 (270,000 VND).',
    'faq.q2_2': 'What if my desired domain is taken or price changes?',
    'faq.a2_2': 'That is why you must prepare 1 primary + 1 backup .com domain and check on Cloudflare. Only purchase after mentor approval to ensure domain validity and correct sponsorship cost.',
    'faq.q2_3': 'Who owns the domain account and when is reimbursement paid?',
    'faq.a2_3': 'The Cloudflare account and domain belong 100% to the student/family. The Organizer will transfer the reimbursement on 08/09/2026 upon receipt of payment proof.',

    'faq.cat3': '3. Mentor Feedback & AI Scoring',
    'faq.q3_1': 'How and where will mentors send improvement feedback?',
    'faq.a3_1': 'Each student receives one consolidated feedback based on the standardized checklist via direct Zalo, highlighting required fixes and creative upgrade suggestions.',
    'faq.q3_2': 'Do AI scores on Simba determine the official final result?',
    'faq.a3_2': 'No. AI scores on Simba serve solely as instant suggestions for self-review. Official results are evaluated exclusively by the Mentor Council based on rubrics and actual work.',

    'faq.cat4': '4. Top 3 Criteria & Rewards',
    'faq.q4_1': 'How is Top 3 selected? Can one student win multiple awards?',
    'faq.a4_1': 'Top 3 consists of 3 distinct students excelling in 3 categories: Best Website Experience, Best Website Story, and Best Reflection. Each student can receive at most 1 Top 3 award.',
    'faq.q4_2': 'How are the 200,000 VND cash prize and domain refund disbursed?',
    'faq.a4_2': 'On 08/09/2026, all qualifying participants receive a 270,000 VND ($10.46) domain reimbursement. The 3 Top 3 winners will additionally receive a 200,000 VND cash prize via direct bank transfer.',

    'faq.cat5': '5. Copyright, Privacy & Parents\' Role',
    'faq.q5_1': 'What criteria must the 60–90s introduction video meet?',
    'faq.a5_1': 'The video must show your real face, real voice, and screen recording of your website. Upload to the competition Google Drive folder with name format: [Student Name]_[Domain Name].',
    'faq.q5_2': 'What copyright rules apply to images and content on the website?',
    'faq.a5_2': 'Personal, family, or original creations are strongly encouraged. If using media from the Internet, cite sources clearly and never use sensitive or inappropriate content.',
    'faq.q5_3': 'Is student personal information and privacy protected?',
    'faq.a5_3': 'Yes. The Organizer is committed to privacy. Any showcase project used for media will be discussed and agreed upon with parents beforehand.',
    'faq.q5_4': 'How can parents support students during the competition?',
    'faq.a5_4': 'Parents act as the "first audience" to test the website and provide technical payment assistance for domain registration. All website code, reflection, and video presentation must be completed by the student.',

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
