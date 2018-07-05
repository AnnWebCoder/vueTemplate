import * as types from './mutations-types.js'
import getters from './getters'

const state = {
  // 路由通过该属性来判断是否登录了，该属性的改在是axios拦截器里面修改
  loginStatus: false,
  test: '',
  demo: false
}

const mutations = {
  [types.SETTEST] (state, params) {
    state.test = params
  },
  [types.SETDEMO] (state) {
    state.demo = !state.demo
  }
}

export default{
  state,
  mutations,
  getters
}
