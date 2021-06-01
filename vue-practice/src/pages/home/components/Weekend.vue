<!--
 * @Author: 吴楚标
 * @Date: 2021-06-01 22:04:30
 * @LastEditors: 吴楚标
 * @LastEditTime: 2021-06-01 22:30:48
 * @Description:
-->
<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl:
            'https://img1.qunarzz.com/travel/poi/1808/d6/85b1ca76d23d0837.jpg_640x480x70_eb914ad7.jpg',
          title: '隐贤山庄',
          desc: '13315条评论'
        },
        {
          id: '0002',
          imgUrl:
            'https://imgs.qunarzz.com/sight/p0/1511/34/34170b200db08a5a90.img.jpg_200x200_cc3130fd.jpg',
          title: '隐贤山庄',
          desc: '13315条评论'
        },
        {
          id: '0003',
          imgUrl:
            'https://imgs.qunarzz.com/sight/p0/1511/34/34170b200db08a5a90.img.jpg_200x200_cc3130fd.jpg',
          title: '隐贤山庄',
          desc: '13315条评论'
        },
        {
          id: '0004',
          imgUrl:
            'https://imgs.qunarzz.com/sight/p0/1511/34/34170b200db08a5a90.img.jpg_200x200_cc3130fd.jpg',
          title: '隐贤山庄',
          desc: '13315条评论'
        },
        {
          id: '0005',
          imgUrl:
            'https://imgs.qunarzz.com/sight/p0/1511/34/34170b200db08a5a90.img.jpg_200x200_cc3130fd.jpg',
          title: '隐贤山庄',
          desc: '13315条评论'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}

.item-img-wrapper{
  margin: .1rem
  overflow: hidden
  height: 0
  padding-bottom: 75%

  .item-img {
    width: 100%
  }
}
.item-info{
  padding: .1rem
  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    ellipsis();
  }

  .item-desc {
    line-height: 0.4rem;
    color: #ccc;
    ellipsis();
  }
}
</style>
