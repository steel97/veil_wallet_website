<template>
    <div class="flex items-center">
        <SiteLink href="#downloads"
            class="block leading-normal rounded-lg transition-colors bg-sky-950 hover:bg-sky-900 px-4 py-2 text-gray-100 text-md uppercase text-center min-w-[250px]">
            {{ t("Index.Downloads.Widget.General") }}
        </SiteLink>
    </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>