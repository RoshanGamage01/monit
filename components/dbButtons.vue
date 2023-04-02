<template>
    <NuxtLink :to="props.to" class="w-full flex items-center gap-5 py-2 px-4 rounded-lg text-[#82899c]" :active-class="'bg-sky-700 text-white'">
        <slot/>
    </NuxtLink>
</template>

<script setup>
    const props = defineProps({
        to: String
    })
</script>