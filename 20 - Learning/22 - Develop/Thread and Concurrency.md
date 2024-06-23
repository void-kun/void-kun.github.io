<font color="#ADC4CE">tags::</font> #learning #thread #concurrency
<font color="#ADC4CE"><small>created:  2024-06-22</small></font>

# Sat 22-Jun-2024

--- 
## :FabAudible: Thread and Concurrency

=== Description ===
The threads and concurrency is important in CS.
The source code sample about this journey write by Rust

### :TiChevronRightPipe: Thread
- Is an active
	- entity executing unit of a process
- Works simultaneously with others
	- many threads execute together
- Require coordination
	- sharing of I/O devices, CPUs, memory

	![[processvthread.png|process and thread]]


**Why are threads useful?
- Parallelization => speedup
- Specialization => hot cache
- Efficiency => lower memory requirement and cheaper IPC
- Time for context switch in threads is less, since memory is shared, hence mapping is not required between virtual and physical memory.
	- Therefore multithreading can be used to hide latency.
- Benefits to both applications and OS code
	- Multithreaded OS kernel
		- threads working on behalf of applications
		- OS level services like daemons and drivers

### :TiChevronRightPipe: Concurrency control and Coordination
- Mutual exclusion
	- Exclusive access to only one thread at a time
	- Mutex
- Waiting on other threads
	- Specific condition before proceeding
	- condition variable
- Waking up other threads from wait state

### :TiChevronRightPipe: Threads on Rust

Concurrency is difficult to reason about. In rust, we have it strong, static type system to help us reason about our code. As such, Rust gives us two trails to help us make sense of code that can possibly be concurrent.

```
Send
```

The first trail we're going to talk about it __Send__. When a type T implements __Send__, it indicates that something of this type is able to have ownership transferred safely between threads.

```
Sync
```
The second of these traits is called __Sync__. When a type T implements __Sync__, it indicates that something of this type has no possibility of introducing memory unsafe when used from multiple threads concurrently through shared references. This implies that types which don't have interior mutability are inherently __Sync__, Which includes simple primitive types (like u8) and aggregate types containing them.

For sharing references across threads, Rust provides a wrapper type called 
__Arc__\<T\>. __Arc__\<T\> implements __Send__ and __Sync__ if and only if T implements both __Send__ and __Sync__. 
Example:
``` rust
struct RefCell<U> {
	...
}

// Object of this type cannot be transferred across threads because RefCell does // not implement Sync, consequenyly Arc<RefCell<U>> would not implement Send. 
type Arc<RefCell<U>>


```












## :FabBuromobelexperte: Reference

- https://applied-programming.github.io/Operating-Systems-Notes/3-Threads-and-Concurrency/
