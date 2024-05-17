import { useDataCache } from "#nuxt-multi-cache/composables";
import { GithubRelease } from "~/models/github/GithubReleases";

export default defineEventHandler(async (event) => {
    const { value, addToCache } = await useDataCache<GithubRelease[]>("github_releases");
    const appConfig = useRuntimeConfig();
    if (value) {
        return value;
    }

    const data = await $fetch<GithubRelease[]>(`https://api.github.com/repos/${appConfig.github.repo}/releases`);
    addToCache(data, undefined, 3600);
    return data;
});