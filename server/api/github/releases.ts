import type { GithubRelease } from "~/models/github/GithubReleases";

export default defineEventHandler(async (event) => {
  const { value, addToCache } = await useDataCache<GithubRelease[]>("github_releases", event);
  const runtimeConfig = useRuntimeConfig();
  if (value) {
    return value;
  }

  const data = await $fetch<GithubRelease[]>(`https://api.github.com/repos/${runtimeConfig.github.repo}/releases`);
  addToCache(data, undefined, 3600);
  return data;
});