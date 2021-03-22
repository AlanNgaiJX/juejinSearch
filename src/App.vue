<!--
 * @Author: your name
 * @Date: 2021-03-22 21:24:54
 * @LastEditTime: 2021-03-23 01:04:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /juejinsearch/src/App.vue
-->
<template>
  <div id="app">
    <search-input
      @search="handleSearch"
      v-model:keyWord="keyWord"
      v-model:sortBy="sortBy"
      v-model:sizeSetting="sizeSetting"
      :isFetching="isFetching"
      :layMiddle="isFetching || init"
    ></search-input>
    <article-list-wrap>
      <article-list
        :articleList="articleList"
        v-if="!isFetching"
      ></article-list>
    </article-list-wrap>
  </div>
</template>

<script>
import axios from 'axios'
import { defineComponent, ref } from 'vue'
import config from '@/config/index.js'
import SearchInput from '@/components/searchInput.vue'
import ArticleListWrap from '@/components/articleListWrap.vue'
import ArticleList from '@/components/articleList.vue'

const Api = {
  search: function(args) {
    return axios.post(config.host + '/searchJuejin', {
      cursor: args.cursor,
      id_type: 0,
      key_word: args.key_word,
      limit: 20, //这limit改了没作用
      search_type: 0,
    })
  },
}

export default defineComponent({
  name: 'app',
  components: {
    SearchInput,
    ArticleListWrap,
    ArticleList,
  },
  setup() {
    const init = ref(true);
    const articleList = ref([])
    const sizeSetting = ref(100)
    const size = ref(20)
    const hasMore = ref(true)
    const cursor = ref('1')
    const keyWord = ref('')
    const isFetching = ref(false)
    const sortBy = ref('like desc')

    // 点击搜索
    function handleSearch() {
      articleList.value = []
      size.value = sizeSetting.value
      hasMore.value = true
      cursor.value = '1'
      isFetching.value = false
      callSearchApi()
    }

    // 调起API
    function callSearchApi() {
      isFetching.value = true
      Api.search({
        cursor: cursor.value,
        key_word: keyWord.value,
      }).then((res) => {
        const {
          cursor: _cursor,
          has_more: _hasMore,
          data: dataList,
        } = res.data.data
        const list = dataList.filter((item) => {
          return item.result_type === 2
        })

        articleList.value = articleList.value.concat(parseArticleList(list))
        size.value -= dataList.length
        cursor.value = _cursor
        hasMore.value = _hasMore
        if (hasMore.value && size.value > 0) {
          callSearchApi()
        } else {
          sortArticleList()
        }
      })
    }

    // 排序最终的列表
    function sortArticleList() {
      articleList.value.sort((a, b) => {
        switch (sortBy.value) {
          case 'like desc':
            return b.likeCount - a.likeCount

          case 'like asce':
            return a.likeCount - b.likeCount

          case 'time desc':
            return a.time - b.time

          case 'time asce':
            return b.time - a.time

          case 'normal':
            return

          default:
            break
        }
      })
      isFetching.value = false
      init.value = false
    }

    // 转译列表
    function parseArticleList(list) {
      const obj = {}
      return list
        .map((item) => {
          const article = {}
          const result_model = item.result_model
          const { article_id, author_user_info, article_info } = result_model

          article.id = article_id
          article.authorName = author_user_info.user_name
          article.time = article_info.ctime
          article.title = article_info.title
          article.describe = article_info.brief_content
          article.link = article_info.link_url
          article.likeCount = article_info.digg_count

          return article
        })
        .filter((article) => {
          return article.link
        })
        .reduce((currArr, article) => {
          if (!obj[article.id]) {
            obj[article.id] = true
            currArr.push(article)
          }
          return currArr
        }, [])
    }

    return {
      articleList,
      sizeSetting,
      size,
      hasMore,
      cursor,
      keyWord,
      isFetching,
      sortBy,
      handleSearch,
      init
    }
  },
})
</script>

<style lang="scss">
#app {
}
</style>
