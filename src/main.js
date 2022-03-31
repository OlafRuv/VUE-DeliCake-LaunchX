import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto'
import store from './store'
import './style/styles.css'

var VueScrollactive = require('vue-scrollactive');

createApp(App).use(store).use(router).use(VueScrollTo).use(VueScrollactive).mount('#app')
