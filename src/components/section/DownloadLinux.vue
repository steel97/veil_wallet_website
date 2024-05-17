<template>
    <section class="w-full bg-gray-100 rounded-lg shadow px-6 py-4 min-h-[100px] flex flex-col justify-between"
        id="download-linux">
        <div>
            <img src="/images/icons/tux.png" alt="Linux Tux" class="h-14">
            <h2 class="leading-6 text-xl pt-8 pb-4 font-black">{{ t("Index.Downloads.Sections.Linux.Header") }}</h2>
            <p>{{ t("Index.Downloads.Sections.Linux.Text") }}</p>
        </div>
        <div>
            <section class="flex items-center justify-center relative mt-6">
                <img src="/images/icons/ubuntu.png" width="39" alt="Ubuntu logo" class="relative z-10">
                <SiteLink :href="asset?.browser_download_url"
                    class="h-[41px] ml-3 relative z-10 block leading-normal rounded-r-lg transition-colors bg-sky-950 hover:bg-sky-900 px-4 py-2 text-gray-100 text-md uppercase flex-grow max-w-[250px] text-center">
                    {{ t("Index.Downloads.Sections.Linux.ActionDownload") }}
                </SiteLink>
            </section>
            <p class="text-rose-600 text-sm mt-3">{{ t("Index.Downloads.AutoUpdatesNotice") }}</p>
        </div>
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

const asset = computed(() => getAsset(props.release, ".linux-x86_64.zip"));
</script>