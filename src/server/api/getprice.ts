import { useDataCache } from "#nuxt-multi-cache/composables";
import { PriceApi } from "~/models/PriceApi";

export default defineEventHandler(async (event) => {
    const { value, addToCache } = await useDataCache<PriceApi>("price");
    if (value) {
        return value;
    }

    const data = await $fetch<PriceApi>("https://veil.tools/api/getprice");
    addToCache(data, undefined, 1800);
    return data;
});