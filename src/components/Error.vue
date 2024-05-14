<template>
    <div class="text-gray-800 index-wrap">
        <div class="max-w-7xl w-full mx-auto flex justify-between py-[4.6rem] pb-[5.6rem] px-2 z-10 relative">
            <section class="max-w-2xl w-full bg-gray-100 rounded-lg px-8 py-7 shadow-lg min-h-[452px]">
                <h1 class="leading-10 text-4xl text-center">{{ t("Errors." + errLocale + ".Header") }}</h1>
                <p class="leading-normal pt-6 pb-4 text-center">
                    {{ t("Errors." + errLocale + ".Text") }}
                </p>
                <p class="leading-normal pb-4 text-center">
                    <SiteLink :to="localePath('/')" @click="clearError" class="
                                  uppercase
                                  text-center text-blue-500
                                  underline
                                  underline-offset-4
                                ">
                        {{ t("Errors.ToHome") }}
                    </SiteLink>
                </p>
            </section>
            <figure>
                <img src="/images/promo-2.png"
                    alt="A crossplatform veil light wallet written with dart/flutter. Image by aleksandr_samochernyi on Freepik "
                    width="500">
            </figure>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

const { t } = useI18n();
const localePath = useLocalePath();
const props = defineProps({
    error: Object as () => NuxtError
});

const route = useRoute();

// clearError on mounted?

const errLocale = computed(() => {
    let res = "Error404";
    switch (props.error?.statusCode) {
        case 500:
            res = "Error500";
            break;
    }
    return res;
});

useHead({
    title: t(`Errors.${errLocale.value}.Title`)
});

if (process.server) {
    const nuxtApp = useNuxtApp();
    // eslint-ignore-next-line
    if (nuxtApp.ssrContext != null) {
        nuxtApp.ssrContext.nuxt.error = {
            statusCode: parseInt(route.name as any as string),
        };
    }
}
</script>