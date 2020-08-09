import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// configurar token emporario
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NiwibmFtZSI6IkpvYW8iLCJlbWFpbCI6ImpvYW9AZ21haWwuY29tIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE1OTcwMDkwNTgsImV4cCI6MTU5NzI2ODI1OH0.XoLm-tEJ-91G8431inspKk35R7H3yZgJ5f6SVhvfOis'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')