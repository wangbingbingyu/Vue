<template>
  <div class="index">
    <div class="base-content wrapper clearfix">
      <BaseContentLeft></BaseContentLeft>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import BaseContentLeft from './base-content-left';
export default {
  name:'index',
  components:{
    BaseContentLeft
  }
};
</script>
<style lang="less">
.index {
  overflow: hidden;
  background-color: #f4f4f4;
  box-shadow: inset 2px 2px 2px #eeeeee;
  .base-content {
    margin-top: 30px;
    margin-bottom: 30px;
   
  }
}
</style>