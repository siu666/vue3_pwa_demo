import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import _ from 'lodash'
console.log(_.join(['a', 'b'], '~'))

createApp(App).use(store).use(router).mount('#app')
