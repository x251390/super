<template>
<div class="account-add">
  <!-- 这是面板 -->
        <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>添加管理员账号</span>
                        
                    </div>
                    <div  class="text item">
                      <!-- 这是添加账号 -->
                         <el-form :model="accountaddForm" status-icon :rules="rules2" ref="accountaddForm" label-width="100px" class="demo-ruleForm">
                 <el-form-item label="用户名" prop="user">
                          <el-input type="text" v-model="accountaddForm.user"  autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                          <el-input type="text" v-model="accountaddForm.pass" autocomplete="off" ></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                         <el-input type="text" v-model="accountaddForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
             <!-- 这是下拉框 -->
                  <el-form-item label="选择用户组" prop="userGroup">
                                <el-select v-model="accountaddForm.userGroup" placeholder="请选择用户组">
                                <el-option label="普通会员" value="shanghai"></el-option>
                                <el-option label="超级会员" value="beijing"></el-option>
                                </el-select>
                  </el-form-item>



                <el-form-item >
                        <el-button type="primary" @click="submitForm()">提交</el-button>
                        <el-button @click="resetForm()">重置</el-button>
                </el-form-item>
         </el-form>


                    </div>
      </el-card>
</div>
</template>

<script>
// 这是引入正则验证
import { passwordReg } from "@/utils/validator";
export default {
  data() {
    const password = (rule, value, callback) => {
      //    进行非空验证
      if (value === "") {
        callback(new Error("对不起请输入密码"));
      } else if (!passwordReg(value)) {
        callback(new Error("请输入字母开头的3到6位字符"));
      } else {
        if (this.accountaddForm.checkPass !== "") {
          // 如果确认密码不为空
          // 触发一致性验证
          this.$refs.accountaddForm.validateField("checkPass");
        }
        callback(); // 成功回调
      }
    };
    //    验证密码
    const validatePass2 = (rule, value, callback) => {
      //    进行非空验证
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.accountaddForm.checkPass) {
        callback(new Error("两次密码不一致"));
      } else {
        callback();
      }
    };

    return {
      accountaddForm: {
        user: "",
        pass: "",
        checkPass: "",
        region: ""
      },
      rules2: {
        user: [
          // 非空验证
          { required: true, message: "必须输入用户名", trigger: "blur" },
          //    长度验证
          { min: 3, max: 6, message: "请输入在3到6位用户名", trigger: "blur" }
        ],
        pass: [{ required: true, validator: password, trigger: "blur" }],
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" }
        ],
        userGroup: [
          { required: true, message: "请选择用户组", trigger: "change" }
        ]
      }
    };
  },
  methods:{
    // 这是提交按钮
    submitForm(){
             this.$refs.accountaddForm.validate(aa => {
                // validate 这是表单的一种验证方法
                // 如果所有前端验证都通过 valid就是true 否则就是false
                if (aa) {
                    // 提交数据给后端
                    let params = {
                        pass: this.accountaddForm.pass,
                        user: this.accountaddForm.user,
                        region: this.accountaddForm.region
                        
                    }
                    alert('登录成功!')
                    
                    // 路由跳转
                    // this.$router.push('/home');
                    this.$router.push("/home/accountmanage")
                } else {
                    console.log('前端验证不通过，不允许提交！')
                    return
                }
            })
    },
    // 这是重置按钮
    resetForm(){
       this.$refs.accountaddForm.resetFields()   
    }
    }

}
</script>
<style lang="less">
@import "./accountadd.less";
</style>