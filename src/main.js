import Vue from 'vue'
import MainSiteContainer from './components/MainSiteContainer'

Vue.config.productionTip = false

new Vue({
  render: h => h(MainSiteContainer),
}).$mount('#app')
