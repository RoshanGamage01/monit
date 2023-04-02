<template>
    <div class="wrapper w-fit h-fit relative" :class="props.rounded">
        <div class="m-border rounded-[inherit]"></div>
        <div class="main rounded-[inherit]">
            <slot/>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    rounded: {
        typeof: String,
        default: "rounded-lg"
    }
})
</script>

<style>
.m-border{
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    background: rgba(128, 128, 128, 0.475);
    position: absolute;
    z-index: 1;
    opacity: 0.6;
}
.wrapper::before{
    content: "";
  display: block;
  background: white;
  background: radial-gradient(
    circle at calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
    rgba(255, 255, 255, 0.6),
    transparent 40%
  );
  border-radius: inherit;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 2;
  pointer-events: none;
  transition: opacity .5s;
}

.wrapper:hover::before {
  opacity: 0.8;
  transition: opacity .5s;
}

.main{
    position: relative;
    z-index: 3;
    background: rgba(14, 1, 72, 0.684);
    inset: 1px;
}
</style>