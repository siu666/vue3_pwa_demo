<template>
  <nav>
        <i>micro</i>
        <router-link to="/sub_vue">sub_vue</router-link>
                <router-link to="/sub_vue2">sub_vue</router-link>

          <router-link to="/about1">about</router-link>

  </nav>
  <router-view />
  <div id="container"></div>

</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {
      
    }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a,i {
  font-weight: bold;
  color: #2c3e50;
  margin-left: 5px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
