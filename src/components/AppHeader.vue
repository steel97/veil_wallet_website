<template>
    <header class="py-3 bg-sky-950/70 shadow-lg">
        <div class="flex items-center justify-between text-gray-800 max-w-7xl w-full mx-auto px-1">
            <SiteLink class="flex items-center" :to="localePath('/')">
                <img src="/images/logo.png" width="64" alt="Veil Wallet logo">
                <span class="text-3xl font-bold text-gray-50">Veil Wallet</span>
            </SiteLink>
            <nav class="flex items-center gap-4">
                <SiteLink :to="localePath('/donations')"
                    class="text-gray-100 hover:underline underline-offset-8 uppercase">{{ t("Core.Header.Donations") }}
                </SiteLink>
                <SiteLink :href="runtimeConfig.public.website"
                    class="text-gray-100 hover:underline underline-offset-8 uppercase" target="_blank">{{
                t("Core.Header.Website") }}</SiteLink>
                <SiteLink :href="runtimeConfig.public.github.site"
                    class="text-gray-100 hover:underline underline-offset-8 uppercase" target="_blank">{{
                t("Core.Header.Github") }}</SiteLink>
                <select v-model="localeModel"
                    class="w-[100px] border row-start-1 col-start-1 rounded bg-sky-950 border-gray-500 text-gray-100 px-4 py-1 text-sm">
                    <option v-for="loca in getLocales()" :value="loca.code" :selected="locale == loca.code">{{ loca.name
                        }}</option>
                </select>
                <div class="">
                    <SiteLink :to="localePath('/') + '#downloads'"
                        class="block text-center rounded-full transition-colors bg-blue-600 hover:bg-blue-500 px-6 py-2 text-gray-100 text-md uppercase min-w-[145px]">
                        {{
                t("Core.Header.Download") }}</SiteLink>
                </div>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
import type { LocaleObject } from "@nuxtjs/i18n";

const localePath = useLocalePath();
const { t, locales, locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const localeModel = ref(locale.value);
const router = useRouter();
const runtimeConfig = useRuntimeConfig();

export interface ILocale {
    code: string;
    name: string;
}

watch(localeModel, nval => {
    router.push(switchLocalePath(nval));
});

const getLocales = () => {
    const localesRet: Array<ILocale> = [];
    locales.value.forEach(locale => {
        const lang = locale as LocaleObject;
        const link: ILocale = {
            code: lang.code,
            name: lang.name ?? ""
        };
        localesRet.push(link);
    });
    return localesRet;
};
</script>