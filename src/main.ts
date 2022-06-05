import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { registerMicroApps, start } from 'qiankun';
import microApps from './micros/apps';
registerMicroApps(microApps);
  
start();

createApp(App).use(store).use(router).mount('#app')
