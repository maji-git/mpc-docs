---
title: ENetProtocol
---
    
# API: ENetProtocol

**Inherits:** <img src="/icons/MPNetProtocolBase.svg" class="class-icon" alt=""> [`MPNetProtocolBase`](/docs/api/MPNetProtocolBase)

{{< class_icon "ENetProtocol" >}} Websocket Network Protocol



## Properties

| Type | Name | Default |
|---|---|---|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/int.svg" class="class-icon" alt=""> [`int`](https://docs.godotengine.org/en/stable/classes/class_int.html)|[bandwidth_in_limit](/docs/api/ENetProtocol#bandwidth_in_limit)|0|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/int.svg" class="class-icon" alt=""> [`int`](https://docs.godotengine.org/en/stable/classes/class_int.html)|[bandwidth_out_limit](/docs/api/ENetProtocol#bandwidth_out_limit)|0|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/int.svg" class="class-icon" alt=""> [`int`](https://docs.godotengine.org/en/stable/classes/class_int.html)|[compression_mode](/docs/api/ENetProtocol#compression_mode)|3|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/Variant.svg" class="class-icon" alt=""> [`Variant`](https://docs.godotengine.org/en/stable/classes/class_variant.html)|[role](/docs/api/ENetProtocol#role)|""|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/bool.svg" class="class-icon" alt=""> [`bool`](https://docs.godotengine.org/en/stable/classes/class_bool.html)|[secure](/docs/api/ENetProtocol#secure)||
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/CryptoKey.svg" class="class-icon" alt=""> [`CryptoKey`](https://docs.godotengine.org/en/stable/classes/class_cryptokey.html)|[server_private_key](/docs/api/ENetProtocol#server_private_key)||
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/X509Certificate.svg" class="class-icon" alt=""> [`X509Certificate`](https://docs.godotengine.org/en/stable/classes/class_x509certificate.html)|[ssl_certificate](/docs/api/ENetProtocol#ssl_certificate)||


## Methods

| Returns Type | Syntax |
|---|---|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/MultiplayerPeer.svg" class="class-icon" alt=""> [`MultiplayerPeer`](https://docs.godotengine.org/en/stable/classes/class_multiplayerpeer.html)|[host](/docs/api/ENetProtocol#host) ( <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/Variant.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html"><code>Variant</code></a> port, <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/Variant.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html"><code>Variant</code></a> bind_ip, <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/Variant.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html"><code>Variant</code></a> max_players )|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/MultiplayerPeer.svg" class="class-icon" alt=""> [`MultiplayerPeer`](https://docs.godotengine.org/en/stable/classes/class_multiplayerpeer.html)|[join](/docs/api/ENetProtocol#join) ( <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/Variant.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html"><code>Variant</code></a> address, <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/Variant.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html"><code>Variant</code></a> port )|






## Property Descriptions

<h3 class="property-title" id="bandwidth_in_limit"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/int.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_int.html"><code>int</code></a> bandwidth_in_limit </h3>

- Default: `0`



Bandwidth In Limit

---
<h3 class="property-title" id="bandwidth_out_limit"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/int.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_int.html"><code>int</code></a> bandwidth_out_limit </h3>

- Default: `0`



Bandwidth Out Limit

---
<h3 class="property-title" id="compression_mode"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/int.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_int.html"><code>int</code></a> compression_mode </h3>

- Default: `3`



Set ENet host compression mode

---
<h3 class="property-title" id="role"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/Variant.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html"><code>Variant</code></a> role </h3>

- Default: `""`



There's currently no description for this property.

---
<h3 class="property-title" id="secure"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/bool.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html"><code>bool</code></a> secure </h3>

- Default: `none`



Specify if you needs encryption in your ENet

---
<h3 class="property-title" id="server_private_key"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/CryptoKey.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_cryptokey.html"><code>CryptoKey</code></a> server_private_key </h3>

- Default: `none`



Secure Private key for server

---
<h3 class="property-title" id="ssl_certificate"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/X509Certificate.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_x509certificate.html"><code>X509Certificate</code></a> ssl_certificate </h3>

- Default: `none`



Trusted SSL certificate for server & client

---


## Method Descriptions

<h3 class="property-title" id="host"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/MultiplayerPeer.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_multiplayerpeer.html"><code>MultiplayerPeer</code></a> host ( <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html"><code>Variant</code></a> <span class="method-arg">port</span>, <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html"><code>Variant</code></a> <span class="method-arg">bind_ip</span>, <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html"><code>Variant</code></a> <span class="method-arg">max_players</span> ) </h3>



Host function

---
<h3 class="property-title" id="join"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/MultiplayerPeer.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_multiplayerpeer.html"><code>MultiplayerPeer</code></a> join ( <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html"><code>Variant</code></a> <span class="method-arg">address</span>, <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html"><code>Variant</code></a> <span class="method-arg">port</span> ) </h3>



There's currently no description for this method.

---




