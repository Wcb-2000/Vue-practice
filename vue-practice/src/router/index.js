/*
 * Author: 吴楚标
 * Date: 2021-05-30 17:46:59
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-02 10:57:49
 * Description:
*/
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
