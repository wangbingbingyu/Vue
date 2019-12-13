<template>
  <div class="section-right">
    <ContentTop></ContentTop>
    <ContentBottom></ContentBottom>
  </div>
</template>
<script>
import ContentBottom from './contents-right-bottom'
import ContentTop from './contents-right-top'
export default {
    components:{
        ContentTop,
        ContentBottom
    }
};
</script>

<style lang="less">
.section-right {
  float: right;
  width: 730px;
 
}
</style>