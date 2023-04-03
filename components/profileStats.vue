<template>
    <section class="bg-[#1b2133d7] shadow-lg w-full h-full flex flex-col items-center p-5">
        <div class="w-full flex justify-end">
            <div class="flex items-center w-fit gap-3 text-[#82899c] text-xl">
                <font-awesome-icon :icon="['fas', 'circle-question']"/>
                <font-awesome-icon :icon="['fas', 'bell']" />
                <div class="w-8 h-8 rounded-full flex justify-center items-center bg-[#3478c1] overflow-hidden">
                    <img src="~/assets/img/avatar.png" alt="avatar" class="w-5">
                </div>
            </div>
        </div>

        <div class="avatar w-32 h-32 rounded-full mt-20 flex justify-center items-center bg-[#3478c1] overflow-hidden">
            <img src="~/assets/img/avatar.png" alt="avatar" class="w-20">
        </div>

        <div class="text-center">
            <div class="text-2xl font-bold mt-6">Roshan Gamage</div>
            <div class="text-[#82899c]">Full-stack Developer</div>
        </div>

        <div class="w-full mt-10">
            <div class="pl-4 font-bold">Messages</div>
        </div>
    </section>
</template>

<script setup>

</script>

<style>
.avatar{
    box-shadow: 0 0 0px 10px #518ccb5e;
}
</style>