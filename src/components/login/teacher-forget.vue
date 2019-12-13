<template>
  <div class="teacher-login clearfix">
    <div class="logine">
      <p class="choices">通过手机验证码登录</p>
      <div class="account">
        <div class="users">
          <input type="text" v-model="form.user" placeholder="手机号" />
          <span class="yzm" @click="getYam">获取验证码</span>
          <span class="error" v-if="errors['form.user']">{{errors['form.user']}}</span>
        </div>
        <div class="code">
          <input type="text" v-model="form.yzm" placeholder="验证码" />
          <span class="error" v-if="errors['form.user']">{{errors['form.yzm']}}</span>
        </div>
        <div class="btn" type="button" @click="login">登陆啦</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      yzm: "slnfklnkdlsnfkldsnlnflk",
      form: {
        user: "",
        yzm: ""
      }
    };
  },
  computed: {
    errors() {
      return this.$vuerify.$errors;
    }
  },
  vuerify: {
    "form.user": {
      test: /^[1][3,4,5,7,8][0-9]{9}$/,
      message: "输入正确的手机号码"
    },
    "form.yzm": {
      test: /\w{4,}/,
      message: "至少 4 位字符"
    }
  },
  methods: {
    getYam() {
      this.yzm = Math.floor(Math.random() * 10000);
      alert(this.yzm);
    },
    login() {
      if (!this.$vuerify.check()) {
        return;
      }
      if (this.yzm != this.form.yzm) {
        alert('验证码错误')
        return;
      }
      this.$router.push("/index");
    }
  }
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
  .logine {
    cursor: pointer;
    .code {
      margin-bottom: 126px;
    }
  }
  .btn {
    cursor: pointer;
  }
}
</style>