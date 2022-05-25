<template>
  <GChart
    type="LineChart"
    :data="chartData"
    :options="chartOptions"
    :resizeDebounce="500"
  />
</template>
<script>
import { GChart } from 'vue-google-charts/legacy'
export default {
  components: {
    GChart
  },
  data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Hours', 'Degrees'],
        ['1 am', 14],
        ['3 am', 13],
        ['6 am', 15],
        ['10 am', 19],
        ['12 pm', 23],
        ['3 pm', 21],
        ['7 pm', 19],
        ['10 pm', 17],
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        },
        width: 900,
        height: 500,

      }
    }
  }
}
</script>
