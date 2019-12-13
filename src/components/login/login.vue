<template>
  <div class="login">
    <header class="wrapper clearfix">
      <div class="logo">
        <img src="../../assets/img/esite-logo.png" alt="网站logo" />
      </div>
      <div class="login">
        <router-link :to="statice[val]">
          <span class="handel">登录</span>
        </router-link>
        <span>|</span>
        <router-link :to="statics[val]">
          <span class="handel">注册</span>
        </router-link>
      </div>
    </header>
    <section class="section-wrapper login-pic clearfix">
      <img class="left" src="../../assets/img/login.jpg" alt />
      <div class="tab">
        <router-link to="/login/studentLogin">
          <div @click="change(0)" class="the-first-tab haveHand">
            <div class="thetablecell" :class="val == 0 ? 'theactive': ''">
              <span class="iconfont icon-xuesheng"></span>
              <p>我是学生</p>
            </div>
          </div>
        </router-link>
        <router-link to="/login/teacherLogin">
          <div @click="change(1)" class="the-center-tab haveHand">
            <div class="thetablecell" :class="val == 1 ? 'theactive': ''">
              <span class="iconfont icon-HR"></span>
              <p>我是讲师</p>
            </div>
          </div>
        </router-link>
        <router-link to="/login/hrLogin">
          <div @click="change(2)" class="the-last-tab haveHand">
            <div class="thetablecell" :class="val == 2 ? 'theactive': ''">
              <span class="iconfont icon-renshixitong"></span>
              <p>我是HR</p>
            </div>
          </div>
        </router-link>
      </div>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      statice: ["/login/studentLogin", "/login/teacherLogin", "/login/hrLogin"],
      statics: ["/login/studentReg", "/login/teacherReg", "/login/hrReg"],
      val: 1,
      isActives: 1
    };
  },
  methods: {
    change(val) {
      this.val = val;
    }
  },
  mounted() {
    // window.console.log(this.$route.path.split("/"));
    if (this.$route.path.split("/")[2] === "studentLogin") {
      this.val = 0;
    }
    if (this.$route.path.split("/")[2] === "teacherLogin") {
      this.val = 1;
    }
    if (this.$route.path.split("/")[2] === "hrLogin") { 
      this.val = 2;
    }
   
  },
  watch: {
    "$route.path": function(newPath) {
      if (newPath.split("/")[2] === "studentLogin") {
        this.val = 0;
      }
      if (newPath.split("/")[2] === "teacherLogin") {
        this.val = 1;
      }
      if (newPath.split("/")[2] === "hrLogin") {
        this.val = 2;
      }
    }
  }
};
</script>

<style lang="less">
header {
  .logo {
    float: left;
    margin-top: 18px;
  }
  .login {
    float: right;
    padding-top: 34px;
    padding-right: 28px;
    .handel {
      color: #999;
      padding: 0 12px;
      color: #999;
    }
  }
}
.login-pic {
  overflow: hidden;
  min-width: 1200px;
  position: relative;
  .left {
    float: left;
    width: 510px;
    height: 810px;
  }
  .tab {
    float: left;
    width: 110px;
    height: 457px;
    background-color: #202421;
    margin-top: 140px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    overflow: hidden;
    position: absolute;
    left: 400px;
    span {
      font-size: 30px;
      color: #fff;
    }
    p {
      color: #fff;
    }

    .thetablecell {
      display: table-cell;
      text-align: center;
      vertical-align: middle;
      height: 115px;
      width: 115px;
    }
    .the-first-tab {
      width: 110px;
    }
    .the-center-tab {
      width: 110px;
    }
    .the-last-tab {
      width: 110px;
    }
    .theactive {
      height: 230px;
      background-color: #adc700;
    }
  }
}
</style>