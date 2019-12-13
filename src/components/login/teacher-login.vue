<template>
  <div class="teacher-login clearfix">
    <div class="logins">
      <p class="choice">
        <span class="account-login" @click="change(0)" :class="{active:spanactive===0}">账号登录</span>
        <span class="weixin-login" @click="change(1)" :class="{active:spanactive===1}">微信登录</span>
      </p>
      <div class="accounts" v-if="spanactive===0">
        <div class="user">
          <input type="text" v-model="form.name" placeholder="手机号" />
          <span class="error" v-if="errors['form.name']">{{errors['form.name']}}</span>
        </div>
        <div class="pas">
          <input type="password" v-model="form.pas" placeholder="密码" />
          <span class="error" v-if="errors['form.pas']">{{errors['form.pas']}}</span>
        </div>
        <div class="forget clearfix">
          <router-link to="/login/teacherForget">
            <span class="forget">忘记密码</span>
          </router-link>
        </div>
        <div class="btn" type="button" @click="login">登陆啦！</div>
        <p>
          还没有账号 请
          <router-link :to="statics[val]">
            <span>注册</span>
          </router-link>
        </p>
      </div>
      <div class="weixin" v-if="spanactive===1">
        <img src="../../assets/img/erweima.jpg" alt />
        <p class="scan">打开微信 扫描二维码</p>
        <p>
          还没有账号 请
          <router-link :to="statics[val]">
            <span>注册</span>
          </router-link>
        </p>
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
      },
      name: "",
      pas: "",
      val: 1,
      spanactive: 0,
      statics: ["/login/studentReg", "/login/teacherReg", "/login/hrReg"]
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
    change(val) {
      this.spanactive = val;
    },
    login() {
      if (!this.$vuerify.check()) {
        // 手动触发校验所有数据
        // window.console.log(this.$vuerify.$errors);
        return;
      }
      if (this.name == this.form.name && this.pas == this.form.pas) {
        alert("登陆成功");
        this.$router.push("/index");
      } else {
        alert("失败");
      }
    }
  },
  mounted() {
    this.axios.get("/api/getList").then(res => {
      this.name = res.data.name;
      this.pas = res.data.pas;
      // window.console.log(this.name);
      // window.console.log(this.pas);
    });
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
  .choice {
    font-size: 0;
    span {
      font-size: 16px;
      text-align: center;
      width: 200px;
      display: inline-block;
      padding-bottom: 15px;
      border-bottom: 4px solid #eeeeee;
      cursor: pointer;
      &.active {
        border-bottom: 4px solid #adc700;
        color: #adc700;
      }
    }
  }
  .accounts {
    margin-top: 40px;
    input {
      outline: none;
      line-height: 40px;
      width: 400px;
      border: none;
      border-bottom: 1px solid #d3d3d3;
    }
    .error {
      color: red;
      margin-left: -30px;
    }
    .pas {
      margin-top: 50px;
    }
    .forget {
      text-align: right;
      margin-top: 15px;
      margin-right: 10px;
    }
    .btn {
      margin: 0 auto;
      margin-top: 35px;
      text-align: center;
      line-height: 44px;
      background-color: #adc700;
      border-radius: 50px;
      margin-bottom: 30px;
      width: 300px;
      cursor: pointer;
    }
    p {
      text-align: center;
      color: #d3d3d3;
      margin-bottom: 14px;
      span {
        color: #adc700;
      }
    }
  }
  .weixin {
    float: left;
    width: 400px;
    margin-top: 67px;
    text-align: center;
    z-index: 999;
    img {
      width: 160px;
      border: 1px solid #ebebeb;
      margin-bottom: 18px;
    }
    p {
      color: #d3d3d3;
      &.scan {
        margin-bottom: 43px;
      }
      &:last-child {
        margin-bottom: 20px;
      }
      span {
        color: #adc700;
      }
    }
  }
}
</style>