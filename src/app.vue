<template>
  <NuxtLayout class="bg-gray-50">
    <AppHeader />
    <main class="wrap">
      <NuxtPage />
    </main>
    <AppFooter />
  </NuxtLayout>
</template>

<script setup lang="ts">
</script>

<style>
.wrap {
  min-height: calc(100vh - 9rem);
}
</style>
