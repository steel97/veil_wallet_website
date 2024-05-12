<template>
    <!-- bg-gradient-to-b from-blue-500 to-blue-500 -->
    <div class="text-gray-800 index-wrap">
        <div class="max-w-7xl w-full mx-auto flex justify-between py-[6rem] px-2 z-10 relative">
            <section class="max-w-2xl bg-gray-100 rounded-lg px-8 py-7 shadow-lg">
                <h1 class="leading-10 text-4xl text-center">Veil – Privacy focused wallet</h1>
                <p class="leading-normal py-6 pb-8">
                    Unlock the world of cryptocurrencies with <b>Veil</b>. Make transactions within a convenient app
                    that prioritizes both
                    security and strict privacy
                </p>
                <!-- material icons -->
                <div class="grid grid-cols-3 gap-2 pb-4 text-blue-600">
                    <!-- ic1 -->
                    <div class="flex flex-col items-center">
                        <img src="/images/icons-2/privacy.svg" width="40" class="text-blue-600">
                        <p class="text-lg pt-3">Privacy-focused</p>
                    </div>
                    <!-- ic2 -->
                    <div class="flex flex-col items-center">
                        <img src="/images/icons-2/flutter.svg" width="40">
                        <p class="text-lg pt-3">Open-source</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <img src="/images/icons-2/secure.svg" width="40">
                        <p class="text-lg pt-3">Secure</p>
                    </div>
                </div>
                <p class="flex justify-center py-3">
                    <DownloadIos v-if="isIos" />
                    <DownloadAndroid v-else-if="isAndroid" />
                    <DownloadWindows v-else-if="isWindows" />
                    <DownloadWindows v-else-if="isMacOS" />
                    <DownloadLinux v-else-if="isDesktop" />
                    <DownloadGeneral v-else />
                </p>
                <p class="flex justify-center py-1">
                    <a href="" class="underline underline-offset-4 hover:text-blue-600 transition-colors">For other
                        platforms</a>
                    <span>&nbsp;/&nbsp;</span>
                    <a href="" class="underline underline-offset-4 hover:text-blue-600 transition-colors">Source
                        code</a>
                </p>
            </section>
            <section>
                <img src="/images/promo-2.png" alt="Veil Light wallet" width="500">
            </section>
        </div>
    </div>
    <div class="max-w-7xl w-full mx-auto my-4 text-gray-800">
        <!-- download variants -->
        <!-- donations section-->
    </div>
</template>

<script setup lang="ts">
const { isIos, isAndroid, isWindows, isMacOS, isDesktop } = useDevice();
</script>

<style>
.index-wrap {
    background: url('/images/bg/bg3.png');
    background-size: cover;
    background-position: center;
    position: relative;
}

.index-wrap::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    backdrop-filter: blur(10px);
    /* apply the blur */
    pointer-events: none;
    z-index: 1;
    /* make the overlay click-through */
}

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