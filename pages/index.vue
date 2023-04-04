<template>
  <div class="w-full h-full px-10">
    <div class="w-full h-fit grid grid-cols-3 gap-7">
      <staticsCard
        :value="74"
        title="Total Applications"
        :numbers="5672"
        color="#38CB89"
      />
      <staticsCard
        :value="69"
        title="Shotlisted Candidates"
        :numbers="3045"
        color="#FFA600"
      />
      <staticsCard
        :value="50"
        title="Rejected Candidates"
        :numbers="1055"
        color="#FF5630"
      />
    </div>
    <barChart />
    <div class="flex justify-between gap-10 mt-10">
      <div class="p-5 rounded-xl border bg-[#392c7693] border-gray-600 flex-1">
        <div class="flex justify-between items-center text-lg font-bold">
          Activity Feed
          <div class="p-2 bg-[#ffffff0f] border rounded-lg text-base font-normal cursor-pointer">
            All Activity
            <font-awesome-icon icon="fa-solid fa-chevron-down" class="ml-2"/>
            
          </div>
        </div>
        <div class="flex flex-col gap-3 mt-5">
          <div class="flex items-center justify-between text-sm gap-3">
            <div class="flex gap-5 items-center">
              <div class="w-10 h-10 bg-blue-500 rounded-full"></div>
              <div >
                <div><strong>Marvin McKinney</strong> applied for the job <strong>Product Designer</strong></div>
                10 mins ago
              </div>
            </div>
            <div class="bg-sky-300 p-2 rounded-lg text-sky-800 font-bold">Applying</div>
          </div>
          <div class="flex items-center justify-between text-sm gap-3">
            <div class="flex gap-5 items-center">
              <div class="w-10 h-10 bg-orange-400 rounded-full"></div>
              <div >
                <div><strong>Marvin McKinney</strong> applied for the job <strong>Product Designer</strong></div>
                10 mins ago
              </div>
            </div>
            <div class="bg-green-300 p-2 rounded-lg text-green-800 font-bold">Sign up</div>
          </div>
        </div>
        
      </div>
      <div class="flex-1 p-5 rounded-xl border bg-[#392c7693] border-gray-600 ">
        <div class="flex justify-between items-center text-lg font-bold">
          Meetings
          <div class="p-2 bg-[#ffffff0f] border rounded-lg text-base font-normal cursor-pointer">
            Create new
            <font-awesome-icon icon="fa-solid fa-chevron-down" class="ml-2"/>
          </div>
        </div>

        <div class="grid gap-3">
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-5">
              <div class="text-center bg-white rounded-lg p-2">
                <span class="text-orange-400 block font-bold">Mon</span>
                <spa class="text-sm text-black font-bold">10</spa>
              </div>
              <div>
                <div><strong>Interview</strong></div>
                9:00 am - 11.30 am
              </div>
            </div>
            <font-awesome-icon :icon="['fas', 'ellipsis-vertical']" />
          </div>

          <div class="flex justify-between items-center">
            <div class="flex items-center gap-5">
              <div class="text-center bg-white rounded-lg p-2">
                <span class="text-orange-400 block font-bold">Mon</span>
                <spa class="text-sm text-black font-bold">8</spa>
              </div>
              <div>
                <div><strong>Interview</strong></div>
                9:00 am - 11.30 am
              </div>
            </div>
            <font-awesome-icon :icon="['fas', 'ellipsis-vertical']" />
          </div>
        </div>
      </div>
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

<style>
</style>