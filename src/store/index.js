import { createStore } from 'vuex'
import materials from './materials' //ttttthhhhhhhhhhiiiiiiiiissssssssssssss
import inspos from './inspos'
import users from './users'

export default createStore({
  /*state: {
  },
  mutations: {
  },
  actions: {
  },*/
  modules: {
    materials,
    inspos,
    users
  }
})
