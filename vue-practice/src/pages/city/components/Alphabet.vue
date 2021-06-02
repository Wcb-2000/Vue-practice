<!--
 * @Author: 吴楚标
 * @Date: 2021-06-02 19:44:11
 * @LastEditors: 吴楚标
 * @LastEditTime: 2021-06-02 20:23:08
 * @Description:
-->
<template>
  <ul class="list">
    <li class="item" v-for="(item, key) of cities" :key="key">{{key}}</li>
  </ul>
</template>
<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
  display: flex
  flex-direction: column
  justify-content: center
  position: absolute
  top:1.58rem
  right: 0
  bottom: 0
  width: .4rem
  .item
    line-height: .4rem
    text-align: center
    color: $bgColor
</style>
