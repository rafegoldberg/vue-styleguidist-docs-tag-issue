import Vue from "vue"
import App from "./App.vue"

import router from "@/include/router"

new Vue({
  router,
  render: h=> h(App)
}).$mount("#app")

Vue.config.devtools = true
Vue.config.productionTip = false
