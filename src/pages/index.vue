<template>
    <!-- bg-gradient-to-b from-blue-500 to-blue-500 -->
    <div class="text-gray-800 index-wrap">
        <div class="max-w-7xl w-full mx-auto flex justify-between py-[4.6rem] pb-[5.6rem] px-2 z-10 relative">
            <section class="max-w-2xl w-full bg-gray-100 rounded-lg px-8 py-7 shadow-lg">
                <h1 class="leading-10 text-4xl text-center">Veil – Privacy focused wallet</h1>
                <p class="leading-normal py-6 pb-8">
                    Unlock the world of cryptocurrencies with Veil. Make transactions within a convenient app
                    that prioritizes both
                    security and strict privacy
                </p>
                <!-- material icons -->
                <div class="grid grid-cols-3 gap-2 pb-5 pt-1 text-blue-600">
                    <!-- ic1 -->
                    <figure class="flex flex-col items-center">
                        <img src="/images/icons-2/privacy.svg" width="40" class="text-blue-600" alt="Privacy-focused">
                        <figcaption class="text-lg pt-3">Privacy-focused</figcaption>
                    </figure>
                    <!-- ic2 -->
                    <figure class="flex flex-col items-center">
                        <img src="/images/icons-2/flutter.svg" width="40" alt="Open-source">
                        <figcaption class="text-lg pt-3">Open-source</figcaption>
                    </figure>
                    <figure class="flex flex-col items-center">
                        <img src="/images/icons-2/secure.svg" width="40" alt="Secure">
                        <figcaption class="text-lg pt-3">Secure</figcaption>
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
                    <SiteLink href="#2" class="underline underline-offset-4 hover:text-blue-600 transition-colors">For
                        other
                        platforms</SiteLink>
                    <span>&nbsp;/&nbsp;</span>
                    <SiteLink href="#1" class="underline underline-offset-4 hover:text-blue-600 transition-colors">
                        Source
                        code</SiteLink>
                </p>
            </section>
            <section>
                <img src="/images/promo-2.png"
                    alt="A crossplatform veil light wallet written with dart/flutter. Image by aleksandr_samochernyi on Freepik "
                    width="500">
            </section>
        </div>
    </div>
    <div class="max-w-7xl w-full mx-auto my-4 text-gray-800">
        <!-- download variants -->
    </div>
</template>

<script setup lang="ts">
const { isIos, isAndroid, isWindows, isMacOS, isDesktop } = useDevice();
const { t } = useI18n();

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