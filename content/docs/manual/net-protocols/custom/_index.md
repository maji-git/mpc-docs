---
weight: 20
title: "Custom Protocol"
---

# Creating Custom Protocol

In-case you have your MultiplayerPeer solution. You can implement your custom network protocol!

MultiPlay Core will pass the information needed for actions to your script. Your script must return `MultiplayerPeer` in a connecting/connected state.

Here's the template for network protocol implementation:

```gd
@tool
extends MPNetProtocolBase

## Host function
func host(port, bind_ip, max_players) -> MultiplayerPeer:
    # your logic
	pass

func join(address, port) -> MultiplayerPeer:
	# your logic
	pass
```