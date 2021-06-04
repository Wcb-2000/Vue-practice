<!--
 * @Author: 吴楚标
 * @Date: 2021-06-03 14:47:59
 * @LastEditors: 吴楚标
 * @LastEditTime: 2021-06-04 10:59:43
 * @Description:
-->
<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [{
        title: '成人票',
        children: [{
          title: '一起三人票',
          children: [{
            title: '三人特惠套餐，你值得拥有'
          }]
        }, {
          title: '风靡五人票'
        }]
      }, {
        title: '学生票'
      }, {
        title: '儿童票'
      }, {
        title: '特惠票'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  height: 50rem
</style>
