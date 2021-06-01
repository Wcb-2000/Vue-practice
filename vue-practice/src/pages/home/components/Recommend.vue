<!--
 * @Author: 吴楚标
 * @Date: 2021-06-01 21:08:01
 * @LastEditors: 吴楚标
 * @LastEditTime: 2021-06-01 22:01:12
 * @Description:
-->
<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl:
            'https://imgs.qunarzz.com/sight/p0/1511/34/34170b200db08a5a90.img.jpg_200x200_cc3130fd.jpg',
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

.item {
  overflow: hidden;
  display: flex;
  height: 1.9rem;

  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;

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

    .item-button {
      line-height: 0.44rem;
      margin-top: 0.16rem;
      background: #ff9300;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
      color: #fff;
    }
  }
}
</style>
