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
              height: 350,
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
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
      // chartOptions: {
      //   chart: {
      //     width: 380,
      //     type: 'pie'
      //   },
      //   labels: ['Dell', 'Apple', 'Mi', 'Hp', 'Acer'],
      //   responsive: [{
      //     breakpoint: 480,
      //     options: {
      //       chart: {
      //         width: 200,
      //       },
      //       legend: {
      //         position: 'bottom'
      //       }
      //     }
      //   }]
      // },
      // series: [44, 55, 13, 43, 22]
    }
  },
}
</script>
