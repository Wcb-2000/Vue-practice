<!--
 * @Author: 吴楚标
 * @Date: 2021-06-02 10:55:38
 * @LastEditors: 吴楚标
 * @LastEditTime: 2021-06-02 19:46:40
 * @Description:
-->
<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }
}
</script>

<style lang="stylus" scoped></style>
