<template>
<div class="login">
   
   <div class="form">
       <!-- 这是标题 -->
        <h3>华联超市后台管理系统</h3>
        <!-- 这是引入的表单 -->
      <el-form :model="loginForm" status-icon :rules="rules2" ref="loginForm" label-width="100px" class="demo-ruleForm">
                 <el-form-item label="用户名" prop="user">
                          <el-input type="text" v-model="loginForm.user"  autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                          <el-input type="text" v-model="loginForm.pass" autocomplete="off" ></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                         <el-input type="text" v-model="loginForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
             
                <el-form-item>
                        <el-button type="primary" @click="submitForm()">提交</el-button>
                        <el-button @click="resetForm()">重置</el-button>
                </el-form-item>
         </el-form> 
   </div>
</div>
</template>

<script>
// 这是引入自己创建的工具函数
// 这里的@表示 src目录
import { passwordReg } from "@/utils/validator";
// 引入函数
// import { passwordReg } form "@/utils/validator"
export default {
  data() {
    // 这是密码验证
          const validatePass = (rule, value, callback) => {
            // rules: 验证规则对象 value：用户输入的值 callback: 回调函数
            if (value === "") {
              // 非空验证
              callback(new Error("密码不能为空")); // 错误提示
            } else if (!passwordReg(value)) {
              callback(
                new Error("以字母开头，长度在3~6之间，只能包含字符、数字和下划线")
              ); // 错误提示
            } else {
              if (this.loginForm.checkPass !== "") {
                // 如果确认密码不为空
                // 触发一致性验证
                this.$refs.loginForm.validateField("checkPass");
              }
              callback(); // 成功回调
            }
          };
          // 这是确认密码
          const validatePass2 = (rule, value, callback) => {
            // rule是规则  value 这是传入的值  callback这是回调函数
            //  这是再次确认密码
            if (value === "") {
              callback(new Error("确认密码不能为空")); // 输出错误提示信息
            } else if (value !== this.loginForm.pass) {
              callback(new Error("两次密码不一致")); // 输出错误提示信息
            } else {
              callback(); // 成功 （绿色勾勾）
            }
          };

    return {
      // 这是获取到的数据
          loginForm: {
            user: "",
            pass: "",
            checkPass: ""
          },
      //    这个是验证规则
          rules2: {
            user: [
              { required: true, message: "请输入用户名", trigger: "blur" },
              // {required"true表示必须输入,message 表示这是提示信息 trigger 这是什么时候触发事件}
              { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
              // min 表示最小输入长度 max表示输入的最大长度 trigger 表示什么时候触发事件 trigger
            ],
            pass: [{ required: true, validator: validatePass, trigger: "blur" }],
            // validator 这是表单自定义验证
            checkPass: [
              { required: true, validator: validatePass2, trigger: "blur" }
            ]
          }
        };
  },
  methods:{
    //   这是提交按钮
      submitForm(){
           this.$refs.loginForm.validate(aa => {
                // validate 这是表单的一种验证方法
                // 如果所有前端验证都通过 valid就是true 否则就是false
                if (aa) {
                    // 提交数据给后端
                    let params = {
                        pass: this.loginForm.pass,
                        checkPass: this.loginForm.checkPass
                    }
                    alert('登录成功!')
                    
                    // 路由跳转
                    // this.$router.push('/home');
                    this.$router.push("/home")
                } else {
                    console.log('前端验证不通过，不允许提交！')
                    return
                }
            })
           
      },
    //   这是重置按钮的效果
      resetForm(){
      this.$refs.loginForm.resetFields()
      }
  }
};
</script>
<style lang="less">
@import "./login.less";
</style>

