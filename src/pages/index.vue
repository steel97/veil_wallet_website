<template>
  <div class="text-gray-800 index-wrap">
    <div class="lg:max-w-7xl w-full mx-auto flex justify-between py-4 lg:py-[4.6rem] pb-4 px-2 z-10 relative">
      <section class="lg:max-w-2xl w-full bg-gray-100 rounded-lg px-8 py-7 shadow-lg min-h-[452px]">
        <h1 class="leading-10 text-4xl text-center">
          {{ t("Index.Header") }}
        </h1>
        <p class="leading-normal py-6 pb-8">
          {{ t("Index.Text") }}
        </p>
        <!-- material icons -->
        <div class="hidden sm:grid grid-cols-3 gap-2 pb-5 pt-1 text-blue-600">
          <!-- ic1 -->
          <figure class="flex flex-col items-center">
            <img src="/images/icons-2/privacy.svg" width="40" class="text-blue-600" alt="Privacy-focused">
            <figcaption class="lg:text-lg pt-3">
              {{ t("Index.Advantages.Privacy") }}
            </figcaption>
          </figure>
          <!-- ic2 -->
          <figure class="flex flex-col items-center">
            <img src="/images/icons-2/flutter.svg" width="40" alt="Open-source">
            <figcaption class="lg:text-lg pt-3">
              {{ t("Index.Advantages.OpenSource") }}
            </figcaption>
          </figure>
          <figure class="flex flex-col items-center">
            <img src="/images/icons-2/secure.svg" width="40" alt="Secure">
            <figcaption class="lg:text-lg pt-3">
              {{ t("Index.Advantages.Secure") }}
            </figcaption>
          </figure>
        </div>
        <div class="flex justify-center py-3">
          <DownloadIos v-if="isIos" />
          <DownloadAndroid v-else-if="isAndroid" />
          <DownloadWindows v-else-if="isWindows" />
          <DownloadMacOS v-else-if="isMacOS" />
          <DownloadLinux v-else-if="isDesktop" />
          <DownloadGeneral v-else />
        </div>
        <div class="flex justify-center pb-1">
          <NuxtLink
            href="#downloads"
            class="underline underline-offset-4 hover:text-blue-600 transition-colors"
          >
            {{
              t("Index.Downloads.OtherPlatforms") }}
          </NuxtLink>
          <span>&nbsp;/&nbsp;</span>
          <NuxtLink
            :href="runtimeConfig.public.github.wallet"
            class="underline underline-offset-4 hover:text-blue-600 transition-colors" target="_blank"
          >
            {{
              t("Index.Downloads.SourceCode") }}
          </NuxtLink>
        </div>
      </section>
      <figure class="hidden lg:block">
        <img
          src="/images/promo-2.png"
          alt="A crossplatform veil light wallet written with dart/flutter. Image by aleksandr_samochernyi on Freepik "
          width="500"
        >
      </figure>
    </div>
    <section id="downloads" class="max-w-7xl w-full mx-auto relative px-2">
      <h1 class="leading-10 text-3xl text-gray-100">
        {{ t("Index.Downloads.Header") }}
      </h1>
      <p class="leading-10 text-sm pb-4 pl-1 text-gray-100">
        {{ t("Index.Downloads.ActualVersion", {
          version:
            releaseData?.tag_name,
        }) }}
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectionDownloadIos :release="releaseData" />
        <SectionDownloadAndroid :release="releaseData" />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <SectionDownloadWindows :release="releaseData" />
        <SectionDownloadMacOS :release="releaseData" />
        <SectionDownloadLinux :release="releaseData" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { isIos, isAndroid, isWindows, isMacOS, isDesktop } = useDevice();
const { t } = useI18n();
const runtimeConfig = useRuntimeConfig();
const { getLatestRelease } = useGithubData();

const releaseData = ref(await getLatestRelease());

defineSoftwareApp({
  name: "Veil - Privacy focused wallet",
  operatingSystem: "ANDROID",
  applicationCategory: "FinanceApplication",
  aggregateRating: {
    ratingValue: "5.0",
    ratingCount: 0,
  },
});

useHead({
  title: t("Index.Title"),
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