<template>
    <div class="leftnav">
         <!-- :default-active="$route.path"   $route.path这是获取到动态的路由地址-->
<el-menu
    :default-active="$route.path" 
     class="el-menu-vertical-demo"
     active-text-color="rgba(44, 145, 255)"
     unique-opened
      router   
      background-color="rgba( 108, 179, 244)"
      >
     
      <h3>华联超市管理系统</h3>
      <p>
          <span>您好，</span>
          <span>admin</span>
    </p>
    
    <p>管理系统|推出系统</p>
     <!-- 这是分类管理 -->
      <el-submenu :index="(index+1+'')" v-for="(item,index) in menus" :key="index">
                    <template slot="title">
                    <i :class="item.icon"></i>
                    <span>{{item.title}}</span>
                    </template>
                    <el-menu-item-group v-for="(item1,index) in item.children"  :key="index">
                    <el-menu-item :index="item1.path">{{item1.menucontent}}</el-menu-item>
                   
                    </el-menu-item-group>

   
           
            </el-submenu>
            
    </el-menu>
    </div>
</template>
<script>
export default {
    data(){
        return{
               menus:[
                //    这是分类管理
                   {
                       icon:"el-icon-location",
                       title:"分类管理",
                       children:[
                           {
                               path:"",
                               menucontent:"分类管理",
                           },
                           {
                               path:"",
                               menucontent:"添加分类"
                           }
                       ]

                   },
                //    这是商品管理
                       {
                       icon:"el-icon-sold-out",
                       title:"商品管理",
                       children:[
                           {
                               path:"/home/goodsmanage",
                               menucontent:"商品管理",
                           },
                           {
                               path:"/home/goodsadd",
                               menucontent:"添加商品"
                           }
                       ]

                   },
                // 这是进货管理
                {
                       icon:"el-icon-sold-out",
                       title:"进货管理",
                       children:[
                           {
                               path:"/home/stocktotal",
                               menucontent:"库存管理",
                           },
                           {
                               path:"/home/stockadd",
                               menucontent:"添加库存"
                           }
                       ]

                   },
                // 这是出货管理
                  {
                       icon:"el-icon-sold-out",
                       title:"出货管理",
                       children:[
                           {
                               path:"/home/salestotal",
                               menucontent:"销售列表",
                           },
                           {
                               path:"/home/stockadd",
                               menucontent:"商品出库"
                           },
                           {
                               path:"/home/stockadd",
                               menucontent:"商品退货"
                           }
                       ]

                   },
                // 这是统计管理
                // 这是账号管理
                 {
                       icon:"el-icon-printer",
                       title:"账号管理",
                       children:[
                           {
                               path:"/home/accountmanage",
                               menucontent:"账号管理",
                           },
                            {
                               path:"/home/accountadd",
                               menucontent:"添加账号",
                           },
                            {
                               path:"/home/passwordmodify",
                               menucontent:"密码修改",
                           }
                         
                       ]

                   },
                // 这是会员管理
                // 这是系统管理
                 {
                       icon:"el-icon-printer",
                       title:"系统管理",
                       children:[
                           {
                               path:"/home/systeaminfo",
                               menucontent:"系统管理",
                           },
                         
                       ]

                   }
               ]
        }
    }
};
</script>
<style lang="less">
@import "./LeftNav.less";
</style>


