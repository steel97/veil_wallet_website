<template>
    <section class="w-full bg-gray-100 rounded-lg shadow px-6 py-4 min-h-[100px]" id="download-ios">
        <img src="/images/icons/apple.png" alt="iOS" class="h-14">
        <h2 class="leading-6 text-xl pt-8 pb-4 font-black">{{ t("Index.Downloads.Sections.iOS.Header") }}</h2>
        <p>{{ t("Index.Downloads.Sections.iOS.Text") }}</p>
        <p><b>{{ t("Index.Downloads.Sections.iOS.NoJailbreak") }}</b></p>
        <section class="flex justify-between mt-6">
            <div class="flex-grow">
                <div>
                    <div class="flex items-center relative">
                        <img src="/images/icons/services/altstore.png" width="43" alt="AltStore logo"
                            class="relative z-10">
                        <div aria-hidden="true" class="relative left-[-4px] h-[43px] bg-sky-950 w-[20px] z-0 h-[43px]">
                        </div>
                        <SiteLink
                            :href="'altstore://source?URL=' + runtimeConfig.public.site.url + '/api/altstore/sources'"
                            class="h-[43px] relative left-[-20px] z-10 block leading-normal rounded-r-lg transition-colors bg-sky-950 hover:bg-sky-900 px-4 py-2 text-gray-100 text-md uppercase flex-grow max-w-[250px] text-center">
                            {{ t("Index.Downloads.Sections.iOS.ActionAddToAltstore") }}
                        </SiteLink>
                    </div>
                </div>
                <p class="mt-4">
                    <SiteLink :href="asset?.browser_download_url"
                        class="underline underline-offset-4 hover:text-blue-600 transition-colors">
                        {{ t("Index.Downloads.Sections.iOS.ActionDownloadIPA") }}
                    </SiteLink>
                </p>
                <p class="mt-2">
                    <SiteLink href="https://faq.altstore.io/"
                        class="underline underline-offset-4 hover:text-blue-600 transition-colors" target="_blank">
                        {{ t("Index.Downloads.Sections.iOS.ActionAltStoreGuide") }}
                    </SiteLink>
                </p>
            </div>
            <img src="/images/qr/altstore-source.svg" alt="AltStore QR" width="128"
                class="hidden lg:block relative top-[-5px]">
        </section>
        <section class="block lg:hidden mt-2">
            <img src="/images/qr/altstore-source.svg" alt="AltStore QR" width="128" class="relative lg:top-[-5px]">
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


const asset = computed(() => getAsset(props.release, ".ipa"));
</script>