<!--
 * @Author: 吴楚标
 * @Date: 2021-06-02 10:55:38
 * @LastEditors: 吴楚标
 * @LastEditTime: 2021-06-02 11:44:35
 * @Description:
-->
<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>

<style lang="stylus" scoped></style>
