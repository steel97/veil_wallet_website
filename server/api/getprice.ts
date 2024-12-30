import type { PriceApi } from "~/models/PriceApi";
import { useDataCache } from "#nuxt-multi-cache/composables";

export default defineEventHandler(async (event) => {
  const { value, addToCache } = await useDataCache<PriceApi>("price", event);
  if (value) {
    return value;
  }

  const data = await $fetch<PriceApi>("https://veil.tools/api/getprice");
  if (data.status) {
    addToCache(data, undefined, 1800);
  }

  return data;
});