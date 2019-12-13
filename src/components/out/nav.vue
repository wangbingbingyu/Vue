<template>
  <nav class="wrapper clearfix">
    <router-link to="/index">
      <span class="nav-title" @click="change">My Center</span>
    </router-link>
    <ul class="clearfix">
      <li
        @click="doing(index)"
        class="nav-item"
        :class="{active:currentIndex === index}"
        :key="item.id"
        v-for="(item,index) in nav"
      >
        <router-link :to="nav[index].url" class="item">{{item.text}}</router-link>
      </li>
    </ul>
    <span class="nav-add" href="#">
      <i class="iconfont icon-jiahao"></i>
      <span class="word">添加课程</span>
    </span>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      type: 0,
      nav: [
        { text: "基本信息", url: "/base" },
        { text: "课程管理", url: "/course" },
        { text: "我的回答", url: "/qa" },
        { text: "我的收入", url: "/salay" }
      ],
      currentIndex: -1,
      url: ""
    };
  },
  methods: {
    doing(index) {
      this.currentIndex = index;
      this.url = this.nav[index].url;
    },
    change() {
      this.currentIndex = -1;
    }
  },
  mounted() {
    if (this.$route.path.split("/")[1] === "index") {
      this.currentIndex = -1;
    }
    if (this.$route.path.split("/")[1] === "base") {
      this.currentIndex = 0;
    }
    if (this.$route.path.split("/")[1] === "course") {
      this.currentIndex = 1;
    }
    if (this.$route.path.split("/")[1] === "qa") {
      this.currentIndex = 2;
    }
    if (this.$route.path.split("/")[1] === "salay") {
      this.currentIndex = 3;
    }
  },
  watch: {
    "$route.path": function(newPath) {
      if (newPath.split("/")[1] === "index") {
        this.currentIndex = -1;
      }
      if (newPath.split("/")[1] === "base") {
        this.currentIndex = 0;
      }
      if (newPath.split("/")[1] === "course") {
        this.currentIndex = 1;
      }
      if (newPath.split("/")[1] === "qa") {
        this.currentIndex = 2;
      }
      if (newPath.split("/")[1] === "salay") {
        this.currentIndex = 3;
      }
    }
  }
};
</script>

<style lang="less">
nav {
  .nav-title {
    line-height: 90px;
    float: left;
    color: #00a1ff;
    font-size: 24px;
    margin-left: 95px;
    cursor: pointer;
  }
  ul {
    float: left;
  }
  .nav-item {
    cursor: pointer;
    margin-top: 36px;
    float: left;
    margin-left: 85px;
    .item{
      display: inline-block;
      height: 43px;
    }
  }
  .active {
    border-bottom: 3px solid #00a1ff;
  }
  .nav-add {
    float: right;
    width: 160px;
    border: 2px solid #f4f4f4;
    line-height: 30px;
    margin: 28px;
    text-align: center;
    cursor: pointer;
    .iconfont {
      color: #00a1ff;
      margin-right: 5px;
    }
  }
}
</style>