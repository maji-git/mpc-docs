---
weight: 2
title: "Input System"
---

# Input System

![Banner](assets/banner.png)

MultiPlay’s input system turns the input action into its input action. Each behaves differently according to the play mode.

## Using the Input System

You can use the input system by calling `MPPlayer`'s `translate_action`, or its alias `ma` function. Each one of these takes the original Input Action name.

Example usage:

```gd
Input.is_action_just_pressed(mpp.ma("jump"))
```