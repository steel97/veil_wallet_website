import type { GithubRelease } from "~/models/github/GithubReleases";
import { useDataCache } from "#nuxt-multi-cache/composables";

export const useGithubData = () => {
  const runtimeConfig = useRuntimeConfig();
  const getGithubReleases = async () => {
    const { value, addToCache } = await useDataCache<GithubRelease[]>("github_releases");
    if (value) {
      return value;
    }

    const data = await $fetch<GithubRelease[]>(`${runtimeConfig.public.site.url}/api/github/releases`);
    if (data != null) {
      addToCache(data, undefined, 3600);
    }

    return data;
  };

  const getLatestRelease = async () => {
    const releases = await getGithubReleases();
    if (releases == null) {
      return null;
    }

    return releases[0];
  };

  const getAsset = (release: GithubRelease | null, searchPostfix: string) =>
    release?.assets?.find(a => a.name.endsWith(searchPostfix));

  return {
    getGithubReleases,
    getLatestRelease,
    getAsset,
  };
};