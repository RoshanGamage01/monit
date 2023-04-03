<template>
    <div class="pl-2 bg-[#392c7693] border-gray-600 border rounded-xl flex items-center justify-center">
        <div class="flex flex-col gap-3">
          <div class="text-sm font-bold">{{ props.title }}</div>
          <div class="text-xl font-bold">{{ props.numbers }}</div>
          <div class="flex items-center gap-3 text-sm">
            <div class="w-5 h-5 rounded-full bg-[#9adccc75] overflow-hidden flex justify-center items-center">
              <font-awesome-icon :icon="['fas', 'arrow-trend-up']" class="text-[#beebd7] text-[10px]"/>
            </div>
            +14% Inc
          </div>
        </div>
        <ClientOnly>
          <VueApexCharts
            width="70%"
            type="radialBar"
            :options="chartOptions"
            :series="series"
          ></VueApexCharts>
        </ClientOnly>
      </div>
</template>

<script setup>
import VueApexCharts from "vue3-apexcharts";

const props = defineProps({
    color: String,
    value: Number,
    title: String,
    numbers: Number
})

let series = [props.value];
let chartOptions = {
  chart: {
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "55%",
      },
      dataLabels: {
        show: true,
        name: {
          show: false,
        },
        value: {
          show: true,
          offsetY: 5,
          color: "#ffffff",
        },
      },
    },
  },
  stroke: {
    show: true,
    lineCap: "round",
  },
  labels: [""],
  colors: [props.color],
};
</script>