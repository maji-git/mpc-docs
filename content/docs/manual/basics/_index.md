---
weight: 1
title: "Basic APIs"
---

# Basic APIs

MultiPlay Core comes with easy-to-use API for generic purposes development.

## MultiPlay Core Class
Class for everything {{< class_icon "MultiPlayCore" >}} multiplay core, comes with handy API to use!

{{< hint info >}}
`MultiPlayCore` Class is shorten as `mpc`
{{< /hint >}}

### Properties

#### Get the local player

```gd
mpc.local_player
```


#### Get current player count 

```gd
mpc.player_count
```


### Functions

#### Loading Scene
This function will load the scene for all players.

```gd
mpc.load_scene(scene_path, respawn_players)
```

You can change the `respawn_players` boolean to false if you want to handle despawn/spawning the players yourself.

#### Change swap focus (Swap mode only)

Swap player node incrementally.

```gd
mpc.swap_increment()
```

Specify swap index.

```gd
mpc.swap_to(index)
```

### Signals

`player_connected(player: MPPlayer)` - On player connected to the server. Emits to everyone

`player_disconnected(player: MPPlayer)` - On player disconnected from the server. Emits to everyone

`connected_to_server(localplayer: MPPlayer)` - On player connected to the server. Only emit locally

`disconnected_from_server(reason: String)` - On player disconnected from the server. Only emit locally

`connection_error(reason: ConnectionError)` - Emit when the client faced connection error

`swap_changed(to_index: int, old_index: int)` - Emit when swap index has changed. Only emit in Swap Play mode


## MPPlayer Class
The {{< class_icon "MPPlayer" >}} MultiPlay player class. Manages input for your player node.

{{< hint info >}}
`MPPlayer` Class is shorten as `mpp`
{{< /hint >}}

### Get the MPPlayer class from your own player node.
If you specified your own player scene, it'll be added as a child of `MPPlayer`. To get the class, simply use:

```gd
@onready var mpp: MPPlayer = get_parent()
```

### Properties

#### Get the player's main `MultiPlayCore` Node

```gd
mpp.mpc
```

### Functions

#### Use the input system

For more information, see [Input System](/docs/start/input-system)

```gd
mpp.ma(action_name)
```

#### Disconnect the player

Disconnect the player from the server. **Local Only**

```gd
mpp.disconnect_player()
```

#### Kicking the player

Kick the player from the server, you can also specify the reason. **Server Only**

```gd
mpp.kick(reason)
```

#### Respawn the player

Respawn your player node using this function, **Server Only**:

```gd
mpp.respawn_node()
```

{{< hint info >}}
There's also `spawn_node` and `despawn_node` to use! These are self-explanatory. 
{{< /hint >}}


### Signals

`player_ready` - On player ready. Only emit locally

`handshake_ready` - On handshake & authentication data is ready. Emit to all players

`swap_focused` - On swap focused, Swap mode only

`swap_unfocused` - On swap unfocused, Swap mode only

## MPPlayersCollection Class
{{< class_icon "MPPlayersCollection" >}} Collection of all {{< class_icon "MPPlayer" >}} player node.

### Getting the player collection

You can get the {{< class_icon "MPPlayersCollection" >}} player collection from {{< class_icon "MultiPlayCore" >}} MultiPlay Core, with this property:

```gd
mpc.players
```

### Functions

#### Getting the player node

{{< tabs "mpplayer_tab" >}}

{{< tab "By ID" >}}

Get player by their ID using this function:

```gd
player.get_player_by_id(id: int)
```

{{< /tab >}}

{{< tab "By Index" >}}

Get player by their Index using this function:

```gd
player.get_player_by_index(index: int)
```

{{< /tab >}}

{{< /tabs >}}


#### Get all players

You can get a dictionary of all players with the following function:

```gd
players.get_players()
```

Feel free to use `.values()` if you just want an array of players ;)


#### Respawn all player node

Respawn all player's node with this function **Server Only**:

```gd
players.respawn_node_all()
```

{{< hint info >}}
There's also `spawn_node_all` and `despawn_node_all` to use! These are self explanatory. 
{{< /hint >}}
