<!--
 * @Author: 吴楚标
 * @Date: 2021-05-30 17:46:59
 * @LastEditors: 吴楚标
 * @LastEditTime: 2021-05-31 20:07:24
 * @Description:
-->
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->

    <!--router 显示的是当前路由地址所对应的内容 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
