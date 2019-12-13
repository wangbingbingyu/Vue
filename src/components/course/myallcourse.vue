<template>
  <div class="course-content-right">
    <div class="coursenav clearfix">
      <span class="all choices" @click="modify(index)" v-for="(item,index) in navarr" :key="index">
        <span
          class="cycle"
          @click="modify(index)"
          :style="{'background-color':currentIndex === index ? '#00aaff':'white'}"
        >
          <i
            class="iconfont icon-duihao"
            :style="{display:currentIndex === index ? 'block':'none'}"
          ></i>
        </span>
        <span class="name">{{item}}</span>
      </span>
    </div>
    <div class="allcourse-content">
      <div class="allcourse-content-item clearfix" v-for="(item,index) in newArr" :key="index">
        <img :src="item.srcurl" alt />
        <div class="course-left">
          <p class="title">
            <span class="title-name">{{item.title}}</span>
            <span
              class="real"
              :style="{color:item.real==='「进行中」'?'#00aaff':'#aaaaaa' }"
            >{{item.real}}</span>
          </p>
          <p class="time">{{item.time}}</p>
          <p class="comment" :style="{display:item.real==='「进行中」'?'block':'none' }">
            <i class="iconfont icon-wodedangxuan"></i>
            <span class="person-num">{{item.personNum}}学员</span>
            <i class="iconfont icon-tiwen"></i>
            <span class="comment-num">{{item.commentNum}}条评论</span>
          </p>
          <p class="price">{{item.price}}</p>
          <p class="error">{{item.errresult}}</p>
        </div>
        <div class="course-right" :style="{display:currentIndex===0?'none':'block'}">
          <p class="change">修改课程</p>
          <p class="delete" :style="{display:currentIndex === 2 ? 'block':'none'}">删除课程</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myallcourse",
  data() {
    return {
      navarr: ["已发布课程", "审核中的课程", "未通过审核课程"],
      currentIndex: 1,
      status: "",
      arrs: [
        {
          id: 1,
          srcurl: require("../../assets/img/course1.jpg"),
          title: "显露你的实力- -面试",
          time: "3月23日15:43",
          price: "免费",
          status: 0,
          real: "「进行中」",
          personNum: 128,
          commentNum: 18
        },
        {
          id: 2,
          srcurl: require("../../assets/img/course2.jpg"),
          title: "微信微博新媒体营销课程",
          time: "3月23日15:43",
          price: "￥199",
          status: 0,
          real: "「已结束」"
        },
        {
          id: 3,
          srcurl: require("../../assets/img/course1.jpg"),
          title: "显露你的实力- -面试",
          time: "3月23日15:43",
          errresult: "失败原因:内容包含反动性质，请修改",
          status: 2
        },
        {
          id: 4,
          srcurl: require("../../assets/img/course2.jpg"),
          title: "微信微博新媒体营销课程",
          time: "3月23日15:43",
          errresult: "失败原因:内容包含反动性质，请修改",
          status: 2
        },
        {
          id: 5,
          srcurl: require("../../assets/img/course1.jpg"),
          title: "显露你的实力- -面试",
          time: "3月23日15:43",
          price: "免费",
          status: 1
        },
        {
          id: 6,
          srcurl: require("../../assets/img/course2.jpg"),
          title: "微信微博新媒体营销课程",
          time: "3月23日15:43",
          price: "￥199",
          status: 1
        }
      ],
      newArr: []
    };
  },
  computed: {},
  methods: {
    modify(index) {
      this.currentIndex = index;
      this.newArr = this.arrs.filter(item => {
        return item.status == this.currentIndex;
      });
      return this.newArr;
    }
  },
  mounted() {
    this.modify(this.currentIndex);
  }
};
</script>
<style lang="less">
.course-content-right {
  float: right;
  width: 900px;
  background-color: white;
  height: 586px;
  .coursenav {
    border-bottom: 1px solid #eeeeee;
    padding-bottom: 36px;
    .choices {
      margin-left: 30px;
      margin-top: 40px;
      float: left;
      .cycle {
        margin-right: 4px;
        border: 1px solid #eeeeee;
        vertical-align: middle;
        display: inline-block;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: #00aaff;
        .iconfont {
          color: white;
          margin-left: 4px;
          position: absolute;
          line-height: 24px;
        }
      }
    }
  }
  .allcourse-content-item {
    border-top: 1px solid #eeeeee;
    padding: 40px 40px 40px 30px;
    height: 202px;
    box-sizing: border-box;
    img {
      float: left;
      width: 188px;
      margin-right: 26px;
    }
    .course-left {
      float: left;
      padding-top: 16px;
      .title {
        font-size: 20px;
        font-weight: bold;
      }
      .time {
        margin: 10px 0;
        font-size: 14px;
        color: #aaaaaa;
      }
      .price {
        color: #00aaff;
      }
      .error {
        color: #00aaff;
      }
      .comment {
        color: #aaaaaa;
        margin-bottom: 5px;
        .person-num {
          margin-left: 4px;
          margin-right: 16px;
        }
        .comment-num {
          margin-left: 4px;
        }
      }
    }
    .course-right {
      float: right;
      text-align: center;
      .change {
        display: inline-block;
        width: 162px;
        line-height: 32px;
        box-sizing: border-box;
        border: 1px solid #eeeeee;
        border-radius: 20px;
        text-align: center;
        margin-top: 20px;
        color: #00aaff;
        margin-bottom: 6px;
      }
      .delete {
        color: #aaaaaa;
        font-size: 14px;
      }
    }
  }
}
</style>