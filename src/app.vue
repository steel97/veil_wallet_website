<template>
  <NuxtLayout>
    <AppHeader />
    <div class="main-wrap" aria-hidden="true"></div>
    <div class="wrap">
      <main>
        <NuxtPage />
      </main>
      <div class="max-w-7xl w-full mx-auto my-4 text-gray-800">
        <!-- links -->
        <SectionCrossLinks />
      </div>
    </div>
    <AppFooter />
  </NuxtLayout>
</template>

<script setup lang="ts">
import "toastify-js/src/toastify.css";
</script>

<style>
.main-wrap {
  background: url('/images/bg/bg1.png');
  background-size: cover;
  background-position: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
}

.main-wrap-or {
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
