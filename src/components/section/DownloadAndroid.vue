<template>
    <section class="w-full bg-gray-100 rounded-lg shadow px-6 py-4 min-h-[100px]" id="download-android">
        <img src="/images/icons/android-robot.png" alt="Android" class="h-14">
        <h2 class="leading-6 text-xl pt-8 pb-4 font-black">{{ t("Index.Downloads.Sections.Android.Header") }}</h2>
        <p>{{ t("Index.Downloads.Sections.Android.Text") }}</p>
        <section class="flex justify-between mt-6">
            <div class="flex-grow">
                <div>
                    <div class="flex items-center relative">
                        <img src="/images/icons/services/google-play.svg" width="39" alt="Google Play logo"
                            class="relative z-10">
                        <NuxtLink :href="runtimeConfig.public.app.googleplay"
                            class="h-[43px] ml-3 relative z-10 block leading-normal rounded-r-lg transition-colors bg-sky-950 hover:bg-sky-900 px-4 py-2 text-gray-100 text-md uppercase flex-grow max-w-[250px] text-center">
                            {{ t("Index.Downloads.Sections.Android.ActionDownloadGooglePlay") }}
                        </NuxtLink>
                    </div>
                </div>
                <div class="mt-2">
                    <div class="flex items-center relative">
                        <img src="/images/icons/services/fdroid.png" width="43" alt="F-Droid logo"
                            class="relative z-10">
                        <NuxtLink :href="runtimeConfig.public.app.fdroid"
                            class="h-[43px] ml-2 relative z-10 block leading-normal rounded-r-lg transition-colors bg-sky-950 hover:bg-sky-900 px-4 py-2 text-gray-100 text-md uppercase flex-grow max-w-[250px] text-center">
                            {{ t("Index.Downloads.Sections.Android.ActionDownloadFDroid") }}
                        </NuxtLink>
                    </div>
                </div>
                <p class="mt-4">
                    <span class="block">{{ t("Index.Downloads.Sections.Android.TextDownloadAPK") }}</span>
                    <NuxtLink :href="asset_universal?.browser_download_url"
                        class="underline underline-offset-4 hover:text-blue-600 transition-colors">
                        universal
                    </NuxtLink> /
                    <NuxtLink :href="asset_arm64_v8a?.browser_download_url"
                        class="underline underline-offset-4 hover:text-blue-600 transition-colors">
                        arm64-v8a
                    </NuxtLink> /
                    <NuxtLink :href="asset_armeabi_v7a?.browser_download_url"
                        class="underline underline-offset-4 hover:text-blue-600 transition-colors">
                        armeabi-v7a
                    </NuxtLink> /
                    <NuxtLink :href="asset_x86_64?.browser_download_url"
                        class="underline underline-offset-4 hover:text-blue-600 transition-colors">
                        x86_64
                    </NuxtLink>
                </p>
            </div>
            <img src="/images/qr/google-play.svg" alt="AltStore QR" width="128"
                class="hidden lg:block relative top-[-20px]">
        </section>
        <section class="block lg:hidden mt-2">
            <img src="/images/qr/google-play.svg" alt="AltStore QR" width="128" class="relative lg:top-[-20px]">
        </section>
    </section>
</template>

<script setup lang="ts">
import type { GithubRelease } from "~/models/github/GithubReleases";

const { t } = useI18n();
const runtimeConfig = useRuntimeConfig();
const { getAsset } = useGithubData();
const props = defineProps<{
    release: GithubRelease | null
}>();

const asset_universal = computed(() => getAsset(props.release, ".android.apk"));
const asset_arm64_v8a = computed(() => getAsset(props.release, ".android-arm64-v8a.apk"));
const asset_armeabi_v7a = computed(() => getAsset(props.release, ".android-armeabi-v7a.apk"));
const asset_x86_64 = computed(() => getAsset(props.release, ".android-x86_64.apk"));
</script>