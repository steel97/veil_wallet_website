// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2025-07-15",
  future: {
    compatibilityVersion: 4,
  },
  css: ["~/assets/css/tailwind.css", "~/assets/css/common.css"],
  runtimeConfig: {
    github: {
      repo: "",
    },
    altsource: {
      name: "",
      subtitle: "",
      description: "",
      icon: "",
      header: "",
      website: "",
      tint: "",
    },
    public: {
      website: "",
      github: {
        site: "",
        wallet: "",
      },
      site: {
        url: "http://localhost:3000",
      },
      app: {
        googleplay: "",
        fdroid: "",
      },
    },
  },
  multiCache: {
    data: {
      enabled: true,
    },
  },
  i18n: {
    locales: [
      {
        name: "English",
        code: "en",
        language: "en-US",
        file: "en.ts",
      },
      {
        name: "Русский",
        code: "ru",
        language: "ru-RU",
        file: "ru.ts",
      },
    ],
    defaultLocale: "en",
    langDir: "localization",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "locale",
      redirectOn: "all",
      alwaysRedirect: true,
    },
    baseUrl: process.env.NUXT_I18N_BASE_URL || "https://veilproject.org",
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      templateParams: {
        separator: "-",
      },
      titleTemplate: "%siteName %separator %s",
    },
  },
  seo: {
    redirectToCanonicalSiteUrl: process.env.NODE_ENV !== "development",
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || "https://veilproject.org",
  },
  schemaOrg: {
    identity: {
      type: "Organization",
      name: "Veil Project",
      url: "https://veil-project.com",
      logo: `${process.env.NUXT_PUBLIC_SITE_URL || "https://veilproject.org"}/icon-192x192-light.png`,
    },
  },
  modules: [
    "@nuxtjs/device",
    "@nuxtjs/i18n",
    "@nuxtjs/seo",
    "nuxt-multi-cache",
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
  ],
});