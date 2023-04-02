<template>
    <div class="w-full flex items-center gap-5 py-2 px-4 rounded-lg" :class="props.isActive ? 'bg-sky-700 text-white' : 'text-[#82899c]'">
        <slot/>
    </div>
</template>

<script setup>
    const props = defineProps({
        isActive: {
            typeof: Boolean,
            default: false
        }
    })
</script>