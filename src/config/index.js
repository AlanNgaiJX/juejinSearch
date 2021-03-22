/*
 * @Author: your name
 * @Date: 2021-03-22 23:45:26
 * @LastEditTime: 2021-03-23 00:51:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /juejinsearch/src/config/index.js
 */
const onlineHost = 'http://18.163.192.144:9001/searchServer'
const localHost = 'http://127.0.0.1:1997'
// const localHost = 'http://18.163.192.144:9001/searchServer'

const localTags = ['localhost', '192.168', '127.0.0.1', '172.20.10.3']
const isLocal = localTags.some((item) => {
  return window.location.origin.includes(item)
})
const host = isLocal ? localHost : onlineHost

const config = {
  host,
}
export default config
