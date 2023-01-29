Chu Nhat, 30 thg 1, 2023
AWS - S3 Storage Classes và Glacier
AWS:aws
Bài viết giới thiệu về Amazon S3 Storage Classes và Glacier

Amazone S3 Storage Classes and Glacier
--- 

Amazon S3 cung cấp các lớp lưu trữ dựa trên các yêu cầu về quyền truy cập dữ liệu, khả năng phục hồi và chi phí tương ứng với khối lượng công việc. 

Các storage class hiện tại có bao gồm:
- AWS S3 Standard
- AWS S3 Standard-Infrequent Access (Standard-IA)
- AWS S3 One Zone-Infrequent Access (One Zone-IA)
- AWS S3 Intelligent-Tiering
- AWS S3 Glacier Instant Retrieval
- AWS S3 Glacier Flexible Retrieval 
- AWS S3 Glacier Deep Archive
- AWS S3 on Outposts

![[aws-s3-storage_class-glacier-1.png]]
Các class khác nhau có các thuộc tính khác nhau về: cost, avaibility, durability và frequency

__S3 Standard__ 
- Là Storage class mặc định
- Durability là 99.999999999% (11 số 9)
-  Avaibility là 99.99%
- Chi phí cao nhất
- Use-cases: Dùng để phân tích dữ liệu, Mobile và gaming applications, content distribution ...

__S3 Standard-Infrequent Access (Standard-IA)__
- Sử dụng cho các object truy cập không thường xuyên nhưng cần độ khả dụng cao khi được truy cập
- Durability là 99.999999999% (11 số 9)
-  Avaibility là 99.9%
- Chi phí rẻ hơn __Standard__
- Use-cases: Dữ liệu backup cho phục hồi khi thiên tai,...

__S3 One Zone-Infrequent Access (One Zone-IA)__
- Tương tự như __Standard-IA__ nhưng chỉ lưu trữ ở 1 AZ
- Durability là 99.999999999% (11 số 9) trong 1 AZ, nếu AZ đó bị hủy thì dữ liệu cũng bị mất
- Chi phí rẻ hơn __Standard-IA__ (~20%)
- Use-cases: Sử dụng trong lưu trữ bản sao dự phòng thứ cấp của on-premise data hoặc dữ liệu dễ dàng tạo lại

__S3 Intelligent-Tiering__
- Được thiết kế cho các object chưa xác định mức độ truy cập hoặc có mức độ truy cập không cố định. S3 sẽ theo mức độ truy cập các object và chuyển chúng vào truy cập phù hợp
- Durability là 99.999999999% (11 số 9)
-  Avaibility là 99.9%
- Chi phí thấp cho việc monitor hàng tháng và chuyển đổi kiểu lưu trữ

__S3 Glacier Instant Retrieval__
- Dành cho việc lưu trữ có chi phí __thấp nhất__ cho dữ liệu __tồn tại lâu__, __hiếm khi được truy cập__ và __yêu cầu truy xuất tính bằng miliseconds__. 
- Chi phí có thể ít hơn __68% so với Standard-IA khi dữ liệu được truy cập 1 lần/quý__
- Durability là 99.999999999% (11 số 9) trên multiple AZs
- Dữ liệu có thể phục hồi trong trường hợp toàn bộ AZs bị phá hủy
-  Avaibility là 99.9%
- Kích thước tối thiểu 128 KB
- Use-cases: Sử dụng lưu trữ dữ liệu ngay lập tức, như hình ảnh y tế, news media assets hoặc dữ liệu người dùng tạo.
- Có thể upload dữ liệu trực tiếp lên __S3 Glacier Instant Retrieval__ hoặc sử dụng S3 Lifecycle

__S3 Glacier Deep Archive__ 


TBD