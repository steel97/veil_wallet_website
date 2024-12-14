<template>
    <div class="flex items-center">
        <img src="/images/icons/apple.png" width="43" alt="Apple logo">
        <NuxtLink href="#download-macos"
            class="block leading-normal rounded-r-lg transition-colors bg-sky-950 hover:bg-sky-900 px-4 py-2 text-gray-100 text-md uppercase text-center min-w-[250px]">
            {{ t("Index.Downloads.Widget.MacOS") }}
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>