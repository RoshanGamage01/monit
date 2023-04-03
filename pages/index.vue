<template>
  <div class="w-full h-full px-10 grid gap-10">
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
    <div>
      <ClientOnly>
        <VueApexCharts
          type="bar"
          height="100%"
          width="100%"
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

let series = [
  {
    name: "PRODUCT A",
    data: [40, 10, 30, 30, 50, 30, 20, 10, 55, 39, 24, 17],
  },
  {
    name: "PRODUCT B",
    data: [10, 25, 36, 28, 24, 20, 24, 20, 39, 5, 20, 32],
  },
  {
    name: "PRODUCT C",
    data: [20, 35, 30, 36, 25, 20, 24, 10, 19, 5, 10, 22],
  },
];

let options = {
  chart: {
    type: "bar",
    height: "100%",
    stacked: true,
    stackType: "100%",
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: true,
    },
    dataLabels: {
      enabled: false,
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
    {
      breakpoint: 5000,
      options: {
        // colors: ["Red, Green", "Blue"],
        dataLabels: {
          enabled: false,
        },
        legend: {
          labels: {
            // colors: "#FFFFFF",
            // useSeriesColors: false,
          },
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: "5",
      columnWidth: "10%",
      rangeBarOverlap: true,
      distributed: false,
      rangeBarGroupRows: true,
      dataLabels: {
        position: "center",
        maxItems: 0,
        hideOverflowingLabels: false,
        orientation: "horizontal",
      },
    },
  },
  tooltip: {
    fillSeriesColor: false,
    theme: "dark",
  },
  subtitle: {
    text: "Statistics of active Aplications",
    align: "left",
    margin: 0,
    offsetX: 0,
    offsetY: 0,
    floating: false,
    style: {
      fontSize: "20px",
      fontWeight: "bold",
      fontFamily: undefined,
      color: "#ffffff",
    },
  },
  xaxis: {
    type: "category",
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  yaxis: {
    labels: {
      minWidth: 0,
      maxWidth: 100,
    },
  },
  legend: {
    position: "top",
    // offsetY: 10,
  },
  fill: {
    colors: ["#38CB89", "#FFA600", "#FF5630"],
    type: "solid",
    opacity: 1,
    strokeWidth: 7,
  },
};
</script>
