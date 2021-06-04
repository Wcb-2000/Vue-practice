<!--
 * @Author: 吴楚标
 * @Date: 2021-06-04 15:59:52
 * @LastEditors: 吴楚标
 * @LastEditTime: 2021-06-04 16:18:37
 * @Description:
-->
<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'Fade'
}
</script>

<style lang="stylus" scoped>
  .v-enter, .v-leave-to
    opacity: 0
  .v-enter-active, .v-leave-active
    transition: opacity .3s
</style>
