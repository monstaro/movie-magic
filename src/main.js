import Vue from 'vue'
import MainSiteContainer from './components/MainSiteContainer'
import store from './store'
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(MainSiteContainer),
}).$mount('#app')
