<!--
 * @Author: your name
 * @Date: 2021-03-22 22:00:42
 * @LastEditTime: 2021-03-22 22:23:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /juejinsearch/src/components/articleListWrap.vue
-->
<template>
  <div class="article-list-wrap mini-scroll">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({ name: 'article-list-wrap' })
</script>

<style lang="scss">
.article-list-wrap{
  position: fixed;
  top: 50px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: auto;
  display: flex;
  justify-content: center;
}
</style>
