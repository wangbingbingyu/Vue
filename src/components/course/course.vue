<template>
  <div class="course">
    <div class="course-content wrapper clearfix">
      <CourseContentLeft></CourseContentLeft>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import CourseContentLeft from './course-content-left';
export default {
  name:'course',
  components:{
    CourseContentLeft
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