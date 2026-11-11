export default {
  lang: 'vi', label: 'Tiếng Việt', other: { code: 'en', label: 'English' },
  nav: { privacy: 'Chính sách quyền riêng tư', terms: 'Điều khoản sử dụng', support: 'Hỗ trợ' },
  updated: 'Ngày hiệu lực', home: { title: 'vTasku', lead: 'Ứng dụng ghi chi tiêu cá nhân đơn giản. Dữ liệu chi tiêu nằm trên điện thoại của bạn.' },
  privacy: { title: 'Chính sách quyền riêng tư', html: `
<p>Chính sách này giải thích vTasku (“ứng dụng”) xử lý thông tin như thế nào. Tóm tắt: <strong>khoản chi, ghi chú, ảnh hóa đơn và ngân sách của bạn nằm trên thiết bị của bạn. Chúng tôi không có tài khoản người dùng và không đọc được các dữ liệu này.</strong></p>

<h2>1. Ai chịu trách nhiệm</h2>
<p>vTasku do {{operator}}, {{country}} vận hành. Liên hệ về quyền riêng tư: <a href="mailto:{{email}}">{{email}}</a>.</p>

<h2>2. Dữ liệu ở lại trên thiết bị</h2>
<p>Mọi khoản chi, danh mục, ghi chú, ảnh hóa đơn, ngân sách, khoản chi định kỳ, tìm kiếm và cài đặt chỉ được lưu trên thiết bị. vTasku không kết nối với ngân hàng hay ví của bạn. Tính năng ghi Apple Pay chỉ nhận số tiền và tên nơi chi mà <em>chính bạn</em> thiết lập trong Phím tắt của Apple và giữ chúng trên thiết bị.</p>

<h2>3. Dữ liệu rời khỏi thiết bị</h2>
<table>
<tr><th>Tính năng</th><th>Dữ liệu gửi đi</th><th>Gửi cho ai</th></tr>
<tr><td>Quảng cáo (gói Miễn phí)</td><td>Mã thiết bị, địa chỉ IP (vị trí gần đúng), tương tác quảng cáo, dữ liệu chẩn đoán</td><td>Google AdMob</td></tr>
<tr><td>Mua gói Plus</td><td>Mã người dùng ẩn danh và lịch sử mua</td><td>RevenueCat, cùng Apple App Store / Google Play</td></tr>
<tr><td>Mã mời (khi có)</td><td>Một mã ngẫu nhiên tạo trên máy, mã mời của bạn, mã bạn nhập và khóa Apple App Attest (xem mục 7)</td><td>Máy chủ của chúng tôi</td></tr>
<tr><td>Sao lưu iCloud (Plus, tùy chọn)</td><td>Bản sao chi tiêu, ngân sách, nhãn và khoản chi định kỳ</td><td>Tài khoản iCloud của chính bạn, do Apple lưu trữ</td></tr>
</table>
<p>Sao lưu iCloud tắt cho đến khi bạn bật trong Cài đặt. Bản sao do Apple lưu trong tài khoản iCloud của bạn và chỉ vTasku trên các thiết bị của bạn đọc được; chúng tôi không có quyền truy cập. Xóa tất cả dữ liệu cũng xóa bản sao trên iCloud.</p>
<p>Không có dữ liệu nào khác rời khỏi thiết bị. Chúng tôi không dùng công cụ phân tích hay dịch vụ AI trên dữ liệu của bạn, và không dùng dữ liệu của ứng dụng để theo dõi bạn qua các ứng dụng và trang web khác.</p>

<h2>4. Quảng cáo và lựa chọn của bạn</h2>
<p>Gói Miễn phí hiển thị quảng cáo của Google AdMob. Google có thể nhận mã thiết bị, địa chỉ IP, dữ liệu tương tác quảng cáo và dữ liệu chẩn đoán. Trên iOS quảng cáo không được cá nhân hóa và vTasku không xin phép theo dõi bạn qua các ứng dụng. Tại Khu vực Kinh tế châu Âu, Anh và Thụy Sĩ chúng tôi hỏi ý kiến bạn trước, và bạn đổi lựa chọn bất cứ lúc nào trong Cài đặt (Tùy chọn quảng cáo). Người dùng Plus không thấy quảng cáo và ứng dụng không gửi dữ liệu tới AdMob. Xem <a href="https://policies.google.com/technologies/partner-sites">cách Google sử dụng thông tin</a>.</p>

<h2>5. Thanh toán</h2>
<p>Việc mua do Apple App Store hoặc Google Play xử lý; chúng tôi không thấy thẻ hay thông tin thanh toán của bạn. Để xác nhận quyền Plus, chúng tôi dùng RevenueCat, nơi nhận một mã người dùng ẩn danh và lịch sử mua của bạn.</p>

<h2>6. Chia sẻ với ứng dụng Vung</h2>
<p>Nếu bạn bật, vTasku ghi tổng chi theo tháng và theo danh mục vào một tệp trên thiết bị để ứng dụng Vung của cùng nhà phát triển đọc. Dữ liệu không đi qua mạng. Không chia sẻ từng khoản chi, nơi chi, ghi chú hay ảnh hóa đơn. Bạn tắt được và xóa tệp chia sẻ trong Cài đặt.</p>

<h2>7. Mã mời và thời gian Plus thưởng</h2>
<p>Nếu bạn dùng mã mời, máy chủ của chúng tôi lưu: một mã người dùng ngẫu nhiên tạo trên máy bạn, mã mời của bạn, ngày kết thúc thời gian Plus thưởng, và khóa công khai cùng bộ đếm của một khóa Apple App Attest. App Attest giúp chúng tôi kiểm tra yêu cầu đến từ bản ứng dụng chính hãng, và Apple tham gia vào việc kiểm tra này. Chúng tôi không lưu tên, email, địa chỉ IP hay khoản chi của bạn. Khi bạn dùng <em>Xóa toàn bộ dữ liệu</em> trong ứng dụng, bản ghi của bạn trên máy chủ bị xóa. Một bản ghi giới thiệu có thể còn lại nhưng không kèm mã nhận dạng nào, để giới hạn theo năm vẫn hoạt động.</p>

<h2>8. Lưu trữ và nhật ký</h2>
<p>Máy chủ chạy trên Heroku tại {{serverRegionVi}}. Nhật ký định tuyến của Heroku có thể chứa địa chỉ IP trong thời gian ngắn; nhật ký của chúng tôi chỉ có đường dẫn yêu cầu, mã trạng thái và thời gian xử lý. Địa chỉ IP chỉ được dùng trong bộ nhớ để hạn chế lạm dụng.</p>

<h2>9. Thời gian lưu trữ</h2>
<p>Dữ liệu trên thiết bị tồn tại đến khi bạn xóa hoặc gỡ ứng dụng. Bản ghi trên máy chủ tồn tại đến khi bạn dùng Xóa toàn bộ dữ liệu hoặc yêu cầu chúng tôi xóa. Bên thứ ba (Google, RevenueCat, Apple) giữ dữ liệu theo chính sách của họ.</p>

<h2>10. Quyền của bạn</h2>
<p>Bạn xuất dữ liệu (CSV) và xóa toàn bộ dữ liệu ngay trong ứng dụng (Cài đặt → Dữ liệu và quyền riêng tư). Với dữ liệu do bên thứ ba hoặc máy chủ của chúng tôi giữ, bạn có thể yêu cầu truy cập, sửa, xóa, phản đối theo luật nơi bạn ở (ví dụ GDPR ở EU/Anh, luật bảo vệ dữ liệu cá nhân của Việt Nam) bằng cách gửi email tới <a href="mailto:{{email}}">{{email}}</a>; chúng tôi trả lời trong 30 ngày. Bạn cũng có thể khiếu nại với cơ quan bảo vệ dữ liệu của mình.</p>

<h2>11. Chuyển dữ liệu quốc tế</h2>
<p>Google và RevenueCat có thể xử lý dữ liệu ở các nước ngoài nơi bạn ở, kể cả Hoa Kỳ, dựa trên các biện pháp bảo vệ như điều khoản hợp đồng tiêu chuẩn; xem chính sách của họ.</p>

<h2>12. Trẻ em</h2>
<p>vTasku dành cho người từ 18 tuổi và không cố ý thu thập dữ liệu của người dưới 18 tuổi.</p>

<h2>13. Dự kiến: đóng góp giá ẩn danh (không có trong phiên bản này)</h2>
<p>Phiên bản sau có thể có công tắc tùy chọn, mặc định tắt, để đóng góp giá ẩn danh (tên địa điểm công khai, danh mục, số tiền và ngày, không có giờ, vị trí, ghi chú, ảnh, địa chỉ IP hay mã người dùng). Ứng dụng sẽ cho bạn xem chính xác dữ liệu gửi đi, bạn tắt được bất cứ lúc nào, và chúng tôi sẽ cập nhật chính sách này và xin đồng ý trong ứng dụng trước khi bắt đầu.</p>

<h2>14. Thay đổi</h2>
<p>Với thay đổi quan trọng chúng tôi sẽ thông báo trong ứng dụng trước khi áp dụng. Ngày hiệu lực: {{effectiveDate}}.</p>
` },
  terms: { title: 'Điều khoản sử dụng', html: `
<p>Các điều khoản này áp dụng cho ứng dụng vTasku và được dùng cùng <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Thỏa thuận cấp phép người dùng cuối tiêu chuẩn của Apple</a>; nếu mâu thuẫn, điều khoản của Apple được ưu tiên về phần giấy phép.</p>

<h2>1. Giấy phép sử dụng</h2>
<p>Bạn được quyền dùng vTasku cho mục đích cá nhân, không chuyển nhượng. Bạn không được sao chép, dịch ngược hay bán lại ứng dụng. Bạn phải từ 18 tuổi.</p>

<h2>2. vTasku không phải lời khuyên tài chính</h2>
<p>vTasku chỉ giúp ghi và xem chi tiêu. Các biểu đồ, tổng số, dự báo và so sánh chỉ mang tính tham khảo, không phải tư vấn tài chính, thuế, đầu tư hay pháp lý. Bạn tự chịu trách nhiệm về quyết định tài chính của mình.</p>

<h2>3. Dữ liệu của bạn</h2>
<p>Dữ liệu chi tiêu nằm trên thiết bị. Nếu bạn gỡ ứng dụng hoặc đổi máy mà không sao lưu (bản sao lưu của hệ điều hành hoặc xuất CSV), bạn có thể mất dữ liệu và chúng tôi không khôi phục được. Hãy xuất CSV định kỳ.</p>

<h2>4. Gói Miễn phí và quảng cáo</h2>
<p>Gói Miễn phí có quảng cáo do bên thứ ba cung cấp. Chúng tôi không chịu trách nhiệm về nhà quảng cáo hay trang đích mà quảng cáo dẫn tới.</p>

<h2>5. vTasku Plus</h2>
<ul>
<li>Gói Tháng và Năm tự động gia hạn trừ khi bạn hủy ít nhất 24 giờ trước khi kỳ hiện tại kết thúc.</li>
<li>Thanh toán được trừ vào tài khoản Apple ID hoặc Google Play khi xác nhận mua; phí gia hạn được tính trong 24 giờ trước khi hết kỳ.</li>
<li>Bạn quản lý hoặc hủy trong cài đặt tài khoản cửa hàng; gỡ ứng dụng không hủy đăng ký.</li>
<li>Gói Trọn đời trả một lần, không gia hạn, gắn với tài khoản cửa hàng của bạn; dùng nút Khôi phục khi đổi máy.</li>
<li>Hoàn tiền do Apple hoặc Google quyết định, không phải chúng tôi. Giá hiển thị theo tiền tệ của bạn và có thể thay đổi.</li>
</ul>

<h2>6. Mã mời</h2>
<p>Mã mời tặng thời gian Plus thưởng cho bạn và người đã mời bạn, trong giới hạn theo năm cho mỗi người mời. Thời gian thưởng không có giá trị quy đổi tiền, không được bán, và không bao giờ phụ thuộc vào việc đánh giá hay chấm điểm ứng dụng. Chúng tôi có thể từ chối hoặc thu hồi thời gian thưởng nhận được do lạm dụng hay gian lận, và có thể thay đổi hoặc chấm dứt chương trình.</p>

<h2>7. Sử dụng chấp nhận được</h2>
<p>Không dùng vTasku để vi phạm pháp luật, gây hại dịch vụ hoặc máy chủ, hay gửi dữ liệu sai lệch. Chúng tôi có thể chặn các yêu cầu có dấu hiệu lạm dụng.</p>

<h2>8. Bảo đảm và giới hạn trách nhiệm</h2>
<p>Ứng dụng được cung cấp “như hiện có”. Trong phạm vi luật cho phép, chúng tôi không chịu trách nhiệm về thiệt hại gián tiếp hoặc mất dữ liệu; tổng trách nhiệm không vượt quá số tiền bạn đã trả trong 12 tháng gần nhất. Quyền bắt buộc của người tiêu dùng theo luật nơi bạn ở không bị ảnh hưởng.</p>

<h2>9. Thay đổi, chấm dứt, luật áp dụng</h2>
<p>Bạn có thể ngừng dùng ứng dụng bất cứ lúc nào. Chúng tôi có thể cập nhật điều khoản và sẽ thông báo trong ứng dụng về thay đổi quan trọng. Luật áp dụng: {{governingLaw}}; người tiêu dùng EU giữ quyền theo luật nơi cư trú. Liên hệ: <a href="mailto:{{email}}">{{email}}</a>. Ngày hiệu lực: {{effectiveDate}}.</p>
` },
  support: { title: 'Hỗ trợ', html: `
<p>Câu hỏi, lỗi hoặc yêu cầu về quyền riêng tư: <a href="mailto:{{email}}">{{email}}</a>. Chúng tôi đọc mọi thư và thường trả lời trong vài ngày.</p>

<h2>Xuất hoặc xóa dữ liệu của tôi</h2>
<p>Cài đặt → Dữ liệu và quyền riêng tư → <em>Xuất CSV</em> hoặc <em>Xóa toàn bộ dữ liệu</em>. Xóa có hiệu lực ngay và không hoàn tác được.</p>

<h2>Hủy đăng ký</h2>
<p>Trên iPhone: Cài đặt → tên của bạn → Đăng ký → vTasku. Gỡ ứng dụng không hủy đăng ký. Muốn hoàn tiền, dùng trang “Báo cáo sự cố” của Apple.</p>

<h2>Khôi phục giao dịch hoặc đổi điện thoại</h2>
<p>Mở vTasku Plus và chạm <em>Khôi phục giao dịch</em> khi đang đăng nhập cùng Apple ID. Dữ liệu chi tiêu chỉ nằm trên điện thoại: hãy dùng bản sao lưu iPhone hoặc xuất CSV trước khi đổi máy.</p>

<h2>Tự ghi thanh toán Apple Pay</h2>
<ol>
<li>Mở Phím tắt → Tự động hóa → Tạo mới → Giao dịch.</li>
<li>Chọn thẻ, rồi thêm hành động <em>Mở URL</em>.</li>
<li>Dùng địa chỉ <code>vtasku://add?amount=[Số tiền]&amp;merchant=[Người bán]</code> và chèn biến Số tiền và Người bán.</li>
<li>Đặt chạy ngay. Khoản mới hiện trong danh sách “Chờ xác nhận” của vTasku để bạn duyệt.</li>
</ol>

<h2>Chia sẻ với Vung</h2>
<p>Bật trong Cài đặt → Vung. Chỉ tổng chi theo tháng và danh mục được ghi vào một tệp trên điện thoại; không gửi gì qua internet. Bạn tắt và xóa tệp bất cứ lúc nào.</p>

<h2>Mã mời (sắp có)</h2>
<p>Chia sẻ mã của bạn từ Cài đặt. Khi bạn bè nhập mã, cả hai nhận thời gian Plus thưởng (có giới hạn theo năm). Xóa toàn bộ dữ liệu cũng xóa bản ghi của bạn trên máy chủ.</p>

<h2>Sao lưu iCloud (Plus)</h2>
<p>Cài đặt → Sao lưu iCloud giữ một bản sao dữ liệu trong iCloud của chính bạn. Trên điện thoại mới: cài vTasku, mở vTasku Plus, chạm <em>Khôi phục giao dịch mua</em>, rồi vào Cài đặt → Sao lưu iCloud và chạm <em>Khôi phục từ iCloud</em>. Xóa tất cả dữ liệu cũng xóa bản sao này.</p>

<h2>Pháp lý</h2>
<p><a href="{{base}}privacy/vi/">Chính sách quyền riêng tư</a> · <a href="{{base}}terms/vi/">Điều khoản sử dụng</a></p>
` },
};
