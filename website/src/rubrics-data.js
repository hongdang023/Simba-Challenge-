/**
 * Detailed Bilingual Assessment Rubrics Data for Website, 4F Reflection, and Video.
 * Strict separation: Pure VI when in Vietnamese mode, Pure EN when in English mode.
 */

export const RUBRICS_DATA = {
  vi: {
    website: {
      title: 'Tiêu chuẩn đánh giá Website / Product',
      desc: 'Đánh giá mức độ hoàn thiện của sản phẩm website và tư duy sản phẩm (Product Thinking).',
      groups: [
        {
          id: 'user-understanding',
          name: '1. Hiểu người dùng',
          desc: 'Product cho thấy con hiểu rõ người dùng và nhu cầu thật của họ.',
          criteria: [
            {
              title: 'Mô tả audience cụ thể',
              levels: [
                { lvl: '0. NOVICE', text: 'Chưa xác định người xem hoặc đối tượng quá chung chung.' },
                { lvl: '1. BEGINNER', text: 'Nêu được đối tượng người xem nhưng chưa rõ đặc điểm, ngữ cảnh.' },
                { lvl: '2. DEVELOPING', text: 'Mô tả người xem cụ thể với 1-2 đặc điểm (ví dụ: bạn cùng lớp thích đá bóng).' },
                { lvl: '3. PROFICIENT', text: 'Mô tả rõ ràng người xem, mối quan tâm và lý do họ muốn vào website.' },
                { lvl: '4. EXCELLENT', text: 'Thấu hiểu sâu sắc người xem, cá nhân hoá trải nghiệm nội dung hoàn toàn phù hợp với họ.' },
              ]
            },
            {
              title: 'Nêu nhu cầu rõ ràng',
              levels: [
                { lvl: '0. NOVICE', text: 'Chưa nêu được nhu cầu của người xem.' },
                { lvl: '1. BEGINNER', text: 'Nhu cầu còn mông lung, chưa gắn liền với nội dung web.' },
                { lvl: '2. DEVELOPING', text: 'Chỉ ra được nhu cầu cơ bản (muốn biết thông tin về con).' },
                { lvl: '3. PROFICIENT', text: 'Nêu rõ nhu cầu cụ thể của người xem và cách website đáp ứng.' },
                { lvl: '4. EXCELLENT', text: 'Lập luận sắc bén về nhu cầu và kỳ vọng của người xem khi trải nghiệm trang web.' },
              ]
            },
            {
              title: 'Kết nối nhu cầu với giải pháp',
              levels: [
                { lvl: '0. NOVICE', text: 'Nội dung web không liên quan đến nhu cầu người xem.' },
                { lvl: '1. BEGINNER', text: 'Kết nối rời rạc, chưa giải thích được vì sao đưa nội dung đó lên web.' },
                { lvl: '2. DEVELOPING', text: 'Có sự liên kết giữa các mục trên web với điều người xem muốn biết.' },
                { lvl: '3. PROFICIENT', text: 'Mọi phần trên web đều phục vụ rõ ràng cho nhu cầu của người xem.' },
                { lvl: '4. EXCELLENT', text: 'Giải pháp cấu trúc thông tin hoàn hảo, dẫn dắt người xem khám phá liền mạch.' },
              ]
            }
          ]
        },
        {
          id: 'product-value',
          name: '2. Giá trị của Product',
          desc: 'Product tạo ra ích lợi rõ ràng và phù hợp với audience.',
          criteria: [
            {
              title: 'Giải pháp cụ thể',
              levels: [
                { lvl: '0. NOVICE', text: 'Website sơ sài, không có nội dung rõ ràng.' },
                { lvl: '1. BEGINNER', text: 'Website có nội dung nhưng còn nghèo nàn, chưa đầy đủ 3 phần.' },
                { lvl: '2. DEVELOPING', text: 'Website đủ 3 phần nội dung và 3 hình ảnh thật, bố cục dễ nhìn.' },
                { lvl: '3. PROFICIENT', text: 'Website hoàn thiện tốt, bố cục mạch lạc, hình ảnh và câu chuyện ấn tượng.' },
                { lvl: '4. EXCELLENT', text: 'Website xuất sắc, thiết kế chỉn chu, tương tác mượt mà và mang dấu ấn cá nhân đậm nét.' },
              ]
            },
            {
              title: 'Lợi ích có thể nhận ra',
              levels: [
                { lvl: '0. NOVICE', text: 'Người xem không nhận được giá trị gì sau khi đọc.' },
                { lvl: '1. BEGINNER', text: 'Người xem nắm được thông tin sơ lược nhưng chưa ấn tượng.' },
                { lvl: '2. DEVELOPING', text: 'Người xem hiểu được con là ai và biết thêm một sở thích hoặc thành tích.' },
                { lvl: '3. PROFICIENT', text: 'Người xem cảm thấy thú vị, hiểu rõ thế giới và những điều con tự hào.' },
                { lvl: '4. EXCELLENT', text: 'Tạo cảm xúc mạnh mẽ, kết nối sâu sắc và truyền cảm hứng cho người xem.' },
              ]
            },
            {
              title: 'Cách dùng phù hợp với audience',
              levels: [
                { lvl: '0. NOVICE', text: 'Website khó xem, phông chữ hoặc màu sắc gây khó chịu.' },
                { lvl: '1. BEGINNER', text: 'Xem được nhưng trải nghiệm chưa tối ưu trên các thiết bị.' },
                { lvl: '2. DEVELOPING', text: 'Giao diện thân thiện, dễ đọc, hình ảnh hiển thị rõ ràng.' },
                { lvl: '3. PROFICIENT', text: 'Trải nghiệm mượt mà trên cả máy tính và điện thoại, ngôn từ tự nhiên.' },
                { lvl: '4. EXCELLENT', text: 'Phong cách thiết kế hoàn toàn ăn khớp với tính cách của con và người xem.' },
              ]
            }
          ]
        },
        {
          id: 'evidence-improvement',
          name: '3. Bằng chứng và cải tiến',
          desc: 'Bài nộp có thể xem được, giải thích đầy đủ và sẵn sàng cải tiến.',
          criteria: [
            {
              title: 'URL hoặc ảnh bằng chứng có thể kiểm tra',
              levels: [
                { lvl: '0. NOVICE', text: 'Không có link hoặc link bị lỗi không truy cập được.' },
                { lvl: '1. BEGINNER', text: 'Link truy cập được nhưng thiếu ảnh bằng chứng kiểm tra domain.' },
                { lvl: '2. DEVELOPING', text: 'Có link Cloudflare Pages hoạt động và ảnh chụp kiểm tra domain.' },
                { lvl: '3. PROFICIENT', text: 'Đầy đủ link deploy, ảnh kiểm tra domain chính và domain dự phòng rõ ràng.' },
                { lvl: '4. EXCELLENT', text: 'Bằng chứng minh bạch, kiểm tra kỹ lưỡng, link hoạt động trơn tru.' },
              ]
            },
            {
              title: 'Lập luận đủ chi tiết',
              levels: [
                { lvl: '0. NOVICE', text: 'Không giải thích lý do chọn domain hay chọn người xem.' },
                { lvl: '1. BEGINNER', text: 'Giải thích ngắn ngủn, thiếu chiều sâu.' },
                { lvl: '2. DEVELOPING', text: 'Nêu được lý do chọn domain và ý nghĩa của domain đối với bản thân.' },
                { lvl: '3. PROFICIENT', text: 'Lập luận thuyết phục về câu chuyện đằng sau domain và nội dung website.' },
                { lvl: '4. EXCELLENT', text: 'Câu chuyện chọn domain và thiết kế website truyền cảm hứng sâu sắc.' },
              ]
            },
            {
              title: 'Cho thấy khả năng tiếp tục cải tiến',
              levels: [
                { lvl: '0. NOVICE', text: 'Không thu thập phản hồi, không có cải tiến nào.' },
                { lvl: '1. BEGINNER', text: 'Có hỏi ý kiến nhưng chưa thực hiện cải tiến trên web.' },
                { lvl: '2. DEVELOPING', text: 'Ghi lại phản hồi của người xem và thực hiện ít nhất 1 cải tiến cụ thể.' },
                { lvl: '3. PROFICIENT', text: 'Phân tích rõ phản hồi, giải thích vì sao chọn cải tiến đó và kết quả sau khi sửa.' },
                { lvl: '4. EXCELLENT', text: 'Tư duy lặp lại xuất sắc: lắng nghe, cải thiện và có định hướng nâng cấp tiếp theo.' },
              ]
            }
          ]
        }
      ]
    },

    reflection: {
      title: 'Tiêu chuẩn đánh giá 4F Reflection',
      desc: 'Đánh giá năng lực tự phản tư qua 4 lăng kính Facts, Feelings, Findings, Future.',
      criteria: [
        {
          id: 'facts',
          title: 'Facts rõ ràng',
          desc: 'Mô tả sự kiện cụ thể, có bối cảnh và chi tiết quan sát được, không chỉ nêu nhận định chung.',
          levels: [
            { lvl: '0. NOVICE', text: 'Chưa nêu được sự kiện hoặc chỉ đưa ra một nhận xét mơ hồ.' },
            { lvl: '1. BEGINNER', text: 'Nêu được một sự kiện nhưng còn thiếu bối cảnh, hành động hoặc kết quả.' },
            { lvl: '2. DEVELOPING', text: 'Mô tả được sự kiện chính và một vài chi tiết, nhưng chưa đủ cụ thể.' },
            { lvl: '3. PROFICIENT', text: 'Mô tả rõ sự kiện, bối cảnh và kết quả bằng các chi tiết quan sát được.' },
            { lvl: '4. EXCELLENT', text: 'Mô tả đầy đủ, cụ thể, có trình tự và bằng chứng giúp người khác hiểu chính xác điều đã xảy ra.' },
          ]
        },
        {
          id: 'feelings',
          title: 'Feelings chân thực',
          desc: 'Gọi tên cảm xúc và giải thích điều gì trong trải nghiệm đã tạo ra cảm xúc đó.',
          levels: [
            { lvl: '0. NOVICE', text: 'Chưa gọi tên hoặc chưa thể hiện cảm xúc trong trải nghiệm.' },
            { lvl: '1. BEGINNER', text: 'Gọi tên một cảm xúc chung nhưng chưa liên hệ với điều đã xảy ra.' },
            { lvl: '2. DEVELOPING', text: 'Gọi tên được cảm xúc và nêu nguyên nhân ở mức sơ bộ.' },
            { lvl: '3. PROFICIENT', text: 'Diễn đạt cảm xúc chân thực, đồng thời giải thích rõ tác nhân tạo ra cảm xúc đó.' },
            { lvl: '4. EXCELLENT', text: 'Phân tích được sắc thái, nguyên nhân và ảnh hưởng của cảm xúc tới hành vi hoặc việc học.' },
          ]
        },
        {
          id: 'findings',
          title: 'Findings có chiều sâu',
          desc: 'Rút ra bài học, nhận ra giả định hoặc mối liên hệ mới từ trải nghiệm.',
          levels: [
            { lvl: '0. NOVICE', text: 'Chưa rút ra bài học hoặc phát hiện mới từ trải nghiệm.' },
            { lvl: '1. BEGINNER', text: 'Nêu một bài học chung, chưa chỉ ra mối liên hệ với trải nghiệm.' },
            { lvl: '2. DEVELOPING', text: 'Rút ra bài học có liên quan nhưng phần lý giải còn ngắn hoặc chưa rõ.' },
            { lvl: '3. PROFICIENT', text: 'Rút ra bài học rõ ràng và giải thích được mối liên hệ với điều đã xảy ra.' },
            { lvl: '4. EXCELLENT', text: 'Nhận ra giả định hoặc mối liên hệ sâu hơn và cho thấy bài học có thể áp dụng sang tình huống khác.' },
          ]
        },
        {
          id: 'future',
          title: 'Future có thể hành động',
          desc: 'Đề xuất bước tiếp theo cụ thể, khả thi và cho thấy cách áp dụng bài học.',
          levels: [
            { lvl: '0. NOVICE', text: 'Chưa đề xuất bước tiếp theo hoặc hành động cần thực hiện.' },
            { lvl: '1. BEGINNER', text: 'Nêu một ý định chung nhưng chưa có hành động cụ thể.' },
            { lvl: '2. DEVELOPING', text: 'Đề xuất được hành động nhưng còn thiếu thời điểm, cách làm hoặc tiêu chí hoàn thành.' },
            { lvl: '3. PROFICIENT', text: 'Đề xuất bước tiếp theo cụ thể, khả thi và phù hợp với bài học vừa rút ra.' },
            { lvl: '4. EXCELLENT', text: 'Lập kế hoạch cụ thể, khả thi, có thời điểm, bằng chứng hoàn thành và cách tự kiểm tra kết quả.' },
          ]
        }
      ]
    },

    video: {
      title: 'Tiêu chuẩn đánh giá Video',
      desc: 'Mentor đánh giá video dựa trên 4 tiêu chí theo 5 cấp độ chuẩn hoá.',
      criteria: [
        {
          id: 'criterion-1',
          title: '1. Giới thiệu website rõ ràng',
          desc: 'Đánh giá mức độ rõ ràng, mạch lạc và hấp dẫn khi giới thiệu về website.',
          levels: [
            { lvl: '0. NOVICE', text: 'Chưa giới thiệu được website hoặc không chiếu màn hình sản phẩm.' },
            { lvl: '1. BEGINNER', text: 'Học sinh có nhắc đến website nhưng người xem chưa hiểu rõ nội dung trang web nói về điều gì.' },
            { lvl: '2. DEVELOPING', text: 'Học sinh giới thiệu website và một số nội dung, nhưng phần giải thích chưa đầy đủ hoặc khó theo dõi.' },
            { lvl: '3. PROFICIENT', text: 'Học sinh giải thích rõ ràng về website, nội dung chính và những gì người xem có thể tìm thấy tại đây.' },
            { lvl: '4. EXCELLENT', text: 'Học sinh mở đầu súc tích, hấp dẫn và khiến người xem hào hứng muốn tự mình khám phá website.' },
          ]
        },
        {
          id: 'criterion-2',
          title: '2. Dấu ấn cá nhân và câu chuyện domain',
          desc: 'Đánh giá sự thể hiện bản sắc cá nhân và câu chuyện đằng sau domain được chọn.',
          levels: [
            { lvl: '0. NOVICE', text: 'Chưa nhắc đến domain hoặc câu chuyện cá nhân.' },
            { lvl: '1. BEGINNER', text: 'Học sinh chỉ nêu tên domain hoặc chủ đề cá nhân mà không giải thích ý nghĩa.' },
            { lvl: '2. DEVELOPING', text: 'Học sinh đưa ra lý do chung chung cho việc lựa chọn domain hoặc chủ đề.' },
            { lvl: '3. PROFICIENT', text: 'Học sinh giải thích rõ ràng domain và website phản ánh danh tính, sở thích hoặc trải nghiệm của mình như thế nào.' },
            { lvl: '4. EXCELLENT', text: 'Phần giải thích rất cụ thể, đáng nhớ và giúp người xem hiểu sâu sắc về con người của học sinh.' },
          ]
        },
        {
          id: 'criterion-3',
          title: '3. Kết nối với người xem mục tiêu',
          desc: 'Đánh giá mức độ thấu hiểu và kết nối với đối tượng người xem mà website hướng đến.',
          levels: [
            { lvl: '0. NOVICE', text: 'Chưa xác định người xem mục tiêu trong video.' },
            { lvl: '1. BEGINNER', text: 'Học sinh không xác định website dành cho ai hoặc tại sao người đó nên xem trang web này.' },
            { lvl: '2. DEVELOPING', text: 'Học sinh có nhắc đến người xem nhưng chưa kết nối rõ ràng với nhu cầu của họ.' },
            { lvl: '3. PROFICIENT', text: 'Học sinh giải thích rõ website dành cho ai và người đó sẽ nhận được giá trị gì khi xem.' },
            { lvl: '4. EXCELLENT', text: 'Học sinh thể hiện sự thấu hiểu sâu sắc người xem và trình bày website hoàn toàn từ góc nhìn của họ.' },
          ]
        },
        {
          id: 'criterion-4',
          title: '4. Bài học đúc kết và bước tiếp theo',
          desc: 'Đánh giá bài học rút ra (Finding) và kế hoạch hành động cụ thể trong tương lai (Future).',
          levels: [
            { lvl: '0. NOVICE', text: 'Chưa nêu được bài học hay kế hoạch tiếp theo.' },
            { lvl: '1. BEGINNER', text: 'Học sinh chỉ nói rằng mình đã làm xong website, không giải thích đã học được gì hoặc sẽ làm gì tiếp theo.' },
            { lvl: '2. DEVELOPING', text: 'Học sinh nhắc đến bài học hoặc bước tiếp theo chung chung, chưa liên kết chặt chẽ với quá trình làm bài.' },
            { lvl: '3. PROFICIENT', text: 'Học sinh giải thích một điều cụ thể mình đã học/đã làm và một bước đi thực tế tiếp theo.' },
            { lvl: '4. EXCELLENT', text: 'Học sinh chia sẻ một Finding sâu sắc và một hành động Future cụ thể, cho thấy trải nghiệm này định hình sản phẩm tương lai ra sao.' },
          ]
        }
      ]
    }
  },

  en: {
    website: {
      title: 'Website / Product Rubric',
      desc: 'Assesses the quality of the website product and product thinking capability.',
      groups: [
        {
          id: 'user-understanding',
          name: '1. User Understanding',
          desc: 'Shows clear understanding of the target user and their real needs.',
          criteria: [
            {
              title: 'Specific Audience Description',
              levels: [
                { lvl: '0. NOVICE', text: 'No target audience identified or description is too vague.' },
                { lvl: '1. BEGINNER', text: 'Target audience stated but lacks context and characteristics.' },
                { lvl: '2. DEVELOPING', text: 'Specific audience described with 1-2 traits (e.g. football-loving classmate).' },
                { lvl: '3. PROFICIENT', text: 'Clearly describes the viewer, their interests and why they would visit.' },
                { lvl: '4. EXCELLENT', text: 'Deeply understands the viewer, tailoring the entire experience to them.' },
              ]
            },
            {
              title: 'Clear Needs Identified',
              levels: [
                { lvl: '0. NOVICE', text: 'Fails to state what the viewer needs or wants.' },
                { lvl: '1. BEGINNER', text: 'Needs are vague and disconnected from the site content.' },
                { lvl: '2. DEVELOPING', text: 'Identifies basic needs (e.g. learning more about the creator).' },
                { lvl: '3. PROFICIENT', text: 'Clearly articulates specific viewer needs and how the site meets them.' },
                { lvl: '4. EXCELLENT', text: 'Compelling rationale explaining viewer expectations and value delivered.' },
              ]
            },
            {
              title: 'Connecting Needs with Solutions',
              levels: [
                { lvl: '0. NOVICE', text: 'Site content is unrelated to viewer needs.' },
                { lvl: '1. BEGINNER', text: 'Disconnected content with weak justification.' },
                { lvl: '2. DEVELOPING', text: 'Connects key sections to what the viewer wants to know.' },
                { lvl: '3. PROFICIENT', text: 'Every section purposefully serves the viewer’s needs.' },
                { lvl: '4. EXCELLENT', text: 'Seamless information architecture guiding the viewer effortlessly.' },
              ]
            }
          ]
        },
        {
          id: 'product-value',
          name: '2. Product Value',
          desc: 'Creates clear, tangible value well-suited for the audience.',
          criteria: [
            {
              title: 'Concrete Solution',
              levels: [
                { lvl: '0. NOVICE', text: 'Site is bare with no meaningful content.' },
                { lvl: '1. BEGINNER', text: 'Content is minimal and lacks the 3 required sections.' },
                { lvl: '2. DEVELOPING', text: 'Contains 3 distinct content sections and 3 real photos.' },
                { lvl: '3. PROFICIENT', text: 'Well-crafted website with engaging storytelling and layout.' },
                { lvl: '4. EXCELLENT', text: 'Outstanding execution with polish, smooth flow and authentic personality.' },
              ]
            },
            {
              title: 'Recognizable Benefits',
              levels: [
                { lvl: '0. NOVICE', text: 'Viewer gains no value or insight from browsing.' },
                { lvl: '1. BEGINNER', text: 'Viewer gains only surface-level information.' },
                { lvl: '2. DEVELOPING', text: 'Viewer learns who the student is and one key interest or achievement.' },
                { lvl: '3. PROFICIENT', text: 'Viewer genuinely enjoys discovering the student’s world and proud moments.' },
                { lvl: '4. EXCELLENT', text: 'Creates strong emotional resonance, connection and inspiration.' },
              ]
            },
            {
              title: 'Audience-Appropriate Experience',
              levels: [
                { lvl: '0. NOVICE', text: 'Difficult to read, uncomfortable fonts or contrast.' },
                { lvl: '1. BEGINNER', text: 'Readable but inconsistent experience across devices.' },
                { lvl: '2. DEVELOPING', text: 'Friendly layout, legible typography, clear images.' },
                { lvl: '3. PROFICIENT', text: 'Smooth on both desktop and mobile with natural, appropriate tone.' },
                { lvl: '4. EXCELLENT', text: 'Tone, styling and visuals perfectly match student voice and audience taste.' },
              ]
            }
          ]
        },
        {
          id: 'evidence-improvement',
          name: '3. Evidence & Iteration',
          desc: 'Submission is verifiable, well-explained and demonstrates readiness to improve.',
          criteria: [
            {
              title: 'Verifiable URL or Evidence',
              levels: [
                { lvl: '0. NOVICE', text: 'Missing link or broken link that cannot be accessed.' },
                { lvl: '1. BEGINNER', text: 'Working link but missing domain search evidence screenshot.' },
                { lvl: '2. DEVELOPING', text: 'Working Cloudflare Pages link and domain search screenshot.' },
                { lvl: '3. PROFICIENT', text: 'Complete verified deploy link and proof for primary & backup domains.' },
                { lvl: '4. EXCELLENT', text: 'Flawless verification, robust links and impeccable evidence.' },
              ]
            },
            {
              title: 'Sufficient Reasoning',
              levels: [
                { lvl: '0. NOVICE', text: 'No explanation given for domain choice or audience.' },
                { lvl: '1. BEGINNER', text: 'Superficial explanation lacking depth.' },
                { lvl: '2. DEVELOPING', text: 'Explains reason for choosing domain and its personal meaning.' },
                { lvl: '3. PROFICIENT', text: 'Persuasive narrative explaining the story behind domain and site content.' },
                { lvl: '4. EXCELLENT', text: 'Inspiring personal narrative connecting identity, domain and product.' },
              ]
            },
            {
              title: 'Demonstrated Iteration',
              levels: [
                { lvl: '0. NOVICE', text: 'No user feedback gathered, no improvements made.' },
                { lvl: '1. BEGINNER', text: 'Asked for feedback but made no improvements to the site.' },
                { lvl: '2. DEVELOPING', text: 'Logged user feedback and implemented at least 1 concrete improvement.' },
                { lvl: '3. PROFICIENT', text: 'Analyzed feedback clearly, explained why the change was made and result.' },
                { lvl: '4. EXCELLENT', text: 'Outstanding iteration mindset: listened, refined and planned future upgrades.' },
              ]
            }
          ]
        }
      ]
    },

    reflection: {
      title: '4F Reflection Rubric',
      desc: 'Assesses self-reflection depth through Facts, Feelings, Findings, and Future.',
      criteria: [
        {
          id: 'facts',
          title: 'Clear Facts',
          desc: 'Describes specific events with context and observable details, avoiding mere generalizations.',
          levels: [
            { lvl: '0. NOVICE', text: 'Does not state specific events or only gives vague remarks.' },
            { lvl: '1. BEGINNER', text: 'States an event but lacks context, actions or outcomes.' },
            { lvl: '2. DEVELOPING', text: 'Describes the main event with some details, but could be more concrete.' },
            { lvl: '3. PROFICIENT', text: 'Clearly describes events, context and outcomes with observable details.' },
            { lvl: '4. EXCELLENT', text: 'Comprehensive, sequential account with clear evidence helping others understand exactly what happened.' },
          ]
        },
        {
          id: 'feelings',
          title: 'Authentic Feelings',
          desc: 'Names emotional states and explains what specific triggers created those feelings.',
          levels: [
            { lvl: '0. NOVICE', text: 'Does not identify or express feelings from the experience.' },
            { lvl: '1. BEGINNER', text: 'Names a generic feeling without connecting it to what occurred.' },
            { lvl: '2. DEVELOPING', text: 'Identifies feelings and states preliminary reasons.' },
            { lvl: '3. PROFICIENT', text: 'Expresses authentic feelings while clearly explaining their triggers.' },
            { lvl: '4. EXCELLENT', text: 'Nuanced analysis of emotional triggers and their impact on behavior and learning.' },
          ]
        },
        {
          id: 'findings',
          title: 'Insightful Findings',
          desc: 'Extracts meaningful lessons, uncovers assumptions or identifies new connections.',
          levels: [
            { lvl: '0. NOVICE', text: 'Draws no lessons or new discoveries from the experience.' },
            { lvl: '1. BEGINNER', text: 'States a generic takeaway without linking it to the experience.' },
            { lvl: '2. DEVELOPING', text: 'Draws relevant lessons but explanation is brief or surface-level.' },
            { lvl: '3. PROFICIENT', text: 'Articulates clear takeaways and explains their connection to what happened.' },
            { lvl: '4. EXCELLENT', text: 'Deep realization uncovering underlying assumptions with transferrable application.' },
          ]
        },
        {
          id: 'future',
          title: 'Actionable Future',
          desc: 'Proposes specific, realistic next steps showing how insights will be applied.',
          levels: [
            { lvl: '0. NOVICE', text: 'Proposes no next steps or future actions.' },
            { lvl: '1. BEGINNER', text: 'States a vague intention without concrete actions.' },
            { lvl: '2. DEVELOPING', text: 'Proposes actions but lacks timing, execution method or success criteria.' },
            { lvl: '3. PROFICIENT', text: 'Proposes specific, realistic next steps aligned with lessons learned.' },
            { lvl: '4. EXCELLENT', text: 'Formulates a concrete, actionable plan with timeline, success criteria and self-check mechanisms.' },
          ]
        }
      ]
    },

    video: {
      title: 'Video Assessment Rubric',
      desc: 'The mentor assesses the video using four criteria across five standardized levels.',
      criteria: [
        {
          id: 'criterion-1',
          title: '1. Clear Website Introduction',
          desc: 'Assesses clarity, structure and engagement when introducing the personal website.',
          levels: [
            { lvl: '0. NOVICE', text: 'Does not introduce the website or does not share screen.' },
            { lvl: '1. BEGINNER', text: 'The student mentions the website but the viewer does not clearly understand what it is about.' },
            { lvl: '2. DEVELOPING', text: 'The student introduces the website and some content, but the explanation is incomplete or difficult to follow.' },
            { lvl: '3. PROFICIENT', text: 'The student clearly explains the website, its main content and what the viewer can find there.' },
            { lvl: '4. EXCELLENT', text: 'The student gives a concise, engaging introduction that makes the viewer want to explore the website.' },
          ]
        },
        {
          id: 'criterion-2',
          title: '2. Personal Identity & Domain Story',
          desc: 'Assesses how well the video showcases personal identity and the story behind the domain.',
          levels: [
            { lvl: '0. NOVICE', text: 'Does not mention domain or personal story.' },
            { lvl: '1. BEGINNER', text: 'The student states the domain or personal topic without explaining its meaning.' },
            { lvl: '2. DEVELOPING', text: 'The student gives a general reason for the domain or topic.' },
            { lvl: '3. PROFICIENT', text: 'The student clearly explains how the domain and website reflect their identity, interests or experience.' },
            { lvl: '4. EXCELLENT', text: 'The explanation is specific, memorable and helps the viewer understand the student as a person.' },
          ]
        },
        {
          id: 'criterion-3',
          title: '3. Connection with Audience',
          desc: 'Assesses understanding of and connection with the intended viewer.',
          levels: [
            { lvl: '0. NOVICE', text: 'Does not identify target audience in video.' },
            { lvl: '1. BEGINNER', text: 'The student does not identify who the website is for or why that person should view it.' },
            { lvl: '2. DEVELOPING', text: 'The student mentions an audience but does not clearly connect the website to that person’s needs.' },
            { lvl: '3. PROFICIENT', text: 'The student explains who the website is for and what that person can gain from viewing it.' },
            { lvl: '4. EXCELLENT', text: 'The student demonstrates a clear understanding of the audience and presents the website from the audience’s point of view.' },
          ]
        },
        {
          id: 'criterion-4',
          title: '4. Learning & Next Step',
          desc: 'Assesses key takeaway (Finding) and concrete future action (Future).',
          levels: [
            { lvl: '0. NOVICE', text: 'Mentions no takeaways or future plans.' },
            { lvl: '1. BEGINNER', text: 'The student only says that they completed the website, without explaining what they learned or will do next.' },
            { lvl: '2. DEVELOPING', text: 'The student mentions a general lesson or next step, but it is not connected clearly to the process.' },
            { lvl: '3. PROFICIENT', text: 'The student explains one specific thing they learned or did, and one realistic next step.' },
            { lvl: '4. EXCELLENT', text: 'The student explains a meaningful Finding and a concrete Future action, showing how the experience may influence their next product or learning activity.' },
          ]
        }
      ]
    }
  }
};
