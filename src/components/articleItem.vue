<!--
 * @Author: your name
 * @Date: 2021-03-22 22:06:58
 * @LastEditTime: 2021-03-22 23:27:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /juejinsearch/src/components/articleItem.vue
-->
<template>
  <li class="article-item" @click="toArticle(article.link)">
    <div class="detial">
      <div class="index" v-text="index + 1"></div>
      <div class="time">{{ parseTime(article.time) }}</div>
      <div class="like-count">{{ article.likeCount }} like</div>
    </div>
    <div class="title" v-text="article.title"></div>
    <div class="describe" v-text="article.describe"></div>
  </li>
</template>

<script>
import moment from 'moment'
moment.locale('zh-cn')
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'article-item',
  props: {
    article: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  computed: {
    parseTime() {
      return function(time) {
        return moment(parseInt(time + '000')).fromNow()
      }
    },
  },
  methods: {
    toArticle(link) {
      window.open(link)
    },
  }
})
</script>

<style lang="scss">
@import '../assets/css/_var.scss';
.article-item {
  width: 100%;
  height: 100px;
  overflow: hidden;
  font-size: 14px;
  margin-bottom: 10px;
  border-bottom: 1px solid $border-color;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }

  .detial {
    display: flex;
    align-items: center;
    font-size: 12px;

    div:nth-child(n + 2) {
      &::before {
        content: '·';
        display: inline-block;
        margin: 0 10px;
        color: #999;
      }
    }

    .index {
      background-color: #006cff;
      width: 20px;
      color: #fff;
      text-align: center;
    }
  }

  .title {
    font-size: 14px;
    margin-top: 10px;
  }

  .describe {
    font-size: 12px;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2; // 控制行数
    -webkit-box-orient: vertical;
    color: rgb(133, 131, 131);
  }
}
</style>
