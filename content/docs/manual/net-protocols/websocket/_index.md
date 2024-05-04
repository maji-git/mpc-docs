---
weight: 1
title: "Websockets"
---

# Websocket Protocol

Websocket Protocol is a network protocol that uses Godot's [`WebSocketMultiplayerPeer`](https://docs.godotengine.org/en/stable/classes/class_websocketmultiplayerpeer.html). Great option if you planned to export your game as HTML5.

## Secure Connections

Websocket Network Protocol comes with secure options out of the box. You can enable the `secure` option, and then specify your certificates.

![Secure options](assets/t1.png)

### Creating self-signed certificates

MultiPlay Tools also comes with a self-signed certificate generator. Certificates generated from it should only be used for debugging purposes.

You can locate the menu at Project -> Tools -> MultiPlay Core -> Create Self Signed Certificate

![Create self-signed cert](assets/t2.png)

Both private key and certificate file will be created at `res://private_key.key` and `res://cert.crt`. If you don't see these files, you might need to refocus the editor window.

{{< hint info >}}
Self-signed certificate tool will create certificate for `127.0.0.1`
{{< /hint >}}
