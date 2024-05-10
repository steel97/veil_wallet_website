// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css", "~/assets/css/common.css"],
  srcDir: "src/",
  i18n: {
    locales: [
      {
        name: "English",
        code: "en",
        iso: "en-US",
        file: "en.ts"
      },
      {
        name: "Русский",
        code: "ru",
        iso: "ru-RU",
        file: "ru.ts"
      }
    ],
    defaultLocale: "en",
    lazy: true,
    langDir: "localization",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "locale",
      redirectOn: "all",
      alwaysRedirect: true
    }
  },
  site: {
    url: process.env.NUXT_SITE_URL || "https://veilproject.org",
    name: "Veil Wallet",
    description: "Veil Wallet - crossplatform veil blockchain wallet"
  },
  schemaOrg: {
    identity: {
      type: "Organization",
      name: "Veil Project",
      url: "https://veil-project.com",
      logo: "https://veilproject.org/images/logo.png"
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/device", "@nuxtjs/i18n", "@nuxtjs/seo"]
})