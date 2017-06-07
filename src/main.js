import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index'
import OrderListPage from './pages/orderList.vue'
Vue.use(VueRouter);
Vue.use(VueResource);
let router = new VueRouter({
  mode: 'history', //h5的history模式
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/orderList',
      component: OrderListPage
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  template: '<Layout/>',
  components: {Layout}
})
