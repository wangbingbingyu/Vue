<template>
  <div class="base-content-right">
    <form action="myinform">
      <div class="name clearfix contents">
        <span class="title">姓名</span>
        <div class="content">
          <input
            type="text"
            :class="{boder:show==='true'}"
            v-model="form.name"
            :readonly="read"
          />
          <span class="error" v-if="errors['form.name']">{{errors['form.name']}}</span>
        </div>
        <p class="clearfix right" @click="change" :class="{show:show==='false'}">
          <i class="iconfont icon-bianji"></i>
          <span class="bianji">编辑</span>
        </p>
      </div>
      <div class="bith clearfix contents">
        <span class="title">出生日期</span>
        <div class="content">
          <input
            type="text"
            readonly
            :class="{boder:show==='true'}"
            v-model="form.birth"
            placeholder="本项不可输入，天写完身份证信息后自动同步出生日期"
          />
        </div>
      </div>
      <div class="sex clearfix contents">
        <span class="title">性别</span>
        <select
          name
          id
          v-model="form.sex"
          :class="{boder:show==='true'}"
          :disabled="read"
        >
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
        <span class="error" v-if="errors['form.sex']">{{errors['form.sex']}}</span>
      </div>
      <div class="mobile clearfix contents">
        <span class="title">手机号</span>
        <div class="content">
          <input
            type="text"
            :class="{boder:show==='true'}"
            v-model="form.mobile"
            :readonly="read"
          />
        </div>
        <p class="yanzheng">
          <i class="iconfont icon-duihao"></i>
          <span class="tongguo">以验证</span>
        </p>
        <div class="yzheng" type="btn" :class="{show:show==='true'}">获取验证码</div>
        <span class="error" v-if="errors['form.mobile']">{{errors['form.mobile']}}</span>
      </div>
      <div class="email clearfix contents">
        <span class="title">邮箱</span>
        <div class="content">
          <input
            type="text"
            :class="{boder:show==='true'}"
            v-model="form.email"
            :readonly="read"
          />
          <span class="error" v-if="errors['form.email']">{{errors['form.email']}}</span>
        </div>
      </div>
      <div class="idcard clearfix contents">
        <span class="title">身份证</span>
        <div class="content">
          <input
            type="text"
            :class="{boder:show==='true'}"
            v-model="form.idcard"
            :readonly="read"
            @blur="changebirth"
          />
          <span class="error" v-if="errors['form.idcard']">{{errors['form.idcard']}}</span>
        </div>
      </div>
      <div class="wexin clearfix contents">
        <span class="title">微信号</span>
        <div class="content">
          <input
            type="text"
            :class="{boder:show==='true'}"
            v-model="form.weixin"
            :readonly="read"
          />
          <span class="error" v-if="errors['form.weixin']">{{errors['form.weixin']}}</span>
        </div>
      </div>
      <div class="qq clearfix contents">
        <span class="title">QQ号</span>
        <div class="content">
          <input
            type="text"
            :class="{boder:show==='true'}"
            v-model="form.qq"
            :readonly="read"
          />
          <span class="error" v-if="errors['form.qq']">{{errors['form.qq']}}</span>
        </div>
      </div>
      <div class="sub clearfix" :class="{show:show==='true'}">
        <router-link to="/base/myinform">
          <span class="define" @click="append">保存信息</span>
        </router-link>
        <span class="break" @click="giveup">取消修改</span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "myinform",
  data() {
    return {
      read: true,
      show: "false",
      form: {
        name: "刘子熙",
        birth: "1990年3月2日",
        sex: "男",
        mobile: "15910578034",
        email: "xuepin@admin.com",
        idcard: "110324199003024357",
        weixin: "13810194417",
        qq: "367722645"
      },
      newobj: {}
    };
  },
  computed: {
    errors() {
      window.console.log(this.$vuerify);
      return this.$vuerify.$errors; // 错误信息会在 $vuerify.$errors 内体现
    }
  },
  vuerify: {
    "form.name": {
      test: /^[\u4e00-\u9fa5]{2,6}$/,
      message: "至少 4 位字符"
    },
    "form.mobile": {
      test: /^[1][3,4,5,7,8][0-9]{9}$/,
      message: "输入正确的手机号码"
    },
    "form.email": {
      test: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
      message: "输入正确的邮箱地址"
    },
    "form.idcard": {
      test: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
      message: "输入正确的身份证"
    },
    "form.weixin": {
      test: /\w{4,}/,
      message: "至少 4 位字符"
    },
    "form.qq": {
      test: /[1-9][0-9]{4,11}/,
      message: "输入正确的qq号码"
    }
  },
  methods: {
    change() {
      this.show = "true";
      this.read = false;
      if(this.form.idcard){
        this.form.birth =
        this.form.idcard.substr(6, 4) +
        "年" +
        this.form.idcard.substr(10, 2) +
        "月" +
        this.form.idcard.substr(12, 2) +
        "日";
      }else{
        this.form.birth ="";
      }
    },
    changebirth() {
      if (this.form.idcard) {
        this.form.birth =
          this.form.idcard.substr(6, 4) +
          "年" +
          this.form.idcard.substr(10, 2) +
          "月" +
          this.form.idcard.substr(12, 2) +
          "日";
      }else{
        this.form.birth ="";
      }
    },
    append() {
      if (!this.$vuerify.check()) {
        // 手动触发校验所有数据
        // window.console.log(this.$vuerify.$errors);
        return;
      }
      this.show = "false";
      this.read = true;
    },
    giveup() {
      this.show = "false";
      this.form = JSON.parse(this.newobj);
    }
  }
};
</script>

<style lang="less">
.base-content-right {
  float: right;
  width: 900px;
  height: 586px;
  background-color: white;
  .contents {
    line-height: 44px;
    margin-bottom: 14px;
    .title {
      float: left;
      margin-left: 60px;
      color: #9d9d9d;
      margin-right: 35px;
    }
    .content {
      font-size: 14px;
      float: left;
    }
    .error {
      color: red;
      margin-left: 10px;
      line-height: 44px;
      font-size: 14px;
    }
    input {
      box-sizing: border-box;
      text-indent: 10px;
      line-height: 42px;
      width: 400px;
      border: none;
      outline: none;
      border-radius: 5px;
    }

    .right {
      display: none;
      cursor: pointer;
      margin-right: 30px;
      float: right;
      color: #00aaff;
      .bianji {
        margin-left: 4px;
      }
    }
    .show {
      display: block;
    }
    .boder {
      border: 1px solid black;
      appearance: menu;
    }
  }
  .name {
    margin-top: 40px;
  }
  .bith {
    .title {
      margin-left: 30px;
    }
  }
  .sex {
    select {
      width: 400px;
      height: 42px;
      text-indent: 10px;
      border: none;
      appearance: none;
    }
  }
  .mobile {
    .title {
      margin-left: 45px;
    }
    input {
      width: 250px;
      border-radius: 5px 0 0 5px;
    }
    .yanzheng {
      float: left;
      position: relative;
      left: -100px;
      color: green;
    }
    .yzheng {
      display: none;
      box-sizing: border-box;
      line-height: 42px;
      text-align: center;
      border: 1px solid black;
      width: 150px;
      float: left;
      margin-left: -65px;
      border-radius: 0 5px 5px 0;
    }
    .show {
      display: block;
    }
  }
  .idcard,
  .wexin {
    .title {
      margin-left: 45px;
    }
  }
  .qq {
    .title {
      margin-left: 50px;
    }
    margin-bottom: 20px;
  }
  .sub {
    display: none;
    margin-bottom: 30px;
    .define {
      cursor: pointer;
      text-align: center;
      box-sizing: border-box;
      float: left;
      margin-left: 128px;
      width: 160px;
      line-height: 44px;
      margin-right: 20px;
      background-color: #00aaff;
      color: white;
      border-radius: 10px;
    }
    .break {
      cursor: pointer;
      text-align: center;
      box-sizing: border-box;
      float: left;
      width: 160px;
      line-height: 44px;
      border: 1px solid black;
      border-radius: 10px;
    }
  }
  .show {
    display: block;
  }
}
</style>
