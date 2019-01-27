import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import fastClick from 'fastclick' 部分移动端设备click事件延迟300ms执行
import './assets/styles/reset.css'
import '../public/style.css'
import './assets/styles/border.css'// 一像素边框解决

Vue.config.productionTip = false
// fastClick.attach(document.body)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
