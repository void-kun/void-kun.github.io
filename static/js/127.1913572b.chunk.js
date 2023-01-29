(self.webpackChunklib=self.webpackChunklib||[]).push([[127],{127:function(t,c,e){"use strict";e.r(c),e.d(c,{default:function(){return A}});var n=e(9087),a=e(3772),i=e(379),s=e(5065),r=e(3241),o=e(5645),h=e(3030),l=e(9099),u=e(4546),g=e(4999),p=e(5590),d=e(2547),_=e(404),m=e(457),v=["node","inline","className","children"],S={code:function(t){t.node;var c=t.inline,e=t.className,n=t.children,a=(0,h.Z)(t,v),i=/language-(\w+)/.exec(e||"");return!c&&i?(0,m.jsx)(d.Z,(0,o.Z)({children:String(n).replace(/\n$/,""),style:_.Z,language:i[1],PreTag:"div"},a)):(0,m.jsx)("code",(0,o.Z)((0,o.Z)({className:e},a),{},{children:n}))},image:function(t){var c=t.alt,e=t.src,n=t.title;return(0,m.jsx)("img",{alt:c,src:e,title:n,style:{maxWidth:"48rem"}})}},b=function(t){var c=t.postSlug,h=(0,i.s0)(),d=(0,a.useState)(),_=(0,n.Z)(d,2),v=_[0],b=_[1];return(0,a.useEffect)((function(){function t(){return(t=(0,r.Z)((0,s.Z)().mark((function t(){var n;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e(1372)("./".concat(c,".json"));case 3:n=t.sent,b((0,o.Z)((0,o.Z)({},n),{},{markdown:n.markdown.join("\n")})),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}c&&function(){t.apply(this,arguments)}()}),[c,h]),v?(0,m.jsxs)("div",{className:"pt-4",children:[(0,m.jsxs)("article",{className:"prose flex flex-col m-auto",children:[(0,m.jsx)("h1",{className:"mb-4",children:v.title}),(0,m.jsx)("span",{className:"w-36 h-[2px]  bg-brown-light"}),(0,m.jsx)("time",{className:"mb-12",children:v.timestamp}),v.banner_url&&(0,m.jsx)("img",{src:v.banner_url,alt:"banner",className:""}),(0,m.jsx)(l.D,{children:v.markdown,remarkPlugins:[u.Z],rehypePlugins:[g.Z],components:S})]}),(0,m.jsxs)("div",{className:"mt-8 flex",children:[(0,m.jsx)("span",{className:"font-medium text-lg mr-4",children:"Category:"}),v.categories&&v.categories.map((function(t){return(0,m.jsxs)(p.rU,{to:"/categories/".concat(t.path),className:"grid place-content-center text-brown-dark font-medium hover:underline mr-4",children:["#",t.name]},"".concat(t.path,"_markdown"))}))]})]}):null},A=function(){var t=(0,i.s0)(),c=(0,i.TH)().pathname,e=(0,a.useState)(""),s=(0,n.Z)(e,2),r=s[0],o=s[1];return(0,a.useEffect)((function(){c&&!c.match(/\/posts\/[A-Z]+\//g)||t("/"),o(c.replace("/posts/",""))}),[c,t]),(0,m.jsxs)("div",{className:"max-w-3xl m-auto",children:[(0,m.jsx)(b,{postSlug:r}),(0,m.jsx)("footer",{children:(0,m.jsxs)("p",{className:"text-center pb-8 pt-12 flex justify-center items-center gap-2",children:[(0,m.jsx)("span",{className:"text-[#BBB]",children:"powered by"}),(0,m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",className:"w-4 h-4 fill-brown-dark",children:(0,m.jsx)("path",{d:"M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"})}),(0,m.jsx)("a",{href:"https://github.com/void-kun/void-kun.github.io",className:"font-medium hover:text-brown-dark",children:"zrik"})]})})]})}},1372:function(t,c,e){var n={"./aws-global_infrastructures.json":8355,"./aws-s3-storage_class-glacier.json":3003,"./aws-s3.json":4672,"./categories.json":2792,"./posts.json":29};function a(t){var c=i(t);return e(c)}function i(t){if(!e.o(n,t)){var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id=1372},8355:function(t){"use strict";t.exports=JSON.parse('{"timestamp":"Chu Nhat, 30 thg 1, 2023","title":"AWS - Global infrastructures","slug":"aws-global_infrastructures","categories":[{"name":"AWS","path":"aws"}],"summary":"B\xe0i vi\u1ebft ch\xe9m gi\xf3 v\u1ec1 AWS global infrastructure, n\xe0o l\xe0 data center, availability zones, regions, etc ...","markdown":["","","***\u1ede tu\u1ea7n \u0111\u1ea7u ti\xean trong l\u1ed9 tr\xecnh h\u1ecdc AWS c\u1ee7a m\xecnh, ch\xfang ta s\u1ebd l\xe0m quen v\u1edbi ki\u1ebfn tr\xfac global c\u1ee7a n\xf3 tr\u01b0\u1edbc.***","","Global infrastructure c\u1ee7a AWS bao g\u1ed3m:","- AWS - Data Center","- AWS - Availablility Zones","- AWS - Regions","- AWS - Local Zones","- AWS - Wavelength Zones","- AWS - Edge Location","","---","","### AWS - Data Center","","- Thousands of servers. Typically over 50k","- Not \\"cold\\"","- Up to 102 Tbps provisioned in to a single DC","- AWS custom equipment","\\t- Multi ODM sourced","\\t- Amazon custom network protocol stack","","","### AWS - Availability Zone","","- One or more data centers in a Available Zone","- Isolated locations","- No data center in 2 Available Zones","- DCs in Available Zone less than 1/4ms apart","- AZs <2ms apart & usually < 1ms","- 25 Tbps peak inter-AZs traffic","","","### AWS - Regions","","- Has two or more Available Zones in a Region","","","### AWS - Local Zones","","- Are a type of infrastructure deployment that places compute, storage, database, and other select AWS services close to large population and industry centers.","- Use cases:","\\t- Run low-latency applications at the edge","\\t- Simplify hybrid cloud migrations","\\t- Meet stringent data residency requirements","","","### AWS - Wavelength","","- Embeds AWS compute and storage services within 5G networks, providing mobile edge computing infrastructure for developing, deploying, and scaling untra-low-latency applications.","- Use cases:","\\t- Build media and entertainment applications","\\t- Accelerate ML inference at the edge","\\t- Develop connected vehicle applications","","","### AWS - Edge Location","","- A site that CloudFront uses to cache copies of your content for faster delivery to users at any location.",""]}')},3003:function(t){"use strict";t.exports=JSON.parse('{"timestamp":"Chu Nhat, 30 thg 1, 2023","title":"AWS - S3 Storage Classes v\xe0 Glacier","slug":"aws-s3-storage_class-glacier","categories":[{"name":"AWS","path":"aws"}],"summary":"B\xe0i vi\u1ebft gi\u1edbi thi\u1ec7u v\u1ec1 Amazon S3 Storage Classes v\xe0 Glacier","markdown":["","Amazone S3 Storage Classes and Glacier","--- ","","Amazon S3 cung c\u1ea5p c\xe1c l\u1edbp l\u01b0u tr\u1eef d\u1ef1a tr\xean c\xe1c y\xeau c\u1ea7u v\u1ec1 quy\u1ec1n truy c\u1eadp d\u1eef li\u1ec7u, kh\u1ea3 n\u0103ng ph\u1ee5c h\u1ed3i v\xe0 chi ph\xed t\u01b0\u01a1ng \u1ee9ng v\u1edbi kh\u1ed1i l\u01b0\u1ee3ng c\xf4ng vi\u1ec7c. ","","C\xe1c storage class hi\u1ec7n t\u1ea1i c\xf3 bao g\u1ed3m:","- AWS S3 Standard","- AWS S3 Standard-Infrequent Access (Standard-IA)","- AWS S3 One Zone-Infrequent Access (One Zone-IA)","- AWS S3 Intelligent-Tiering","- AWS S3 Glacier Instant Retrieval","- AWS S3 Glacier Flexible Retrieval ","- AWS S3 Glacier Deep Archive","- AWS S3 on Outposts","","![[aws-s3-storage_class-glacier-1.png]]","C\xe1c class kh\xe1c nhau c\xf3 c\xe1c thu\u1ed9c t\xednh kh\xe1c nhau v\u1ec1: cost, avaibility, durability v\xe0 frequency","","__S3 Standard__ ","- L\xe0 Storage class m\u1eb7c \u0111\u1ecbnh","- Durability l\xe0 99.999999999% (11 s\u1ed1 9)","-  Avaibility l\xe0 99.99%","- Chi ph\xed cao nh\u1ea5t","- Use-cases: D\xf9ng \u0111\u1ec3 ph\xe2n t\xedch d\u1eef li\u1ec7u, Mobile v\xe0 gaming applications, content distribution ...","","__S3 Standard-Infrequent Access (Standard-IA)__","- S\u1eed d\u1ee5ng cho c\xe1c object truy c\u1eadp kh\xf4ng th\u01b0\u1eddng xuy\xean nh\u01b0ng c\u1ea7n \u0111\u1ed9 kh\u1ea3 d\u1ee5ng cao khi \u0111\u01b0\u1ee3c truy c\u1eadp","- Durability l\xe0 99.999999999% (11 s\u1ed1 9)","-  Avaibility l\xe0 99.9%","- Chi ph\xed r\u1ebb h\u01a1n __Standard__","- Use-cases: D\u1eef li\u1ec7u backup cho ph\u1ee5c h\u1ed3i khi thi\xean tai,...","","__S3 One Zone-Infrequent Access (One Zone-IA)__","- T\u01b0\u01a1ng t\u1ef1 nh\u01b0 __Standard-IA__ nh\u01b0ng ch\u1ec9 l\u01b0u tr\u1eef \u1edf 1 AZ","- Durability l\xe0 99.999999999% (11 s\u1ed1 9) trong 1 AZ, n\u1ebfu AZ \u0111\xf3 b\u1ecb h\u1ee7y th\xec d\u1eef li\u1ec7u c\u0169ng b\u1ecb m\u1ea5t","- Chi ph\xed r\u1ebb h\u01a1n __Standard-IA__ (~20%)","- Use-cases: S\u1eed d\u1ee5ng trong l\u01b0u tr\u1eef b\u1ea3n sao d\u1ef1 ph\xf2ng th\u1ee9 c\u1ea5p c\u1ee7a on-premise data ho\u1eb7c d\u1eef li\u1ec7u d\u1ec5 d\xe0ng t\u1ea1o l\u1ea1i","","__S3 Intelligent-Tiering__","- \u0110\u01b0\u1ee3c thi\u1ebft k\u1ebf cho c\xe1c object ch\u01b0a x\xe1c \u0111\u1ecbnh m\u1ee9c \u0111\u1ed9 truy c\u1eadp ho\u1eb7c c\xf3 m\u1ee9c \u0111\u1ed9 truy c\u1eadp kh\xf4ng c\u1ed1 \u0111\u1ecbnh. S3 s\u1ebd theo m\u1ee9c \u0111\u1ed9 truy c\u1eadp c\xe1c object v\xe0 chuy\u1ec3n ch\xfang v\xe0o truy c\u1eadp ph\xf9 h\u1ee3p","- Durability l\xe0 99.999999999% (11 s\u1ed1 9)","-  Avaibility l\xe0 99.9%","- Chi ph\xed th\u1ea5p cho vi\u1ec7c monitor h\xe0ng th\xe1ng v\xe0 chuy\u1ec3n \u0111\u1ed5i ki\u1ec3u l\u01b0u tr\u1eef","","__S3 Glacier Instant Retrieval__","- D\xe0nh cho vi\u1ec7c l\u01b0u tr\u1eef c\xf3 chi ph\xed __th\u1ea5p nh\u1ea5t__ cho d\u1eef li\u1ec7u __t\u1ed3n t\u1ea1i l\xe2u__, __hi\u1ebfm khi \u0111\u01b0\u1ee3c truy c\u1eadp__ v\xe0 __y\xeau c\u1ea7u truy xu\u1ea5t t\xednh b\u1eb1ng miliseconds__. ","- Chi ph\xed c\xf3 th\u1ec3 \xedt h\u01a1n __68% so v\u1edbi Standard-IA khi d\u1eef li\u1ec7u \u0111\u01b0\u1ee3c truy c\u1eadp 1 l\u1ea7n/qu\xfd__","- Durability l\xe0 99.999999999% (11 s\u1ed1 9) tr\xean multiple AZs","- D\u1eef li\u1ec7u c\xf3 th\u1ec3 ph\u1ee5c h\u1ed3i trong tr\u01b0\u1eddng h\u1ee3p to\xe0n b\u1ed9 AZs b\u1ecb ph\xe1 h\u1ee7y","-  Avaibility l\xe0 99.9%","- K\xedch th\u01b0\u1edbc t\u1ed1i thi\u1ec3u 128 KB","- Use-cases: S\u1eed d\u1ee5ng l\u01b0u tr\u1eef d\u1eef li\u1ec7u ngay l\u1eadp t\u1ee9c, nh\u01b0 h\xecnh \u1ea3nh y t\u1ebf, news media assets ho\u1eb7c d\u1eef li\u1ec7u ng\u01b0\u1eddi d\xf9ng t\u1ea1o.","- C\xf3 th\u1ec3 upload d\u1eef li\u1ec7u tr\u1ef1c ti\u1ebfp l\xean __S3 Glacier Instant Retrieval__ ho\u1eb7c s\u1eed d\u1ee5ng S3 Lifecycle","","__S3 Glacier Deep Archive__ ","","","TBD"]}')},4672:function(t){"use strict";t.exports=JSON.parse('{"timestamp":"Chu Nhat, 30 thg 1, 2023","title":"AWS - Gi\u1edbi thi\u1ec7u v\u1ec1 S3 (Amazone Simple Storage Service)","slug":"aws-s3","categories":[{"name":"AWS","path":"aws"}],"summary":"B\xe0i vi\u1ebft gi\u1edbi thi\u1ec7u kh\xe1i qu\xe1t v\u1ec1 c\xe1c AWS S3","markdown":["","Amazon S3 (Amazon Simple Storage Service) ","---","","Amazon S3 is an ___object storage service___ that offers scalability, data availability, security and performance. ","","### I. Features of Amazone S3","","#### 1. Storage classes","","Amazon S3 cung c\u1ea5p c\xe1c l\u1edbp l\u01b0u tr\u1eef cho nhi\u1ec1u tr\u01b0\u1eddng h\u1ee3p kh\xe1c nhau:","- ***S3 Standard*** L\u01b0u tr\u1eef c\xe1c d\u1eef li\u1ec7u quan tr\u1ecdng v\xe0 truy c\u1eadp th\u01b0\u1eddng xuy\xean","- ***S3 Standard - IA*** or ***S3 One Zone - IA*** L\u01b0u tr\u1eef c\xe1c d\u1eef li\u1ec7u \xedt \u0111\u01b0\u1ee3c truy c\u1eadp \u0111\u1ec3 gi\u1ea3m chi ph\xed","- ***S3 Glacier Instant Retrieval***, ***S3 Glacier Flexible Retrieval*** and ***S3 Glacier Deep Archive*** L\u01b0u tr\u1eef d\u1eef li\u1ec7u v\u1edbi chi ph\xed th\u1ea5p nh\u1ea5t ","- ***S3 Intelligent-Tiering*** Gi\xfap t\u1ed1i \u01b0u h\xf3a chi ph\xed b\u1eb1ng c\xe1ch t\u1ef1 \u0111\u1ed9ng di chuy\u1ec3n d\u1eef li\u1ec7u c\u1ee7a b\u1ea1n gi\u1eefa c\xe1c lo\u1ea1i classes khi access pattern c\u1ee7a b\u1ea1n thay \u0111\u1ed5i",""," > Chi ti\u1ebft v\u1ec1 AWS S3 Storage Classes s\u1ebd \u0111\u01b0\u1ee3c t\xe1ch ra m\u1ed9t b\xe0i kh\xe1c","","#### 2. Storage management","","Amazon S3 cung c\u1ea5p nhi\u1ec1u ch\u1ee9c n\u0103ng \u0111\u1ec3 audit v\xe0 qu\u1ea3n l\xfd vi\u1ec7c truy c\u1eadp v\xe0o c\xe1c buckets v\xe0 objects. M\u1eb7c \u0111\u1ecbnh th\xec S3 buckets v\xe0 c\xe1c object \u0111\u1ec1u l\xe0 private.   ","C\xe1c t\xednh n\u0103ng gi\xfap qu\u1ea3n l\xfd vi\u1ec7c c\u1ea5p ph\xe1t t\xe0i nguy\xean S3: ","- __S3 Block Public Access__ Ch\u1eb7n c\xe1c truy c\u1eadp c\xf4ng khai v\xe0o c\xe1c bucket v\xe0 objects. M\u1eb7c \u0111\u1ecbnh th\xec vi\u1ec7c ch\u1eb7n truy c\u1eadp c\xf4ng khai \u0111\u01b0\u1ee3c b\u1eadt \u1edf level __account__ v\xe0 __bucket__","- __AWS Identity and Access Management (IAM)__ T\u1ea1o IAM users cho AWS account \u0111\u1ec3 qu\u1ea3n l\xfd vi\u1ec7c truy c\u1eadp v\xe0o t\xe0i nguy\xean S3 c\u1ee7a b\u1ea1n.","- __Bucket policies__ S\u1eed d\u1ee5ng **IAM-based policy** \u0111\u1ec3 c\u1ea5u h\xecnh quy\u1ec1n truy c\u1eadp __resource base__ cho c\xe1c __bucket__ v\xe0 __objects__.","- __Amazon S3 access points__ C\u1ea5u h\xecnh endpoint cho c\xe1c  d\u1eef li\u1ec7u c\xf3 chung permission rules.","- __Access control list (ACLs)__ C\u1ea5p quy\u1ec1n \u0111\u1ecdc v\xe0 vi\u1ebft c\xe1c buckets v\xe0 object cho users. \u0110\u01b0\u1ee3c t\u1ea1o ra tr\u01b0\u1edbc resource-base v\xe0 IAM.","- __S3 Object Ownership__ Disable ACLs v\xe0 s\u1edf h\u1eefu m\u1ecdi object trong bucket.","- __Access Analyzer for S3__ \u0110\xe1nh gi\xe1 v\xe0 giam s\xe1t c\xe1c policies truy c\u1eadp S3 bucket, \u0111\u1ea3m b\u1ea3o c\xe1c policies n\xe0y ch\u1ec9 cung c\u1ea5p quy\u1ec1n truy c\u1eadp d\u1ef1 ki\u1ebfn v\xe0o c\xe1c S3 resources c\u1ee7a b\u1ea1n.","","#### 3. Data processing","","\u0110\u1ec3 bi\u1ebfn \u0111\u1ed5i d\u1eef li\u1ec7u v\xe0 trigger workflows t\u1ef1 \u0111\u1ed9ng, c\xf3 th\u1ec3 s\u1eed d\u1ee5ng 2 c\xe1ch sau:","- __S3 Object Lambda__ Th\xeam code v\xe0o c\xe1c requests S3 GET, HEAD and LIST \u0111\u1ec3 thay \u0111\u1ed5i v\xe0 x\u1eed l\xfd d\u1eef li\u1ec7u tr\u01b0\u1edbc khi tr\u1ea3 v\u1ec1.","- __Event notifications__ T\u1ea1o c\xe1c trigger workflows v\xe0 s\u1eed d\u1ee5ng __Amazon SNS__, __Amazon SQS__ v\xe0 __Amazon Lambda__ khi c\xf3 thay \u0111\u1ed5i \u0111\u1ed1i v\u1edbi c\xe1c S3 resources.","","#### 4. Storage logging and monitoring","","Amazon S3 cung c\u1ea5p c\xe1c tools \u0111\u1ec3 gi\xe1m s\xe1t v\xe0 ghi log \u0111\u1ec3 ki\u1ec3m so\xe1t c\xe1c S3 resources \u0111ang \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng.","","C\xe1c c\xf4ng c\u1ee5 gi\xe1m s\xe1t t\u1ef1 \u0111\u1ed9ng: ","- __Amazon CloudWatch metrics for Amazon S3__ Theo d\xf5i t\xecnh tr\u1ea1ng ho\u1ea1t \u0111\u1ed9ng c\u1ee7a c\xe1c S3 resources v\xe0 c\u1ea5u h\xecnh c\u1ea3nh b\xe1o thanh to\xe1n khi \u0111\u1ebfn ng\u01b0\u1ee1ng.","- __AWS CloudTrail__ Ghi l\u1ea1i c\xe1c h\xe0nh \u0111\u1ed9ng c\u1ee7a m\u1ed9t user, m\u1ed9t role ho\u1eb7c m\u1ed9t AWS service n\xe0o \u0111\xf3 trong Amazon S3. CloudTrail logs cung c\u1ea5p n\u1ed9i dung chi ti\u1ebft API tracking \u1edf bucket-level v\xe0 object-level.","","C\xe1c c\xf4ng c\u1ee5 gi\xe1m s\xe1t th\u1ee7 c\xf4ng:","- __Server access loging__ Ghi l\u1ea1i chi ti\u1ebft c\xe1c requests \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n \u0111\u1ed1i v\u1edbi bucket. Th\u01b0\u1eddng \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 ki\u1ec3m tra b\u1ea3o m\u1eadt v\xe0 truy c\u1eadp, t\xecm hi\u1ec3u v\u1ec1 c\u01a1 s\u1edf kh\xe1ch h\xe0ng v\xe0 hi\u1ec3u v\u1ec1 h\xf3a \u0111\u01a1n Amazon S3.","- __AWS Trusted Advisor__ \u0110\xe1nh gi\xe1 t\xe0i kho\u1ea3n c\u1ee7a b\u1ea1n \u0111\u1ec3 x\xe1c \u0111\u1ecbnh c\xe1c c\xe1ch t\u1ed1i \u01b0u h\xf3a c\u01a1 s\u1edf h\u1ea1 t\u1ea7ng AWS, nh\u1eb1m c\u1ea3i thi\u1ec7n b\u1ea3o m\u1eadt, hi\u1ec7u su\u1ea5t, gi\u1ea3m chi ph\xed v\xe0 theo d\xf5i \u0111\u1ecbnh m\u1ee9c d\u1ecbch v\u1ee5.","","#### 5. Analytics and insights","","Amazon S3 cung c\u1ea5p c\xe1c d\u1ecbch v\u1ee5 gi\xfap hi\u1ec3u r\xf5 v\u1ec1 m\u1ee9c \u0111\u1ed9 s\u1eed d\u1ee5ng b\u1ed9 nh\u1edb, \u0111\u1ec3 c\xf3 th\u1ec3 ph\xe2n t\xedch v\xe0 t\u1ed1i \u01b0u h\xf3a b\u1ed9 nh\u1edb.","- __Amazon S3 Storage Lens__ S\u1eed d\u1ee5ng \u0111\u1ec3 gi\xfap b\u1ea1n hi\u1ec3u, ph\xe2n t\xedch v\xe0 t\u1ed1i \u01b0u storage c\u1ee7a b\u1ea1n.","- __Storage Class Analysis__","- __S3 Inventory with Inventory reports__","","","### II. How Amazon S3 works","","Amazon S3 l\xe0 d\u1ecbch v\u1ee5 l\u01b0u tr\u1eef d\u1eef li\u1ec7u d\u1ea1ng \u0111\u1ed1i t\u01b0\u1ee3ng, c\xe1c d\u1eef li\u1ec7u \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef trong c\xe1c buckets. M\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng l\xe0 m\u1ed9t file v\xe0 c\xe1c metadata m\xf4 t\u1ea3 file \u0111\xf3. ","","__Bucket__ : Bucket l\xe0 m\u1ed9t container \u0111\u1ec3 l\u01b0u tr\u1eef c\xe1c objects tr\xean S3. C\xf3 th\u1ec3 l\u01b0u tr\u1eef bao nhi\xeau objects trong 1 bucket c\u0169ng \u0111\u01b0\u1ee3c, nh\u01b0ng ch\u1ec9 \u0111\u01b0\u1ee3c c\xf3 100 buckets trong 1 account (\u0110\u1ec3 c\xf3 th\u1ebf t\u0103ng s\u1ed1 l\u01b0\u1ee3ng buckets, c\u1ea7n request).","","Khi t\u1ea1o 1 bucket, c\u1ea7n nh\u1eadp bucket name v\xe0 ch\u1ecdn region. Sau khi t\u1ea1o, kh\xf4ng th\u1ec3 \u0111\u1ed5i t\xean c\u1ee7a bucket v\xe0 region \u0111\xe3 ch\u1ecdn. T\xean c\u1ee7a bucket ph\u1ea3i tu\xe2n th\u1ee7 rules sau:","- Ph\u1ea3i c\xf3 t\u1ed1i thi\u1ec3u 3 k\xfd t\u1ef1 v\xe0 t\u1ed1i \u0111a 63 k\xfd t\u1ef1","- T\xean ch\u1ec9 \u0111\u01b0\u1ee3c ch\u1ee9a c\xe1c ch\u1eef c\xe1i vi\u1ebft th\u01b0\u1eddng, s\u1ed1, d\u1ea5u ch\u1ea5m (.) v\xe0 d\u1ea5u g\u1ea1ch ngang (-)","- T\xean ph\u1ea3i b\u1eaft \u0111\u1ea7u v\xe0 k\u1ebft th\xfac v\u1edbi k\xfd t\u1ef1 ho\u1eb7c s\u1ed1","- T\xean kh\xf4ng \u0111\u01b0\u1ee3c ch\u1ee9a 2 d\u1ea5u (.) li\u1ec1n nhau","- T\xean kh\xf4ng \u0111\u01b0\u1ee3c c\xf3 format d\u1ea1ng \u0111\u1ecba ch\u1ec9 IP (nh\u01b0 l\xe0 192.168.3.4)","- T\xean kh\xf4ng \u0111\u01b0\u1ee3c b\u1eaft \u0111\u1ea7u v\u1edbi ti\u1ec1n t\u1ed1 \\"xn--\\"","- T\xean kh\xf4ng \u0111\u01b0\u1ee3c k\u1ebft th\xfac v\u1edbi h\u1eadu t\u1ed1 \\"-s3alias\\"","- T\xean ph\u1ea3i l\xe0 duy nh\u1ea5t trong 1 ph\xe2n v\xf9ng (hi\u1ec7n c\xf3 3 ph\xe2n v\xf9ng: -   `aws`\xa0(Standard Regions),\xa0`aws-cn`\xa0(China Regions), and\xa0`aws-us-gov`\xa0(AWS GovCloud (US)).","- T\xean khi s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 __S3 Transfer Acceleration__ kh\xf4ng \u0111\u01b0\u1ee3c c\xf3 d\u1ea5u (.)","","__Objects__ : L\xe0 c\xe1c th\u1ef1c th\u1ec3 c\u01a1 b\u1ea3n \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef trong Amazon S3. Objects ch\u1ee9c d\u1eef li\u1ec7u v\xe0 c\xe1c metadata. C\xe1c metadata l\xe0 c\xe1c c\u1eb7p name-value \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 m\xf4 t\u1ea3 object. C\xe1c metadata default nh\u01b0: ","- The date last modified ","- The standard HTTP metadata","- Content-Type"," ","M\u1ed9t object l\xe0 duy nh\u1ea5t trong bucket b\u1edfi key (name) v\xe0 version ID (n\u1ebfu b\u1ea1n enable S3 Versioning cho bucket \u0111\xf3).","","__Keys__ : L\xe0 t\xean c\u1ee7a object \u0111\xf3, n\xf3 l\xe0 \u0111\u1ecbnh danh unique cho m\u1ed9t object trong bucket. M\u1ed7i m\u1ed9t object trong bucket \u0111\u01b0\u1ee3c x\xe1c \u0111\u1ecbnh v\u1edbi 1 key ","","VD: Ta c\xf3 1 URL: `https://DOC-EXAMPLE-BUCKET.s3.us-west-2.amazonaws.com/photos/puppy.jpg`","","__DOC-EXAMPLE-BUCKET__  l\xe0 bucket name","__photos/puppy.jpg__ l\xe0 key c\u1ee7a object \u0111ang truy c\u1eadp","","__S3 Versioning__ : ","- Ch\xfang ta c\xf3 th\u1ec3 t\u1ea1o c\xe1c version c\u1ee7a 1 object","- T\xednh n\u0103ng n\xe0y \u0111\u01b0\u1ee3c enable \u1edf __bucket level__","- Khi 1 object c\xf3 chung key th\xec version s\u1ebd \u0111\u01b0\u1ee3c t\u1ef1 \u0111\u1ed9ng t\u1ea1o ra","- Khi t\u1ea1o object \u0111\xf3 l\u1ea7n \u0111\u1ea7u ti\xean th\xec version ID c\u1ee7a n\xf3 s\u1ebd l\xe0 null","","__Bucket policy__ : l\xe0 resource-based AWS Identity v\xe0 IAM policy m\xe0 b\u1ea1n c\xf3 th\u1ec3 s\u1eed d\u1ee5ng \u0111\u1ec3 c\u1ea5p quy\u1ec1n truy c\u1eadp bucket v\xe0 c\xe1c objects. Ch\u1ec9 c\xf3 bucket owner m\u1edbi c\xf3 th\u1ec3 li\xean k\u1ebft policy v\u1edbi bucket \u0111\xf3.","","*Bucket policies \u0111\u01b0\u1ee3c gi\u1edbi h\u1ea1n \u1edf k\xedch th\u01b0\u1edbc 20KB*","",""]}')},2792:function(t){"use strict";t.exports=JSON.parse('[{"name":"AWS","path":"aws"}]')},29:function(t){"use strict";t.exports=JSON.parse('[{"timestamp":"Chu Nhat, 30 thg 1, 2023","title":"AWS - Global infrastructures","slug":"aws-global_infrastructures","categories":[{"name":"AWS","path":"aws"}],"summary":"B\xe0i vi\u1ebft ch\xe9m gi\xf3 v\u1ec1 AWS global infrastructure, n\xe0o l\xe0 data center, availability zones, regions, etc ..."},{"timestamp":"Chu Nhat, 30 thg 1, 2023","title":"AWS - Gi\u1edbi thi\u1ec7u v\u1ec1 S3 (Amazone Simple Storage Service)","slug":"aws-s3","categories":[{"name":"AWS","path":"aws"}],"summary":"B\xe0i vi\u1ebft gi\u1edbi thi\u1ec7u kh\xe1i qu\xe1t v\u1ec1 c\xe1c AWS S3"},{"timestamp":"Chu Nhat, 30 thg 1, 2023","title":"AWS - S3 Storage Classes v\xe0 Glacier","slug":"aws-s3-storage_class-glacier","categories":[{"name":"AWS","path":"aws"}],"summary":"B\xe0i vi\u1ebft gi\u1edbi thi\u1ec7u v\u1ec1 Amazon S3 Storage Classes v\xe0 Glacier"}]')}}]);
//# sourceMappingURL=127.1913572b.chunk.js.map