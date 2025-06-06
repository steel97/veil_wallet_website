<template>
  <header class="py-3 bg-sky-950/70 shadow-lg">
    <div class="flex items-center justify-between text-gray-800 max-w-7xl w-full mx-auto px-1">
      <NuxtLinkLocale class="flex items-center" to="/">
        <img src="/images/logo.png" width="64" alt="Veil Wallet logo">
        <span class="text-md md:text-3xl font-bold text-gray-50">Veil Wallet</span>
      </NuxtLinkLocale>
      <nav class="items-center gap-4 hidden lg:flex">
        <NuxtLinkLocale to="/donations" class="text-gray-100 hover:underline underline-offset-8 uppercase">
          {{
            t("Core.Header.Donations") }}
        </NuxtLinkLocale>
        <NuxtLink
          :href="runtimeConfig.public.website"
          class="text-gray-100 hover:underline underline-offset-8 uppercase" target="_blank"
        >
          {{
            t("Core.Header.Website") }}
        </NuxtLink>
        <NuxtLink
          :href="runtimeConfig.public.github.site"
          class="text-gray-100 hover:underline underline-offset-8 uppercase" target="_blank"
        >
          {{
            t("Core.Header.Github") }}
        </NuxtLink>
        <select
          v-model="localeModel" :aria-label="t('Core.Header.Locale')"
          class="w-[110px] border row-start-1 col-start-1 rounded bg-sky-950 border-gray-500 text-gray-100 px-4 py-1 text-sm"
        >
          <option v-for="loca in getLocales()" :key="loca.code" :value="loca.code" :selected="locale === loca.code">
            {{ loca.name
            }}
          </option>
        </select>
        <div class="">
          <NuxtLinkLocale
            :to="'/' + '#downloads'"
            class="block text-center rounded-full transition-colors bg-blue-600 hover:bg-blue-500 px-6 py-2 text-gray-100 text-md uppercase min-w-[145px]"
          >
            {{
              t("Core.Header.Download") }}
          </NuxtLinkLocale>
        </div>
      </nav>
      <nav class="flex lg:hidden">
        <div class="mr-2">
          <NuxtLinkLocale
            :to="'/' + '#downloads'"
            class="block text-center rounded-full transition-colors bg-blue-600 hover:bg-blue-500 px-6 py-2 text-gray-100 text-md uppercase min-w-[145px]"
          >
            {{
              t("Core.Header.Download") }}
          </NuxtLinkLocale>
        </div>
        <button ref="menu" class="container mr-2" :aria-label="t('Core.Header.ToggleMenu')" @click="toggleMenu">
          <div class="bar1 bg-gray-100"></div>
          <div class="bar2 bg-gray-100"></div>
          <div class="bar3 bg-gray-100"></div>
        </button>
      </nav>
    </div>
    <nav v-show="initialized" class="lg:hidden" :style="{ visibility: isMenuActive ? 'visible' : 'hidden' }">
      <div class="transition-[height] ease-out duration-200 menu-collapse flex flex-col gap-4">
        <NuxtLinkLocale to="/donations" class="text-gray-100 hover:underline underline-offset-8 uppercase px-4 mt-2">
          {{ t("Core.Header.Donations") }}
        </NuxtLinkLocale>
        <NuxtLink
          :href="runtimeConfig.public.website"
          class="text-gray-100 hover:underline underline-offset-8 uppercase px-4" target="_blank"
        >
          {{
            t("Core.Header.Website") }}
        </NuxtLink>
        <NuxtLink
          :href="runtimeConfig.public.github.site"
          class="text-gray-100 hover:underline underline-offset-8 uppercase px-4" target="_blank"
        >
          {{
            t("Core.Header.Github") }}
        </NuxtLink>
        <select
          v-model="localeModel" :aria-label="t('Core.Header.Locale')"
          class="w-[110px] border row-start-1 col-start-1 rounded bg-sky-950 border-gray-500 text-gray-100 px-4 py-1 text-sm mx-4"
        >
          <option v-for="loca in getLocales()" :key="loca.code" :value="loca.code" :selected="locale === loca.code">
            {{ loca.name
            }}
          </option>
        </select>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const { t, locales, locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const localeModel = ref(locale.value);
const router = useRouter();
const runtimeConfig = useRuntimeConfig();
const menu = ref<HTMLElement | null>(null);
const isMenuActive = ref(false);
const initialized = ref(false);
const menuHeight = ref("0px");

export interface ILocale {
  code: string;
  name: string;
}

watch(localeModel, (nval) => {
  router.push(switchLocalePath(nval));
});

const recalculateMenuSize = () => {
  menuHeight.value = isMenuActive.value ? "165px" : "0px";
};

const getLocales = () => {
  const localesRet: Array<ILocale> = [];
  locales.value.forEach((locale) => {
    const link: ILocale = {
      code: locale.code,
      name: locale.name ?? "",
    };
    localesRet.push(link);
  });
  return localesRet;
};

onMounted(() => (initialized.value = true));

const toggleMenu = () => {
  menu.value?.classList.toggle("change");
  isMenuActive.value = !isMenuActive.value;
  recalculateMenuSize();
};
</script>

<style scoped>
.container {
  display: inline-block;
  cursor: pointer;
}

.bar1,
.bar2,
.bar3 {
  width: 35px;
  height: 5px;
  margin: 6px 0;
  transition: 0.4s;
}

/* Rotate first bar */
.change .bar1 {
  transform: translate(0, 11px) rotate(-45deg);
}

/* Fade out the second bar */
.change .bar2 {
  opacity: 0;
}

/* Rotate last bar */
.change .bar3 {
  transform: translate(0, -11px) rotate(45deg);
}

.menu-collapse {
  height: v-bind(menuHeight);
}
</style>