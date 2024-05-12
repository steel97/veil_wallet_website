import Core from "./en/core";
import Index from "./en/index";

export default defineI18nLocale(async (locale) => {
    return {
        nuxtSiteConfig: {
            name: "Veil Wallet",
            description: "Veil Wallet - crossplatform veil blockchain wallet",
        },
        Core: Core(),
        Index: Index(),
    }
});