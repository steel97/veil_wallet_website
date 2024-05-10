import Core from "./en/core";

export default defineI18nLocale(async (locale) => {
    return {
        Core: Core()
    }
});