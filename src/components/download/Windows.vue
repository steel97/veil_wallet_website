<template>
  <div class="flex items-center">
    <img src="/images/icons/windows-11.png" width="43" alt="Windows logo">
    <NuxtLink
      href="#download-windows"
      class="block leading-normal rounded-r-lg transition-colors bg-sky-950 hover:bg-sky-900 px-4 py-2 text-gray-100 text-md uppercase text-center min-w-[250px]"
    >
      {{ t("Index.Downloads.Widget.Windows") }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>