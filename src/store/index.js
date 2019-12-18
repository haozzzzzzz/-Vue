import Vue from 'vue'
import Vuex from 'vuex'
import catelog from './modules/catelog'
import getters from './getters'
Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
const store = new Vuex.Store({
  modules: {
    catelog
  },
  getters
})
export default store
