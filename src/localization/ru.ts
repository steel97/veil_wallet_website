import Core from "./ru/core";

export default defineI18nLocale(async (locale) => {
    return {
        Core: Core()
    }
});