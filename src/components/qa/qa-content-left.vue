<template>
  <div class="course-content-left">
    <div class="imgout">
      <img src="../../assets/img/header11.png" alt />
      <span class="editors">编辑</span>
    </div>
    <router-link to="/qa/myquestion">
      <p class="myclass item" @click="handel(0)" :class="{active:type === 0}">
        <i class="iconfont icon-tiwen1"></i>
        <span>我的问题</span>
      </p>
    </router-link>
    <router-link to="/qa/myanswer">
      <p class="myactive item" @click="handel(1)" :class="{active:type === 1}">
        <i class="iconfont icon-tiwen"></i>
        <span>我的回答</span>
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
    if (this.$route.path.split("/")[2] === "myquestion") {
      this.type = 0;
    }
    if (this.$route.path.split("/")[2] === "myanswer") {
      this.type = 1;
    }
  },
  watch: {
    "$route.path": function(newPath) {
      if (newPath.split("/")[2] === "myquestion") {
        this.type = 0;
      }
      if (newPath.split("/")[2] === "myanswer") {
        this.type = 1;
      }
    }
  }
};
</script>

<style lang="less">
.course-content-left {
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
  .myclass {
    margin: 32px 0;
  }
  .myactive {
    margin-bottom: 281px;
  }
  .iconfont {
    margin-right: 8px;
  }
}
</style>