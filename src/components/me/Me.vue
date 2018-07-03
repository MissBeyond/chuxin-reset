<template>
    <div class="me-wrapper">
        <div class="header">
            <img class="bg-img" :src="require('@/assets/me-bg-img.jpg')" alt="背景图">
            <div class="user-info">
                <img class="avatar" :src="require('@/assets/avatar.jpg')" alt="头像">
                <div class="user-infos">
                    <span class="user-name">极简</span>
                    <span class="user-id">ID:21</span>
                </div>
            </div>
            <div class="user-click-popular">
                <span class="user-popular">我的人气</span>
                <i class="icon iconfont icon-jiantou"></i>
            </div>
        </div>
        <div class="content">
            <div class="money-wrapper">
                <div class="money">
                    <p class="text">余额&nbsp(元)</p>
                    <p class="count-money">300</p>
                </div>
                <div class="bonus">
                    <p class="text">奖金&nbsp(元)</p>
                    <p class="count-money">20</p>
                </div>
            </div>
            <ul class="detail-list">
                <li class="list">
                    <i class="icon iconfont icon-qiandao"></i>
                    <span class="list-text">打卡记录</span>
                    <i class="icon iconfont icon-jiantou"></i>
                </li>
                <li class="list">
                    <i class="icon iconfont icon-jinbi"></i>
                    <span class="list-text">平台奖励</span>
                    <i class="icon iconfont icon-jiantou"></i>
                </li>
                <li class="list">
                    <i class="icon iconfont icon-lipin"></i>
                    <span class="list-text">我的影响金</span>
                    <i class="icon iconfont icon-jiantou"></i>
                </li>
                <li class="list">
                    <i class="icon iconfont icon-shangcheng"></i>
                    <span class="list-text">积分商城</span>
                    <i class="icon iconfont icon-jiantou"></i>
                </li>
            </ul>
            <ul class="detail-list">
                <li class="list">
                    <i class="icon iconfont icon-duanxin"></i>
                    <span class="list-text">交流群</span>
                    <i class="icon iconfont icon-jiantou"></i>
                </li>
                <li class="list">
                    <i class="icon iconfont icon-shangwu"></i>
                    <span class="list-text">商务合作</span>
                    <i class="icon iconfont icon-jiantou"></i>
                </li>
                <li class="list">
                    <i class="icon iconfont icon-pen"></i>
                    <span class="list-text">活动答疑</span>
                    <i class="icon iconfont icon-jiantou"></i>
                </li>
                <li class="list">
                    <i class="icon iconfont icon-jilu"></i>
                    <span class="list-text">反馈记录</span>
                    <i class="icon iconfont icon-jiantou"></i>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Me'
}
</script>
<style lang='stylus' scoped>
    .header
        background-color pink
        .bg-img
            width 100%
            height 100%
        .user-info
            position absolute
            top .2rem
            left .2rem
            .avatar
                display inline-block
                width .6rem
                height .6rem
                border-radius 50%
            .user-infos
                display inline-block
                vertical-align top
                .user-name
                    display block
                    font-size .18rem
                    margin-top .12rem
                    margin-left .05rem
                    vertical-align top
                    color #ffffff
                .user-id
                    display block
                    margin-top .05rem
                    margin-left .05rem
                    font-size .14rem
                    color #ffffff
        .user-click-popular
            position fixed
            top .2rem
            right .1rem
            line-height .3rem
            .user-popular
                line-height .2rem
                font-size .18rem
                color #ffffff
            .icon-jiantou
                font-size .18rem
                color #ffffff
    .content
        position absolute
        top 1.89328rem
        left 0
        width 100%
        height 100%
        background-color #f9f3f3
        .money-wrapper
            display flex
            position relative
            margin auto
            z-index 99
            width 3rem
            height .6rem
            background-color #ffffff
            margin-top - 0.3rem
            border-radius .1rem .1rem .1rem .1rem
            box-shadow 1px 1px 16px #f5b9b0
            .text
                font-size .16rem
                color #2b2a2a
            .count-money
                font-size .16rem
                font-weight 700
                margin-top .1rem
                color #2b2a2a
            .money
                flex 1
                margin .1rem 0
                border-right 2px solid rgba(206, 206, 210, 0.6)
            .bonus
                flex 1
                margin .1rem 0
        .detail-list
            margin .2rem .2rem
            border-radius .2rem .2rem .2rem .2rem
            .list
                list-style none
                position relative
                padding .1rem
                text-align left
                border-bottom 1px dashed #eeeeee
                &:last-child
                    border none 
                border-radius .1rem .1rem .1rem .1rem
                background-color #fff
                font-size 0
                .icon
                    font-size .16rem
                    margin-left .05rem
                .icon-qiandao
                    color #5397f5
                .icon-jinbi
                    color #f5d853
                .icon-lipin
                    color #f57153
                .icon-shangcheng
                    color #f5ba53
                .icon-duanxin
                    color #70be1d
                .icon-shangwu
                    color #f55e53
                .icon-pen
                    color #397bf3
                .icon-jilu
                    color #2578b3
                .icon-jiantou
                    float right
                    font-size .2rem
                    color #c7c7cb
                    
                .list-text
                    margin-left .16rem
                    font-size .16rem
                    


                    

            

        
</style>