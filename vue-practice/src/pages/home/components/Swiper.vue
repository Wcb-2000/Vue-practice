<!--
 * @Author: 吴楚标
 * @Date: 2021-06-01 10:28:27
 * @LastEditors: 吴楚标
 * @LastEditTime: 2021-06-01 20:11:49
 * @Description:
-->
<template>
<div class="wrapper">
  <swiper :options="swiperOptions">
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination', // 轮播图的聚焦点
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: '//imgs.qunarzz.com/vs_ceph_vcimg/79faa5a73731e84a7731db49d5baa91e.jpeg'
      }, {
        id: '0002',
        imgUrl: '//imgs.qunarzz.com/vs_ceph_vcimg/c0a60fa20379efa4f02ce527a680dc1b.jpeg'
      }]
    }
  }
}
</script>

<style lang='stylus' scoped>
.wrapper >>> .swiper-pagination-bullet-active /*穿透定义样式，不受scoped影响 */
  background: #fff
.wrapper
  overflow:hidden
  width: 100%
  height:0
  padding-bottom:31.25%
  background: #eee
  .swiper-img
    width:100%
</style>
