export default defineNuxtConfig({
  extends: ['docus'],
  modules: ['@nuxtjs/i18n', 'nuxt-studio', '@vercel/analytics'],
  site: {
    url: 'https://js.glyria.app'
  },
  i18n: {
    defaultLocale: 'en',
    locales: [{
      code: 'en',
      name: 'English',
    },
      {
      code: 'fr',
      name: 'Français',
    }
    ]
    ,
  },
  assistant: {
    floatingInput: false,
    explainWithAi: false,
  },
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  }
})
