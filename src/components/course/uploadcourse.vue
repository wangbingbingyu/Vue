<template>
  <div class="course-content-right">
    <div class="schedule">
      <p class="name">全民股东_ _201610241223.mp4</p>
      <p class="schedule-le clearfix">
        <span class="length"></span>
        <span class="cycle">
          <i class="iconfont icon-duihao"></i>
        </span>
      </p>
      <p class="sucess">上传成功100%</p>
      <router-link to="/course/mycourse">
        <p class="reupload" v-show="show">重新上传</p>
      </router-link>
    </div>
    <form action class="form" v-show="show">
      <div class="headline">
        <label for>
          标题
          <input type="text" placeholder="请输入课程标题" />
        </label>
      </div>
      <div class="sort">
        <span class="sort-title">分类</span>
        <select name id>
          <option value disabled selected style="display:none;">请选择课程分类</option>
          <option value>java</option>
          <option value>javascript</option>
          <option value>PHP</option>
        </select>
      </div>
      <div class="text">
        <span class="text-title">课程介绍</span>
        <textarea name id cols="30" rows="10" placeholder="请输入课程介绍"></textarea>
      </div>
      <button class="btn" @click="sub">保存信息</button>
    </form>
    <div class="keep" v-show="!show">
      <p class="cycleout">
        <i class="iconfont icon-duihao"></i>
      </p>
      <p class="waitexamine">保存成功，等待审核</p>
      <p class="waitime">课程上传成功，正在进行人工审核，我们会在24小时后告知您审核结果，请耐心等候。</p>
      <router-link to="mycourse" class="button">
        <span class="btn" @click="sub">继续上传</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "uploadcourse",
  data() {
    return {
      show: true
    };
  },
  methods: {
    sub() {
      this.show = !this.show;
    }
  }
};
</script>

<style lang="less">
.course-content-right {
  float: right;
  width: 900px;
  background-color: white;
  .schedule {
    padding: 34px 34px 20px 36px;
    box-sizing: border-box;
    border-bottom: 1px solid #eeeeee;
    background-color: #fafeff;
    .name {
      margin-bottom: 16px;
    }
    .schedule-le {
      margin-bottom: 16px;
      .length {
        float: left;
        height: 8px;
        width: 800px;
        background-color: #00aaff;
        margin-top: 4px;
        border-radius: 10px;
      }
      .cycle {
        float: right;
        width: 14px;
        line-height: 14px;
        background-color: #00aaff;
        border-radius: 50%;
        text-align: center;
        .icon-duihao {
          color: white;
          font-size: 10px;
        }
      }
    }
    .sucess {
      font-size: 14px;
      color: #b4b6b6;
      margin-bottom: 4px;
    }
    .reupload {
      text-align: right;
      color: #00aaff;
    }
  }
  .form {
    margin-left: 70px;
    padding-top: 32px;
  }
  .headline {
    line-height: 42px;
    margin-bottom: 14px;
    input {
      margin-left: 10px;
      line-height: 42px;
      text-indent: 10px;
      outline: none;
      border: 1px solid #eeeeee;
      border-radius: 5px;
      width: 740px;
    }
  }
  .sort {
    line-height: 44px;
    margin-bottom: 14px;
    select {
      margin-left: 10px;
      height: 42px;
      text-indent: 10px;
      outline: none;
      border: 1px solid #eeeeee;
      border-radius: 5px;
      width: 740px;
    }
  }
  .text {
    margin-left: -30px;
    margin-bottom: 20px;
    .text-title {
      vertical-align: top;
      margin-top: 20px;
      display: inline-block;
    }
    textarea {
      line-height: 30px;
      resize: none;
      margin-left: 10px;
      height: 42px;
      text-indent: 10px;
      outline: none;
      border: 1px solid #eeeeee;
      border-radius: 5px;
      width: 740px;
      height: 170px;
    }
  }
  .btn {
    outline: none;
    border: none;
    margin-left: 42px;
    width: 160px;
    line-height: 44px;
    background-color: #00aaff;
    text-align: center;
    color: white;
    border-radius: 5px;
    margin-bottom: 26px;
  }
  .keep {
    text-align: center;
    .cycleout {
      display: inline-block;
      margin-top: 80px;
      width: 84px;
      height: 84px;
      line-height: 84px;
      background-color: #00aaff;
      color: white;
      border-radius: 50%;
      .iconfont {
        font-size: 30px;
      }
    }
    .waitexamine {
      margin-top: 22px;
      margin-bottom: 14px;
      font-size: 20px;
    }
    .waitime {
      display: inline-block;
      width: 320px;
      line-height: 22px;
      color: #a3a3a3;
      margin-bottom: 26px;
    }
    .button {
      display: block;
      margin-bottom: 72px;
      text-align: center;
      .btn {
        cursor: pointer;
        display: inline-block;
      }
    }
  }
}
</style>