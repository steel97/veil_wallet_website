import Core from "./en/core";
import Donations from "./en/donations";
import Errors from "./en/errors";
import Index from "./en/index";

export default defineI18nLocale(async (locale) => {
  return {
    nuxtSiteConfig: {
      name: "Veil Wallet",
      description: "Veil Wallet - crossplatform veil blockchain wallet",
    },
    Core: Core(),
    Errors: Errors(),
    Index: Index(),
    Donations: Donations(),
  };
});