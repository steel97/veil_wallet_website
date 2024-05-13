<template>
    <header class="py-3 bg-sky-950/70 shadow-lg">
        <div class="flex items-center justify-between text-gray-800 max-w-7xl w-full mx-auto px-1">
            <SiteLink class="flex items-center" :to="localePath('/')">
                <img src="/images/logo.png" width="64" alt="Veil Wallet logo">
                <span class="text-3xl font-bold text-gray-50">Veil Wallet</span>
            </SiteLink>
            <nav class="flex items-center gap-4">
                <SiteLink :to="localePath('/donations')"
                    class="text-gray-100 hover:underline underline-offset-8 uppercase">Donations
                </SiteLink>
                <SiteLink to="https://veil-project.com"
                    class="text-gray-100 hover:underline underline-offset-8 uppercase" target="_blank">Project
                    Website</SiteLink>
                <SiteLink to="https://veil-project.com"
                    class="text-gray-100 hover:underline underline-offset-8 uppercase" target="_blank">Github</SiteLink>
                <select
                    class="w-[100px] border row-start-1 col-start-1 rounded bg-sky-950 border-gray-500 text-gray-100 px-4 py-1 text-sm">
                    <option>Русский</option>
                    <option>English</option>
                </select>
                <div class="">
                    <button
                        class="rounded-full transition-colors bg-blue-600 hover:bg-blue-500 px-6 py-2 text-gray-100 text-md uppercase">Download</button>
                </div>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>