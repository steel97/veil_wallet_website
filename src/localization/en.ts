import Core from "./en/core";
import Index from "./en/index";
import Donations from "./en/donations";

export default defineI18nLocale(async (locale) => {
    return {
        nuxtSiteConfig: {
            name: "Veil Wallet",
            description: "Veil Wallet - crossplatform veil blockchain wallet",
        },
        Core: Core(),
        Index: Index(),
        Donations: Donations()
    }
});