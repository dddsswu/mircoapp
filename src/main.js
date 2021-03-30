/*
 * @LastEditors: donsonwu
 * @Date: 2021-03-30 11:20:21
 * @LastEditTime: 2021-03-30 17:10:42
 * @Descripttion: subapp
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start } from 'qiankun'
const getActiveRule = hash => location => location.hash.startsWith(hash)

Vue.config.productionTip = false

registerMicroApps([
  {
    name: 'subvue',
    // entry: '//qiankun.donsonx.cn/',
    entry: process.env.VUE_APP_ENTRY_URL,
    container: '#app2',
    activeRule: getActiveRule('#/subvue')
  }
])

start()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
