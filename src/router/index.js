import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Authority from '@/components/Authority'
import Error from '@/views/Error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/authority',
      name: 'Authority',
      component: Authority,
      // 登录该路由需要权限
      meta: {
        requiresAuth: true
      }
    },
    // 如果所有路由都匹配不上就匹配Error 404页面
    {
      path: '*',
      redirect: '/error'
    },
    {
      path: '/error',
      name: 'NotFoundComponent',
      component: Error
    }
  ]
})
