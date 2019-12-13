<template>
  <div class="base-content-left">
    <div class="imgout">
      <img src="../../assets/img/header11.png" alt />
      <span class="editors">编辑</span>
    </div>
    <router-link to="/base/myinform">
      <p class="myinform item" @click="handel(0)" :class="{active:type === 0}">
        <i class="iconfont icon-wodedangxuan"></i>
        <span>我的信息</span>
      </p>
    </router-link>
    <router-link to="/base/attestation">
      <p class="attestation item" @click="handel(1)" :class="{active:type === 1}">
        <i class="iconfont icon-renzheng"></i>
        <span>认证信息</span>
      </p>
    </router-link>
    <router-link to="/base/pass">
      <p class="pass item" @click="handel(2)" :class="{active:type === 2}">
        <i class="iconfont icon-mimaguanli"></i>
        <span>密码管理</span>
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 0
    };
  },
  methods: {
    handel(val) {
      this.type = val;
    }
  },
  mounted() {
    if (this.$route.path.split("/")[2] === "myinform") {
      this.type = 0;
    }
    if (this.$route.path.split("/")[2] === "attestation") {
      this.type = 1;
    }
    if (this.$route.path.split("/")[2] === "pass") {
      this.type = 2;
    }
  },
  watch: {
    "$route.path": function(newPath) {
      if (newPath.split("/")[2] === "myinform") {
        this.type = 0;
      }
      if (newPath.split("/")[2] === "attestation") {
        this.type = 1;
      }
      if (newPath.split("/")[2] === "pass") {
        this.type = 2;
      }
    }
  }
};
</script>

<style lang="less">
.base-content-left {
  float: left;
  overflow: hidden;
  background-color: white;
  width: 280px;
  text-align: center;
  .item {
    cursor: pointer;
  }
  .active {
    color: #00abff;
  }
  .imgout {
    width: 100px;
    height: 100px;
    margin-top: 50px;
    margin-bottom: 45px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    overflow: hidden;
    .editors{
      text-align: center;
      width: 100px;
      position: absolute;
      background-color: #aaaaaa;
      bottom: 0;
      left: 0;
      height: 30px;
      opacity: 0.7;
    }
  }
  img {
    width: 100px;
  }
  .attestation {
    margin: 32px 0;
  }
  .pass {
    margin-bottom: 260px;
  }
  .iconfont {
    margin-right: 8px;
  }
}
</style>