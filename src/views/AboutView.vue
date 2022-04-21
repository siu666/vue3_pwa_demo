<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div id="chart" ref="chart1" class="chart"/>
  </div>
</template>
<script lang="ts">
import { defineComponent,onMounted,ref } from 'vue'
import * as echarts from 'echarts'
export default defineComponent({
  setup() {
    console.log(123)
      let chart1=ref<any>(null);

      onMounted(()=>{
         console.log(echarts)
         console.log(chart1.value)
         initChart();
      })
      const initChart=()=>{
       let initChart= echarts.init(chart1.value);
       initChart.setOption({
        title: { text: "总用户量" },
        tooltip: {},
        xAxis: {
          data: ["12-3", "12-4", "12-5", "12-6", "12-7", "12-8"],
        },
        yAxis: {},
        series: [
          {
            name: "用户量",
            type: "line",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      })
      }
      return {
         chart1,
      }
  },
})
</script>
<style lang="scss" scoped>
  .about{
     .chart{
       display: block;
       width: 300px;
       height: 300px;
       background: red;
     }
  }
</style>