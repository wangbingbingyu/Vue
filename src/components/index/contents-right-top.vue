<template>
    <div class="section-right-top clearfix">
      <div class="couser section-right-top-content">
        <p class="title">我上传的课程</p>
        <p class="nums">
          <strong>3</strong>个
        </p>
        <p class="detail">
          查看详情
          <i class="iconfont icon-dayu"></i>
        </p>
      </div>
      <div class="qa section-right-top-content">
        <p class="title">我的问答</p>
        <p class="nums">
          <strong>3</strong>个
        </p>
        <p class="detail">
          查看详情
          <i class="iconfont icon-dayu"></i>
        </p>
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less">
     .section-right-top-content {
    float: left;
    overflow: hidden;
    width: 355px;
    height: 275px;
    background: url(../../assets/img/bgc1.png) center no-repeat;
    background-color: white;
    .title {
      margin-left: 50px;
      margin-top: 35px;
      font-size: 18px;
      font-weight: bold;
    }
    .nums {
      margin-left: 50px;
      margin-top: 35px;
      strong {
        font-size: 24px;
      }
    }
    .detail {
      margin-left: 50px;
      margin-top: 30px;
      cursor: pointer;
    }
  }
  .qa {
    float: right;
  }
  .section-right-top {
    margin-bottom: 20px;
  }
</style>