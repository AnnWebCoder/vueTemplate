import * as types from './mutations-types.js'

export default{
  setTest: ({commit}, param) => {
    commit(types.SETTEST, param)
  },
  setDemo: ({commit}) => {
    commit(types.SETDEMO)
  }
}
