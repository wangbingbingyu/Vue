<template>
  <div class="myquest-content-right">
    <div class="nav clearfix">
      <span class="all choice" @click="modify">
        <span
          class="cycle"
          @click="modify"
          :style="{'background-color':status === 0 ? '#00aaff':'white'}"
        >
          <i class="iconfont icon-duihao" :style="{display:status === 0 ? 'block':'none'}"></i>
        </span>
        <span class="name">全部</span>
      </span>
      <span class="todo choice" @click="modifyo">
        <span
          class="cycle"
          @click="modifyo"
          :style="{'background-color':status === 1 ? '#00aaff':'white'}"
        >
          <i class="iconfont icon-duihao" :style="[{display:status === 1 ? 'block':'none'}]"></i>
        </span>
        <span class="name">待处理</span>
      </span>
      <span class="ask">提问</span>
    </div>
    <div class="qa-content">
      <div class="item clearfix" :key="index" v-for="(item,index) in list">
        <div class="item-left">
          <p class="qa-qustion">{{item.qa}}</p>
          <p class="qa-answer">
             <span class="content"> {{item.answercontent}}</span>
          </p>
          <p class="detail">
            <span class="timer">提问时间:{{item.time}}</span>
            <span class="answer">回答:{{item.answer}}</span>
            <span>|</span>
            <span class="read">{{item.time}}看过</span>
          </p>
        </div>
        <div class="item-right">
          <span class="handle" v-if="item.status==='未处理'">有追问</span>
          <span class="delete" v-else>删除回答</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: 0,
      arr: [
        {
          id: 1,
          qa: "中午在凡客打客服电话退货了，下午可以到么?我在北京",
          time: "3月23日15:43",
          answer: 0,
          answercontent:'CPU    AMD Athlon II X4 (速龙四核) 640盒装CPU (Socket AM3/3GHz/2M二级缓存/   45纳米)主板华硕(ASUS)M5A88-...',
          read: 90,
          status: "未处理"
        },
        {
          id: 2,
          qa: "想买电脑不懂配置求各位大神给一套3000- -4000的配置急求配置谢谢",
          time: "3月23日15:43",
          answer: 0,
          answercontent:'CPU  AMD Athlon II X4 (速龙四核) 640盒装CPU (Socket AM3/3GHz/2M二级缓存/   45纳米)主板华硕(ASUS)M5A88-...',
          read: 90,
          status: "以处理"
        }
      ]
    };
  },
  computed: {
    list() {
      let arr1 = [];
      this.arr.map(function(item) {
        if (item.status === "未处理") {
          arr1.push(item);
        }
      });
      if(this.status === 0){
        return this.arr;
      }else{
        return arr1;
      }
    }
  },
  methods: {
    modify() {
      this.status = 0;
    },
    modifyo() {
      this.status = 1;
    }
  }
};
</script>

<style lang="less">
.myquest-content-right {
  float: right;
  width: 900px;
  height: 586px;
  background-color: white;
  .nav {
    border-bottom: 1px solid #eeeeee;
    .choice {
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
    .todo {
      margin-left: 70px;
      float: left;
    }
    .ask {
      float: right;
      margin-right: 42px;
      margin-top: 36px;
      margin-bottom: 34px;
      width: 160px;
      line-height: 32px;
      background-color: #00aaff;
      text-align: center;
      border-radius: 5px;
    }
  }
  .item {
    height: 210px;
    border-bottom: 1px solid #eeeeee;
    .item-left {
      float: left;
      margin-top: 40px;
      margin-left: 30px;
      .qa-answer{
          width: 630px;
          margin-top: 30px;
          background-color: #f8f8f8;
          line-height: 30px;
          .content{
              display: inline-block;
              margin: 0 20px;
          }
      }
      .detail {
        margin-top: 23px;
        font-size: 14px;
        color: #b7b7b7;
      }
    }
    .item-right {
      float: right;
      margin-top: 48px;
      margin-right: 40px;
      .handle {
        text-align: center;
        display: inline-block;
        box-sizing: border-box;
        width: 164px;
        line-height: 32px;
        border: 1px solid #eeeeee;
        border-radius: 10px;
        color: #00aaff;
      }
      .delete {
        text-align: center;
        display: inline-block;
        box-sizing: border-box;
        width: 164px;
        line-height: 34px;
      }
    }
  }
}
</style>