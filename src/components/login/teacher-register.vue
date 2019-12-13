<template>
  <div class="teacher-login clearfix">
    <div class="register">
      <p class="choices">通过手机号码注册</p>
      <div class="account">
        <div class="users">
          <input type="text" v-model="form.name" placeholder="手机号" />
          <span class="yzm">获取验证码</span>
        </div>
        <div class="code">
          <input type="text" placeholder="验证码" />
        </div>
        <div class="pass">
          <input type="password" v-model="form.pas" placeholder="密码" />
        </div>
        <router-link to="teacherLogin">
          <div class="btn" type="button" @click="updata">提交注册</div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        pas: ""
      }
    };
  },
  computed: {
    errors() {
      return this.$vuerify.$errors;
    }
  },
  vuerify: {
    "form.name": {
      test: /^[1][3,4,5,7,8][0-9]{9}$/,
      message: "输入正确的手机号码"
    },
    "form.pas": {
      test: /\w{6,}/,
      message: "至少 6 位字符"
    }
  },
  methods: {
    updata(){
       if (!this.$vuerify.check()) {
        // 手动触发校验所有数据
        // window.console.log(this.$vuerify.$errors);
        return;
      }                                                                              
    }
  },
};
</script>
<style lang="less">
.teacher-login {
  margin-top: 141px;
  padding-top: 60px;
  padding-left: 65px;
  width: 530px;
  border: 1px solid #ebebeb;
  position: relative;
  overflow: hidden;
  .choices {
    text-align: center;
    line-height: 40px;
    border-bottom: 2px solid #aaaaaa;
    margin-right: 130px;
  }
  .account {
    width: 410px;
    margin-top: 40px;
    input {
      outline: none;
      line-height: 40px;
      width: 400px;
      border: none;
      border-bottom: 1px solid #d3d3d3;
    }
    .users {
      position: relative;
      .yzm {
        width: 100px;
        position: absolute;
        top: 10px;
        right: 0px;
        color: #adc700;
        cursor: pointer;
      }
    }
    .pass {
      margin-top: 29px;
    }
    .code {
      margin-top: 29px;
    }
    .btn {
      margin-top: 35px;
      text-align: center;
      line-height: 44px;
      background-color: #adc700;
      border-radius: 50px;
      margin-bottom: 30px;
    }
  }
  .logine {
    .code {
      margin-bottom: 126px;
    }
  }
}
</style>