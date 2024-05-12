<template>
  <NuxtLayout>
    <AppHeader />
    <div class="main-wrap" aria-hidden="true"></div>
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

.main-wrap {
  background: url('/images/bg/bg3.png');
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 700px;
  /*730px*/
  z-index: -2;
}

.main-wrap::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backdrop-filter: blur(10px);
  /* apply the blur */
  pointer-events: none;
  z-index: -1;
  /* make the overlay click-through */
}
</style>
