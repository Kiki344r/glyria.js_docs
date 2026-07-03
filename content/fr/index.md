---
seo:
  title: glyria.js — Le Framework Discord Bot
  description: Créez des bots Discord avec une expérience développeur soignée — commandes basées sur les fichiers, cooldowns et permissions déclaratifs, un SDK de modules, un studio local, du débogage time-travel et des déploiements sans interruption. Construit au-dessus de discord.js.
---

::u-page-hero
#title
Créez des bots Discord correctement.

#description
Un framework de bots Discord propre, basé sur les fichiers, construit au-dessus de discord.js — avec des batteries dont vous ignoriez avoir besoin.

#links

::u-button{color="neutral" size="xl" to="/fr/getting-started/introduction" trailing-icon="i-lucide-arrow-right"}
Commencer
::

::u-button{color="neutral" size="xl" variant="outline" icon="i-simple-icons-github" to="https://github.com/Kiki344r/glyria.js"}
Star sur GitHub
::

::u-page-section
#title
Tout ce dont vous avez besoin pour créer votre bot

#features

:::u-page-feature
---
icon: i-lucide-folder-open
---
#title
Tout est [basé sur les fichiers]{.text-primary}

#description
Commandes, events, composants et modules se chargent directement depuis vos dossiers. Aucun import manuel, aucun boilerplate d'enregistrement.
:::

:::u-page-feature
---
icon: i-lucide-message-square
---
#title
Le contexte [ctx.g]{.text-primary}

#description
Réponses stylisées en une ligne, chaînage fluide, `confirm()`, `paginate()`, defer automatique, états de chargement et un store intégré — injectés automatiquement dans chaque handler.
:::

:::u-page-feature
---
icon: i-lucide-shield-check
---
#title
Guards [déclaratifs]{.text-primary}

#description
`.setCooldown("5s")`, `.setPermissions(["BanMembers"])`, `.setOwnerOnly()` — cooldowns et permissions en une ligne, avec des réponses d'erreur stylisées incluses.
:::

:::u-page-feature
---
icon: i-lucide-package
---
#title
SDK de [modules]{.text-primary}

#description
Livrez vos fonctionnalités sous forme de modules autonomes avec hooks de cycle de vie, middleware global, résolution de dépendances, isolation des crashs et APIs inter-modules typées.
:::

:::u-page-feature
---
icon: i-lucide-monitor-play
---
#title
Interface web [Studio]{.text-primary}

#description
`glyria studio` ouvre une interface locale qui exécute vos commandes et prévisualise le rendu Discord en direct — sans jamais ouvrir Discord.
:::

:::u-page-feature
---
icon: i-lucide-history
---
#title
Débogage [time-travel]{.text-primary}

#description
Chaque interaction est enregistrée en dev. Reproduisez un bug signalé par un utilisateur avec `glyria replay <id>` — sans avoir besoin de l'utilisateur.
:::

:::u-page-feature
---
icon: i-lucide-refresh-cw
---
#title
Déploiements [sans interruption]{.text-primary}

#description
`glyria reload` remplace vos handlers en mémoire pendant que le bot continue de tourner. Les boucles de crash reviennent automatiquement au dernier build stable.
:::

:::u-page-feature
---
icon: i-lucide-layout
---
#title
Builder [Embed V2]{.text-primary}

#description
Support de première classe du système Components V2 de Discord — plus des customIds typés qui parsent leurs propres paramètres.
:::

:::u-page-feature
---
icon: i-lucide-plug
---
#title
Construit sur [discord.js]{.text-primary}

#description
glyria.js est une couche DX au-dessus de discord.js. Vous gardez toujours accès au client brut si nécessaire — aucun enfermement, jamais.
:::

::
