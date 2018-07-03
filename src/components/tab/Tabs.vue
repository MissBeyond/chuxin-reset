<template>
    <div class="tabs">
        <ul>
             <!--home被点击后，一直处于激活状态，因此需要使用精确匹配模式，在router-link中添加exact属性-->
            <router-link :to="{name:'Home'}" tag="li" exact>
                <div>
                    <i class="icon iconfont icon-taiyang-copy"></i>
                </div>
                <p class="title">早安</p>
            </router-link>
            <router-link :to="{name:'Dariy'}" tag="li">
                <div>
                    <i class="icon iconfont icon-book_icon"></i>
                </div>
                <p class="title">成长日记</p>
            </router-link>
            <router-link :to="{name:'Influence'}" tag="li">
                <div>
                    <i class="icon iconfont icon-jiangbei"></i>
                </div>
                <p class="title">影响力</p>
            </router-link>
            <router-link :to="{name:'Me'}" tag="li">
                <div>
                    <i class="icon iconfont icon-gerenzhongxin"></i>
                </div>
                <p class="title">个人中心</p>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Tabs'
}
</script>
<style lang='stylus' scoped>
    .tabs
        position fixed
        left 0
        bottom 0
        width 100%
        z-index 10000
        box-shadow: 0 2px 4px #000
        background-color #f7f7fa
        &ul,li
            margin 0
            padding 0
        ul
            display flex
            width 100%
            li
                flex 1
                text-align center
                vertical-align middle
                padding .02rem 0rem
                cursor pointer
                &.router-link-active
                    color #fd8b59
            .iconfont
                font-size .2rem
            .title
                font-size .12rem
                margin-top .02rem


                
</style>