<template>
<div class="hometop">
    <!-- 这是头部 -->
     <el-row>
            <el-col :span="20">
                        <h1>欢迎您<span>admin</span></h1>
                        <p>会员卡用户管理</p>
                </el-col>
            <el-col :span="4">
              <!-- 这是中间的部分 -->
               <el-row>
                        <el-col :span="9">
                            <div class="headimg">
                              <img width="100%"  src="./user.png" alt="">       
                           </div> 
                           </el-col>
                        <el-col :span="12">
                               <el-dropdown>
                                    <span class="el-dropdown-link">
                                        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>个人信息</el-dropdown-item>
                                        <el-dropdown-item>退出登录</el-dropdown-item>
                                    
                                    </el-dropdown-menu>
                                </el-dropdown>
                        </el-col>
    </el-row>
            </el-col>
    </el-row>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less">
@import "./HomeTop.less";
</style>


