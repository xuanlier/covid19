import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
//初始化 css样式
import "./assets/css/rest.css"

import api from "./api/index"
// 地图图表
import echarts from "./plugins/echarts"
//中国
import "echarts/map/js/china.js"
import "echarts/map/js/world.js"

//全国疫情图表统计   轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'

import "./plugins/vant"

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

// // 引入中国地图
// import "../node_modules/echarts/map/js/china"
// //引入世界地图
// import "../node_modules/echarts/map/js/world"

// 引入echarts 
// import echarts from 'echarts';
// Vue.prototype.$echarts = echarts;

Vue.use(echarts)
Vue.prototype.$api=api  //挂载原型上
Vue.config.productionTip = false
// 定义一个过滤器
Vue.filter("time",function(value){
  console.log(value)
  let h =new Date
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

