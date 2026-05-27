export default defineAppConfig({
    header: {
        title: 'Glyria.JS',
        logo: {
            light: '/dark-glyria-logo.png',
            dark: '/light-glyria-logo.png',
            alt: 'Glyria Logo',
            wordmark: {
                light: '/dark-glyria-logo.png',
                dark: '/light-glyria-logo.png',
            },
            favicon: '/favicon.ico',
        },
    },
    github: {
        url: 'https://github.com/Kiki344r/glyria.js',
        branch: 'main',
    },
    seo: {
        title: 'Glyria.JS Docs',
        description: 'Glyria.JS is a powerful and flexible Discord bot framework built on top of Discord.js. It provides an easy-to-use API for creating and managing your Discord bots, with features like command handling, event management, and more.',
    },
    ui: {
        colors: {
            primary: 'sky',
            secondary: 'indigo',
            accent: 'emerald',
            warning: 'amber',
            error: 'rose',
            info: 'cyan',
            neutral: 'slate',
        },
        contentToc: {
            defaultVariants: {
                highlightVariant: 'circuit',
                highlightColor: 'secondary'
            }
        },
        contentNavigation: {
            defaultVariants: {
                variant: 'pill',
                highlight: false
            }
        }
    },
    socials: {
        discord: 'https://discord.gg/FMTdrdNJx5'
    },
    toc: {
        bottom: {
            title: 'Support',
            links: [{
                icon: 'i-mdi-discord',
                label: 'Discord',
                to: 'https://discord.gg/FMTdrdNJx5',
                target: '_blank'
            }]
        }
    },
})