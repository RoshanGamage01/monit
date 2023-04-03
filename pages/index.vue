<template>
  <div class="w-full h-full px-10 grid gap-10">
    <div class="w-full h-fit grid grid-cols-3 gap-7">
      <staticsCard :value="74" title="Total Applications" numbers="5672" color="#38CB89" />
      <staticsCard :value="69" title="Shotlisted Candidates" numbers="3045" color="#FFA600" />
      <staticsCard :value="50" title="Rejected Candidates" numbers="1055" color="#FF5630" />
    </div>
    <div>
      
    </div>
  </div>
</template>

<script setup>


useHead({
  title: "Monit Home",
});

definePageMeta({
  layout: "dashbord",
});


</script>
