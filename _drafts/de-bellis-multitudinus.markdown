---
layout: post
title: "Remembering De Bellis Multitudinis"
---

![byzantine-battle-scene](/assets/Piero_della_Francesca.jpg)

De Bellis Multitudinis (DBM) was a table-top wargame which was published by the Wargames Research Group between 1993 and 2000. The ruleset was supposed to simulate large-scale battles for any armies that existed between the years 3000 BC and 1500 AD. That spans from the Sumerian civilisation that inhabited ancient Iraq right up to the centralisation of military recruitment by medieval France in the Ordonnance Reforms. My friends and I played this game for a few years during our teens, and I have fond memories about it that I want to share.

DBM wasn't really the obvious choice for a kid that was interested in wargames. Like my friends and others like us, our first exposure to this world was through the Games Workshop titles like Warhammer, which were a lot flashier and better marketed, although they were prohibitively expensive (for us) and were associated with a more adolescent gaming culture. However, a friend of mine in school had a father who was an enthusiastic historical wargamer and who brought us all along to meetings of his games club in a big 7-seater minivan.

One thing about the game that interests me to this day is its ambitions as a simulation and the scope of its domain. For me, it feels like the authors of this ruleset were only secondarily interested in providing a good gaming experience -- rather they were interested in providing rules for *simulating historical warfare*. The rules are supposed to provide you the framework for you to simulate battles between armies that existed or could have existed, and the historical scope of this framework is broad enough that you can ask questions like: "What would have happened if a Roman army from the early imperial period fought a battle against a medieval army from Western Europe with gunpowder artillery?" Then you can answer them.

![imperial-romans](/assets/imperial_romans.png)

You might find it surprising that a single ruleset could be used to cover a four and a half thousand year period, given the organisational and technological variation implied by that interval of time. The way DBM does this is by abstracting that rich detail into a few key concepts that are supposed to hold for any army of Antiquity and the Middle Ages. The ruleset describes any particular coherent fighting unit of such an army (a Roman legion, say, or a band of vikings, or a regiment of medieval pikemen), as an **element**, and uses only three central concepts to describe how that element will behave in a combat situation.

First, there is a property of the element that categorises it in terms of the overall organisation. **Regular** troops are those take orders from officers, and who typically drill together in movement and combat techniques. They are formally organised. **Irregulars** are troops who are not formally organised; they may be skilled combatants on an individual level but are much harder to control in a centralised way.

Secondly, there is the type of troop that the element represents. DBM categorised about 18 kinds of troops, ranging from Knights, Cavalry, Light Horse, Elephants, to Spears, Pikes, and Psiloi (light skirmishers). Each of these types have different movement ranges and combat modifiers against foot, mounted, and naval elements. In addition to this, certain types of elements can insta-kill other types on victory (rather than making them retreat), where this is supposed to represent the devastating effects of (say) a mounted charge against broken foot troops.

Finally, each element receives a **grading** where this represents the quality of the troops with respect to their contemporaries; this ranges from Superior (S) to Inferior (I), with Fast (F) and Exceptional (X) covering special cases. Put all this together and you get army lists that look something like this:

![swiss-army-list](/assets/swiss_list.png)

The sheer amount of research that must have gone into composing these lists is staggering (about 320 of them in 4 books covering the ancient, classical antiquity, "dark ages," and medieval periods). It was very clearly a labour of love, especially given that the books appear self-printed and were sold very cheaply.

I remember the gameplay as following a dynamic where the main challenge of the game was to hold together all your elements in their formations long enough to reach the enemy, and then to break their formations before they break yours. Your army is divided into three divisions and each division only gets to make a single die roll's worth of movement per turn. As long as your troops are arranged into their formations, then this isn't a great problem, since you can move a big formation with a single point. But if your formations break -- either because your irregular troops become impetuous, or because they are fragmented by attacks -- then it becomes increasingly expensive to move your army because you are moving individual elements and you find yourself having to make difficult choices about where your precious points could give you the most advantage. I remember finding this scarcity of organisation at the group level -- and the management of that scarcity -- to be a really interesting gameplay dynamic.

![game-in-progress](/assets/battle_photo.jpg)

Although I bought and painted an army of late-Medieval Italian Condotta (Florentine, maybe? I can't remember) and even played in a tournament or two, I was never very good at the game. Although there was a pretty deep strategic aspect to playing this game and a competitive streak in the culture around it, I was more interested in the historical and simulational aspects. I've barely scratched the surface here -- despite the abstractions that the ruleset necessarily makes about its target domain, its rules allowed you to model some quite specific situations (e.g., an invasion of Switzerland by English mercenaries, in winter, in mountainous terrain).

As I start getting more confident in designing and building software, I have the ambition to implement this ruleset -- or something like it -- in code. I think it would be a good way for me to practice sound design, and put to work some of the knowledge I've picked up over the last year or two. The first working program I built was Robert Axelrod's simulation of social polarisation, and these kinds of projects -- simulations, complex games, or something in between -- never cease to interest me.
