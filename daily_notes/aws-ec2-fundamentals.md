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

