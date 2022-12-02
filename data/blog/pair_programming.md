---
path: "pair_programming_myth"
date: "2021-02-01"
title: "The myths about pair programming"
tags: [ "pair programming", "agile" ]
---

# Definition

For those of you unfamiliar with the term,
[pair programming](https://en.wikipedia.org/wiki/Pair_programming) is development
technique in agile environments in which two programmers work side by side at
one workstation on the same task. The two switch roles frequently, like multiple
times in a single session: the driver writes code, while the navigator, reviews
the code. There are different variations: expert–expert, expert–novice,
novice–novice.

In this article, based on reflections from my experiences, I'll try to offer
some counterarguments to the (supposed) benefits of this practice.

<!-- intro_end -->

![Header image](https://imgs.xkcd.com/comics/real_programmers.png)

Pair programming is a synchronous and interactive experience, as opposed as code
reviews that are asynchronous.

In theory, the concept of it is a sound idea: pair programming evangelists
have told us that it will improve code quality, help knowledge distribution, and
even boost productivity, all while cultivating a deep bonds between team members.
But in my opinion this is yet another example of "X is good, therefore, X taken
to the extreme and enforced by the company rules must be better".

[Kent Beck](https://en.wikipedia.org/wiki/Kent_Beck)'s idea might have fitted
his circumstances at the time of the (in?)famous
[Chrysler project](https://en.wikipedia.org/wiki/Chrysler_Comprehensive_Compensation_System),
and I would regard it as a good example of
[survivor bias](https://en.wikipedia.org/wiki/Survivorship_bias): we tend to
focus on the very few that made it works (and write a book about id) and we
ignore the many that didn't.

I'm a huge fan of collaboration, mentoring, and code reviewing, and if there is
a tough problem to solve I can see the benefits of working together, but this
idea of constant pairing just doesn't make sense to me.

In the following I'll try to address the supposed benefits, point by point, and
propose some counterarguments to them. Since I consider myself a scientist I'll
admit upfront I don't have numbers to support my thesis, it's all just based on
empirical evidence during my experience working with different teams that were
using this technique. I'm happy to be proven wrong, but you need to show me
some kind of definitive proof of it, which I doubt anyone has.

I'll use Martin Fowler's list of
[benefits](https://martinfowler.com/articles/on-pair-programming.html#Benefits)
as a reference, as he seems to be one of the favorite source to quote when
advocate for it.

## Myth #1: Knowledge Sharing

**Idea**: more people working on the same piece of code means less risk of
knowledge silos. It's an effective way to share knowledge.

While the basic idea is definitely true, it's not always as effective as they
say it is:

* if both developers in the pair are of the same level, one of them is most
  certainly wasting their time;
* it's certainly not the only way of sharing: I can argue that written knowledge
  is better than the verbal one shared in a pair, as more people can benefits
  from it.

## Myth #2: Reflection

**Idea**: the pair should discuss and debate the ideas.

Giving shape to every thought in the verbal form is extremely inefficient,
I think much faster than I can talk or write and sometimes the structures in my
head are too complex to be communicated when I am coding. Pair programming is
forcing me to serialize my thought process, which might interrupt my flow.

## Myth #3: Keeping focus

**Idea**: if you're working in a pair, you're more likely to not waste time.

The problems I see with this:

* while it's natural to try not to waste the other developer’s time, and
  although I’m sure some bosses might disagree, breaks are an essential cost of
  the work: I can’t think solidly for 8 hours straight; and neither can anyone
  else;
* it might lead to frequent context switches if one of the member is constantly
  pulled out of the pair for some other work or meeting, or some other reasons
  might arise that makes one of the member unavailable;
* some people just are not able to focus on their work when they know they are
  being watched;
* no room for experimentation;
* I can’t use the tools and environment I’m used to;
* not actually getting the work done: pair programming sessions can easily
  mutate into socializing sessions, or into discussion of what's the better tool.

## Myth #4: Code review on-the-go

**Idea**: 4 eyes will catch more errors than 2.

Pairing is meant to increase the code quality to the max. Well, it didn’t! I've
seen some of the worst code ever in projects where pairing is the norm.

There are many ways to improve code quality. I doubt having two people watching
the same code at the same time inherently makes it better.

In the open source world code review is way to go, and to me it seems to be
working pretty good.

## Myth #5: Two modes of thinking combined

**Idea**: two heads are better than one.

The heads are more likely to think differently, and in coding 99% of the time
there are different correct ways of doing the same thing, some people prefer
one way, some others prefer the other way.

Sometimes the approaches to coding as simply completely different, and there’s
no referee in a pair!

## Myth #6: Collective Code Ownership

**Idea**: everyone should be able to change any part of the code.


## Myth #7: Keeps the team's WIP low

**Idea**: because there are less people working on different tasks, there is
less work in progress.

## Myth #8: Fast onboarding of new team members

**Idea**: it's allows to share knowledge from a senior to a new team member.

There is one and only one situation, where pair programming makes sense — knowledge transfer from the more knowledgeable person to the less knowledgeable person.




"War room" situations seem to really bring out the usefulness of pair programming.


Those who reject pair programming are assumed to be cowboys, slackers, or social recluses. Well, I'm none of these (at least I don't think), but yet I still hate the idea of Pair Programming. For what it's worth, here's why...

some great works of innovation and craftsmanship have sprung not from a team or a pair, but from the efforts of one person.

The truth is, however, that one third of us are introverts (and probably more for programmers!). In general, we not only prefer but thrive when working in solitude. For us, doing quality work is about getting and staying in "the zone". When we do, we're highly productive.

My best work is done in solitude, and the state of flow is what I enjoy most about being a programmer. It's not about thinking I'm above mistakes. I'm a huge advocate of rigorous code reviews, and I benefit daily from the insights of others. It's just that the hyper-collaborative state of pair programming doesn't make me a better (or happier) programmer.

When people describe pair programming as a practice that they benefit from, cool, I get that. But when they take the next leap and advocate (or mandate) the practice for me, because they "know" I'll benefit from it (and have "data" to prove it!), slow down.

In an online survey of pair programmers from 2000, 96% of them stated that they enjoyed their work more than when they programmed alone and 95% said that they were more confident in their work when they pair programmed.[5](https://sunnyday.mit.edu/16.355/williams.pdf)

I am about as excited about pair programming as David Gilmour would be excited about someone else plucking the strings while he were only doing fingering, and then switching places every once in a while.



## cons

Everything must be done collaboratively. Everyone must be available to everyone, all the time. There should be no more personal space, and no ownership of work.
Disengagement may present as one of the members physically withdraws away from the keyboard, accesses email, or even falls asleep.
The "Watch the Master" phenomenon can arise if one member is more experienced than the other. In this situation, the junior member may take the observer role, deferring to the senior member of the pair for the majority of coding activity. This can easily lead to disengagement.

No privacy Want to send that quick email to your wife? Hmm. Don’t want to upset your shadow,

the pair is most effective when both individuals are willing participants who see value in the pairing activity.
Cranky and tired means you're not communicating well and might be letting defects slip into the system.
I feel always tired the rest of the day when I paired for a long time

I also usually work different hours than most of my team.

Remote is also a problem. There are a lot of benefits to being out of the office, either one day a week, or as a permanent remote worker.

Although pair programmers may complete a task faster than a solo programmer, the total number of person-hours increases. The relative weight of these factors can vary by project and task.

Being uncomfortable means experiencing stress. Experiencing stress means not looking forward to the job. Not looking forward to the job breeds avoidance. Avoidance is not productive, at all.
Developers do their best work when they’re inspired and empowered


# Conclusion

I believe it's just a reflection of one's own personal psychology. Simply: some people enjoy this style of work, and so they prescribe it, vociferously, for everyone.
pair programming cannot be fruitfully forced upon people, especially if relationship issues, including the most mundane (such as personal hygiene), are getting in the way; solve these first!
Ultimately, it depends on the individuals involved whether pairing makes sense.
As it turned out, pair programming was effective only for certain combinations of personality types, system complexity and developer expertise.
Because pair programming is too expensive in most cases for the benefit it provides.
To claim that this extrovert's ideal of pair programming is a "best practice" for all is foolish, I don't care what the agile dogmatists say.

I don't think there even can be a one-size-fits-all solution to software development.

It is my belief that quality can exist/be ignored in any model.

Piar programming should be a tool in your tool box.

I believe pair programming definitely has a place in software development, especially in "threat level midnight" situations.

Like many things in life, pair programming is best done voluntarily.
Pair programming in particular only works for specific circumstances, which aren't encountered very often, yet some people treat it as a gospel because it Worked That One Time™.

Pair programming is for junior programmers who need hand-holding or who need company to feel comfortable/secure while programming.
In most cases, it’s not pair-programming itself which is the problem. Rather, it’s the whole practice of infantilizing developers and instructing them to work in a specific way that causes trouble. It’s not any different from other boss-mandates such as show up in the office no later than 8 AM or do not take more than 2 bathroom breaks every 3 hours.

It is rather ironic, really, that extreme programming, a set of concepts revolving around flexibility, has become this calcified and rigid in a lot of people's minds.
