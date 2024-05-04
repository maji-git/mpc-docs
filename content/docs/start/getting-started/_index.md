---
weight: 2
title: "Getting Started"
---

# Getting Started!

Let's get started with MultiPlay Core! In this tutorial, we'll be initializing an empty MultiPlay game. 

This tutorial assumes that you already created your Godot project.

## 1. Install MultiPlay Core

First, install the MultiPlay Core library. You can search in the asset library and install it from there.

![AssetLib](./assets/t0.png)

## 2. Enable MultiPlay Core Plugin

Go to Project Settings > Plugins > Enable MultiPlayCore

![Project Settings > Plugins > Enable MultiPlayCore](./assets/t1.png)

## 3. Restart your Godot Editor
The plugin will prompt you to restart to finish the setup.

## 3. Insert `MultiPlayCore` Node

Add `MultiPlayCore` Node to your root node.

![Add Child Node > MultiPlayCore](./assets/t2.png)

{{< hint warning >}}
If creating the node doesn't work, you'll need to manually restart the editor.
{{< /hint >}}

## 4. Insert Network Protocol
For MultiPlay Core to work, you'll need to insert one of the network protocol nodes to the Multiplay Core node. Search up "NetProtocol" then insert your preferred protocol.

## 5. Set Godot Editor to run multiple instances.
To test networking, go to Debug > Run Multiple Instances > Choose how many instances you like.

![Debug > Run Multiple Instances](./assets/t3.png)

## 6. Run the project
Now with all that, you can run the project! After pressing run, the debug menu will appear on two windows. From there you can try different modes. For online play, press "Host + Act Client" on one window. Press "Connect" on another window, and there you have it!

![Running the project](./assets/t4.png)

That's it for an empty MultiPlay game! Now even though they're technically connected, the game still doesn't have anything in it yet. You can go and try our [demos](/docs/demo) to see how MultiPlay will work with your projects!
