/*
 * @LastEditors: donsonwu
 * @Date: 2021-03-30 11:23:36
 * @LastEditTime: 2021-03-30 16:44:40
 * @Descripttion: x
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/subvue/',
    name: 'Home',
    component: Home
  },
  {
    path: '/subvue/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

export default routes
