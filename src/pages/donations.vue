<template>
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
                    <span id="donations-address">{{ donationsAddress }}</span>
                <div class="text-center">
                    <a href="#" @click="copyAddress"
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
</template>

<script setup lang="ts">
import Toastify from "toastify-js";

const { t } = useI18n();
const donationsAddress = ref("sv1qqp3twtj249e226mvg55jm0ec36y99xsh5ytnm6hcgvetthuptj2kugpqwcnw6tpnvwrrvutsltnghkg46ayqpw40g6p3knppy3kwgvhr34mkqqqeedkfp");

useHead({
    title: t("Donations.Title")
});

const copyAddress = () => {
    const copyText = document.getElementById("donations-address");

    try {
        // @ts-ignore
        navigator.clipboard.writeText(copyText?.value ?? "")
            .then(
                () => {
                    Toastify({
                        text: t("Core.CopySuccess"),
                        duration: 2000,
                        close: false,
                        gravity: "top",
                        position: "right",
                        className: "",
                        stopOnFocus: true,
                    }).showToast();
                },
                () => {
                    console.log("Can't copy text to clipboard (1)");
                }
            );
    } catch {
        console.log("Can't copy text to clipboard (2)");
    }
};

</script>