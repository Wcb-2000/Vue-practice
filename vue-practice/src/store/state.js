/*
 * Author: 吴楚标
 * Date: 2021-06-03 11:13:02
 * LastEditors: 吴楚标
 * LastEditTime: 2021-06-03 11:14:30
 * Description:
*/

let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {} // 判断用户是否使用本地存储 防止抛出异常

export default {
  city: defaultCity
}
