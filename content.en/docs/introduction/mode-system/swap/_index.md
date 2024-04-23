---
weight: 3
title: "Swap"
---

# Solo Swap Mode

![Banner](assets/banner.png)

This mode allows for solo games, but the player gets to choose which player node in the game they want to control.


## Input Behaviour
In this mode, the input system will return the same input if the player is focused. otherwise, it will return "empty".

![Input Behaviour](assets/inputsys.png)


## Starting the swap mode.

```gd
mpc.start_swap()
```

{{< hint info >}}
**Before starting this mode!**
How many players will be created depends on the maximum number of players you specify! If you need to specify your player count, set the `mpc.max_players` variable first!
{{< /hint >}}