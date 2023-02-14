Chu Nhat, 12 thg 2, 2023
AWS - EC2 (Elastic Compute Cloud) Fundamentals
AWS:aws
Bài viết giới thiệu về AWS EC2 (Elastic Compute Cloud)

AWS EC2 Fundamentals
---
---

- EC2 = Elastic Compute Cloud = Infrastructure as a Service  
- Các chức năng chủ yếu:
	- Cho thuê máy ảo (EC2)
	- Lưu trữ dữ liệu trên thiết bị ảo (EBS)
	- Distributing load across machine (ELB)
	- Scaling the services using an auto-scaling group (ASG)

#### EC2 sizing and configuration options
- Operating System (OS): Linux, Window and Mac OS
- How much compute power and cores (CPU)
- How much random-access memory (RAM)
- How much storage space:
	- Network-attached (EBS & EFS)
	- Hardware (EC2 Instance Store)
- Network card: speed of the card, Public IP address
- Firewall rules: __Security Group__
- Bootstrap script (configure at first launch): __EC2 User data__

#### EC2 User data
- It is possible to bootstrap our instance using an EC2 User data script.
- That script is only run once at the instance first start
- EC2 user data is used to automate boot task such at:
	- Installing updates
	- Installing software
	- Downloading common files from the internet
	- Anything you can think of
- The EC2 User data script runs with the root user (need sudo)

#### EC2 Instance types: 

- General Purpose
- Compute Optimized
- Memory Optimized
- Accelerated Computing
- Storage Optimized
- HPC Optimized
- Instance Features
- Measuring Instance Performance

Tham khảo: _https://aws.amazon.com/ec2/instance-types/_ and _https://instances.vantage.sh_

** AWS EC2 has the following naming convention:

>	m5.cxlarge

- m: Instance class
- 5: generation (AWS improves them over time)
- 2xlarge: size within the instance class

#### Security Group

- Security Groups are the fundamental of network security in AWS
- The control how traffic is allowed into or out our EC2 Instances.
- Security groups only contains allow rules
- Security groups rules can reference by IP or by security group

- Security groups is a "firewall" on EC2 Instances.
- They regulate:
	- Access to Ports
	- Authorised IP ranges - IPv4 and IPv6
	- Control of inbound network (from other to the instance)
	- Control of outbound network (from instance to other)

#### AWS EC2 Instance Purchasing Options

- On-Demand Instance - short workload, predictable pricing, pay by second
- Reserved (1 & 3 years)
	- Reserved Instances - long workloads
	- Convertible Reserved Instances - long workloads with flexible instances
- Savings plan (1 & 3 years) - commitment to and amount of usage, long workload
- Spot Instances -  short workloads, cheap, can lose instances (less reliable)
- Dedicated Host - book an entire physical server, control instance placement
- Dedicated Instances - no other customers will share your hardware
- Capacity Reservations - reserve capacity in a specific AZ for any duration

##### EC2 On Demand

- Pay for what you use:
	- Linux or Windows - billing per second, after the first minute
	- All other operating systems - billing per hour
- Has the highest cost but no upfront payment
- No long-term commitment
- Recommended for short-term and un-interrupted workloads, where you can't predict how the application will behave

##### EC2 Reserved Instances

- Up to ~70% discount compared to On-demand
- You reserve a specific instance attributes (Instance Type, Region, Tenancy, OS)
- Reservation Period - 1 year (+discount) or 3 years (+++discount)
- Payment Options - No Upfront (+), Partial Upfront (++), All Upfront (+++)
- Reserved Instance's Scope - Regional or Zonal (reserve capacity in an AZ)
- Recommended for steady-state usage applications (think database)
- You can buy and sell in the Reserved Instance Marketplace

- Convertible Reserved Instance
	- Can change the EC2 instance type, instance family, OS, scope and tenancy
	- Up to ~66% discount

##### EC2 Savings Plans

- Get a discount based on long-term usage (up to ~72% - same as RIs)
- Commit to a certain type of usage ($10/hour for 1 or 3 year)
- Usage beyond EC2 Savings Plans is billed at the On-Demand price
- Locked to a specific instance family & AWS region (e.g., M5 in us-east-1)
- Flexible across
	- Instance Size (e.g, m5.xlarge, m5.2xlarge)
	- OS (e.g, Linux, Windows)
	- Tenancy (Host, Dedicated, Default)

##### EC2 Spot Instances

- Can get a discount of up to 90% compared to On-demand
- Instances that you can "lose" at any point of time if your max price is less than the current spot price
- The most cost-efficient instances in AWS

- Useful for workloads that are resilient to failure
	- Batch jobs
	- Data analysis
	- Image processing
	- Any distributed workloads
	- Workloads with a flexible start and end time
- Not suitable for critical jobs or databases

##### EC2 Dedicated Hosts

- A physical server with EC2 instance capacity fully dedicated to your use
- Allows you address compliance requirements and use your existing server-bound software licenses (per-socket, per-core, per-VM software licenses
- Purchasing Options
	- On-demand - pay per second for active Dedicated Host
	- Reserved - 1 or 3 years (No Upfront, Partial Upfront, All Upfront)
- The most expensive option

- Useful for software that have complicated licensing model (BYOL - Bring Your Own License)
- Or for companies that have strong regulatory or compliance needs

##### EC2 Dedicated Instances

- Instances run on hardware that's dedicated to you
- May share hardware with other instances in same account
- No control over instance placement (can move hardware after Stop/Start)

**_“An important difference between a Dedicated Host and a Dedicated Instance is that a Dedicated Host gives you additional visibility and control over how instances are placed on a physical server, and you can consistently deploy your instances to the same physical server over time.”_**

##### EC2 Capacity Reservations

 - Reserve On-Demand instances capacity in a specific AZ for any duration
 - You always have access to EC2 capacity when you need it
 - No time commitment (create/cancel any time), no billing discounts
 - Combine with Region Reserved Instances and Savings Plans to benefit from billing discounts
 - You are charged at On-Demand rate whether you run instances or not
 - Suitable for short-term, uninterrupted workloads that needs to be in a specific AZ
