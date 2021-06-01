<!--
 * @Author: 吴楚标
 * @Date: 2021-05-30 18:19:20
 * @LastEditors: 吴楚标
 * @LastEditTime: 2021-06-01 11:33:04
 * @Description:
-->
<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>

<style>
</style>
