/*
 * Author: 吴楚标
 * Date: 2021-05-30 17:46:59
 * LastEditors: 吴楚标
 * LastEditTime: 2021-07-15 23:28:55
 * Description:
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id', // 动态路由
      name: 'Detail',
      component: Detail
    }
  ],
  // 跳转新页面回到顶部位置
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
