<!--
 * @Author: 吴楚标
 * @Date: 2021-05-30 18:19:20
 * @LastEditors: 吴楚标
 * @LastEditTime: 2021-06-01 10:50:10
 * @Description:
-->
<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <div>test</div>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style>
</style>
