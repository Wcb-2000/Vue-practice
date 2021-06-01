<!--
 * @Author: 吴楚标
 * @Date: 2021-06-01 10:28:27
 * @LastEditors: 吴楚标
 * @LastEditTime: 2021-06-02 00:01:17
 * @Description:
-->
<template>
<div class="wrapper">
  <swiper :options="swiperOptions" v-if="showSwiper">
    <swiper-slide v-for="item of list" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination', // 轮播图的聚焦点
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
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
