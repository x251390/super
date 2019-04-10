<template>
<div class="home">
   <el-container>
  <el-aside width="200px">
   <!-- 这是侧边栏 -->
           <!-- 这是自定义组件-->
         <leftNav></leftNav>

 </el-aside>
  <el-container>
    <el-header>
      <!-- 这是自定义组件 -->
      <hometop></hometop>
    </el-header>
    <el-main>
        <router-view></router-view>
   </el-main>
    <el-footer>
      <!-- 这是引入的尾部文件 -->
      <bottom></bottom>
    </el-footer>
  </el-container>
</el-container>
</div>
</template>

<script>
    // 引入组件
    import leftNav from '@/components/LeftNav/LeftNav.vue'
    import hometop from '@/components/HomeTop/HomeTop.vue'
     import bottom from '@/components/bottom/bottom.vue'
    

export default {
    // 注册组件
    components: {  //这是注册组件
    leftNav,
    hometop,
    bottom
  }
}
</script>
<style lang="less">
@import "./home.less";
</style>

