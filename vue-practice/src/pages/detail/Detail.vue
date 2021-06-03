<!--
 * @Author: 吴楚标
 * @Date: 2021-06-03 14:47:59
 * @LastEditors: 吴楚标
 * @LastEditTime: 2021-06-03 23:04:51
 * @Description:
-->
<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
