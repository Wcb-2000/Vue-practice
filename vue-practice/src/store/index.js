/*
 * Author: 吴楚标
 * Date: 2021-06-03 10:28:28
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-03 11:18:22
 * Description:
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state, // 键值一样可以省略值-state: state可以写成state,
  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations
})
