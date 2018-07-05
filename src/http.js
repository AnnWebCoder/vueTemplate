/**
 * http配置
 */
// 引入axios以及element ui中的loading和message组件，所有请求发送时都会触发loading组件
import axios from 'axios'
// import { Message } from 'element-ui'
// import * as types from './store/mutations-types'
// import router from './router'

// 超时时间
// axios.defaults.timeout = 2000

// 开启是否是跨域请求
axios.defaults.withCredentials = true

// 请求拦截器
axios.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截器
axios.interceptors.response.use(res => {
  return res
}, err => {
  return Promise.reject(err)
})

export default axios
