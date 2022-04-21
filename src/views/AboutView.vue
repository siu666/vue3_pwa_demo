<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div id="chart" ref="chart1" class="chart"/>
  </div>
</template>
<script lang="ts">
import { defineComponent,onMounted,ref } from 'vue'
import echart from 'echarts';
console.log(echart,'123')
export default defineComponent({
  setup() {
    console.log(123)
      let chart1=ref(null);
      onMounted(()=>{
         console.log(echart)
         console.log(chart1.value)
      })
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