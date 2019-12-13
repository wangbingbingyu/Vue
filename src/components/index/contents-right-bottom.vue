<template>
  <div class="section-right-bottom">
    <p class="title clearfix">
      <span class="newstudent">最新学员</span>
      <span class="newadd">一周内新增25位学员</span>
    </p>
    <div class="stu-item" v-for="(item,index) in arr" :key="index">
      <img :src="item.src" alt />
      <p class="name">{{item.name}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        { name: "杨志", src: require("../../assets/img/header7.png") },
        { name: "杨静静", src: require("../../assets/img/header8.png") },
        { name: "吕子秋", src: require("../../assets/img/header9.png") },
        { name: "阎强", src: require("../../assets/img/header10.png") },
        { name: "郭小宜", src: require("../../assets/img/header11.png") }
      ]
    };
  }
};
</script>
<style lang="less">
.section-right-bottom {
  background-color: white;
  overflow: hidden;
  .title {
    margin-top: 35px;
    margin-left: 50px;
    margin-bottom: 45px;
    .newstudent {
      float: left;
      font-size: 18px;
      font-weight: bold;
    }
    .newadd {
      float: right;
      margin-right: 40px;
      color: #9e9e9e;
    }
  }
  .stu-item {
    cursor: pointer;
    margin-left: 50px;
    margin-bottom: 46px;
    display: inline-block;
    img {
      width: 90px;
      display: block;
      margin-bottom: 8px;
    }
    .name {
      text-align: center;
    }
  }
}
</style>