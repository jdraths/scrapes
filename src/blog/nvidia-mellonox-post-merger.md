---
title: Discussing Nvidia & Mellanox post-merger
date: "2020-04-29"
---

China recently approved the Nvidia & Mellanox merger, removing the last major hurdle so that [Nvidia was finally able to complete the acquisition of Mellanox](https://nvidianews.nvidia.com/news/nvidia-completes-acquisition-of-mellanox-creating-major-force-driving-next-gen-data-centers).

[TheNextPlatform has a great interview with Nvidia CEO, Jensen Huang](https://www.nextplatform.com/2020/04/27/nvidia-plus-mellanox-talking-datacenter-architecture-with-jensen-huang/). It's an interesting read, primarily focusing on the data center of the future. Jensen clearly has his eyes on enabling a disaggregated data center and using the Mellanox acquisition to further that end:

> Now, when you take a large scale problem that spans the whole datacenter – it doesn’t fit in any single computer – and you accelerate the computation part of it by several orders of magnitude, then the problem is going to become everything else. And then everything else we started to solve, piece by piece by piece. But the one piece that you will never be able to solve is connecting multiple computers together. Because we will always have problems that are larger than one computer – hopefully. And when a problem is greater than one computer, then the network becomes the problem, and it is needs to be very fast. And so that’s the reason why our relationship with Mellanox goes back a decade and we’ve been working with them for quite a long time.
>
> The networking problem is much, much more complex than just having faster and faster networking. And the reason for that is because of the amount of data that you are transmitting, synchronizing, collecting, and reducing across this distributed datacenter-scale computer and the computation on the fabric itself is complicated.

In theory the disaggregated datacenter makes the entire datacenter industry more efficient. Every CPU can connect with every GPU with every SSD, DRAM, or HDD, even as physically separated devices, all interconnected through networking architecture like Mellanox's. 

It's all fascinating but what we find most interesting is Jensen's response when asked whether Nvidia would ever build its own CPUs. Jensen's response is very Zero To One-esque:

> You know, I have got no trouble working with other people’s technologies so long as in doing so, we could make that unique contribution that moves the world forward. And it’s something that the people on the conference call from Nvidia hears me say all the time: We have got to not squander our incredible time and resource and expertise, and not do something that somebody else already has, with the singular purpose of taking share. Taking share is not nearly as constructive to the world as creating something that’s new.

Jensen's basically repeating the Zero To One mantra there. It's better to invent something new and create a new market than to compete for share in an already established one. Throughout the interview Jensen is really straightforward: Nvidia isn't simply integrating this acquisition and selling Mellanox's existing components. They are planning on inventing something entirely new:

> This is the giant new architecture. The really exciting thing right now is not to build yet another server. The exciting thing for the world is the server is not the computing unit anymore. The datacenter is the computing unit. You are going to program a datacenter, not a server.
>
> ...
>
> My attitude is not to think about the server as a computer, but to think of a CPU server, a GPU server, a storage server, and a programable switch as computing elements that are inside the computer, and the computer unit is now the datacenter. And in that world, networking is all important. And in that world, knowing how to build a computer end-to-end and recognizing the importance of the software stack, which is so complicated from top to bottom, is where we are focused. And I think that in new world where the datacenter is the computer is really quite exciting and I think we have we have the essential pieces.
