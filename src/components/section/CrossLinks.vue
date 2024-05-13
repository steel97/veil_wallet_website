<template>
    <section class="flex flex-col justify-center items-center mb-10">
        <h1 class="w-fit leading-10 text-2xl my-4 font-bold">Useful links:</h1>
        <div class="flex flex-wrap justify-center gap-10 w-fit">
            <figure class="flex justify-center items-center h-20 relative">
                <div aria-hidden="true" class="absolute left-0 z-0 w-20 h-20 bg-gray-100 rounded-lg"></div>
                <img src="/images/icons/services/google-play.svg" width="40" alt="Secure"
                    class="absolute left-[0.75rem] top-[0.75rem] z-10 w-14 h-14">
                <SiteLink to="/" class="text-lg font-bold ml-[6rem]" target="_blank">Google Play</SiteLink>
            </figure>
            <figure class="flex justify-center items-center h-20 relative">
                <div aria-hidden="true" class="absolute left-0 z-0 w-20 h-20 bg-gray-100 rounded-lg"></div>
                <img src="/images/icons/services/fdroid.png" width="40" alt="Secure"
                    class="absolute left-[0.75rem] top-[0.75rem] z-10 w-14 h-14">
                <SiteLink to="/" class="text-lg font-bold ml-[6rem]" target="_blank">F-Droid</SiteLink>
            </figure>
            <figure class="flex justify-center items-center h-20 relative">
                <div aria-hidden="true" class="absolute left-0 z-0 w-20 h-20 bg-gray-100 rounded-lg"></div>
                <img src="/images/icons/services/github.svg" alt="Secure"
                    class="absolute left-[0.75rem] top-[0.75rem] z-10 w-14 h-14">
                <SiteLink to="/" class="text-lg font-bold ml-[6rem]" target="_blank">Github</SiteLink>
            </figure>
        </div>
    </section>
</template>

<style></style>