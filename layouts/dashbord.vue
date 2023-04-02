<template>
    <section class="w-screen h-screen grid grid-cols-12 grid-rows-6 text-white overflow-hidden">
        <SideBar class="col-span-2 row-span-6" />
        <div class="col-span-8 px-10 row-span-1 flex justify-between items-center">
            <div>
                <h1 class="text-2xl font-bold">Dashboard</h1>
                <p class="text-gray-400">Hello, Roshan. welcome to Monit</p>
            </div>
            
            <wrapper>
                <div class="flex items-center overflow-hidden">
                    <input type="text" placeholder="Search" class="bg-transparent w-64 px-2 ring-0 focus:outline-0 outline-0" />
                    <button class="pt-3 py-2 px-4 rounded-r-lg bg-[#346ccc94]">
                        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                    </button>
                </div>
            </wrapper>
        </div>
        <profileStats class="col-span-2 row-span-6"/>
        <div class="col-span-8 row-span-5 ">
            <slot/>
        </div>
    </section>
</template>

<script setup>
import profileStats from '~~/components/profileStats.vue';

</script>