import Vuex from 'vuex'
import vue from 'vue'

vue.use(Vuex)

const state = {
  count : 0,
  schedule: []
}

const mutations = {
  INCREMENT(state) {
    state.count++
  },
  DECREMENT(state) {
    state.count--
  },
  AsycData(state,data) {
    state.schedule = data
  }
}

export default new Vuex.Store({
  state,
  mutations
})
