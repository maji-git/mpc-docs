---
title: MPPlayer
---
    
# API: MPPlayer

**Inherits:** <img src="/icons/MPBase.svg" class="class-icon" alt=""> [`MPBase`](/docs/api/MPBase)

{{< class_icon "MPPlayer" >}} MultiPlay Player Node



## Properties

| Type | Name | Default |
|---|---|---|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/Variant.svg" class="class-icon" alt=""> [`Variant`](https://docs.godotengine.org/en/stable/classes/class_variant.html)|[auth_data](/docs/api/MPPlayer#auth_data)|<unknown>|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/Variant.svg" class="class-icon" alt=""> [`Variant`](https://docs.godotengine.org/en/stable/classes/class_variant.html)|[handshake_data](/docs/api/MPPlayer#handshake_data)|<unknown>|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/bool.svg" class="class-icon" alt=""> [`bool`](https://docs.godotengine.org/en/stable/classes/class_bool.html)|[is_local](/docs/api/MPPlayer#is_local)|false|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/bool.svg" class="class-icon" alt=""> [`bool`](https://docs.godotengine.org/en/stable/classes/class_bool.html)|[is_ready](/docs/api/MPPlayer#is_ready)|false|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/bool.svg" class="class-icon" alt=""> [`bool`](https://docs.godotengine.org/en/stable/classes/class_bool.html)|[is_swap_focused](/docs/api/MPPlayer#is_swap_focused)|false|
|<img src="/icons/MultiPlayCore.svg" class="class-icon" alt=""> [`MultiPlayCore`](/docs/api/MultiPlayCore)|[mpc](/docs/api/MPPlayer#mpc)||
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/int.svg" class="class-icon" alt=""> [`int`](https://docs.godotengine.org/en/stable/classes/class_int.html)|[ping_ms](/docs/api/MPPlayer#ping_ms)||
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/int.svg" class="class-icon" alt=""> [`int`](https://docs.godotengine.org/en/stable/classes/class_int.html)|[player_id](/docs/api/MPPlayer#player_id)|0|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/int.svg" class="class-icon" alt=""> [`int`](https://docs.godotengine.org/en/stable/classes/class_int.html)|[player_index](/docs/api/MPPlayer#player_index)|0|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/Node.svg" class="class-icon" alt=""> [`Node`](https://docs.godotengine.org/en/stable/classes/class_node.html)|[player_node](/docs/api/MPPlayer#player_node)||
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/String.svg" class="class-icon" alt=""> [`String`](https://docs.godotengine.org/en/stable/classes/class_string.html)|[player_node_resource_path](/docs/api/MPPlayer#player_node_resource_path)|""|


## Methods

| Returns Type | Syntax |
|---|---|
||[despawn_node](/docs/api/MPPlayer#despawn_node) ( )|
||[disconnect_player](/docs/api/MPPlayer#disconnect_player) ( )|
||[kick](/docs/api/MPPlayer#kick) ( )|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/Variant.svg" class="class-icon" alt=""> [`Variant`](https://docs.godotengine.org/en/stable/classes/class_variant.html)|[ma](/docs/api/MPPlayer#ma) ( )|
||[respawn_node](/docs/api/MPPlayer#respawn_node) ( )|
||[spawn_node](/docs/api/MPPlayer#spawn_node) ( )|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/StringName.svg" class="class-icon" alt=""> [`StringName`](https://docs.godotengine.org/en/stable/classes/class_stringname.html)|[translate_action](/docs/api/MPPlayer#translate_action) ( )|






## Property Descriptions

<h3 class="property-title" id="auth_data"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/Variant.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html"><code>Variant</code></a> auth_data </h3>

- Default: `<unknown>`



Authentication Data

---
<h3 class="property-title" id="handshake_data"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/Variant.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html"><code>Variant</code></a> handshake_data </h3>

- Default: `<unknown>`



Handshake data

---
<h3 class="property-title" id="is_local"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/bool.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html"><code>bool</code></a> is_local </h3>

- Default: `false`



Determines if this player is local

---
<h3 class="property-title" id="is_ready"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/bool.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html"><code>bool</code></a> is_ready </h3>

- Default: `false`



Determines if this player network is ready

---
<h3 class="property-title" id="is_swap_focused"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/bool.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html"><code>bool</code></a> is_swap_focused </h3>

- Default: `false`



Determines if swap is focusing this player, Swap mode only.

---
<h3 class="property-title" id="mpc"> <img src="/icons/MultiPlayCore.svg" class="class-icon" alt=""> <a href="/docs/api/MultiPlayCore"><code>MultiPlayCore</code></a> mpc </h3>

- Default: `none`



Get MultiPlayCore

---
<h3 class="property-title" id="ping_ms"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/int.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_int.html"><code>int</code></a> ping_ms </h3>

- Default: `none`



Ping in ms

---
<h3 class="property-title" id="player_id"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/int.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_int.html"><code>int</code></a> player_id </h3>

- Default: `0`



ID of the player

---
<h3 class="property-title" id="player_index"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/int.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_int.html"><code>int</code></a> player_index </h3>

- Default: `0`



Determines the player index, not to be confused with player_id.

---
<h3 class="property-title" id="player_node"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/Node.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_node.html"><code>Node</code></a> player_node </h3>

- Default: `none`



The player node created from the template, see [member MultiPlayCore.player_scene]

---
<h3 class="property-title" id="player_node_resource_path"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/String.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_string.html"><code>String</code></a> player_node_resource_path </h3>

- Default: `""`



The resource path of the template player.

---


## Method Descriptions

<h3 class="property-title" id="despawn_node">  despawn_node ( ) </h3>



Despawn player node, Server only.

---
<h3 class="property-title" id="disconnect_player">  disconnect_player ( ) </h3>



Disconnect the player, this is intended for local use.

---
<h3 class="property-title" id="kick">  kick ( ) </h3>



Kick the player, Server only.

---
<h3 class="property-title" id="ma"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/Variant.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html"><code>Variant</code></a> ma ( ) </h3>



Just like translate_action, but in shorter format

---
<h3 class="property-title" id="respawn_node">  respawn_node ( ) </h3>



Respawn player node, Server only.

---
<h3 class="property-title" id="spawn_node">  spawn_node ( ) </h3>



Spawn player node, Server only.

---
<h3 class="property-title" id="translate_action"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/StringName.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_stringname.html"><code>StringName</code></a> translate_action ( ) </h3>



Translate input action to the intended ones. In Online/Solo, it'll return the same input action name

---


## Signals

<h3 class="property-title"> handshake_ready ( ) </h3>



On handshake data is ready. Emit to all players

---
<h3 class="property-title"> player_ready ( ) </h3>



On player ready. Only emit locally

---
<h3 class="property-title"> swap_focused ( ) </h3>



On swap focused, Swap mode only

---
<h3 class="property-title"> swap_unfocused ( ) </h3>



On swap unfocused, Swap mode only

---
