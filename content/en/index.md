---
seo:
  title: glyria.js — The Discord Bot Framework
  description: Build Discord bots with a clean developer experience — file-based commands, declarative cooldowns and permissions, a module SDK, a local studio, time-travel debugging, and zero-downtime deploys. Built on top of discord.js.
---

::u-page-hero
#title
Build Discord bots the right way.

#description
A clean, file-based Discord bot framework built on top of discord.js — with batteries you didn't know you needed.

#links

::u-button{color="neutral" size="xl" to="/getting-started/introduction" trailing-icon="i-lucide-arrow-right"}
Get Started
::

::u-button{color="neutral" size="xl" variant="outline" icon="i-simple-icons-github" to="https://github.com/Kiki344r/glyria.js"}
Star on GitHub
::

::u-page-section
#title
Everything you need to build your bot

#features

:::u-page-feature
---
icon: i-lucide-folder-open
---
#title
[File-based]{.text-primary} everything

#description
Commands, events, components, and modules load straight from your folders. No manual imports, no registration boilerplate.
:::

:::u-page-feature
---
icon: i-lucide-message-square
---
#title
The [ctx.g]{.text-primary} context

#description
Styled replies in one line, fluent chaining, `confirm()`, `paginate()`, auto-defer, loading states, and a built-in store — injected automatically in every handler.
:::

:::u-page-feature
---
icon: i-lucide-shield-check
---
#title
[Declarative]{.text-primary} guards

#description
`.setCooldown("5s")`, `.setPermissions(["BanMembers"])`, `.setOwnerOnly()` — cooldowns and permissions as one-liners, with styled error replies for free.
:::

:::u-page-feature
---
icon: i-lucide-package
---
#title
[Module]{.text-primary} SDK

#description
Ship features as self-contained modules with lifecycle hooks, global middleware, dependency resolution, crash isolation, and typed inter-module APIs.
:::

:::u-page-feature
---
icon: i-lucide-monitor-play
---
#title
[Studio]{.text-primary} web UI

#description
`glyria studio` opens a local UI that runs your commands and previews the Discord render live — without ever opening Discord.
:::

:::u-page-feature
---
icon: i-lucide-history
---
#title
[Time-travel]{.text-primary} debugging

#description
Every interaction is recorded in dev. Reproduce a user-reported bug with `glyria replay <id>` — no user required.
:::

:::u-page-feature
---
icon: i-lucide-refresh-cw
---
#title
[Zero-downtime]{.text-primary} deploys

#description
`glyria reload` hot-swaps your handlers in memory while the bot keeps running. Crash loops roll back to the last stable build automatically.
:::

:::u-page-feature
---
icon: i-lucide-layout
---
#title
[Embed V2]{.text-primary} builder

#description
First-class support for Discord's Components V2 system — plus typed customIds that parse their own parameters.
:::

:::u-page-feature
---
icon: i-lucide-plug
---
#title
Built on [discord.js]{.text-primary}

#description
glyria.js is a DX layer on top of discord.js. You always have access to the raw client when needed — no lock-in, ever.
:::

::
