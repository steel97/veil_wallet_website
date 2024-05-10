<template>
    <!-- bg-gradient-to-b from-blue-500 to-blue-500 -->
    <div class="text-gray-100 index-wrap">
        <div class="max-w-7xl w-full mx-auto flex justify-between py-[6rem] px-2">
            <section class="max-w-xl">
                <h1 class="leading-10 text-4xl">Veil - Privacy focused cryptocurrency wallet</h1>
                <p class="leading-normal py-4">
                    Unlock the world of <b>Veil</b>. Make transactions within a convenient app that prioritizes both
                    security and strict privacy
                </p>
                <p>
                    <DownloadIos v-if="isIos" />
                    <DownloadAndroid v-else-if="isAndroid" />
                    <DownloadWindows v-else-if="isWindows" />
                    <DownloadWindows v-else-if="isMacOS" />
                    <DownloadLinux v-else-if="isDesktop" />
                    <DownloadGeneral v-else />
                </p>
                <p class="py-4">
                    <a href="" class="underline underline-offset-4">For other platforms</a>
                </p>
            </section>
            <section>
                <img src="/images/promo-2.png" alt="Veil Light wallet" width="500">
            </section>
        </div>
    </div>
    <div class="max-w-7xl w-full mx-auto my-4 text-gray-800">
        123
    </div>
</template>

<script setup lang="ts">
const { isIos, isAndroid, isWindows, isMacOS, isDesktop } = useDevice();
</script>

<style>
.index-wrap {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
}

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