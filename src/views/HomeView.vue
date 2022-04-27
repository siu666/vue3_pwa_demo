<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
        <TestComp />

    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import TestComp from '@/components/comp.vue'; // @ is an alias to /src
import _ from 'lodash'
console.log(_.join(['a', 'b'], '~'))
export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
    TestComp
  },
});
</script>
