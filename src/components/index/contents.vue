<template>
    <section class="section">
        <div class="section-content wrapper clearfix">
            <ContentLeft></ContentLeft>
            <ContentRight></ContentRight>
        </div>
    </section>
</template>

<script>
import ContentLeft from './contents-left'
import ContentRight from './contents-right'
export default {
    components:{
        ContentLeft,
        ContentRight
    }
}
</script>


<style lang="less" scope>
    .icon {
        width: 1.5em;
        height: 1.5em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        vertical-align: middle;
    }
    .section{
        overflow: hidden;
        background-color: #f4f4f4;
        box-shadow: inset 2px 2px 2px #eeeeee;
        .section-content{
            margin-top: 30px;
            margin-bottom: 30px;
            
           
        }
    }
</style>