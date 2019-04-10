import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 在这里需要需要引入element-ui 与其样式  还需要注册
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 注册
Vue.use(ElementUI);
// 引入公用的css
import './assets/css/base.css'



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
