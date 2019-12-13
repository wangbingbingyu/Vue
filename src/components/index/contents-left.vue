<template>
  <div class="section-left">
    <div class="inform clearfix">
      <img src="../../assets/img/header12.png" alt />
      <div class="inform-detail">
        <p class="inform-detail-title">
          <span class="name">罗密欧</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-nvtouxiang" />
          </svg>
        </p>
        <p class="inform-datail-finish">
          <span class="title">信息完成度</span>
          <span class="lenght"></span>
          <span class="assess">高</span>
        </p>
        <p class="inform-datail-socket">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shouji" />
          </svg>
          <i class="iconfont icon-shenfenzheng second"></i>
          <i class="iconfont icon-youjian"></i>
        </p>
      </div>
    </div>
    <div class="balance clearfix">
      <span class="cash">申请提现</span>
      <div class="balance-detail">
        <p class="title">账户余额</p>
        <p class="money">
          <strong>248</strong>
          <span>元</span>
        </p>
      </div>
    </div>
    <div class="attestation clearfix">
      <div class="attestation-personal attestation-content">
        <img src="../../assets/img/id1.png" alt />
        <p class="informs">
          <span class="shiming">实名认证</span>
          <span class="yesorno">【未认证】</span>
        </p>
      </div>
      <div class="attestation-intill attestation-content">
        <img src="../../assets/img/id1.png" alt />
        <p class="informs">
          <span class="shiming">实名认证</span>
          <span class="yesorno">【未认证】</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.section-left {
  background-color: white;
  float: left;
  width: 450px;
  .inform {
    width: 450px;
    padding-bottom: 30px;
    border-bottom: 1px solid #f9f9f9;
    img {
      padding-top: 30px;
      padding-left: 35px;
      float: left;
      width: 88px;
    }
    .inform-detail {
      padding-top: 36px;
      float: left;
      margin-left: 10px;
    }
    .inform-detail-title {
      margin-bottom: 8px;
      .name {
        font-size: 18px;
        font-weight: bold;
        margin-right: 10px;
      }
      .icon {
        vertical-align: middle;
        position: relative;
        top: -2px;
      }
    }
    .inform-datail-finish {
      margin-bottom: 12px;
      .title {
        font-size: 14px;
        color: #9e9e9e;
      }
      .lenght {
        display: inline-block;
        background-color: #00aaff;
        margin: 0 10px;
        border-radius: 5px;
        width: 140px;
        height: 8px;
      }
      .assess {
        font-size: 14px;
        color: #00aaff;
      }
    }
    .inform-datail-socket {
      .icon {
        width: 1em;
        height: 1em;
        position: relative;
        top: -2px;
      }
      .second {
        margin: 0 10px;
      }
      .iconfont {
        font-size: 16px;
      }
    }
  }
  .balance {
    border-bottom: 1px solid #f9f9f9;
    .cash {
      margin-left: 35px;
      margin-right: 60px;
      float: left;
      width: 160px;
      line-height: 32px;
      background-color: #00aaff;
      color: white;
      text-align: center;
      border-radius: 20px;
      margin-top: 42px;
      margin-bottom: 40px;
    }
    .balance-detail {
      margin-top: 28px;
      float: left;
      .title {
        margin-bottom: 16px;
      }
      .money {
        strong {
          font-size: 20px;
          margin-right: 5px;
        }
      }
    }
  }
  .attestation {
    padding-bottom: 70px;
    border-bottom: 1px solid #f9f9f9;
    .attestation-content {
      float: left;
      margin: 64px 0 0 40px;
      img {
        width: 160px;
        margin-bottom: 20px;
      }
      .yesorno {
        color: red;
        margin-left: 5px;
      }
    }
    // .attestation-intill{
    //     width: 160px;
    // }
  }
}
</style>