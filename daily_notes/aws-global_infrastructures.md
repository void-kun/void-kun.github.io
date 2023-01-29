Chu Nhat, 30 thg 1, 2023
AWS - Global infrastructures
AWS:aws
Bài viết chém gió về AWS global infrastructure, nào là data center, availability zones, regions, etc ...


***Ở tuần đầu tiên trong lộ trình học AWS của mình, chúng ta sẽ làm quen với kiến trúc global của nó trước.***

Global infrastructure của AWS bao gồm:
- AWS - Data Center
- AWS - Availablility Zones
- AWS - Regions
- AWS - Local Zones
- AWS - Wavelength Zones
- AWS - Edge Location

---

### AWS - Data Center

- Thousands of servers. Typically over 50k
- Not "cold"
- Up to 102 Tbps provisioned in to a single DC
- AWS custom equipment
	- Multi ODM sourced
	- Amazon custom network protocol stack


### AWS - Availability Zone

- One or more data centers in a Available Zone
- Isolated locations
- No data center in 2 Available Zones
- DCs in Available Zone less than 1/4ms apart
- AZs <2ms apart & usually < 1ms
- 25 Tbps peak inter-AZs traffic


### AWS - Regions

- Has two or more Available Zones in a Region


### AWS - Local Zones

- Are a type of infrastructure deployment that places compute, storage, database, and other select AWS services close to large population and industry centers.
- Use cases:
	- Run low-latency applications at the edge
	- Simplify hybrid cloud migrations
	- Meet stringent data residency requirements


### AWS - Wavelength

- Embeds AWS compute and storage services within 5G networks, providing mobile edge computing infrastructure for developing, deploying, and scaling untra-low-latency applications.
- Use cases:
	- Build media and entertainment applications
	- Accelerate ML inference at the edge
	- Develop connected vehicle applications


### AWS - Edge Location

- A site that CloudFront uses to cache copies of your content for faster delivery to users at any location.
