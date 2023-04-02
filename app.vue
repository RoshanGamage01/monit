<template>
    hi
</template>

<script setup>
useHead({
  title: "Home",
  script: `
  let wrappers = []

  window.onload = function(){
    wrappers = document.querySelectorAll('.wrapper');
  }

  window.addEventListener("mousemove", e => {
    wrappers.forEach(w => {
        const {left, top} = w.getBoundingClientRect();
        w.style = '--x:' + (e.pageX - left) + '; --y:' + (e.pageY - top) + ';';
      })
    })
  `
})

</script>