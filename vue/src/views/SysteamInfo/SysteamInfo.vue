<template>
 <div class="systeaminfo">
    <!--这是整体卡片-->
        <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>商品管理</span>
                </div>
                   <!-- 这是头部的分类 -->
                   <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                      <el-row>
                       <el-col :span="14">
                           

                            <el-row>
                             <el-col :span="5">
                                <el-form-item  prop="region">
                                   <el-select placeholder="-- 选择分类 --">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                   </el-select>
                               </el-form-item> </el-col>
                               <el-col :span="11"> <!-- 这是关键字 -->
                                  <el-form-item label="关键字：" prop="name">
                                      <el-input ></el-input>
                                     
                     </el-form-item></el-col>
                            <el-col :span="8">    <!-- 这是查询 -->
                              <el-form-item>
                                   <span>(商品名称，条形码)</span>
                                <el-button type="primary" @click="submitForm()">查询</el-button>
                               
                               </el-form-item>
                           </el-col>

                      </el-row>

     
                         </el-col>
                      </el-row>
                  </el-form>

                   <!-- 这是下面的表格 -->
                    <el-table
                            ref="multipleTable"
                            :data="tableData3"
                            tooltip-effect="dark"
                            style="width: 100%"
                            @selection-change="handleSelectionChange">
                            <el-table-column
                            type="selection"
                            width="55">

                            </el-table-column>
                            <el-table-column
                              label="商品条形码"
                               width="120">
                            <template slot-scope="scope">{{ scope.row.date }}</template>
                            </el-table-column>
                            <el-table-column
                            prop="name"
                            label="商品名称"
                            width="150">
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="所属名称"
                                 show-overflow-tooltip
                                 >
                            </el-table-column>
                            
                            <el-table-column
                                prop="address"
                                label="售价"
                                 show-overflow-tooltip
                                 >
                            </el-table-column>
                             <el-table-column
                                prop="manage"
                                label="管理"
                                 show-overflow-tooltip
                                 >
                                 <i class="el-icon-edit"></i>
                                   <i class=" el-icon-circle-close"></i>
                                
                            </el-table-column>
                         
                            
                   </el-table>
                  <div class="block">
                        <span class="demonstration">完整功能</span>
                        <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage4"
                        :page-sizes="[100, 200, 300, 400]"
                        :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="400">
                        </el-pagination>
    </div>
               
     </el-card>

</div>
</template>

<script>
export default {
     data() {
      return {
        ruleForm:{

        },

        tableData3: [{
          date: '2016-05-03',
          name: '我的优乐美',
          address: ' 所属种类',
          price:'2:00'
     

        }, {
          date: '2016-05-02',
          name: '海飞丝去屑洗发水',
          address: '海飞丝 ',
          price:'2:00'
         
        }],
        multipleSelection: []
      }
    },
};
</script>
<style lang="less">
@import "./systeaminfo.less";
</style>