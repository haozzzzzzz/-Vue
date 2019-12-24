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
  Button,
  Container,
  Aside,
  Main,
  Header,
  TabPane,
  Tabs,
  Col,
  TableColumn
} from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
// import http from './utils/api'
import axios from 'axios'
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Header)
Vue.use(TabPane)
Vue.use(Tabs)
Vue.use(Col)
Vue.use(TableColumn)
// 引入高亮css样式
Vue.use(VuehighlightJS)
// Vue.prototype.$http = http

Vue.prototype.$http = axios
// require('../node_modules/mockjs/dist/mock')
require('./mock')
// 第一种 挂载原型 使用axios请求方式
// 第二种是用store.actions 的 this.$store.dispatch请求方式

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
