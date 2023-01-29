Chu Nhat, 30 thg 1, 2023
AWS - Giới thiệu về S3 (Amazone Simple Storage Service)
AWS:aws
Bài viết giới thiệu khái quát về các AWS S3


Amazon S3 (Amazon Simple Storage Service) is an ***object storage service*** that offers scalability, data availability, security and performance. 

--- 

### I. Features of Amazone S3

#### 1. Storage Classes

Amazon S3 cung cấp các lớp lưu trữ cho nhiều trường hợp khác nhau:
- ***S3 Standard*** Lưu trữ các dữ liệu quan trọng và truy cập thường xuyên
- ***S3 Standard - IA*** or ***S3 One Zone - IA*** Lưu trữ các dữ liệu ít được truy cập để giảm chi phí
- ***S3 Glacier Instant Retrieval***, ***S3 Glacier Flexible Retrieval*** and ***S3 Glacier Deep Archive*** Lưu trữ dữ liệu với chi phí thấp nhất 
- ***S3 Intelligent-Tiering*** Giúp tối ưu hóa chi phí bằng cách tự động di chuyển dữ liệu của bạn giữa các loại classes khi access pattern của bạn thay đổi

 > Chi tiết về AWS S3 Storage Classes sẽ được tách ra một bài khác
 
 