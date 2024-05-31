---
title: LatencyNetProtocol
---
    
# API: LatencyNetProtocol

**Inherits:** <img src="/icons/MPNetProtocolBase.svg" class="class-icon" alt=""> [`MPNetProtocolBase`](/docs/api/MPNetProtocolBase)

{{< class_icon "LatencyNetProtocol" >}} Network Protocol for simulating network latency, based on ENet/UDP. Intended for debuging purposes.



## Properties

| Type | Name | Default |
|---|---|---|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/int.svg" class="class-icon" alt=""> [`int`](https://docs.godotengine.org/en/stable/classes/class_int.html)|[simulate_latency_ms](/docs/api/LatencyNetProtocol#simulate_latency_ms)|100|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/float.svg" class="class-icon" alt=""> [`float`](https://docs.godotengine.org/en/stable/classes/class_float.html)|[simulate_loss](/docs/api/LatencyNetProtocol#simulate_loss)|0.0|


## Methods

| Returns Type | Syntax |
|---|---|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/MultiplayerPeer.svg" class="class-icon" alt=""> [`MultiplayerPeer`](https://docs.godotengine.org/en/stable/classes/class_multiplayerpeer.html)|[host](/docs/api/LatencyNetProtocol#host) ( <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/Variant.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html"><code>Variant</code></a> port, <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/Variant.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html"><code>Variant</code></a> bind_ip, <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/Variant.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html"><code>Variant</code></a> max_players )|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/MultiplayerPeer.svg" class="class-icon" alt=""> [`MultiplayerPeer`](https://docs.godotengine.org/en/stable/classes/class_multiplayerpeer.html)|[join](/docs/api/LatencyNetProtocol#join) ( <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/Variant.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html"><code>Variant</code></a> address, <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/Variant.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html"><code>Variant</code></a> port )|






## Property Descriptions

<h3 class="property-title" id="simulate_latency_ms"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/int.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_int.html"><code>int</code></a> simulate_latency_ms </h3>

- Default: `100`



Simulate Network Latency in Microseconds

---
<h3 class="property-title" id="simulate_loss"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/float.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_float.html"><code>float</code></a> simulate_loss </h3>

- Default: `0.0`



Simulate Chance of Network Loss

---


## Method Descriptions

<h3 class="property-title" id="host"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/MultiplayerPeer.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_multiplayerpeer.html"><code>MultiplayerPeer</code></a> host ( <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html"><code>Variant</code></a> <span class="method-arg">port</span>, <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html"><code>Variant</code></a> <span class="method-arg">bind_ip</span>, <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html"><code>Variant</code></a> <span class="method-arg">max_players</span> ) </h3>



Host function

---
<h3 class="property-title" id="join"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/MultiplayerPeer.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_multiplayerpeer.html"><code>MultiplayerPeer</code></a> join ( <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html"><code>Variant</code></a> <span class="method-arg">address</span>, <a href="https://docs.godotengine.org/en/stable/classes/class_variant.html"><code>Variant</code></a> <span class="method-arg">port</span> ) </h3>



There's currently no description for this method.

---




