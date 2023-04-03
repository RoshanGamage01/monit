<template>
  <div class="w-full h-full px-10 grid gap-10">
    <div class="w-full h-fit grid grid-cols-3 gap-7">
      <staticsCard
        :value="74"
        title="Total Applications"
        numbers="5672"
        color="#38CB89"
      />
      <staticsCard
        :value="69"
        title="Shotlisted Candidates"
        numbers="3045"
        color="#FFA600"
      />
      <staticsCard
        :value="50"
        title="Rejected Candidates"
        numbers="1055"
        color="#FF5630"
      />
    </div>
    <div>
      <ClientOnly>
        <VueApexCharts
          type="bar"
          height="350"
          :options="options"
          :series="series"
        />
      </ClientOnly>
    </div>
  </div>
</template>

<script setup>
import VueApexCharts from "vue3-apexcharts";

useHead({
  title: "Monit Home",
});

definePageMeta({
  layout: "dashbord",
});

let series = [{
            name: 'PRODUCT A',
            data: [44, 55, 41, 67, 22, 43]
          }, {
            name: 'PRODUCT B',
            data: [13, 23, 20, 8, 13, 27]
          }, {
            name: 'PRODUCT C',
            data: [11, 17, 15, 15, 21, 14]
          }, {
            name: 'PRODUCT D',
            data: [21, 7, 25, 13, 22, 8]
          }];

let options = {
  chart: {
    type: "bar",
    height: 350,
    stacked: true,
    toolbar: {
      show: true,
    },
    zoom: {
      enabled: true,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 10,
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: "13px",
            fontWeight: 900,
          },
        },
      },
    },
  },
  xaxis: {
    type: "datetime",
    categories: [
      "01/01/2011 GMT",
      "01/02/2011 GMT",
      "01/03/2011 GMT",
      "01/04/2011 GMT",
      "01/05/2011 GMT",
      "01/06/2011 GMT",
    ],
  },
  legend: {
    position: "right",
    offsetY: 40,
  },
  fill: {
    opacity: 1,
  },
};
</script>
