<template>
  <div class="course">
    <div class="course-content wrapper clearfix">
      <QaContentLeft></QaContentLeft>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import QaContentLeft from './qa-content-left';
export default {
  components:{
    QaContentLeft
  }
};
</script>
<style lang="less">
.course {
  overflow: hidden;
  background-color: #f4f4f4;
  box-shadow: inset 2px 2px 2px #eeeeee;
  .course-content {
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
</style>