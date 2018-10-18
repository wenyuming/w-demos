// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
// import Vux from 'vux'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import routes from './router'
import config from './config'
import App from './App'
import api from './api'
import { Loading, Toast } from 'vux'
// 以 plugin 形式使用时，请在入口处引入：
import { DatetimePlugin, ToastPlugin, LoadingPlugin  } from 'vux'
Vue.use(DatetimePlugin)
Vue.use(ToastPlugin)
Vue.use(VueRouter)
Vue.use(LoadingPlugin)
// Vue.use(Vux)

// 全局公共方法
Vue.prototype.$api = api
Vue.prototype.config = config
Vue.prototype.Vue = Vue
// Vue.prototype.$vux = Vux

// 全局公用组件
Vue.component('loading', Loading)
Vue.component('toast', Toast)

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  document.body.scrollTop = 0
  //跳转前清除所有订单列表倒计时
  if (window.counts && window.counts.length > 0) {
    window.counts.forEach((e, index) => {
      clearInterval(window.counts[index])
    })
  }
  //跳转前清除所有订单详情倒计时
  if (window.orderCount) {
    clearInterval(window.orderCount)
  }
  next()
  // let bool = localStorage.getItem("isLogin")
  // console.log(bool,'bool')
  // if (bool !== 'true') {
  //   if (to.path === '/login') {
  //     next()
  //   } else {
  //     next({path: '/login'})
  //   }
  //  } else {
  //  	 next()
  //  }
}) 
// sync(store, router)
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app-box')
