<template>
  <div>
    <apexchart type="area" height="350" :options="data.chartOptions" :series="data.series"></apexchart>
  </div>
</template>
<script>
  import series from '../data.json';

export default {
  
  data() {
    return {
      data: {
          series: [{
            name: "weather",
            data: series.prices
          }],
          chartOptions: {
            chart: {
              type: 'area',
              height: 200,
              zoom: {
                enabled: false
              },
            },
            colors: ['#FFBF3B'],
            dataLabels: {
              enabled: true,
              formatter: function (val) {
                  return val+'°'
              },
              offsetX: 0,
              offsetY: -5,
              background: {
                enabled: false,
              }
            },
            tooltip: {
              y: {
                show: true,
                formatter: function (val) {
                  return val+'°'
                },
              },
            },
            stroke: {
              curve: 'smooth'
            },
            labels: series.dates,
            xaxis: {
              type: 'time',
            },
            yaxis: {
              show: false
            },
            legend: {
              horizontalAlign: 'bottom'
            },
          },
        },
    }
  },
}
</script>
