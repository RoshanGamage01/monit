<template>
    <div class="p-5 w-full h-1/2 mt-10 rounded-xl border bg-[#392c7693] border-gray-600">
      <ClientOnly>
        <VueApexCharts
          type="bar"
          height="100%"
          width="100%"
          :options="options"
          :series="series"
        ></VueApexCharts>
      </ClientOnly>
    </div>
</template>

<script setup>
import VueApexCharts from "vue3-apexcharts";
let series = [
  {
    name: "Applicatins",
    data: [40, 10, 30, 30, 50, 30, 20, 10, 55, 39, 24, 17],
  },
  {
    name: "Shortlisted",
    data: [10, 25, 36, 28, 24, 20, 24, 20, 39, 25, 20, 32],
  },
  {
    name: "Rejected",
    data: [20, 35, 30, 36, 25, 20, 24, 10, 19, 15, 10, 22],
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
      borderRadius: "9",
      columnWidth: "30%",
      rangeBarGroupRows: true,
      borderRadiusApplication: "around",
      borderRadiusWhenStacked: "all",
      rangeBarGroupRows: true,
      distributed: false,
      rangeBarOverlap: true,
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
  grid: {
    show: true,
    borderColor: '#4c4c4c8c',
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
    labels: {
      minWidth: 0,
      maxWidth: 100,
      style: {
        colors: "#fff",
      }
    },
  },
  yaxis: {
    labels: {
      minWidth: 0,
      maxWidth: 100,
      style: {
        colors: ["#fff"],
      }
    },
  },
  legend: {
    position: "top",
    fontSize: "14px",
    offsetX: 10,
    offsetY: -20,
    labels: {
      colors: ["#fff"],
    },
    markers: {
      height: 8,
      width: 8,
      radius: 12,
      offsetX: -3,
      fillColors: ["#38CB89", "#FFA600", "#FF5630"],
    },
    itemMargin: {
      horizontal: 10,
    },
  },
  fill: {
    colors: ["#38CB89", "#FFA600", "#FF5630"],
    type: "solid",
    opacity: 1,
    strokeWidth: 7,
  },
  stroke: {
    show: true,
    curve: "smooth",
    lineCap: "round",
    colors: ["#192139"],
    width: 9,
    dashArray: 0,
  },
};
</script>