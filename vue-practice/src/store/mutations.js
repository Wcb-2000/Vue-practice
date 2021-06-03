/*
 * Author: 吴楚标
 * Date: 2021-06-03 11:15:47
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-03 11:16:07
 * Description:
*/
export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
