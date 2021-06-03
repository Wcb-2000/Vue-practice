<!--
 * @Author: 吴楚标
 * @Date: 2021-05-31 21:30:29
 * @LastEditors: 吴楚标
 * @LastEditTime: 2021-06-03 11:37:17
 * @Description:
-->
<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to='/city'>
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']) // 共享数据 映射数组 city 到computed
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
/*css引入其他css，可以使用~+代名词替代../../节省空间,其他文件不需要~
 */
.header {
  display: flex;
  line-height: $headerHeight
  background: $bgColor;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;

    .back-icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }

  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem
    background: #fff;
    border-radius: 0.1rem;
    color: #ccc;
  }

  .header-right {
    color: #fff;
    padding: 0 .1rem
    min-width: 1.04rem;
    float: right;
    text-align: center;

    .arrow-icon{
      margin-left: -0.04rem
      font-size: 0.24rem
    }
  }
}
</style>
