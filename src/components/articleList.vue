<!--
 * @Author: your name
 * @Date: 2021-03-22 22:06:14
 * @LastEditTime: 2021-03-22 23:44:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /juejinsearch/src/components/articleList.vue
-->
<template>
  <ul class="article-list">
    <article-item
      v-for="(item, index) in articleList"
      :key="item.id"
      :article="item"
      :index="index"
    ></article-item>
  </ul>
</template>

<script>
import { defineComponent } from 'vue'
import ArticleItem from '@/components/articleItem.vue'
export default defineComponent({
  name: 'article-list',
  props: {
    articleList: {
      type: Array,
    },
  },
  components: {
    ArticleItem,
  },
})
</script>

<style lang="scss">
.article-list {
  padding: 30px;
  box-sizing: border-box;
  color: #333;
  max-width: 800px;
}
</style>
