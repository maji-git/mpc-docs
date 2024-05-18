---
weight: 30
title: "Using MPIO"
---

# Using the MPIO

![Banner](assets/banner.png)

MultiPlay has a global singleton which is used to store global variables and for debugging purposes. 

## Getting the main MultiPlay Core

```gd
MPIO.mpc
```


## Logging Example

```gd
MPIO.logdata("Hello World!")
```

## Why use `logdata` instead of `print`?

If you're working in the online mode. `logdata` function can be useful because it also outputs which player id is logging the data. Other than that, it's recommended to use `print` if you're not debugging the online mode.