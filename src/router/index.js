import Vue from 'vue'
import Router from 'vue-router'

// 导入组件
import login from 'pages/user/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
