import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    counter(state){
      return state.counter
    },
    doubleCounter(state){
      return state.counter * 2
    }
  },
  mutations: {
    increment(state) {
      state.counter +=1;
    }
  }
})
