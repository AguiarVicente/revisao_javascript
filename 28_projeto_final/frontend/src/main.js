import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// configurar token emporario
import axios from 'axios'
axios.defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6Ik5pbCBBZ3VpciIsImVtYWlsIjoiYWd1aWFyMTQ1NjRAZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTU5NzE5MDUyMywiZXhwIjoxNTk3NDQ5NzIzfQ.xa5puu9Bm_RehXmuD9C21YWc3tOtstnBeLUKjwBOWqY'
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')