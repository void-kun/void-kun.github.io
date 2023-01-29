(self.webpackChunklib=self.webpackChunklib||[]).push([[127],{127:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return b}});var n=a(9087),s=a(3772),i=a(379),r=a(5065),c=a(3241),o=a(5645),l=a(3030),u=a(9099),h=a(4546),m=a(4999),p=a(5590),g=a(2547),d=a(404),S=a(457),v=["node","inline","className","children"],f={code:function(e){e.node;var t=e.inline,a=e.className,n=e.children,s=(0,l.Z)(e,v),i=/language-(\w+)/.exec(a||"");return!t&&i?(0,S.jsx)(g.Z,(0,o.Z)({children:String(n).replace(/\n$/,""),style:d.Z,language:i[1],PreTag:"div"},s)):(0,S.jsx)("code",(0,o.Z)((0,o.Z)({className:a},s),{},{children:n}))},image:function(e){var t=e.alt,a=e.src,n=e.title;return(0,S.jsx)("img",{alt:t,src:a,title:n,style:{maxWidth:"48rem"}})}},A=function(e){var t=e.postSlug,l=(0,i.s0)(),g=(0,s.useState)(),d=(0,n.Z)(g,2),v=d[0],A=d[1];return(0,s.useEffect)((function(){function e(){return(e=(0,c.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a(1372)("./".concat(t,".json"));case 3:n=e.sent,A((0,o.Z)((0,o.Z)({},n),{},{markdown:n.markdown.join("\n")})),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}t&&function(){e.apply(this,arguments)}()}),[t,l]),v?(0,S.jsxs)("div",{className:"pt-4",children:[(0,S.jsxs)("article",{className:"prose flex flex-col m-auto",children:[(0,S.jsx)("h1",{className:"mb-4",children:v.title}),(0,S.jsx)("span",{className:"w-36 h-[2px]  bg-brown-light"}),(0,S.jsx)("time",{className:"mb-12",children:v.timestamp}),v.banner_url&&(0,S.jsx)("img",{src:v.banner_url,alt:"banner",className:""}),(0,S.jsx)(u.D,{children:v.markdown,remarkPlugins:[h.Z],rehypePlugins:[m.Z],components:f})]}),(0,S.jsxs)("div",{className:"mt-8 flex",children:[(0,S.jsx)("span",{className:"font-medium text-lg mr-4",children:"Category:"}),v.categories&&v.categories.map((function(e){return(0,S.jsxs)(p.rU,{to:"/categories/".concat(e.path),className:"grid place-content-center text-brown-dark font-medium hover:underline mr-4",children:["#",e.name]},"".concat(e.path,"_markdown"))}))]})]}):null},b=function(){var e=(0,i.s0)(),t=(0,i.TH)().pathname,a=(0,s.useState)(""),r=(0,n.Z)(a,2),c=r[0],o=r[1];return(0,s.useEffect)((function(){t&&!t.match(/\/posts\/[A-Z]+\//g)||e("/"),o(t.replace("/posts/",""))}),[t,e]),(0,S.jsxs)("div",{className:"max-w-3xl m-auto",children:[(0,S.jsx)(A,{postSlug:c}),(0,S.jsx)("footer",{children:(0,S.jsxs)("p",{className:"text-center pb-8 pt-12 flex justify-center items-center gap-2",children:[(0,S.jsx)("span",{className:"text-[#BBB]",children:"powered by"}),(0,S.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",className:"w-4 h-4 fill-brown-dark",children:(0,S.jsx)("path",{d:"M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"})}),(0,S.jsx)("a",{href:"https://github.com/void-kun/void-kun.github.io",className:"font-medium hover:text-brown-dark",children:"zrik"})]})})]})}},1372:function(e,t,a){var n={"./aws-global_infrastructures.json":8355,"./aws-global_infrastructures_1.json":9681,"./aws-s3.json":4672,"./categories.json":2792,"./posts.json":29};function s(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=i,e.exports=s,s.id=1372},8355:function(e){"use strict";e.exports=JSON.parse('{"timestamp":"Chu Nhat, 30 thg 1, 2023","title":"AWS - global_infrastructures","slug":"aws-global_infrastructures","categories":[{"name":"AWS","path":"aws"}],"summary":"B\xe0i vi\u1ebft ch\xe9m gi\xf3 v\u1ec1 AWS global infrastructure, n\xe0o l\xe0 data center, availability zones, regions, etc ...","markdown":["***\u1ede tu\u1ea7n \u0111\u1ea7u ti\xean trong l\u1ed9 tr\xecnh h\u1ecdc AWS c\u1ee7a m\xecnh, ch\xfang ta s\u1ebd l\xe0m quen v\u1edbi ki\u1ebfn tr\xfac global c\u1ee7a n\xf3 tr\u01b0\u1edbc.***","Global infrastructure c\u1ee7a AWS bao g\u1ed3m:","- AWS - Data Center","- AWS - Availablility Zones","- AWS - Regions","- AWS - Local Zones","- AWS - Wavelength Zones","- AWS - Edge Location","---","### AWS - Data Center","- Thousands of servers. Typically over 50k","- Not \\"cold\\"","- Up to 102 Tbps provisioned in to a single DC","- AWS custom equipment","\\t- Multi ODM sourced","\\t- Amazon custom network protocol stack","### AWS - Availability Zone","- One or more data centers in a Available Zone","- Isolated locations","- No data center in 2 Available Zones","- DCs in Available Zone less than 1/4ms apart","- AZs <2ms apart & usually < 1ms","- 25 Tbps peak inter-AZs traffic","### AWS - Regions","- Has two or more Available Zones in a Region","### AWS - Local Zones","- Are a type of infrastructure deployment that places compute, storage, database, and other select AWS services close to large population and industry centers.","- Use cases:","\\t- Run low-latency applications at the edge","\\t- Simplify hybrid cloud migrations","\\t- Meet stringent data residency requirements","### AWS - Wavelength","- Embeds AWS compute and storage services within 5G networks, providing mobile edge computing infrastructure for developing, deploying, and scaling untra-low-latency applications.","- Use cases:","\\t- Build media and entertainment applications","\\t- Accelerate ML inference at the edge","\\t- Develop connected vehicle applications","### AWS - Edge Location","- A site that CloudFront uses to cache copies of your content for faster delivery to users at any location."]}')},9681:function(e){"use strict";e.exports=JSON.parse('{"timestamp":"Th 6, 27 thg 1, 2023","title":"AWS - global_infrastructures (1)","slug":"aws-global_infrastructures_1","categories":[{"name":"AWS","path":"aws"},{"name":"V\u1ecdc link tinh","path":"voc-link-tink"}],"summary":"B\xe0i vi\u1ebft ch\xe9m gi\xf3 v\u1ec1 AWS global infrastructure, n\xe0o l\xe0 data center, availability zones, regions, etc ...","markdown":["***\u1ede tu\u1ea7n \u0111\u1ea7u ti\xean trong l\u1ed9 tr\xecnh h\u1ecdc AWS c\u1ee7a m\xecnh, ch\xfang ta s\u1ebd l\xe0m quen v\u1edbi ki\u1ebfn tr\xfac global c\u1ee7a n\xf3 tr\u01b0\u1edbc.***","Global infrastructure c\u1ee7a AWS bao g\u1ed3m:","- AWS - Data Center","- AWS - Availablility Zones","- AWS - Regions","- AWS - Local Zones","- AWS - Wavelength Zones","---","**Nhi\u1ec1u vl**","### AWS - Data Center","![](./a.png)![](./a.png)"]}')},4672:function(e){"use strict";e.exports=JSON.parse('{"timestamp":"Chu Nhat, 30 thg 1, 2023","title":"AWS - Gi\u1edbi thi\u1ec7u v\u1ec1 S3 (Amazone Simple Storage Service)","slug":"aws-s3","categories":[{"name":"AWS","path":"aws"}],"summary":"B\xe0i vi\u1ebft gi\u1edbi thi\u1ec7u kh\xe1i qu\xe1t v\u1ec1 c\xe1c AWS S3","markdown":["Amazon S3 (Amazon Simple Storage Service) is an ***object storage service*** that offers scalability, data availability, security and performance. ","--- ","### I. Features of Amazone S3","#### 1. Storage Classes","Amazon S3 cung c\u1ea5p c\xe1c l\u1edbp l\u01b0u tr\u1eef cho nhi\u1ec1u tr\u01b0\u1eddng h\u1ee3p kh\xe1c nhau:","- ***S3 Standard*** L\u01b0u tr\u1eef c\xe1c d\u1eef li\u1ec7u quan tr\u1ecdng v\xe0 truy c\u1eadp th\u01b0\u1eddng xuy\xean","- ***S3 Standard - IA*** or ***S3 One Zone - IA*** L\u01b0u tr\u1eef c\xe1c d\u1eef li\u1ec7u \xedt \u0111\u01b0\u1ee3c truy c\u1eadp \u0111\u1ec3 gi\u1ea3m chi ph\xed","- ***S3 Glacier Instant Retrieval***, ***S3 Glacier Flexible Retrieval*** and ***S3 Glacier Deep Archive*** L\u01b0u tr\u1eef d\u1eef li\u1ec7u v\u1edbi chi ph\xed th\u1ea5p nh\u1ea5t ","- ***S3 Intelligent-Tiering*** Gi\xfap t\u1ed1i \u01b0u h\xf3a chi ph\xed b\u1eb1ng c\xe1ch t\u1ef1 \u0111\u1ed9ng di chuy\u1ec3n d\u1eef li\u1ec7u c\u1ee7a b\u1ea1n gi\u1eefa c\xe1c lo\u1ea1i classes khi access pattern c\u1ee7a b\u1ea1n thay \u0111\u1ed5i"," > Chi ti\u1ebft v\u1ec1 AWS S3 Storage Classes s\u1ebd \u0111\u01b0\u1ee3c t\xe1ch ra m\u1ed9t b\xe0i kh\xe1c"]}')},2792:function(e){"use strict";e.exports=JSON.parse('[{"name":"AWS","path":"aws"}]')},29:function(e){"use strict";e.exports=JSON.parse('[{"timestamp":"Chu Nhat, 30 thg 1, 2023","title":"AWS - Gi\u1edbi thi\u1ec7u v\u1ec1 S3 (Amazone Simple Storage Service)","slug":"aws-s3","categories":[{"name":"AWS","path":"aws"}],"summary":"B\xe0i vi\u1ebft gi\u1edbi thi\u1ec7u kh\xe1i qu\xe1t v\u1ec1 c\xe1c AWS S3"}]')}}]);
//# sourceMappingURL=127.dc61596f.chunk.js.map