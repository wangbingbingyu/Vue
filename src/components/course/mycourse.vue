<template>
  <div class="course-content-right">
    <router-link to="/course/upload">
      <div class="add">
        <i class="iconfont icon-arr_under"></i>
        <div class="cicle">
          <i class="iconfont icon-jiahao"></i>
        </div>
      </div>
    </router-link>
    <div class="careful">
      <p>1.不得上传未经授权的他人作品,以及色情、反动等违法视频。</p>
      <p>2.视频大小限制:不支持断点续传.视频文件最大200M</p>
      <p>3.支持视频音频格式: mp4、 flv. 14v. webm</p>
      <p>4.不支持时长小于1秒或大于10小时的视频文件，上传后将不能成功转码</p>
      <p>5.高清(360P):视频分辨率>=640x360.视频码率>=800kbps</p>
      <p>6.超清( 720P ):视频分辨率>=960x540. 视频码率>=1500kbps</p>
      <p>7.蓝光(1080P) :视频分用率>=1920x1080. 视频码率>=2500kbps</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.course-content-right {
  float: right;
  width: 900px;
  background-color: white;
  .add {
    position: relative;
    display: inline-block;
    width: 96px;
    height: 96px;
    border: 2px solid #00aaff;
    border-radius: 10px;
    text-align: center;
    margin-top: 108px;
    margin-bottom: 50px;
    left: 50%;
    transform: translate(-50%, 0);
    .iconfont {
      display: inline-block;
      margin-top: 30px;
      font-size: 30px;
      color: #00aaff;
    }
    .cicle {
      display: inline-block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #00aaff;
      position: absolute;
      right: -15px;
      bottom: -15px;
      .iconfont {
        margin-top: 0;
        line-height: 30px;
        font-size: 14px;
        color: black;
      }
    }
  }
  .careful {
    margin-bottom: 62px;
    p {
      margin-left: 258px;
      line-height: 38px;
      color: #c5c5c5;
    }
  }
}
</style>