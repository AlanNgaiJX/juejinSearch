<!--
 * @Author: your name
 * @Date: 2021-03-22 21:48:58
 * @LastEditTime: 2021-03-22 23:44:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /juejinsearch/src/components/searchInput.vue
-->
<template>
  <div class="search-input" :class="{ layMiddle: isFetching }">
    <div id="juejinLogo"></div>
    <input
      class="keyword"
      type="text"
      v-model="_keyWord"
      @keydown.enter="search"
    />
    <div
      class="search-btn"
      @click="search"
      v-text="isFetching ? 'loading...' : 'serach'"
    ></div>
    <input class="sizeSetting" type="number" v-model="_sizeSetting" />
    <select class="sort" name="sort-group" v-model="_sortBy">
      <option value="like desc">like desc</option>
      <option value="like asce">like asce</option>
      <option value="time desc">time desc</option>
      <option value="time asce">time asce</option>
      <option value="nomal">nomal</option>
    </select>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'search-input',
  props: {
    keyWord: {
      type: String,
    },
    sortBy: {
      type: String,
    },
    sizeSetting: {
      type: Number,
    },
    layMiddle: {
      type: Boolean,
    },
    isFetching: {
      type: Boolean,
    },
  },
  computed: {
    _keyWord: {
      get() {
        return this.keyWord
      },
      set(val) {
        this.$emit('update:keyWord', val)
      },
    },
    _sizeSetting: {
      get() {
        return this.sizeSetting
      },
      set(val) {
        this.$emit('update:sizeSetting', val)
      },
    },
    _sortBy: {
      get() {
        return this.sortBy
      },
      set(val) {
        this.$emit('update:sortBy', val)
      },
    },
  },
  methods: {
    search() {
      if (this.isFetching) {
        return
      }
      this.$emit('search')
    },
  }
})
</script>

<style lang="scss">
.search-input {
  height: 50px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background-color: #fff;
  z-index: 999;
  top: 0;
  transition: top .3s;

  &.layMiddle {
    top: 30%;
    transform: translateY(-50%);

    #juejinLogo {
      width: 100px;
      height: 60px;
    }
  }

  .keyword {
    border: 1px solid #e6edf4;
    border-radius: 3px;
    background-color: #f1f5fa;
    width: 200px;
    height: 30px;
    padding: 1em;
    box-sizing: border-box;
    color: #333;
    outline: none;
    transition: border 0.3s;
    margin-left: 20px;
    margin-right: 30px;

    &:focus {
      border: 1px solid #006cff;
    }
  }

  .search-btn {
    width: 100px;
    height: 30px;
    text-align: center;
    background-color: #006cff;
    color: #fff;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 13px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }

  .sizeSetting {
    width: 50px;
    height: 28px;
    outline: none;
    color: #006cff;
    border: 1px solid #006cff;
    border-radius: 5px 0 0 5px;
    text-align: center;
  }

  .sort {
    width: 100px;
    height: 30px;
    color: #006cff;
    border: 1px solid #006cff;
    border-radius: 0 5px 5px 0;
    border-left: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
  }
}

#juejinLogo {
  width: 50px;
  height: 30px;
  cursor: pointer;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjY0cHgiIGhlaWdodD0iNDBweCIgdmlld0JveD0iMCAwIDY0IDQwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IHNrZXRjaHRvb2wgMy43LjEgKDI4MjE1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT4wRTY2M0JBQi1CQ0IxLTQyNkItOUI1NC05MTlEQjk2NDkxRjQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIHNrZXRjaHRvb2wuPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Imp1ZWppbl9jaHJvbWVfZXh0ZW5zaW9uX2Rlc2lnbmVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjIuMDAwMDAwLCAtMTIuMDAwMDAwKSIgZmlsbD0iIzAwNkNGRiI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC02IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTUyLjExMDc1NjksMzQgTDU1LjQwNzc4NDEsMzQgTDU1LjY5MTI4NDEsMzQgTDU1LjY5MTI4NDEsMzQuMjgzNSBMNTUuNjkxMjg0MSwzNS41Nzc1ODc3IEw1NS42OTEyODQxLDM1Ljg2MTA4NzcgTDU1LjQwNzc4NDEsMzUuODYxMDg3NyBMMzcuMjgzNSwzNS44NjEwODc3IEwzNywzNS44NjEwODc3IEwzNywzNS41Nzc1ODc3IEwzNywzNC4yODM1IEwzNywzNCBMMzcuMjgzNSwzNCBMNDAuMDAyMDczLDM0IEwzOC4wNDgxODYyLDIyLjU4NjQ4ODkgTDM4LDIyLjMwNTAxMjIgTDM4LjI4MTgyMDEsMjIuMjU4ODc2NSBMMzkuNTg1NDI0OCwyMi4wNDU0NjgzIEwzOS44NjMxNjgyLDIyIEwzOS45MTA2NjAzLDIyLjI3NzQwNDUgTDQxLjkxNzU4NzUsMzQgTDQ1LDM0IEw0NSwxOS44NjEwODc3IEwzNi4yODM1LDE5Ljg2MTA4NzcgTDM2LDE5Ljg2MTA4NzcgTDM2LDE5LjU3NzU4NzcgTDM2LDE4LjI4MzUgTDM2LDE4IEwzNi4yODM1LDE4IEw0NSwxOCBMNDUsMTEuODYxMDg3NyBMMzkuMjgzNSwxMS44NjEwODc3IEwzOSwxMS44NjEwODc3IEwzOSwxMS41Nzc1ODc3IEwzOSwxMC4yODM1IEwzOSwxMCBMMzkuMjgzNSwxMCBMNTIuODQzMTE5MiwxMCBMNTMuMTI2NjE5MiwxMCBMNTMuMTI2NjE5MiwxMC4yODM1IEw1My4xMjY2MTkyLDExLjU3NzU4NzcgTDUzLjEyNjYxOTIsMTEuODYxMDg3NyBMNTIuODQzMTE5MiwxMS44NjEwODc3IEw0Ni44ODg2MzA3LDExLjg2MTA4NzcgTDQ2Ljg4ODYzMDcsMTggTDU2LjY3NjU5NywxOCBMNTYuOTYwMDk3LDE4IEw1Ni45NjAwOTcsMTguMjgzNSBMNTYuOTYwMDk3LDE5LjU3NzU4NzcgTDU2Ljk2MDA5NywxOS44NjEwODc3IEw1Ni42NzY1OTcsMTkuODYxMDg3NyBMNDYuODg4NjMwNywxOS44NjEwODc3IEw0Ni44ODg2MzA3LDM0IEw1MC4xOTUyNjI2LDM0IEw1Mi4yMDE0MjI5LDIyLjI3NzQyNTEgTDUyLjI0ODkwMDUsMjIgTDUyLjUyNjY2MTQsMjIuMDQ1NDcxMiBMNTMuODMwMjY2MSwyMi4yNTg4NzkzIEw1NC4xMTIwNjg1LDIyLjMwNTAxMjEgTDU0LjA2MzkwMzEsMjIuNTg2NDc0MSBMNTIuMTEwNzU2OSwzNCBaIE0yNS42NDQ1OTMxLDMzLjM5NDAwMyBMMjUuNjQ0NTkzMSwyNC4yODMxODQ1IEwyOS45ODUyNDM2LDI0LjI4MzE4NDUgTDMwLjI2ODc0MzYsMjQuMjgzMTg0NSBMMzAuMjY4NzQzNiwyMy45OTk2ODQ1IEwzMC4yNjg3NDM2LDE0LjcyMzY1MDkgTDMwLjI2ODc0MzYsMTQuNDQwMTUwOSBMMjkuOTg1MjQzNiwxNC40NDAxNTA5IEwyOC42NjM2MTMsMTQuNDQwMTUwOSBMMjguMzgwMTEzLDE0LjQ0MDE1MDkgTDI4LjM4MDExMywxNC43MjM2NTA5IEwyOC4zODAxMTMsMjIuNDIyMDk2OCBMMjUuNjQ0NTkzMSwyMi40MjIwOTY4IEwyNS42NDQ1OTMxLDE0LjE0MzE5NjMgTDI1LjY0NDU5MzEsMTMuODU5Njk2MyBMMjUuMzYxMDkzMSwxMy44NTk2OTYzIEwyNC4wMzk0NjI0LDEzLjg1OTY5NjMgTDIzLjc1NTk2MjQsMTMuODU5Njk2MyBMMjMuNzU1OTYyNCwxNC4xNDMxOTYzIEwyMy43NTU5NjI0LDIyLjQyMjA5NjggTDIxLjA2MzIxMzMsMjIuNDIyMDk2OCBMMjEuMDYzMjEzMywxNC43MjM2NTA5IEwyMS4wNjMyMTMzLDE0LjQ0MDE1MDkgTDIwLjc3OTcxMzMsMTQuNDQwMTUwOSBMMTkuNDU3MjYzMiwxNC40NDAxNTA5IEwxOS4xNzM3NjMyLDE0LjQ0MDE1MDkgTDE5LjE3Mzc2MzIsMTQuNzIzNjUwOSBMMTkuMTczNzYzMiwyMy45OTk2ODQ1IEwxOS4xNzM3NjMyLDI0LjI4MzE4NDUgTDE5LjQ1NzI2MzIsMjQuMjgzMTg0NSBMMjMuNzU1OTYyNCwyNC4yODMxODQ1IEwyMy43NTU5NjI0LDMzLjM5NDAwMyBMMjEuMDYzMjEzMywzMy4zOTQwMDMgTDIxLjA2MzIxMzMsMjUuODE3NTA0NyBMMjEuMDYzMjEzMywyNS41MzQwMDQ3IEwyMC43Nzk3MTMzLDI1LjUzNDAwNDcgTDE5LjQ1NzI2MzIsMjUuNTM0MDA0NyBMMTkuMTczNzYzMiwyNS41MzQwMDQ3IEwxOS4xNzM3NjMyLDI1LjgxNzUwNDcgTDE5LjE3Mzc2MzIsMzQuOTcxNTkwNyBMMTkuMTczNzYzMiwzNS4yNTUwOTA3IEwxOS40NTcyNjMyLDM1LjI1NTA5MDcgTDI5Ljk4NTI0MzYsMzUuMjU1MDkwNyBMMzAuMjY4NzQzNiwzNS4yNTUwOTA3IEwzMC4yNjg3NDM2LDM0Ljk3MTU5MDcgTDMwLjI2ODc0MzYsMjUuODE3NTA0NyBMMzAuMjY4NzQzNiwyNS41MzQwMDQ3IEwyOS45ODUyNDM2LDI1LjUzNDAwNDcgTDI4LjY2MzYxMywyNS41MzQwMDQ3IEwyOC4zODAxMTMsMjUuNTM0MDA0NyBMMjguMzgwMTEzLDI1LjgxNzUwNDcgTDI4LjM4MDExMywzMy4zOTQwMDMgTDI1LjY0NDU5MzEsMzMuMzk0MDAzIFogTTkuODc1MDcxNDQsMjQuMjg0MzgxMSBMOC41Mzk1NTMzMywyNS41OTUwMzM3IEw4LjM0MTQ2NjYxLDI1Ljc4OTQzMjMgTDguMTQyOTA0NjUsMjUuNTk1NTE5MSBMNy4yMDcxOTM0MiwyNC42ODE3MTUxIEw3LDI0LjQ3OTM3MjYgTDcuMjA2NzExMDQsMjQuMjc2NTM3MyBMOS44NzUwNzE0NCwyMS42NTgyMDc1IEw5Ljg3NTA3MTQ0LDEwLjc5NjE5MTEgTDcuODI3NTY4OTIsMTAuNzk2MTkxMSBMNy41NDQwNjg5MiwxMC43OTYxOTExIEw3LjU0NDA2ODkyLDEwLjUxMjY5MTEgTDcuNTQ0MDY4OTIsOS4yMTg2MDMzOSBMNy41NDQwNjg5Miw4LjkzNTEwMzM5IEw3LjgyNzU2ODkyLDguOTM1MTAzMzkgTDkuODc1MDcxNDQsOC45MzUxMDMzOSBMOS44NzUwNzE0NCw0LjI4Mzc0MDY5IEw5Ljg3NTA3MTQ0LDQuMDAwMjQwNjkgTDEwLjE1ODU3MTQsNC4wMDAyNDA2OSBMMTEuNDgxMDIxNSw0LjAwMDI0MDY5IEwxMS43NjQ1MjE1LDQuMDAwMjQwNjkgTDExLjc2NDUyMTUsNC4yODM3NDA2OSBMMTEuNzY0NTIxNSw4LjkzNTEwMzM5IEwxNC4yMDcxMjAzLDguOTM1MTAzMzkgTDE0LjQ5MDYyMDMsOC45MzUxMDMzOSBMMTQuNDkwNjIwMyw5LjIxODYwMzM5IEwxNC40OTA2MjAzLDEwLjUxMjY5MTEgTDE0LjQ5MDYyMDMsMTAuNzk2MTkxMSBMMTQuMjA3MTIwMywxMC43OTYxOTExIEwxMS43NjQ1MjE1LDEwLjc5NjE5MTEgTDExLjc2NDUyMTUsMTkuODA0MTgzOSBMMTMuMzQ3MDA4NywxOC4yNTEzNjc2IEwxMy41NDUxODIsMTguMDU2OTEgTDEzLjc0MzczMjcsMTguMjUwOTgyMSBMMTQuNjc4NjI0NiwxOS4xNjQ3ODYxIEwxNC44ODU2MjQ5LDE5LjM2NzExNzIgTDE0LjY3OTAzMTcsMTkuNTY5ODY0IEwxMS43NjQ1MjE1LDIyLjQzMDExIEwxMS43NjQ1MjE1LDI2LjQ1MDkwOTcgQzExLjc2NDUyMTUsMjguNTAzMzkxNyAxMS40NDYwNjA5LDMwLjQ2OTA5MzkgMTAuOTEyMjQ0NiwzMi4yODQ5NjQ4IEMxMC41ODQ2Mjk4LDMzLjM5OTQwNDUgMTAuMjU3MzAzLDM0LjIxMDgwMTkgMTAuMDAxMDk5NiwzNC43MzMxNzk5IEw5LjcxMTg2NDgzLDM1LjMxNDgzNzQgTDkuNTg3ODE1NTEsMzUuNTY0MzAzMyBMOS4zMzYyMjc2LDM1LjQ0NDYxNjIgTDguMTQ4OTcyMjgsMzQuODc5ODA2NiBMNy44ODkzNTEzMywzNC43NTYyOTc5IEw4LjAxNjQ4NzAzLDM0LjQ5ODQzMzcgTDguMzAzNzg0NTQsMzMuOTE1NzI1MiBDOC4zNDUxMDU4NywzMy44MzI3ODE4IDguNDQwMTIxMDMsMzMuNjE5ODE1MyA4LjU1MTM4MDQsMzMuMzQxNTkzMSBDOC43MzU5Mjc1LDMyLjg4MDEwMjkgOC45MjAzMDkzNSwzMi4zNTIyNTk5IDkuMDkyMTg0MDksMzEuNzY2OTE0MiBDOS41ODE3MzE0NywzMC4wOTk2ODU3IDkuODc1MDcxNDQsMjguMzA0NTkyNyA5Ljg3NTA3MTQ0LDI2LjQ1MDkwOTcgTDkuODc1MDcxNDQsMjQuMjg0MzgxMSBaIE0xNS45MTg5ODY4LDM1LjQyMDIwNjcgTDE1Ljk3NTkxNDYsMzUuMTQ0NjM1IEwxNi4xMDcwMTI1LDM0LjUxMDAyNjYgQzE2Ljg5NTIyODksMzAuNjk3MzE2OCAxNy4xOTA4NzY0LDIyLjQxOTQ1NTggMTcuMTU2NzQwMiwxMi4zMzg3NDY5IEwzMC43OTc0Nzc4LDEyLjMzODc0NjkgTDMwLjc5NzQ3NzgsNCBMMTUuNDU2NTY1Miw0IEwxNS4xNjY2Njk4LDQgTDE1LjE3MzEzNTcsNC4yODk4MjMyIEwxNS4xODc4ODQyLDQuOTUwOTA3MDYgQzE1LjIwMTc3NTcsNS41ODExMzMyMSAxNS4yMjQzOTA3LDYuOTc3NTIzNjQgMTUuMjQxMTUwMyw4LjY1NTUzMjE2IEMxNS4yNjg3NTE1LDExLjQxOTAwODYgMTUuMjc0MTE2MywxNC4yODMxNzAzIDE1LjI0ODE1MTIsMTcuMTAwNjE5NCBDMTUuMTc0MzYxMiwyNS4xMDc1MTA1IDE0Ljg2NjI2MzQsMzEuMTg1NzExMiAxNC4yNTU1MjA2LDM0LjEzODUxODIgTDE0LjEyNTE3MTUsMzQuNzcyNjY2NiBMMTQuMDY3NzIwNSwzNS4wNTIxNjYyIEwxNC4zNDc1ODY1LDM1LjEwNzgwNDkgTDE1LjY0Mjk5NzYsMzUuMzY1MzM4OCBMMTUuOTE4OTg2OCwzNS40MjAyMDY3IFogTTE3LjE1MTAwMDcsMTAuNDc3NjU5MiBMMTcuMDg5NTA3Nyw1Ljg2MTA4NzcyIEwyOC45MDg4NDcyLDUuODYxMDg3NzIgTDI4LjkwODg0NzIsMTAuNDc3NjU5MiBMMTcuMTUxMDAwNywxMC40Nzc2NTkyIFogTTU2LjM2MTIyNzMsMTIuNDE4ODgwMSBMNTYuNTUxODA5NiwxMi4yMTY5MzE3IEw1Ny40NDkwMTA4LDExLjI2NjIyMjUgTDU3LjY0NzY5MTYsMTEuMDU1NjkyNyBMNTcuNDMzMDYzMSwxMC44NjE0NDY5IEw0OS45MzI2MjQ3LDQuMDczMzAyOTUgTDQ5Ljc0MjM4OTUsNCBMNDEuOTA0Mzc0LDQgTDQxLjcxNDEyNzQsNC4wNzMzMTMyOSBMMzQuMjE0NTA4NCwxMC44NjE0NTcyIEwzNCwxMS4wNTU2MTU2IEwzNC4xOTg0ODMzLDExLjI2NjEyODUgTDM1LjA5NDg2NTIsMTIuMjE2ODM3NyBMMzUuMjg1NDMxNCwxMi40MTg5NTM2IEwzNS40OTEzODM1LDEyLjIzMjUzOTkgTDQyLjYxMTYzOCw1Ljg2MTA4NzcyIEw0OS4wMzU5MzI5LDUuODYxMDg3NzIgTDU2LjE1NTM2OCwxMi4yMzI1MjkgTDU2LjM2MTIyNzMsMTIuNDE4ODgwMSBaIiBpZD0iQ29tYmluZWQtU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);
}
</style>
