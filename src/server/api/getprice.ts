import { useDataCache } from "#nuxt-multi-cache/composables";

export default defineEventHandler(async (event) => {
    const { value, addToCache } = await useDataCache("price");
    if (value) {
        return value;
    }

    const data = await $fetch("https://veil.tools/api/getprice");
    addToCache(data, undefined, 1800);
    return data;
});