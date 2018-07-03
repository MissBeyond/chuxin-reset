<template>
    <div class="home-wrapper">
        <div class="head">
            <img :src="require('@/assets/banner.png')" alt="首页背景"/>
            <div class="rectangle">
                <p>距活动结束<br/>294天</p>
            </div>
            <button type="button">
                <p>点击这里开始蜕变</p>
                <img :src="require('@/assets/button1.jpg')" alt="10元">
            </button>
        </div>
        <div class="money">
            <ul>
                <li class="bg1">
                    <div class="info">
                        <i class="icon iconfont icon-xianjindai"></i>
                        <p class="title">挑战金</p>
                    </div>
                    
                    <div class="total">
                        <span class="total">38230元</span>
                    </div>
                </li>
                <li class="bg2">
                    <div class="info">
                        <i class="icon iconfont icon-renshu"></i>
                        <p class="title">参与人数</p>
                    </div>
                    <div class="total">
                        <span class="total">3823人</span>
                    </div>
                </li>
                <li class="bg3">
                    <div class="info">
                        <i class="icon iconfont icon-rili"></i>
                        <p class="title">终极大奖</p>
                    </div>
                    <div class="total">
                        <span>10万</span>
                    </div>
                </li>
            </ul>
        </div>
        <split></split>
        <div class="rule">
            <div class="active">
                <div>
                    <span class="rect"></span>
                    <p class="name">活动规则</p>
                </div>
                <div>
                    <p class="link">规则详情</p>
                    <i class="icon iconfont icon-jiantou"></i>
                </div>
            </div>
            <div class="text">
                <p>1.支付10元挑战金报名，支付后不返还</p>

                <p>2.坚持早起，冲击10万元奖金。<br/></p>   

                <p>3.每影响1名好友报名，得1份奖励。（请移步至个人中心查看)</p>    

                <p>4.2018年4月23日开始打卡，每日4:00-8:00打卡.</p> 

                <p>5.打卡中断可重新报名。</p>   
                
            </div>
        </div>
        <split></split>
        <div class="rule">
            <div class="active">
                <div>
                    <span class="rect"></span>
                    <p class="name">初心公益池</p>
                </div>
            </div>
            <div>
                <img :src="require('@/assets/banner2.jpg')" alt="初心公益池" width="100%" height="100%">
            </div>
        </div>
        <split></split>
        <div class="rule">
            <div class="active">
                <div>
                    <span class="rect"></span>
                    <p class="name">合作伙伴</p>
                </div>
            </div>
            <div>
                <img :src="require('@/assets/banner3.jpg')" alt="合作伙伴" width="100%" height="100%">
            </div>
        </div>
        <split></split>
        <div class="rule">
            <div class="active">
                <div>
                    <span class="rect"></span>
                    <p class="name">排行榜</p>
                </div>
            </div>
            <div class="rect-bottom">
                <img src="@/assets/banner3.jpg" alt="合作伙伴" width="100%" height="100%">
            </div>
        </div>
    </div>
</template>
<script>
import Split from "@/common/split/Split"
export default {
    name: 'Home',
    components: {
        Split
    }
}
</script>
<style lang='stylus' scoped>
    .home-wrapper
        font-size 0.14rem
        .head
            width 100%
            height 2.05rem
            background-color #ffffff
            img
                width 100%
                height 100%
            .rectangle
                position absolute
                top 0
                left 0.2rem
                width .6rem
                height 0.6rem
                border-radius 0 0 60% 60%
                text-align center
                background-color #fee9d5
                p
                    position relative
                    margin-top 0.1rem
                    font-size 0.1rem
                    color #ff7800
            button
                position relative
                top -.22rem
                justify-content center
                z-index 99
                width 2.6rem
                height 0.44rem
                border none
                font-size 0
                border-radius .4rem
                background-color #dc67f9
                box-shadow .01rem .01rem .1rem rgba(99, 46, 112, 0.8)
                p
                    display inline-block
                    vertical-align top
                    color #ffffff
                    font-size 0.16rem
                    line-height 0.16rem 
                img
                    display inline-block
                    width .48rem
                    height .17rem
                    margin-left 0.16rem 
        .money
            width 100%
            
            background-color #ffffff
            ul
                display flex
                margin .4rem .2rem .2rem .2rem
                height .8rem
                li
                    flex 1
                    border-radius 0.1rem
                    text-align center
                    
                .bg1
                    background-color #fd84a7
                    margin-right .2rem
                .bg2
                    background-color #ffc07b
                    margin-right .2rem
                .bg3
                    background-color #8dc8ff
                    
                .info
                    margin-top .2rem
                    font-size 0
                    .icon
                        vertical-align top
                        font-size .14rem
                        line-height .14rem
                        color #ffffff
                    .title
                        display inline-block
                        margin-left .06rem
                        font-size .14rem
                        color #ffffff
                .total
                    margin-top .12rem
                    font-size .16rem
                    color #ffffff
        .rule
            background-color #ffffff
            .active
                height .36rem
                font-size 0
                display flex
                align-items center
                justify-content space-between
                .rect
                    display inline-block
                    float left
                    margin-left .1rem
                    width .04rem
                    height .16rem
                    background-color #ff884e
                .name
                    display inline-block
                    float left
                    margin-left .08rem
                    font-size .16rem
                    font-weight 700
                .link
                    display inline-block
                    margin-right .05rem
                    line-height .2rem
                    vertical-align top
                    font-size .16rem
                .icon-jiantou
                    display inline-block
                    vertical-align top
                    margin-right .1rem
                    font-size .18rem
            .rect-bottom
                    margin-bottom .1rem
            .text
                text-align left
                padding 0 .2rem
                p
                    font-size .12rem
                    margin-bottom .06rem
            
          

            
                
                    
                
                    
                    
               
               

</style>

