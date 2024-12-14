import Core from "./ru/core";
import Donations from "./ru/donations";
import Errors from "./ru/errors";
import Index from "./ru/index";

export default defineI18nLocale(async (locale) => {
  return {
    nuxtSiteConfig: {
      name: "Veil Wallet",
      description: "Veil Wallet - кросплатформенный кошелек veil",
    },
    Core: Core(),
    Errors: Errors(),
    Index: Index(),
    Donations: Donations(),
  };
});