<!--
 * @Author: 吴楚标
 * @Date: 2021-05-30 17:46:59
 * @LastEditors: 吴楚标
 * @LastEditTime: 2021-06-04 11:59:15
 * @Description:
-->
<template>
  <div id="app">
    <!-- exclude 不包括哪个组件被缓存 -->
    <keep-alive exclude="Detail">
      <!-- 路由内容被加载一次之后 放入keep-alive内存中 下次再使用 直接获取 减少加载次数  -->
      <router-view />
    </keep-alive>
    <!--router 显示的是当前路由地址所对应的内容 -->
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
