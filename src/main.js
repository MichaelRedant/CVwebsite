import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify' // Importeer de Vuetify configuratie
import '@mdi/font/css/materialdesignicons.css' // Importeer de iconfont

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
