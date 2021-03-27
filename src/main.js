import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as GmapVue from 'gmap-vue'

Vue.config.productionTip = false

Vue.use(GmapVue, {
  load:{
    key: 'AIzaSyDMBVqSIEHhBpGO5-_x7aNR6sX-uTtRCBE',
    installComponents: true
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
