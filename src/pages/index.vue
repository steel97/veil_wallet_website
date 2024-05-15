<template>
    <div class="text-gray-800 index-wrap">
        <div class="max-w-7xl w-full mx-auto flex justify-between py-[4.6rem] pb-[5.6rem] px-2 z-10 relative">
            <section class="max-w-2xl w-full bg-gray-100 rounded-lg px-8 py-7 shadow-lg min-h-[452px]">
                <h1 class="leading-10 text-4xl text-center">{{ t("Index.Header") }}</h1>
                <p class="leading-normal py-6 pb-8">
                    {{ t("Index.Text") }}
                </p>
                <!-- material icons -->
                <div class="grid grid-cols-3 gap-2 pb-5 pt-1 text-blue-600">
                    <!-- ic1 -->
                    <figure class="flex flex-col items-center">
                        <img src="/images/icons-2/privacy.svg" width="40" class="text-blue-600" alt="Privacy-focused">
                        <figcaption class="text-lg pt-3">{{ t("Index.Advantages.Privacy") }}</figcaption>
                    </figure>
                    <!-- ic2 -->
                    <figure class="flex flex-col items-center">
                        <img src="/images/icons-2/flutter.svg" width="40" alt="Open-source">
                        <figcaption class="text-lg pt-3">{{ t("Index.Advantages.OpenSource") }}</figcaption>
                    </figure>
                    <figure class="flex flex-col items-center">
                        <img src="/images/icons-2/secure.svg" width="40" alt="Secure">
                        <figcaption class="text-lg pt-3">{{ t("Index.Advantages.Secure") }}</figcaption>
                    </figure>
                </div>
                <p class="flex justify-center py-3">
                    <DownloadIos v-if="isIos" />
                    <DownloadAndroid v-else-if="isAndroid" />
                    <DownloadWindows v-else-if="isWindows" />
                    <DownloadMacOS v-else-if="isMacOS" />
                    <DownloadLinux v-else-if="isDesktop" />
                    <DownloadGeneral v-else />
                </p>
                <p class="flex justify-center pb-1">
                    <SiteLink href="#downloads"
                        class="underline underline-offset-4 hover:text-blue-600 transition-colors">{{
                    t("Index.Downloads.OtherPlatforms") }}</SiteLink>
                    <span>&nbsp;/&nbsp;</span>
                    <SiteLink :href="runtimeConfig.public.github"
                        class="underline underline-offset-4 hover:text-blue-600 transition-colors" target="_blank">{{
                    t("Index.Downloads.SourceCode") }}</SiteLink>
                </p>
            </section>
            <figure>
                <img src="/images/promo-2.png"
                    alt="A crossplatform veil light wallet written with dart/flutter. Image by aleksandr_samochernyi on Freepik "
                    width="500">
            </figure>
        </div>
        <section class="max-w-7xl w-full mx-auto relative mt-10" id="downloads">
            <h1 class="leading-10 text-3xl">{{ t("Index.Downloads.Header") }}</h1>
            <p class="leading-10 text-sm pb-4 pl-1">{{ t("Index.Downloads.ActualVersion", { version: "1.0.20" }) }}</p>
            <p class="grid grid-cols-2 gap-6">
                <SectionDownloadIos />
                <SectionDownloadAndroid />
            </p>
            <p class="grid grid-cols-3 gap-6 mt-6">
                <SectionDownloadWindows />
                <SectionDownloadMacOS />
                <SectionDownloadLinux />
            </p>
        </section>
    </div>
</template>

<script setup lang="ts">
const { isIos, isAndroid, isWindows, isMacOS, isDesktop } = useDevice();
const { t } = useI18n();
const runtimeConfig = useRuntimeConfig();

defineSoftwareApp({
    name: "Veil - Privacy focused wallet",
    operatingSystem: "ANDROID",
    applicationCategory: "FinanceApplication",
    aggregateRating: {
        ratingValue: "5.0",
        ratingCount: 0,
    },
    offers: {
    },
});

useHead({
    title: t("Index.Title")
});

</script>

<style>
/*.index-wrap {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s linear infinite;
}*/

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}
</style>