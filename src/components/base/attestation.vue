<template>
  <div class="base-content-right clearfix">
    <div class="content-right-left">
      <div class="idcard">
        <div class="front add">
          <a href="javascript:;">
            <img :src="userInfo[2].imgsrc1[0]" alt />
            <div
              class="detail"
              :style="{display:userInfo[2].status === ('认证失败'||'未认证') ? 'block':'none'}"
            >
              <i class="iconfont icon-jiahao"></i>
            </div>
          </a>
          <p class="inform">
            <span class="inform">身份证(正面)</span>
            <span
              class="false"
              :style="{color:userInfo[2].status === '认证成功'?'green':'red'}"
            >【{{userInfo[2].status}}】</span>
          </p>
        </div>
        <div class="back add">
          <a href="javascript:;">
            <img :src="userInfo[2].imgsrc1[1]" alt />
            <div
              class="detail"
              :style="{display:userInfo[2].status === ('认证失败'||'未认证') ? 'block':'none'}"
            >
              <i class="iconfont icon-jiahao"></i>
            </div>
          </a>
          <p class="inform">
            <span class="inform">身份证(反面)</span>
            <span
              class="false"
              :style="{color:userInfo[2].status === '认证成功'?'green':'red'}"
            >【{{userInfo[2].status}}】</span>
          </p>
        </div>
        <p class="titlefir">请上传真实的身份证信息(正反面)</p>
        <p class="titlesec">照片要四角对其，如有模糊。反光、太暗、有遮挡，则不予认证</p>
      </div>

      <div class="intelligence add">
        <a href="javascript:;">
          <img :src="userInfo[2].imgsrc1[2]" alt />
          <div
            class="detail"
            :style="{display:userInfo[2].status === ('认证失败'||'未认证') ? 'block':'none'}"
          >
            <i class="iconfont icon-jiahao"></i>
          </div>
        </a>
        <p class="inform">
          <span class="inform">身份证(正面)</span>
          <span
            class="false"
            :style="{color:userInfo[2].status === '认证成功'?'green':'red'}"
          >【{{userInfo[2].status}}】</span>
        </p>
      </div>
      <p class="titlefir">请上传真实的身份证信息(正反面)</p>
      <p class="titlesec">照片要四角对其，如有模糊。反光、太暗、有遮挡，则不予认证</p>
    </div>
    <div class="content-right-right">
      <div class="title clearfix">
        <span class="brief">个人简介</span>
        <div class="right clearfix" @click="change" :class="{show:show==='false'}">
          <i class="iconfont icon-bianji"></i>
          <span class="editor">编辑</span>
        </div>
      </div>
      <div class="text">
        <textarea
          name
          id
          cols="30"
          rows="10"
          wrap="hard"
          v-model="str"
          :class="{show:show === 'true'}"
          :readonly="read"
        ></textarea>
      </div>
      <div class="changes clearfix" :style="{display:show==='false'?'none':'block'}">
        <span class="define" @click="sure">确认修改</span>
        <span class="break" @click="giveup">取消修改</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      str: ` 涂磊，1977年6月10日出生于江西省南昌市，中国内地男主持人，毕业于南方冶金学院(现江西理工大学)计算机系1996级。
  
  2004年，担任长沙人民广播电台星沙之声频道(FM105) 的主持人。2006年，转战电视节目，随后主持了长沙晚间法律节目《方圆调查》.2010年， 担任青海卫视新闻脱口秀节目《嘎嘣爆米花》的嘎嗍观察员[1] . 2011年，主特浙江钱江频道电视新闻时评类节目《九点半》[2] . 2012年，主持了江西卫视新闻评论类节目《深度观察》[3] .2013年， 担任河北卫视情感谈话节目《情感大裁判》的主持人[4]。2014年， 担任天津卫视职场招聘节目《非你莫属》的主持人[5] ;同年，在天津卫视情感综艺类节目《爱情保卫战》中担任情感导师[6] .`,
      userInfo: [
        {
          id: 1,
          name: "张三",
          status: "未认证",
          imgsrc1: [
            require("../../assets/img/id1.png"),
            require("../../assets/img/id1.png"),
            require("../../assets/img/id2.png")
          ]
        },
        {
          id: 1,
          name: "张三",
          status: "正在认证",
          imgsrc1: [
            require("../../assets/img/idcard1.jpg"),
            require("../../assets/img/idcard2.jpg"),
            require("../../assets/img/assettion.jpg")
          ]
        },
        {
          id: 1,
          name: "张三",
          status: "认证失败",
          imgsrc1: [
            require("../../assets/img/idcard1.jpg"),
            require("../../assets/img/idcard2.jpg"),
            require("../../assets/img/assettion.jpg")
          ]
        },
        {
          id: 1,
          name: "张三",
          status: "认证成功",
          imgsrc1: [
            require("../../assets/img/idcard1.jpg"),
            require("../../assets/img/idcard2.jpg"),
            require("../../assets/img/assettion.jpg")
          ]
        }
      ],
      show: "false",
      read: true,
      coptstr:''
    };
  },
  methods: {
    change() {
      this.show = "true";
      this.read = false;
    },
    sure() {
      this.show = "false";
      this.read = true;
    },
    giveup() {
      this.show = "false";
      this.read = true;
      this.str = this.coptstr;
    }
  },
  mounted() {
    this.coptstr = this.str;
  },
};
</script>

<style lang="less">
.base-content-right {
  float: right;
  width: 900px;
  background-color: white;
  .content-right-left {
    box-sizing: border-box;
    width: 450px;
    float: left;
    border-right: 2px solid #eeeeee;
    .idcard {
      border-bottom: 2px solid #eeeeee;
    }
    .titlefir {
      font-size: 14px;
      margin-bottom: 4px;
      text-align: center;
      color: #cecece;
    }
    .titlesec {
      font-size: 14px;
      text-align: center;
      color: #cecece;
      margin-bottom: 30px;
    }
    .add {
      margin-top: 40px;
      display: inline-block;
      a {
        display: block;
        width: 170px;
        height: 129px;
        margin-bottom: 18px;
        position: relative;
        background: url(../../assets/img/id1.png) no-repeat center;
        img {
          display: block;
          box-sizing: border-box;
          width: 170px;
          height: 129px;
          border: 2px dotted #eeeeee;
        }
        .detail {
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(238, 238, 238, 0.9);
          .iconfont {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            font-size: 68px;
          }
        }
      }
      .inform {
        .false {
          color: red;
        }
      }

      margin-bottom: 15px;
    }
    .front {
      margin-left: 42px;
      margin-right: 20px;
    }
    .intelligence {
      position: relative;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
  .content-right-right {
    width: 450px;
    box-sizing: border-box;
    float: left;
    .title {
      margin-top: 40px;
      margin-left: 36px;
      margin-bottom: 30px;
      margin-right: 45px;
      .right {
        display: none;
        float: right;
        color: #00aaff;
        .editor {
          font-size: 20px;
        }
        .iconfont {
          position: relative;
          top: -2px;
          margin-right: 4px;
          font-size: 20px;
          vertical-align: middle;
          margin-right: 4px;
        }
      }
      .show {
        display: block;
      }
      .brief {
        float: left;
        font-size: 18px;
      }
    }
    .text {
      box-sizing: border-box;
      margin-left: 36px;
      margin-right: 45px;
      margin-bottom: 30px;
      textarea {
        resize: none;
        width: 366px;
        height: 375px;
        outline: none;
        border: none;
        line-height: 22px;
        font-size: 12px;
        padding: 10px 10px 0;
      }
      .show {
        border: 1px solid black;
      }
    }
    .changes {
      .define {
        text-align: center;
        box-sizing: border-box;
        float: left;
        width: 160px;
        line-height: 44px;
        margin-left: 36px;
        margin-right: 20px;
        background-color: #00aaff;
        color: white;
        border-radius: 10px;
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