/**
 * Detailed Assessment Rubrics Data for Website, 4F Reflection, and Video.
 * Standardized across all sections to 5 levels (0. NOVICE -> 4. EXCELLENT).
 */

export const RUBRICS_DATA = {
  website: {
    title: 'Website / Product Rubric',
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
              { lvl: '3. PROFICIENT', text: 'Mọi section trên web đều phục vụ rõ ràng cho nhu cầu của người xem.' },
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
              { lvl: '2. DEVELOPING', text: 'Người xem hiểu được con là ai và biết thêm một sở thích/thành tích.' },
              { lvl: '3. PROFICIENT', text: 'Người xem cảm thấy thú vị, hiểu rõ thế giới và những điều con tự hào.' },
              { lvl: '4. EXCELLENT', text: 'Tạo cảm xúc mạnh mẽ, kết nối sâu sắc và truyền cảm hứng cho người xem.' },
            ]
          },
          {
            title: 'Cách dùng phù hợp với audience',
            levels: [
              { lvl: '0. NOVICE', text: 'Website khó xem, font chữ/màu sắc gây khó chịu.' },
              { lvl: '1. BEGINNER', text: 'Xem được nhưng trải nghiệm chưa tối ưu trên các thiết bị.' },
              { lvl: '2. DEVELOPING', text: 'Giao diện thân thiện, dễ đọc, hình ảnh hiển thị rõ ràng.' },
              { lvl: '3. PROFICIENT', text: 'Trải nghiệm mượt mà trên cả máy tính và điện thoại, ngôn từ tự nhiên.' },
              { lvl: '4. EXCELLENT', text: 'Tone & mood thiết kế hoàn toàn ăn khớp với tính cách của con và gu của người xem.' },
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
              { lvl: '2. DEVELOPING', text: 'Có link Cloudflare Pages hoạt động và ảnh chụp check domain.' },
              { lvl: '3. PROFICIENT', text: 'Đầy đủ link deploy, ảnh check domain chính và domain dự phòng rõ ràng.' },
              { lvl: '4. EXCELLENT', text: 'Bằng chứng minh bạch, kiểm tra kỹ lưỡng, link hoạt động trơn tru 100%.' },
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
              { lvl: '4. EXCELLENT', text: 'Tư duy lặp lại (iteration) xuất sắc: lắng nghe, cải thiện và có định hướng nâng cấp tiếp theo.' },
            ]
          }
        ]
      }
    ]
  },

  reflection: {
    title: '4F Reflection Rubric',
    desc: 'Đánh giá năng lực tự phản tư (Self-Reflection) qua 4 lăng kính Facts, Feelings, Findings, Future.',
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
    title: 'Video Assessment Rubric',
    desc: 'The mentor assesses the video using four criteria across five standardized levels.',
    criteria: [
      {
        id: 'criterion-1',
        title: '1. Website introduction is clear',
        desc: 'Đánh giá mức độ rõ ràng, mạch lạc và hấp dẫn khi giới thiệu về website.',
        levels: [
          { lvl: '0. NOVICE', text: 'Chưa giới thiệu được website hoặc không chiếu màn hình sản phẩm.' },
          { lvl: '1. BEGINNER', text: 'The student mentions the website but the viewer does not clearly understand what it is about.' },
          { lvl: '2. DEVELOPING', text: 'The student introduces the website and some content, but the explanation is incomplete or difficult to follow.' },
          { lvl: '3. PROFICIENT', text: 'The student clearly explains the website, its main content and what the viewer can find there.' },
          { lvl: '4. EXCELLENT', text: 'The student gives a concise, engaging introduction that makes the viewer want to explore the website.' },
        ]
      },
      {
        id: 'criterion-2',
        title: '2. Personal identity and domain story',
        desc: 'Đánh giá sự thể hiện dấu ấn cá nhân và câu chuyện đằng sau domain được chọn.',
        levels: [
          { lvl: '0. NOVICE', text: 'Chưa nhắc đến domain hoặc câu chuyện cá nhân.' },
          { lvl: '1. BEGINNER', text: 'The student states the domain or personal topic without explaining its meaning.' },
          { lvl: '2. DEVELOPING', text: 'The student gives a general reason for the domain or topic.' },
          { lvl: '3. PROFICIENT', text: 'The student clearly explains how the domain and website reflect their identity, interests or experience.' },
          { lvl: '4. EXCELLENT', text: 'The explanation is specific, memorable and helps the viewer understand the student as a person.' },
        ]
      },
      {
        id: 'criterion-3',
        title: '3. Connection with the audience',
        desc: 'Đánh giá mức độ thấu hiểu và kết nối với đối tượng người xem mục tiêu.',
        levels: [
          { lvl: '0. NOVICE', text: 'Chưa xác định người xem mục tiêu trong video.' },
          { lvl: '1. BEGINNER', text: 'The student does not identify who the website is for or why that person should view it.' },
          { lvl: '2. DEVELOPING', text: 'The student mentions an audience but does not clearly connect the website to that person’s needs.' },
          { lvl: '3. PROFICIENT', text: 'The student explains who the website is for and what that person can gain from viewing it.' },
          { lvl: '4. EXCELLENT', text: 'The student demonstrates a clear understanding of the audience and presents the website from the audience’s point of view.' },
        ]
      },
      {
        id: 'criterion-4',
        title: '4. Learning and next step',
        desc: 'Đánh giá bài học đúc kết (Finding) và hành động tiếp theo (Future).',
        levels: [
          { lvl: '0. NOVICE', text: 'Chưa nêu được bài học hay kế hoạch tiếp theo.' },
          { lvl: '1. BEGINNER', text: 'The student only says that they completed the website, without explaining what they learned or will do next.' },
          { lvl: '2. DEVELOPING', text: 'The student mentions a general lesson or next step, but it is not connected clearly to the process.' },
          { lvl: '3. PROFICIENT', text: 'The student explains one specific thing they learned or did, and one realistic next step.' },
          { lvl: '4. EXCELLENT', text: 'The student explains a meaningful Finding and a concrete Future action, showing how the experience may influence their next product or learning activity.' },
        ]
      }
    ]
  }
};
