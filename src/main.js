import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/atom-one-dark.css'
// import http from './utils/api'

// Vue.prototype.$http = http
// 第一种 挂载原型 使用axios请求方式
// 第二种是用store.actions 的 this.$store.dispatch请求方式
// 引入高亮css样式
import VuehighlightJS from 'vue-highlightjs'

Vue.use(VuehighlightJS)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
