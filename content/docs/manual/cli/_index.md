---
weight: 30
title: "CLI"
---

# Command Line Arguments

![Banner](assets/banner.png)

MultiPlay Core includes a few command-line arguments that you can pass upon game launch. Useful especially in headless server builds.

| Name | Description |
|---|---|
|`--server`|Host a server|
|`--port=<port number>`|Port to host server on|
|`--act-client`|Should server also act as a client?|
|`--client`|Connect as client|
|`--url=<client connect url>`|Specify client connect URL|

## Example

Server host usage:

```sh
mpc_build.exe --server --port=6942
```