import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeInfo from '../views/HomeInfo.vue'
import Login from '../views/Login/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: HomeInfo
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import( /* webpackChunkName: "about" */ '../views/About')
  // }
]

const router = new VueRouter({
  routes
})

export default router
