---
title: MPTransformSync
---
    
# API: MPTransformSync

**Inherits:** <img src="/icons/MPSyncBase.svg" class="class-icon" alt=""> [`MPSyncBase`](/docs/api/MPSyncBase)

{{< class_icon "MPTransformSync" >}} Network Transform Synchronizer



## Properties

| Type | Name | Default |
|---|---|---|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/bool.svg" class="class-icon" alt=""> [`bool`](https://docs.godotengine.org/en/stable/classes/class_bool.html)|[lerp_enabled](/docs/api/MPTransformSync#lerp_enabled)|true|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/int.svg" class="class-icon" alt=""> [`int`](https://docs.godotengine.org/en/stable/classes/class_int.html)|[lerp_speed](/docs/api/MPTransformSync#lerp_speed)|20|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/float.svg" class="class-icon" alt=""> [`float`](https://docs.godotengine.org/en/stable/classes/class_float.html)|[position_sensitivity](/docs/api/MPTransformSync#position_sensitivity)|0.01|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/float.svg" class="class-icon" alt=""> [`float`](https://docs.godotengine.org/en/stable/classes/class_float.html)|[rotation_sensitivity](/docs/api/MPTransformSync#rotation_sensitivity)|0.01|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/float.svg" class="class-icon" alt=""> [`float`](https://docs.godotengine.org/en/stable/classes/class_float.html)|[scale_sensitivity](/docs/api/MPTransformSync#scale_sensitivity)|0.01|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/bool.svg" class="class-icon" alt=""> [`bool`](https://docs.godotengine.org/en/stable/classes/class_bool.html)|[sync_position](/docs/api/MPTransformSync#sync_position)|true|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/bool.svg" class="class-icon" alt=""> [`bool`](https://docs.godotengine.org/en/stable/classes/class_bool.html)|[sync_rotation](/docs/api/MPTransformSync#sync_rotation)|true|
|<img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/bool.svg" class="class-icon" alt=""> [`bool`](https://docs.godotengine.org/en/stable/classes/class_bool.html)|[sync_scale](/docs/api/MPTransformSync#sync_scale)|false|


## Methods

| Returns Type | Syntax |
|---|---|
||[set_position_2d](/docs/api/MPTransformSync#set_position_2d) ( )|
||[set_position_3d](/docs/api/MPTransformSync#set_position_3d) ( )|
||[set_rotation_2d](/docs/api/MPTransformSync#set_rotation_2d) ( )|
||[set_rotation_3d](/docs/api/MPTransformSync#set_rotation_3d) ( )|
||[set_scale_2d](/docs/api/MPTransformSync#set_scale_2d) ( )|
||[set_scale_3d](/docs/api/MPTransformSync#set_scale_3d) ( )|






## Property Descriptions

<h3 class="property-title" id="lerp_enabled"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/bool.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html"><code>bool</code></a> lerp_enabled </h3>

- Default: `true`



Enable lerp for sync?

---
<h3 class="property-title" id="lerp_speed"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/int.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_int.html"><code>int</code></a> lerp_speed </h3>

- Default: `20`



Determines lerp speed

---
<h3 class="property-title" id="position_sensitivity"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/float.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_float.html"><code>float</code></a> position_sensitivity </h3>

- Default: `0.01`



Determines the sync sensitivity of position

---
<h3 class="property-title" id="rotation_sensitivity"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/float.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_float.html"><code>float</code></a> rotation_sensitivity </h3>

- Default: `0.01`



Determines the sync sensitivity of rotation

---
<h3 class="property-title" id="scale_sensitivity"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/float.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_float.html"><code>float</code></a> scale_sensitivity </h3>

- Default: `0.01`



Determines the sync sensitivity of scale

---
<h3 class="property-title" id="sync_position"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/bool.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html"><code>bool</code></a> sync_position </h3>

- Default: `true`



Determines if position will be sync

---
<h3 class="property-title" id="sync_rotation"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/bool.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html"><code>bool</code></a> sync_rotation </h3>

- Default: `true`



Determines if rotation will be sync

---
<h3 class="property-title" id="sync_scale"> <img src="https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/bool.svg" class="class-icon" alt=""> <a href="https://docs.godotengine.org/en/stable/classes/class_bool.html"><code>bool</code></a> sync_scale </h3>

- Default: `false`



Determines if scale will be sync

---


## Method Descriptions

<h3 class="property-title" id="set_position_2d">  set_position_2d ( ) </h3>



Set position of the 2D node, Server only.

---
<h3 class="property-title" id="set_position_3d">  set_position_3d ( ) </h3>



Set position of the 3D node, Server only.

---
<h3 class="property-title" id="set_rotation_2d">  set_rotation_2d ( ) </h3>



Set rotation of the 2D node, Server only.

---
<h3 class="property-title" id="set_rotation_3d">  set_rotation_3d ( ) </h3>



Set rotation of the 3D node, Server only.

---
<h3 class="property-title" id="set_scale_2d">  set_scale_2d ( ) </h3>



Set scale of the 2D node, Server only.

---
<h3 class="property-title" id="set_scale_3d">  set_scale_3d ( ) </h3>



Set scale of the 3D node, Server only.

---




