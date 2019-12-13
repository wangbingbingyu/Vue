<template>
  <div class="base-content-right">
    <div class="base-content-right-top">登录密码</div>
    <div class="base-content-right-bottom">
      <div class="oldpass common clearfix">
        <span class="names">原密码</span>
        <div class="input">
          <input type="text" placeholder="请输入原始密码" />
        </div>
      </div>
      <div class="newpass common clearfix">
        <span class="names">新密码</span>
        <div class="input">
          <input type="text" placeholder="请输入新密码" />
        </div>
      </div>
      <div class="confirmpass common clearfix">
        <span class="names">确认密码</span>
        <div class="input">
          <input type="text" placeholder="请再次输入新密码" />
        </div>
      </div>
      <div class="changes clearfix">
        <span class="define">确认修改</span>
        <span class="break">取消修改</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.base-content-right {
  float: right;
  .base-content-right-top {
    line-height: 110px;
    padding-left: 40px;
    border-bottom: 2px solid #eeeeee;
    font-size: 20px;
    font-weight: bold;
  }
  .base-content-right-bottom {
    .common {
      line-height: 44px;
      margin-left: 70px;
      .names {
        float: left;
        margin-right: 20px;
      }
      .input {
        float: left;
        margin-bottom: 16px;
        border: 1px solid #eeeeee;
        border-radius: 5px;
      }
      input {
        text-indent: 10px;
        color: #f9f9ff;
        line-height: 44px;
        width: 400px;
        border: none;
        outline: none;
        caret-color: black;
      }
    }
    .oldpass {
      margin-top: 42px;
    }
    .confirmpass {
      margin-left: 54px;
    }
    .changes {
        margin-bottom: 197px;
      .define {
        text-align: center;
        box-sizing: border-box;
        float: left;
        margin-left: 135px;
        width: 160px;
        line-height: 44px;
        margin-right: 20px;
        background-color: #00aaff;
        color: white;
        border-radius: 10px ;
        cursor: pointer;
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
  }
}
</style>