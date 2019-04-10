<template>
<div class="passwordmodify">
  <!-- 这是面板 -->
        <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>修改账号密码</span>
                        
                    </div>
                    <div  class="text item">
                      <!-- 这是添加账号 -->
                         <el-form :model="passwordmodify" status-icon :rules="rules2" ref="passwordmodify" label-width="100px" class="demo-ruleForm">
                 <el-form-item label="原密码" prop="user">
                          <el-input type="text" v-model="passwordmodify.user"  autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="pass">
                          <el-input type="text" v-model="passwordmodify.pass" autocomplete="off" ></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                         <el-input type="text" v-model="passwordmodify.checkPass" autocomplete="off"></el-input>
                </el-form-item>
    



                <el-form-item >
                        <el-button type="primary" @click="updateForm()">修改</el-button>
                     
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
        if (this.passwordmodify.checkPass !== "") {
          // 如果确认密码不为空
          // 触发一致性验证
          this.$refs.passwordmodify.validateField("checkPass");
        }
        callback(); // 成功回调
      }
    };
    //    验证密码
    const validatePass2 = (rule, value, callback) => {
      //    进行非空验证
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.passwordmodify.checkPass) {
        callback(new Error("两次密码不一致"));
      } else {
        callback();
      }
    };

    return {
      passwordmodify: {
        user: "",
        pass: "",
        checkPass: "",
   
      },
      rules2: {
        user: [
          // 非空验证
          { required: true, message: "必须输入密码", trigger: "blur" },
          //    长度验证
          { min: 3, max: 6, message: "请输入在3到6位密码", trigger: "blur" }
        ],
        pass: [{ required: true, validator: password, trigger: "blur" }],
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" }
        ]
       
      }
    };
  },
  methods:{
    // 这是提交按钮
    updateForm(){
             this.$refs.passwordmodify.validate(aa => {
                // validate 这是表单的一种验证方法
                // 如果所有前端验证都通过 valid就是true 否则就是false
                if (aa) {
                    // 提交数据给后端
                    let params = {
                        pass: this.passwordmodify.pass,
                        user: this.passwordmodify.user,
                        checkPass: this.passwordmodify.checkPass
                        
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
    }
    }

}
</script>
<style lang="less">
@import "./passwordmodify.less";
</style>