// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css", "~/assets/css/common.css"],
  srcDir: "src/",
  runtimeConfig: {
    public: {
      website: "",
      github: "",
      site: {
        url: "http://localhost:3000"
      },
      app: {
        googleplay: "",
        fdroid: ""
      }
    }
  },
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
    },
    baseUrl: process.env.NUXT_I18N_BASE_URL || "https://veilproject.org"
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      templateParams: {
        separator: "-"
      },
      titleTemplate: "%siteName %separator %s"
    }
  },
  seo: {
    redirectToCanonicalSiteUrl: process.env.NODE_ENV !== "development"
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || "https://veilproject.org"
  },
  schemaOrg: {
    identity: {
      type: "Organization",
      name: "Veil Project",
      url: "https://veil-project.com",
      logo: (process.env.NUXT_PUBLIC_SITE_URL || "https://veilproject.org") + "/icon-192x192-light.png"
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/device", "@nuxtjs/i18n", "@nuxtjs/seo", "nuxt-multi-cache"]
})