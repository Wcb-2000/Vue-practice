<!--
 * @Author: 吴楚标
 * @Date: 2021-06-03 15:31:41
 * @LastEditors: 吴楚标
 * @LastEditTime: 2021-06-03 22:08:36
 * @Description:
-->
<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="https://img1.qunarzz.com/vs_ceph_b2c_001/0361e555-7db4-4c86-b1db-83c00b1a643e.jpg_r_640x420x95_d337df8c.jpg"
      />
      <div class="banner-info">
        <div class="banner-title">云南丽江</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe6de;</span>
          39
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'Detail',
  data () {
    return {
      showGallary: false,
      imgs: ['https://img1.qunarzz.com/vs_ceph_b2c_001/0361e555-7db4-4c86-b1db-83c00b1a643e.jpg_r_640x420x95_d337df8c.jpg',
        'https://img1.qunarzz.com/vs_ceph_b2c_001/6e8aa1e6-09ba-46a8-beba-8415f377d406.jpg_r_1280x840x95_ede02e41.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position: relative
  overflow: hidden
  height: 0
  padding-bottom: 55%

  .banner-img
    width: 100%

  .banner-info
    display: flex
    position: absolute
    left: 0
    right: 0
    bottom: 0
    line-height: .6rem
    color: #fff
    background-image: linear-gradient(top, rgba(0 , 0, 0, 0), rgba(0, 0, 0, 0.8))

    .banner-title
      font-size: .32rem
      padding: 0 .2rem
      flex: 1
    .banner-number
      height: .32rem
      line-height: .32rem
      margin-top: .14rem
      padding: 0 .4rem
      border-radius: .2rem
      background: rgba(0,0,0, .8)
      font-size: .24rem
      .banner-icon
        font-size: .24rem
</style>
