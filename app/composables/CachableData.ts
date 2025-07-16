export const useCachableData = (event: any) => {
  const getData = async <T>(url: string) => {
    const { value, addToCache } = await useDataCache<T>("github_releases", event);
    if (value) {
      return value;
    }

    const data = await $fetch(url);
    if (data != null) {
      addToCache(data as T, undefined, 3600);
    }

    return data as T;
  };

  return { getData };
};