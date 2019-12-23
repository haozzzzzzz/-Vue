import Vue from 'vue'
import Vuex from 'vuex'
import catelog from './modules/catelog'
import getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    catelog
  },
  getters
})
export default store
