---
weight: 3
title: "Animation Sync"
---

# Animation Synchronizers

Animation Synchronizers sync animation from multiplayer authority to all players in the network. There are two variations which serve different purposes.

## MPAnimationSync

{{< class_icon "MPAnimationSync" >}} **MPAnimationSync** is for syncing animation from `AnimationPlayer` class. Simply parent it to `AnimationPlayer`. And it'll automatically sync the animation state in the network.

## MPAnimTreeSync

{{< class_icon "MPAnimTreeSync" >}} **MPAnimTreeSync** is for syncing `AnimationTree` state. Simply parent it to `AnimationTree`. And it'll automatically sync the animation state in the network.

{{< hint warning >}}
If you use Godot's built-in function in your expressions, it may not be synchronized. If that's the case, please create a parameter and check from that instead. 
{{< /hint >}}

