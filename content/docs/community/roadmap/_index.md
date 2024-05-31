---
weight: 23
title: "Roadmap"
---

# MultiPlay Core Roadmap

MultiPlay Core's journey is just starting to begin! Here's the list of what I would love to implement.

## Main quests
- [x] [MPAuth](/docs/manual/auth) - Authenticator... is done!
- [x] [MPTransformSync](/docs/manual/components/transform-sync/) - Sync node transforms with lerp.
- [x] [MPAnimationSync](/docs/manual/components/anim-sync/) - Sync node animations across the network.
- [ ] MPMovement - Sync Character2D/3D movement, allowing for user movement input while maintaining server authority.
- [ ] MPRigidbody - Sync physics state in the network.
- [ ] MPStartTransform - Spawn position for players.
- [ ] MPDiscovery - Find available online rooms in the network.
- [x] [Custom Network Protocol](/docs/manual/net-protocols/) - Modular network protocols, alongside support for developers to make their own network protocols.
- [x] [Encryption](/docs/manual/encryption) - Securely send data between server <-> client (*Partially Supported*. Only works in natively supported network protocols)

## Side quests
- [ ] C# Bindings - Make MultiPlay Core APIs available for use in C#.
- [ ] Dedicated server hosting - Open source Self-hosted Backend server that manages MultiPlay Core instances.

Any more ideas are appreciated!