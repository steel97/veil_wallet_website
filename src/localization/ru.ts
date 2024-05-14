import Core from "./ru/core";
import Index from "./ru/index";
import Donations from "./ru/donations";

export default defineI18nLocale(async (locale) => {
    return {
        nuxtSiteConfig: {
            name: "Veil Wallet",
            description: "Veil Wallet - кросплатформенный кошелек veil",
        },
        Core: Core(),
        Index: Index(),
        Donations: Donations()
    }
});