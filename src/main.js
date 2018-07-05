// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// vuex修改的顺序是action.js文件夹 => mutation-types.js文件夹 => mutations.js文件夹 => getters.js文件夹
import store from './store/'
// 导入axioss设置的全局拦截文件
import axios from './http'

Vue.use(ElementUI)

Vue.prototype.$axios = axios

Vue.config.productionTip = false

// 拦截跳转路径是该用户是否已经登录
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 通过vuex里面store的loginStatus属性来判断是否登录
    if (store.state.mutations.loginStatus) {
      next()
    } else {
      next({
        path: '/login'
        // 将跳转的路由path作为参数，登录成功后跳转到该路由
        // query: {redirect: to.fullPath}
      })
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
