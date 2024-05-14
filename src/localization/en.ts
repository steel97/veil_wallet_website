import Core from "./en/core";
import Errors from "./en/errors";
import Index from "./en/index";
import Donations from "./en/donations";

export default defineI18nLocale(async (locale) => {
    return {
        nuxtSiteConfig: {
            name: "Veil Wallet",
            description: "Veil Wallet - crossplatform veil blockchain wallet",
        },
        Core: Core(),
        Errors: Errors(),
        Index: Index(),
        Donations: Donations()
    }
});