---
title: MultiPlayCore
---
    
# API: MultiPlayCore

**Inherits:** <img src="/icons/MPBase.svg" class="class-icon" alt=""> [`MPBase`](/docs/api/MPBase)

{{< class_icon "MultiPlayCore" >}} Core of everything MultiPlay



## Properties

| Type | Name | Default |
|---|---|---|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/bool.svg" class="class-icon" alt=""> [`bool`](https://docs.godotengine.org/en/stable/classes/class_bool.html)|[assign_client_authority](/docs/api/MultiPlayCore#assign_client_authority)|true|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/String.svg" class="class-icon" alt=""> [`String`](https://docs.godotengine.org/en/stable/classes/class_string.html)|[bind_address](/docs/api/MultiPlayCore#bind_address)|"*"|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/int.svg" class="class-icon" alt=""> [`int`](https://docs.godotengine.org/en/stable/classes/class_int.html)|[connect_timeout_ms](/docs/api/MultiPlayCore#connect_timeout_ms)|50000|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/Node.svg" class="class-icon" alt=""> [`Node`](https://docs.godotengine.org/en/stable/classes/class_node.html)|[current_scene](/docs/api/MultiPlayCore#current_scene)|null|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/int.svg" class="class-icon" alt=""> [`int`](https://docs.godotengine.org/en/stable/classes/class_int.html)|[current_swap_index](/docs/api/MultiPlayCore#current_swap_index)|0|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/bool.svg" class="class-icon" alt=""> [`bool`](https://docs.godotengine.org/en/stable/classes/class_bool.html)|[debug_gui_enabled](/docs/api/MultiPlayCore#debug_gui_enabled)|true|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/Variant.svg" class="class-icon" alt=""> [`Variant`](https://docs.godotengine.org/en/stable/classes/class_variant.html)|[debug_status_txt](/docs/api/MultiPlayCore#debug_status_txt)|""|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/PackedScene.svg" class="class-icon" alt=""> [`PackedScene`](https://docs.godotengine.org/en/stable/classes/class_packedscene.html)|[first_scene](/docs/api/MultiPlayCore#first_scene)||
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/bool.svg" class="class-icon" alt=""> [`bool`](https://docs.godotengine.org/en/stable/classes/class_bool.html)|[is_server](/docs/api/MultiPlayCore#is_server)|false|
|<img src="/icons/MPPlayer.svg" class="class-icon" alt=""> [`MPPlayer`](/docs/api/MPPlayer)|[local_player](/docs/api/MultiPlayCore#local_player)|null|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/int.svg" class="class-icon" alt=""> [`int`](https://docs.godotengine.org/en/stable/classes/class_int.html)|[max_players](/docs/api/MultiPlayCore#max_players)|2|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/int.svg" class="class-icon" alt=""> [`int`](https://docs.godotengine.org/en/stable/classes/class_int.html)|[mode](/docs/api/MultiPlayCore#mode)|0|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/bool.svg" class="class-icon" alt=""> [`bool`](https://docs.godotengine.org/en/stable/classes/class_bool.html)|[online_connected](/docs/api/MultiPlayCore#online_connected)|false|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/MultiplayerPeer.svg" class="class-icon" alt=""> [`MultiplayerPeer`](https://docs.godotengine.org/en/stable/classes/class_multiplayerpeer.html)|[online_peer](/docs/api/MultiPlayCore#online_peer)|null|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/int.svg" class="class-icon" alt=""> [`int`](https://docs.godotengine.org/en/stable/classes/class_int.html)|[player_count](/docs/api/MultiPlayCore#player_count)|0|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/bool.svg" class="class-icon" alt=""> [`bool`](https://docs.godotengine.org/en/stable/classes/class_bool.html)|[player_node_ready](/docs/api/MultiPlayCore#player_node_ready)|false|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/PackedScene.svg" class="class-icon" alt=""> [`PackedScene`](https://docs.godotengine.org/en/stable/classes/class_packedscene.html)|[player_scene](/docs/api/MultiPlayCore#player_scene)||
|<img src="/icons/MPPlayersCollection.svg" class="class-icon" alt=""> [`MPPlayersCollection`](/docs/api/MPPlayersCollection)|[players](/docs/api/MultiPlayCore#players)||
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/int.svg" class="class-icon" alt=""> [`int`](https://docs.godotengine.org/en/stable/classes/class_int.html)|[port](/docs/api/MultiPlayCore#port)|4200|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/bool.svg" class="class-icon" alt=""> [`bool`](https://docs.godotengine.org/en/stable/classes/class_bool.html)|[started](/docs/api/MultiPlayCore#started)|false|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/String.svg" class="class-icon" alt=""> [`String`](https://docs.godotengine.org/en/stable/classes/class_string.html)|[swap_input_action](/docs/api/MultiPlayCore#swap_input_action)||


## Methods

| Returns Type | Syntax |
|---|---|
||[create_player](/docs/api/MultiPlayCore#create_player) ( <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/Variant.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html"><code>Variant</code></a> player_id, <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/Variant.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html"><code>Variant</code></a> handshake_data )|
||[load_scene](/docs/api/MultiPlayCore#load_scene) ( <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/String.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_string.html"><code>String</code></a> scene_path, <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/Variant.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html"><code>Variant</code></a> respawn_players )|
||[start_one_screen](/docs/api/MultiPlayCore#start_one_screen) ( )|
||[start_online_host](/docs/api/MultiPlayCore#start_online_host) ( <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/bool.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html"><code>bool</code></a> act_client, <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/Dictionary.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html"><code>Dictionary</code></a> act_client_handshake_data, <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/Dictionary.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html"><code>Dictionary</code></a> act_client_credentials_data )|
||[start_online_join](/docs/api/MultiPlayCore#start_online_join) ( <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/String.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_string.html"><code>String</code></a> url, <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/Dictionary.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html"><code>Dictionary</code></a> handshake_data, <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/Dictionary.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html"><code>Dictionary</code></a> credentials_data )|
||[start_solo](/docs/api/MultiPlayCore#start_solo) ( )|
||[start_swap](/docs/api/MultiPlayCore#start_swap) ( )|
||[swap_increment](/docs/api/MultiPlayCore#swap_increment) ( )|
||[swap_to](/docs/api/MultiPlayCore#swap_to) ( )|


## Enumerations

<h3 class="property-title"> enum PlayMode: </h3>

- Online = 0


Network enabled multiplayer

---
- OneScreen = 1


Single screen multiplayer. User can play with multiple controllers/devices.

---
- Swap = 2


Swap mode. Intended to be played with one player, user can switch to the peer they wanted to control.

---
- Solo = 3


Solo, self explanatory

---
<h3 class="property-title"> enum ConnectionError: </h3>

- UNKNOWN = 0


Unknown reason

---
- SERVER_FULL = 1


The server's full

---
- AUTH_FAILED = 2


Authentication Failure

---
- TIMEOUT = 3


Connection timed out

---
- CONNECTION_FAILURE = 4


Failure during connection

---
- INVALID_HANDSHAKE = 5


Internal handshake data cannot be readed by the server

---
- VERSION_MISMATCH = 6


Client's Multiplay version is not compatible with the server

---


## Property Descriptions

<h3 class="property-title" id="assign_client_authority"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/bool.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html"><code>bool</code></a> assign_client_authority </h3>

- Default: `true`



Should Client authority be assigned automatically?

---
<h3 class="property-title" id="bind_address"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/String.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_string.html"><code>String</code></a> bind_address </h3>

- Default: `"*"`



Which ip to bind on in online game host.

---
<h3 class="property-title" id="connect_timeout_ms"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/int.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_int.html"><code>int</code></a> connect_timeout_ms </h3>

- Default: `50000`



Time in milliseconds before timing out the user.

---
<h3 class="property-title" id="current_scene"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/Node.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_node.html"><code>Node</code></a> current_scene </h3>

- Default: `null`



Current scene node

---
<h3 class="property-title" id="current_swap_index"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/int.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_int.html"><code>int</code></a> current_swap_index </h3>

- Default: `0`



Current swap index, Swap mode only.

---
<h3 class="property-title" id="debug_gui_enabled"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/bool.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html"><code>bool</code></a> debug_gui_enabled </h3>

- Default: `true`



Enable Debug UI

---
<h3 class="property-title" id="debug_status_txt"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/Variant.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html"><code>Variant</code></a> debug_status_txt </h3>

- Default: `""`



Debug Status

---
<h3 class="property-title" id="first_scene"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/PackedScene.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_packedscene.html"><code>PackedScene</code></a> first_scene </h3>

- Default: `none`



The first scene to load

---
<h3 class="property-title" id="is_server"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/bool.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html"><code>bool</code></a> is_server </h3>

- Default: `false`



Determines if MultiPlay is running as server

---
<h3 class="property-title" id="local_player"> <img src="/icons/MPPlayer.svg" class="class-icon" alt=""> <a href="/docs/api/MPPlayer"><code>MPPlayer</code></a> local_player </h3>

- Default: `null`



The local player node

---
<h3 class="property-title" id="max_players"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/int.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_int.html"><code>int</code></a> max_players </h3>

- Default: `2`



Max players for the game.

---
<h3 class="property-title" id="mode"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/int.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_int.html"><code>int</code></a> mode </h3>

- Default: `0`



Current playmode

---
<h3 class="property-title" id="online_connected"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/bool.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html"><code>bool</code></a> online_connected </h3>

- Default: `false`



If connected in online mode

---
<h3 class="property-title" id="online_peer"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/MultiplayerPeer.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_multiplayerpeer.html"><code>MultiplayerPeer</code></a> online_peer </h3>

- Default: `null`



MultiplayerPeer for the game

---
<h3 class="property-title" id="player_count"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/int.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_int.html"><code>int</code></a> player_count </h3>

- Default: `0`



Current player count

---
<h3 class="property-title" id="player_node_ready"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/bool.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html"><code>bool</code></a> player_node_ready </h3>

- Default: `false`



If player node is ready

---
<h3 class="property-title" id="player_scene"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/PackedScene.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_packedscene.html"><code>PackedScene</code></a> player_scene </h3>

- Default: `none`



Your own template player scene.

---
<h3 class="property-title" id="players"> <img src="/icons/MPPlayersCollection.svg" class="class-icon" alt=""> <a href="/docs/api/MPPlayersCollection"><code>MPPlayersCollection</code></a> players </h3>

- Default: `none`



Players Collection

---
<h3 class="property-title" id="port"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/int.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_int.html"><code>int</code></a> port </h3>

- Default: `4200`



Which port to use in online game host.

---
<h3 class="property-title" id="started"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/bool.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html"><code>bool</code></a> started </h3>

- Default: `false`



Determines if MultiPlay has started

---
<h3 class="property-title" id="swap_input_action"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/String.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_string.html"><code>String</code></a> swap_input_action </h3>

- Default: `none`



Which action key to use for swap mode.

---


## Method Descriptions

<h3 class="property-title" id="create_player">  create_player ( <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html"><code>Variant</code></a> <span class="method-arg">player_id</span>, <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html"><code>Variant</code></a> <span class="method-arg">handshake_data</span> ) </h3>



Create player node

---
<h3 class="property-title" id="load_scene">  load_scene ( <a href="https://docs.godotengine.org/en/stable/classes/class_string.html"><code>String</code></a> <span class="method-arg">scene_path</span>, <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html"><code>Variant</code></a> <span class="method-arg">respawn_players</span> ) </h3>



Load scene for all players

---
<h3 class="property-title" id="start_one_screen">  start_one_screen ( ) </h3>



Start one screen mode

---
<h3 class="property-title" id="start_online_host">  start_online_host ( <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html"><code>bool</code></a> <span class="method-arg">act_client</span>, <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html"><code>Dictionary</code></a> <span class="method-arg">act_client_handshake_data</span>, <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html"><code>Dictionary</code></a> <span class="method-arg">act_client_credentials_data</span> ) </h3>



Start online mode as host

---
<h3 class="property-title" id="start_online_join">  start_online_join ( <a href="https://docs.godotengine.org/en/stable/classes/class_string.html"><code>String</code></a> <span class="method-arg">url</span>, <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html"><code>Dictionary</code></a> <span class="method-arg">handshake_data</span>, <a href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html"><code>Dictionary</code></a> <span class="method-arg">credentials_data</span> ) </h3>



Start online mode as client

---
<h3 class="property-title" id="start_solo">  start_solo ( ) </h3>



Start solo mode

---
<h3 class="property-title" id="start_swap">  start_swap ( ) </h3>



Start swap mode

---
<h3 class="property-title" id="swap_increment">  swap_increment ( ) </h3>



Swap control to player according to index. Swap mode only

---
<h3 class="property-title" id="swap_to">  swap_to ( ) </h3>



Specifically Swap to index. Swap mode only

---


## Signals

<h3 class="property-title"> connected_to_server ( ) </h3>



Emit when client has connected to the server, Only emit locally.

---
<h3 class="property-title"> connection_error ( ) </h3>



Emit when client faced connection error

---
<h3 class="property-title"> disconnected_from_server ( ) </h3>



Emit when client has disconnected from the server, Only emit locally.

---
<h3 class="property-title"> player_connected ( ) </h3>



Emit when new player is connected to the server, Emit to all players in the server.

---
<h3 class="property-title"> player_disconnected ( ) </h3>



Emit when player has disconnected from the server, Emit to all players in the server.

---
<h3 class="property-title"> scene_loaded ( ) </h3>



On network scene loaded

---
<h3 class="property-title"> swap_changed ( <a href="https://docs.godotengine.org/en/stable/classes/class_int.html"><code>int</code></a> <span class="method-arg">to_index</span>, <a href="https://docs.godotengine.org/en/stable/classes/class_int.html"><code>int</code></a> <span class="method-arg">old_index</span> ) </h3>



Emit when swap index has changed. Only emit in Swap Play mode

---
