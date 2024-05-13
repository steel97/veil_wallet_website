<template>
    <!-- bg-gradient-to-b from-blue-500 to-blue-500 -->
    <div class="text-gray-800 index-wrap">
        <div class="max-w-7xl w-full mx-auto flex justify-between py-[4.6rem] pb-[5.6rem] px-2 z-10 relative">
            <section class="max-w-2xl w-full bg-gray-100 rounded-lg px-8 py-7 shadow-lg min-h-[452px]">
                <h1 class="leading-10 text-4xl text-center">Donations</h1>
                <p class="leading-normal py-6 pb-8">
                    12345
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
                    <DownloadGeneral />
                </p>
            </section>
            <figure>
                <img src="/images/donate-qr.svg" width="300" alt="Veil address for donations. Thanks in advance :)">
            </figure>
        </div>
    </div>
    <div class="max-w-7xl w-full mx-auto my-4 text-gray-800">
        <!-- links -->
        <SectionCrossLinks />
    </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

useHead({
    title: t("Donations.Title")
});

</script>