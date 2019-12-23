import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
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
    component: Home
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
