import Vue from 'vue'
import router from './routes/router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
