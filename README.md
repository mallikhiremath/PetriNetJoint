# PetriNetJoint
## Installation
First, install the PetriNetJoint following:
- [NodeJS](https://nodejs.org/en/) (LTS recommended)
- [MongoDB](https://www.mongodb.com/)

Second, start mongodb locally by running the `mongod` executable in your mongodb installation (you may need to create a `data` directory or set `--dbpath`).

Then, run `webgme start` from the project root to start . Finally, navigate to `http://localhost:8888` to start using PetriNetJoint!


## Free-Choice PetriNets
The literature on Petri nets has many papers that really aim to teach the concepts used.

In the case of free-choice Petri net, such an introduction can be found in the paper Structure Theory of Petri Nets: the Free Choice Hiatus by Eike Best, in the ACPN (Advanced Course on Petri Nets) 1986. (An online copy is here.)

If anywhere, the intuition behind free-choice nets should be explained there, but that doesn't really happen, and I haven't seen such an explanation elsewhere, either.

As far as there is an intuition behind free-choice nets, it is expressed by their name: whenever there is a choice, say, between step B or step C (that is to say: we have a place A with an arc to transition B and an arc to transition C), then that choice is free, that is to say, neither B or C are subject to any other additional conditions (that is to say, they cannot have additional input places).

Rather than focusing on intuition, the paper describes free-choice nets as follows, and I think this is the standard way to explain them:

One of the reasons Petri nets interest us is that they offer descriptions of concurrent system behaviour that can be statically analyzed. We can prove certain properties of the behaviour of Petri nets.
However, for unrestricted Petri nets, certain important properties are extremely hard to analyze; for instance, the question whether the net is live, or whether a given marking can be reached. So it is interesting to study restricted forms of Petri nets for which such analysis is easier.
One possible restriction is to say: no place may have more than one input transition, or more than one output transition. This type of Petri net is called an S-net. This eliminates parallelism and basically turns the net into a state machine. For instance, we can no longer write down a process in which the first thing to happen is A, then B and C in whatever order, and, finally, D. We can't put B and C in parallel.
Another restriction is the reverse: no transition may have more than one input place or more than one output place. This type of Petri net is called a T-net or marked graph. Now, we do have parallelism, but we no longer have choice. For instance, we can no longer write down a process in which the first thing to happen is A, then either B or C, and, finally, D. We can't have a choice between B and C.
Both restrictions are very severe, so it's interesting to look at compromises. Free-choice nets are just that: to quote Wikipedia, they are the nets in which every arc from a place to a transition is either the only arc from that place or the only arc to that transition. I.e. there can be both concurrency (parallelism) and conflict (choice), but not at the same time. So this is a proper generalization of S-nets and T-nets.
Certain properties of the behaviour of Petri nets that are hard or impossible to decide for arbitrary Petri nets become doable for free-choice Petri nets.
So the prime motivation for free-choice nets is not any particular intuition, but the fact that they allow certain forms of static analysis of behaviour.


## Marked Graph:
This example presents a Marked Graph, where a process is forked at transition T1 and synchronised at T4. In between, two operations take place in non-deterministic fashion, T2 and T3. In fact, Petri nets are so much non-deterministic, that they may not take place at all. But the reason for having this non-deterministic property is not this, but to mimic real-life experiences which shows that parallel computing always means that it is impossible to determine which process/thread will finish first i.e. which operation(s) will execute faster. This can be due to waiting for I/O in real world, or just the different parameters given to the processes/threads.