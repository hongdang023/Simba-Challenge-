/**
 * Detailed Assessment Rubrics Data for Website, 4F Reflection, and Video.
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
              { lvl: '0. Novice', text: 'Chưa xác định người xem hoặc đối tượng quá chung chung.' },
              { lvl: '1. Beginner', text: 'Nêu được đối tượng người xem nhưng chưa rõ đặc điểm, ngữ cảnh.' },
              { lvl: '2. Developing', text: 'Mô tả người xem cụ thể với 1-2 đặc điểm (ví dụ: bạn cùng lớp thích đá bóng).' },
              { lvl: '3. Proficient', text: 'Mô tả rõ ràng người xem, mối quan tâm và lý do họ muốn vào website.' },
              { lvl: '4. Excellent', text: 'Thấu hiểu sâu sắc người xem, cá nhân hoá trải nghiệm nội dung hoàn toàn phù hợp với họ.' },
            ]
          },
          {
            title: 'Nêu nhu cầu rõ ràng',
            levels: [
              { lvl: '0. Novice', text: 'Chưa nêu được nhu cầu của người xem.' },
              { lvl: '1. Beginner', text: 'Nhu cầu còn mông lung, chưa gắn liền với nội dung web.' },
              { lvl: '2. Developing', text: 'Chỉ ra được nhu cầu cơ bản (muốn biết thông tin về con).' },
              { lvl: '3. Proficient', text: 'Nêu rõ nhu cầu cụ thể của người xem và cách website đáp ứng.' },
              { lvl: '4. Excellent', text: 'Lập luận sắc bén về nhu cầu và kỳ vọng của người xem khi trải nghiệm trang web.' },
            ]
          },
          {
            title: 'Kết nối nhu cầu với giải pháp',
            levels: [
              { lvl: '0. Novice', text: 'Nội dung web không liên quan đến nhu cầu người xem.' },
              { lvl: '1. Beginner', text: 'Kết nối rời rạc, chưa giải thích được vì sao đưa nội dung đó lên web.' },
              { lvl: '2. Developing', text: 'Có sự liên kết giữa các mục trên web với điều người xem muốn biết.' },
              { lvl: '3. Proficient', text: 'Mọi section trên web đều phục vụ rõ ràng cho nhu cầu của người xem.' },
              { lvl: '4. Excellent', text: 'Giải pháp cấu trúc thông tin hoàn hảo, dẫn dắt người xem khám phá liền mạch.' },
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
              { lvl: '0. Novice', text: 'Website sơ sài, không có nội dung rõ ràng.' },
              { lvl: '1. Beginner', text: 'Website có nội dung nhưng còn nghèo nàn, chưa đầy đủ 3 phần.' },
              { lvl: '2. Developing', text: 'Website đủ 3 phần nội dung và 3 hình ảnh thật, bố cục dễ nhìn.' },
              { lvl: '3. Proficient', text: 'Website hoàn thiện tốt, bố cục mạch lạc, hình ảnh và câu chuyện ấn tượng.' },
              { lvl: '4. Excellent', text: 'Website xuất sắc, thiết kế chỉn chu, tương tác mượt mà và mang dấu ấn cá nhân đậm nét.' },
            ]
          },
          {
            title: 'Lợi ích có thể nhận ra',
            levels: [
              { lvl: '0. Novice', text: 'Người xem không nhận được giá trị gì sau khi đọc.' },
              { lvl: '1. Beginner', text: 'Người xem nắm được thông tin sơ lược nhưng chưa ấn tượng.' },
              { lvl: '2. Developing', text: 'Người xem hiểu được con là ai và biết thêm một sở thích/thành tích.' },
              { lvl: '3. Proficient', text: 'Người xem cảm thấy thú vị, hiểu rõ thế giới và những điều con tự hào.' },
              { lvl: '4. Excellent', text: 'Tạo cảm xúc mạnh mẽ, kết nối sâu sắc và truyền cảm hứng cho người xem.' },
            ]
          },
          {
            title: 'Cách dùng phù hợp với audience',
            levels: [
              { lvl: '0. Novice', text: 'Website khó xem, font chữ/màu sắc gây khó chịu.' },
              { lvl: '1. Beginner', text: 'Xem được nhưng trải nghiệm chưa tối ưu trên các thiết bị.' },
              { lvl: '2. Developing', text: 'Giao diện thân thiện, dễ đọc, hình ảnh hiển thị rõ ràng.' },
              { lvl: '3. Proficient', text: 'Trải nghiệm mượt mà trên cả máy tính và điện thoại, ngôn từ tự nhiên.' },
              { lvl: '4. Excellent', text: 'Tone & mood thiết kế hoàn toàn ăn khớp với tính cách của con và gu của người xem.' },
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
              { lvl: '0. Novice', text: 'Không có link hoặc link bị lỗi không truy cập được.' },
              { lvl: '1. Beginner', text: 'Link truy cập được nhưng thiếu ảnh bằng chứng kiểm tra domain.' },
              { lvl: '2. Developing', text: 'Có link Cloudflare Pages hoạt động và ảnh chụp check domain.' },
              { lvl: '3. Proficient', text: 'Đầy đủ link deploy, ảnh check domain chính và domain dự phòng rõ ràng.' },
              { lvl: '4. Excellent', text: 'Bằng chứng minh bạch, kiểm tra kỹ lưỡng, link hoạt động trơn tru 100%.' },
            ]
          },
          {
            title: 'Lập luận đủ chi tiết',
            levels: [
              { lvl: '0. Novice', text: 'Không giải thích lý do chọn domain hay chọn người xem.' },
              { lvl: '1. Beginner', text: 'Giải thích ngắn ngủn, thiếu chiều sâu.' },
              { lvl: '2. Developing', text: 'Nêu được lý do chọn domain và ý nghĩa của tên miền đối với bản thân.' },
              { lvl: '3. Proficient', text: 'Lập luận thuyết phục về câu chuyện đằng sau tên miền và nội dung website.' },
              { lvl: '4. Excellent', text: 'Câu chuyện chọn domain và thiết kế website truyền cảm hứng sâu sắc.' },
            ]
          },
          {
            title: 'Cho thấy khả năng tiếp tục cải tiến',
            levels: [
              { lvl: '0. Novice', text: 'Không thu thập phản hồi, không có cải tiến nào.' },
              { lvl: '1. Beginner', text: 'Có hỏi ý kiến nhưng chưa thực hiện cải tiến trên web.' },
              { lvl: '2. Developing', text: 'Ghi lại phản hồi của người xem và thực hiện ít nhất 1 cải tiến cụ thể.' },
              { lvl: '3. Proficient', text: 'Phân tích rõ phản hồi, giải thích vì sao chọn cải tiến đó và kết quả sau khi sửa.' },
              { lvl: '4. Excellent', text: 'Tư duy lặp lại (iteration) xuất sắc: lắng nghe, cải thiện và có định hướng nâng cấp tiếp theo.' },
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
          { lvl: '0. Chưa thể hiện', text: 'Chưa nêu được sự kiện hoặc chỉ đưa ra một nhận xét mơ hồ.' },
          { lvl: '1. Bắt đầu', text: 'Nêu được một sự kiện nhưng còn thiếu bối cảnh, hành động hoặc kết quả.' },
          { lvl: '2. Đang phát triển', text: 'Mô tả được sự kiện chính và một vài chi tiết, nhưng chưa đủ cụ thể.' },
          { lvl: '3. Đạt', text: 'Mô tả rõ sự kiện, bối cảnh và kết quả bằng các chi tiết quan sát được.' },
          { lvl: '4. Tốt', text: 'Mô tả đầy đủ, cụ thể, có trình tự và bằng chứng giúp người khác hiểu chính xác điều đã xảy ra.' },
        ]
      },
      {
        id: 'feelings',
        title: 'Feelings chân thực',
        desc: 'Gọi tên cảm xúc và giải thích điều gì trong trải nghiệm đã tạo ra cảm xúc đó.',
        levels: [
          { lvl: '0. Chưa thể hiện', text: 'Chưa gọi tên hoặc chưa thể hiện cảm xúc trong trải nghiệm.' },
          { lvl: '1. Bắt đầu', text: 'Gọi tên một cảm xúc chung nhưng chưa liên hệ với điều đã xảy ra.' },
          { lvl: '2. Đang phát triển', text: 'Gọi tên được cảm xúc và nêu nguyên nhân ở mức sơ bộ.' },
          { lvl: '3. Đạt', text: 'Diễn đạt cảm xúc chân thực, đồng thời giải thích rõ tác nhân tạo ra cảm xúc đó.' },
          { lvl: '4. Tốt', text: 'Phân tích được sắc thái, nguyên nhân và ảnh hưởng của cảm xúc tới hành vi hoặc việc học.' },
        ]
      },
      {
        id: 'findings',
        title: 'Findings có chiều sâu',
        desc: 'Rút ra bài học, nhận ra giả định hoặc mối liên hệ mới từ trải nghiệm.',
        levels: [
          { lvl: '0. Chưa thể hiện', text: 'Chưa rút ra bài học hoặc phát hiện mới từ trải nghiệm.' },
          { lvl: '1. Bắt đầu', text: 'Nêu một bài học chung, chưa chỉ ra mối liên hệ với trải nghiệm.' },
          { lvl: '2. Đang phát triển', text: 'Rút ra bài học có liên quan nhưng phần lý giải còn ngắn hoặc chưa rõ.' },
          { lvl: '3. Đạt', text: 'Rút ra bài học rõ ràng và giải thích được mối liên hệ với điều đã xảy ra.' },
          { lvl: '4. Tốt', text: 'Nhận ra giả định hoặc mối liên hệ sâu hơn và cho thấy bài học có thể áp dụng sang tình huống khác.' },
        ]
      },
      {
        id: 'future',
        title: 'Future có thể hành động',
        desc: 'Đề xuất bước tiếp theo cụ thể, khả thi và cho thấy cách áp dụng bài học.',
        levels: [
          { lvl: '0. Chưa thể hiện', text: 'Chưa đề xuất bước tiếp theo hoặc hành động cần thực hiện.' },
          { lvl: '1. Bắt đầu', text: 'Nêu một ý định chung nhưng chưa có hành động cụ thể.' },
          { lvl: '2. Đang phát triển', text: 'Đề xuất được hành động nhưng còn thiếu thời điểm, cách làm hoặc tiêu chí hoàn thành.' },
          { lvl: '3. Đạt', text: 'Đề xuất bước tiếp theo cụ thể, khả thi và phù hợp với bài học vừa rút ra.' },
          { lvl: '4. Tốt', text: 'Lập kế hoạch cụ thể, khả thi, có thời điểm, bằng chứng hoàn thành và cách tự kiểm tra kết quả.' },
        ]
      }
    ]
  },

  video: {
    title: 'Video Giới Thiệu Rubric',
    desc: 'Đánh giá sự tự tin, mạch lạc và khả năng trình bày sản phẩm qua video ngắn 60–90s.',
    criteria: [
      {
        id: 'presence',
        title: 'Khuôn mặt & Giọng nói tự tin',
        desc: 'Xuất hiện khuôn mặt thật, giọng nói rõ ràng và phong thái tự tin trước ống kính.',
        levels: [
          { lvl: '0. Chưa đạt', text: 'Không quay mặt thật hoặc không có tiếng nói.' },
          { lvl: '1. Bắt đầu', text: 'Có mặt hoặc giọng nói nhưng còn ngập ngừng, âm thanh khó nghe.' },
          { lvl: '2. Đang phát triển', text: 'Nói rõ ràng, nhìn vào ống kính, âm thanh và ánh sáng chấp nhận được.' },
          { lvl: '3. Đạt', text: 'Trình bày tự tin, giọng nói truyền cảm, năng lượng tích cực.' },
          { lvl: '4. Tốt', text: 'Phong thái cuốn hút, biểu cảm sinh động, kết nối tự nhiên với người xem.' },
        ]
      },
      {
        id: 'product-demo',
        title: 'Nội dung giới thiệu Website',
        desc: 'Chiếu màn hình website và giải thích mạch lạc các phần nổi bật.',
        levels: [
          { lvl: '0. Chưa đạt', text: 'Không chiếu màn hình website hoặc không giới thiệu về trang web.' },
          { lvl: '1. Bắt đầu', text: 'Có chiếu website nhưng chỉ lướt qua, chưa nói rõ nội dung.' },
          { lvl: '2. Đang phát triển', text: 'Giới thiệu được các phần chính trên website và người xem mục tiêu.' },
          { lvl: '3. Đạt', text: 'Dẫn dắt mạch lạc qua các phần, giải thích được lý do chọn domain và điều con tự hào.' },
          { lvl: '4. Tốt', text: 'Kể câu chuyện sản phẩm hấp dẫn, làm nổi bật giá trị cốt lõi và trải nghiệm người dùng.' },
        ]
      },
      {
        id: 'timing-quality',
        title: 'Thời lượng & Chất lượng quay',
        desc: 'Đảm bảo thời lượng chuẩn 60–90s, góc quay gọn gàng và âm thanh rõ ràng.',
        levels: [
          { lvl: '0. Chưa đạt', text: 'Video quá ngắn (<30s) hoặc quá dài (>3 phút), chất lượng mờ rè.' },
          { lvl: '1. Bắt đầu', text: 'Video hơi lệch thời lượng (dưới 50s hoặc trên 2 phút).' },
          { lvl: '2. Đang phát triển', text: 'Thời lượng gần chuẩn (50-100s), hình ảnh và âm thanh rõ.' },
          { lvl: '3. Đạt', text: 'Chuẩn thời lượng 60–90s, nhịp độ vừa phải, bố cục màn hình gọn gàng.' },
          { lvl: '4. Tốt', text: 'Thời lượng hoàn hảo 60–90s, phân bổ thời gian cực kỳ cô đọng, súc tích và hiệu quả.' },
        ]
      }
    ]
  }
};
