<!--
 * @Author: 吴楚标
 * @Date: 2021-06-03 21:22:37
 * @LastEditors: 吴楚标
 * @LastEditTime: 2021-06-03 22:07:47
 * @Description:
-->
<template>
  <div class="container" @click="handleGallaryClick">
    <div class="weapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallary-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow: inherit
.container
  display: flex
  flex-direction: column
  justify-content: center
  z-index: 99
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  background: #000
  .weapper
    height: 0
    width: 100%
    padding-bottom: 100%
    .gallary-img
      width: 100%
    .swiper-pagination
      color: #fff
      bottom: -1rem
</style>
