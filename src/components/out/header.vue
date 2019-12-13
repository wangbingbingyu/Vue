<template>
  <header class>
    <div class="header-content wrapper clearfix">
      <img class="logo" src="../../assets/img/logo.jpg" alt />
      <div class="header-content-right" @mouseenter="change(1)" @mouseleave="change(0)">
        <img src="../../assets/img/header12.png" alt />
        <span class="name">{{name}}</span>
        <i class="iconfont icon-xiala"></i>
        <router-link to="/login">
          <p class="quit" :style="{display:flag===0?'none':'block'}">退出登录</p>
        </router-link>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      name: "罗密欧",
      flag: 0
    };
  },
  methods: {
    change(val) {
      this.flag = val;
    }
  }
};
</script>

<style lang="less" scoped>
header {
  background-color: #333333;
  .header-content {
    .logo {
      padding: 4px 0;
      width: 140px;
      float: left;
    }
    .header-content-right {
      cursor: pointer;
      position: relative;
      margin-top: 6px;
      padding-right: 10px;
      line-height: 40px;
      float: right;
      &:hover .icon-xiala {
        transform: rotate(180deg);
      }
      .name {
        color: white;
        padding: 0 10px;
      }
      i {
        color: white;
      }
      img {
        vertical-align: middle;
        width: 30px;
        border-radius: 50%;
      }
      .quit {
        position: absolute;
        background-color: white;
        width: 120px;
        border: 1px solid #aaaaaa;
        line-height: 30px;
        text-align: center;
      }
    }
  }
}
</style>