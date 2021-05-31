/*
 * Author: 吴楚标
 * Date: 2021-05-30 17:46:59
 * LastEditors: 吴楚标
 * LastEditTime: 2021-05-31 23:22:35
 * Description:
*/
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// 路由就是根据网址的不用，返回不同的内容给用户
