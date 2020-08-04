import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD2b0-RrKgjyOc3BO1FF_oGtA8lrOZAACY',
    libraries: 'places'
  },
  installComponents: true
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
