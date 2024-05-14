<template>
    <!-- bg-gradient-to-b from-blue-500 to-blue-500 -->
    <div class="text-gray-800 index-wrap">
        <div class="max-w-7xl w-full mx-auto flex justify-between py-[4.6rem] pb-[5.6rem] px-2 z-10 relative">
            <section class="max-w-2xl w-full bg-gray-100 rounded-lg px-8 py-7 shadow-lg min-h-[452px]">
                <h1 class="leading-10 text-4xl text-center">{{ t("Donations.Header") }}</h1>
                <p class="leading-normal pt-6 pb-4">
                    {{ t("Donations.Texts.Text1") }}
                </p>
                <p class="leading-normal pb-4">
                    {{ t("Donations.Texts.Text2") }}
                </p>
                <p class="leading-normal pb-4">
                    {{ t("Donations.Texts.Text3") }}
                </p>
                <p class="leading-normal pb-4">
                    {{ t("Donations.Texts.Text4") }}
                </p>
                <p class="bg-gray-200 rounded-lg p-3 text-xs break-all">
                    {{ donationsAddress }}
                <div class="text-center">
                    <a to="#" @click="copyAddress"
                        class="underline break-all text-blue-500 font-bold underline-offset-4">{{ t("Donations.Copy") }}
                    </a>
                </div>
                </p>
                <p class="py-3">
                    <a class="underline break-all text-blue-500 underline-offset-4" :href="'veil:' + donationsAddress">
                        veil:{{ donationsAddress }}
                    </a>
                </p>
            </section>
            <figure>
                <img src="/images/donate-qr.svg" width="300" alt="Veil address for donations. Thanks in advance :)">
            </figure>
        </div>
    </div>
    <div class="max-w-7xl w-full mx-auto my-4 text-gray-800">
        <!-- links -->
        <SectionCrossLinks />
    </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const donationsAddress = ref("sv1qqp3twtj249e226mvg55jm0ec36y99xsh5ytnm6hcgvetthuptj2kugpqwcnw6tpnvwrrvutsltnghkg46ayqpw40g6p3knppy3kwgvhr34mkqqqeedkfp");

useHead({
    title: t("Donations.Title")
});

const copyAddress = () => {

};

</script>