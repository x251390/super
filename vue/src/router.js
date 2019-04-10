import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // 这是home的从定向
    {
      path: '/home',
      // redirect: '/login'
      redirect:"/home/accountadd"
    },
    // 这是从定向
    {
      path: '/',
      // redirect: '/login'
      redirect:"/login"
    },
    // 这是登录
    {
      path: '/login',
      component: () => import('./views/Login/Login.vue'),
    },

    // 这是主页信息
    {
      path: '/home',
      component: () => import('./views/Home/Home.vue'),
      children: [
        {
          // 添加账号
          path: '/home/accountadd',
          component: () => import('./views/AccountAdd/AccountAdd.vue'),
        },
        // 这是账户管理
        {
          path: '/home/accountmanage',
          component: () => import('./views/AccountManage/AccountManage.vue'),
        },
        // 这是添加商品
        {
          path: '/home/goodsadd',
          component: () => import('./views/GoodsAdd/GoodsAdd.vue'),
        },
        // 这是商品管理
        {
          path: '/home/goodsmanage',
          component: () => import('./views/GoodsManage/GoodsManage.vue'),
        },
        // 这是修改密码
        {
          path: '/home/passwordmodify',
          component: () => import('./views/PasswordModify/PasswordModify.vue'),
        },
        // 这是销售列表
        {
          path: '/home/salestotal',
          component: () => import('./views/SalesTotal/SalesTotal.vue'),
        },
        // 这是库存列表
        {
          path: '/home/stocktotal',
          component: () => import('./views/StockTotal/StockTotal.vue'),
        },

        // 这是添加库存
        {
          path:"/home/stockadd",
          component: () => import('./views/StockAdd/StockAdd.vue'),
        },
        // 这是系统信息

        {
          path: '/home/systeaminfo',
          component: () => import('./views/SysteamInfo/SysteamInfo.vue'),
        }
      ]
    }

  ]
})
