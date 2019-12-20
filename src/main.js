import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/golbal.less'
// 引入高亮css样式
import './assets/atom-one-dark.css'
import VuehighlightJS from 'vue-highlightjs'
import {
  Form,
  FormItem,
  Input,
  Button
} from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
// 引入高亮css样式
Vue.use(VuehighlightJS)

// import {
//   input
// } from 'element'
// import http from './utils/api'
// Vue.prototype.$http = http
// 第一种 挂载原型 使用axios请求方式
// 第二种是用store.actions 的 this.$store.dispatch请求方式

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
