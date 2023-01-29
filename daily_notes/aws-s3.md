Chu Nhat, 30 thg 1, 2023
AWS - Giới thiệu về S3 (Amazone Simple Storage Service)
AWS:aws
Bài viết giới thiệu khái quát về các AWS S3

Amazon S3 (Amazon Simple Storage Service) 

Amazon S3 is an ___object storage service___ that offers scalability, data availability, security and performance. 

--- 

### I. Features of Amazone S3

#### 1. Storage classes

Amazon S3 cung cấp các lớp lưu trữ cho nhiều trường hợp khác nhau:
- ***S3 Standard*** Lưu trữ các dữ liệu quan trọng và truy cập thường xuyên
- ***S3 Standard - IA*** or ***S3 One Zone - IA*** Lưu trữ các dữ liệu ít được truy cập để giảm chi phí
- ***S3 Glacier Instant Retrieval***, ***S3 Glacier Flexible Retrieval*** and ***S3 Glacier Deep Archive*** Lưu trữ dữ liệu với chi phí thấp nhất 
- ***S3 Intelligent-Tiering*** Giúp tối ưu hóa chi phí bằng cách tự động di chuyển dữ liệu của bạn giữa các loại classes khi access pattern của bạn thay đổi

 > Chi tiết về AWS S3 Storage Classes sẽ được tách ra một bài khác

#### 2. Storage management

Amazon S3 cung cấp nhiều chức năng để audit và quản lý việc truy cập vào các buckets và objects. Mặc định thì S3 buckets và các object đều là private.   
Các tính năng giúp quản lý việc cấp phát tài nguyên S3: 
- __S3 Block Public Access__ Chặn các truy cập công khai vào các bucket và objects. Mặc định thì việc chặn truy cập công khai được bật ở level __account__ và __bucket__
- __AWS Identity and Access Management (IAM)__ Tạo IAM users cho AWS account để quản lý việc truy cập vào tài nguyên S3 của bạn.
- __Bucket policies__ Sử dụng **IAM-based policy** để cấu hình quyền truy cập __resource base__ cho các __bucket__ và __objects__.
- __Amazon S3 access points__ Cấu hình endpoint cho các  dữ liệu có chung permission rules.
- __Access control list (ACLs)__ Cấp quyền đọc và viết các buckets và object cho users. Được tạo ra trước resource-base và IAM.
- __S3 Object Ownership__ Disable ACLs và sở hữu mọi object trong bucket.
- __Access Analyzer for S3__ Đánh giá và giam sát các policies truy cập S3 bucket, đảm bảo các policies này chỉ cung cấp quyền truy cập dự kiến vào các S3 resources của bạn.

#### 3. Data processing

Để biến đổi dữ liệu và trigger workflows tự động, có thể sử dụng 2 cách sau:
- __S3 Object Lambda__ Thêm code vào các requests S3 GET, HEAD and LIST để thay đổi và xử lý dữ liệu trước khi trả về.
- __Event notifications__ Tạo các trigger workflows và sử dụng __Amazon SNS__, __Amazon SQS__ và __Amazon Lambda__ khi có thay đổi đối với các S3 resources.

#### 4. Storage logging and monitoring

Amazon S3 cung cấp các tools để giám sát và ghi log để kiểm soát các S3 resources đang được sử dụng.

Các công cụ giám sát tự động: 
- __Amazon CloudWatch metrics for Amazon S3__ Theo dõi tình trạng hoạt động của các S3 resources và cấu hình cảnh báo thanh toán khi đến ngưỡng.
- __AWS CloudTrail__ Ghi lại các hành động của một user, một role hoặc một AWS service nào đó trong Amazon S3. CloudTrail logs cung cấp nội dung chi tiết API tracking ở bucket-level và object-level.

Các công cụ giám sát thủ công:
- __Server access loging__ Ghi lại chi tiết các requests được thực hiện đối với bucket. Thường được sử dụng để kiểm tra bảo mật và truy cập, tìm hiểu về cơ sở khách hàng và hiểu về hóa đơn Amazon S3.
- __AWS Trusted Advisor__ Đánh giá tài khoản của bạn để xác định các cách tối ưu hóa cơ sở hạ tầng AWS, nhằm cải thiện bảo mật, hiệu suất, giảm chi phí và theo dõi định mức dịch vụ.

#### 5. Analytics and insights

Amazon S3 cung cấp các dịch vụ giúp hiểu rõ về mức độ sử dụng bộ nhớ, để có thể phân tích và tối ưu hóa bộ nhớ.
- __Amazon S3 Storage Lens__ Sử dụng để giúp bạn hiểu, phân tích và tối ưu storage của bạn.
- __Storage Class Analysis__
- __S3 Inventory with Inventory reports__


### II. How Amazon S3 works

Amazon S3 là dịch vụ lưu trữ dữ liệu dạng đối tượng, các dữ liệu được lưu trữ trong các buckets. Một đối tượng là một file và các metadata mô tả file đó. 

__Bucket__ : Bucket là một container để lưu trữ các objects trên S3. Có thể lưu trữ bao nhiêu objects trong 1 bucket cũng được, nhưng chỉ được có 100 buckets trong 1 account (Để có thế tăng số lượng buckets, cần request).

Khi tạo 1 bucket, cần nhập bucket name và chọn region. Sau khi tạo, không thể đổi tên của bucket và region đã chọn. Tên của bucket phải tuân thủ rules sau:
- Phải có tối thiểu 3 ký tự và tối đa 63 ký tự
- Tên chỉ được chứa các chữ cái viết thường, số, dấu chấm (.) và dấu gạch ngang (-)
- Tên phải bắt đầu và kết thúc với ký tự hoặc số
- Tên không được chứa 2 dấu (.) liền nhau
- Tên không được có format dạng địa chỉ IP (như là 192.168.3.4)
- Tên không được bắt đầu với tiền tố "xn--"
- Tên không được kết thúc với hậu tố "-s3alias"
- Tên phải là duy nhất trong 1 phân vùng (hiện có 3 phân vùng: -   `aws` (Standard Regions), `aws-cn` (China Regions), and `aws-us-gov` (AWS GovCloud (US)).
- Tên khi sử dụng dịch vụ __S3 Transfer Acceleration__ không được có dấu (.)

__Objects__ : Là các thực thể cơ bản được lưu trữ trong Amazon S3. Objects chức dữ liệu và các metadata. Các metadata là các cặp name-value được sử dụng để mô tả object. Các metadata default như: 
- The date last modified 
- The standard HTTP metadata
- Content-Type
 
Một object là duy nhất trong bucket bởi key (name) và version ID (nếu bạn enable S3 Versioning cho bucket đó).

__Keys__ : Là tên của object đó, nó là định danh unique cho một object trong bucket. Mỗi một object trong bucket được xác định với 1 key 

VD: Ta có 1 URL: `https://DOC-EXAMPLE-BUCKET.s3.us-west-2.amazonaws.com/photos/puppy.jpg`

__DOC-EXAMPLE-BUCKET__  là bucket name
__photos/puppy.jpg__ là key của object đang truy cập

__S3 Versioning__ : 
- Chúng ta có thể tạo các version của 1 object
- Tính năng này được enable ở __bucket level__
- Khi 1 object có chung key thì version sẽ được tự động tạo ra
- Khi tạo object đó lần đầu tiên thì version ID của nó sẽ là null

__Bucket policy__ : là resource-based AWS Identity và IAM policy mà bạn có thể sử dụng để cấp quyền truy cập bucket và các objects. Chỉ có bucket owner mới có thể liên kết policy với bucket đó.

*Bucket policies được giới hạn ở kích thước 20KB*

