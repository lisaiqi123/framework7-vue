<template>
   <div>
       <div class="navbar navbar-layout">
            <div class="navbar-inner">
                <form class="searchbar order-search searchbar-reset" action="">
                    <div class="re-header fl-row-justy">
                        <a class="external" href="/"><i class="icon icon-xiangzuo1"></i></a>
                        <div class="searchbar-input searchbar-input-reset">
                            <i class="icon icon-fangdajing"></i>
                            <input type="text" name="keywords" placeholder="请输入关键词搜索" value="" class="search-input" id="goodSearch">
                            <span id="close-search" class="fl-row-center"><i class="icon icon-saasguanbi"></i></span>
                        </div>
                        <button type="submit" class="search-btn">搜索</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="page-content infinite-scroll">
            <!-- 空 -->
            <p class="empty">抱歉，暂无粉丝信息</p>
            <!-- fans-menu -->
            <div class="list-items G-Mt-10">
                <a href="javascript:;" class="external fl-row-justy">
                    <p class="fl-row-center">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-tianjiaguanliyuan"></use>
                        </svg> 最近联系
                    </p>
                </a>
                <a href="javascript:;" class="external fl-row-justy">
                    <p class="fl-row-center">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-biaoqianguanli"></use>
                        </svg> 粉丝标签
                    </p>
                </a>
            </div>
            <!-- fans-list -->
            <h2 class="h2-style1">A</h2>
            <div class="list-style2">
                <a href="javascript:;" class="external fl-row-justy">
                    <div class="fl-row-left">
                        <img src="@/assets/images/backend-bg2.png" alt="">
                        <p class="fl-column-start right">
                            <span>a西湖的水，我的泪</span>
                            <span><span class="out">离线</span><span>粉丝是啥</span></span>
                        </p>
                    </div>
                </a>
                <a href="javascript:;" class="external fl-row-justy">
                    <div class="fl-row-left">
                        <img src="@/assets/images/backend-bg2.png" alt="">
                        <p class="fl-column-start right">
                            <span>a西湖的水，我的泪</span>
                            <span><span class="on">在线</span><span>粉丝是啥</span></span>
                        </p>
                    </div>
                </a>
                <a href="javascript:;" class="external fl-row-justy">
                    <div class="fl-row-left">
                        <img src="@/assets/images/backend-bg2.png" alt="">
                        <p class="fl-column-start right">
                            <span>a西湖的水，我的泪</span>
                            <span><span class="on">在线</span><span>粉丝是啥</span></span>
                        </p>
                    </div>
                </a>
            </div>
            <h2 class="h2-style1">B</h2>
            <div class="list-style2">
                <a href="javascript:;" class="external fl-row-justy">
                    <div class="fl-row-left">
                        <img src="@/assets/images/backend-bg2.png" alt="">
                        <p class="fl-column-start right">
                            <span>a西湖的水，我的泪</span>
                            <span><span class="on">在线</span><span>粉丝是啥</span></span>
                        </p>
                    </div>
                </a>
                <a href="javascript:;" class="external fl-row-justy">
                    <div class="fl-row-left">
                        <img src="@/assets/images/backend-bg2.png" alt="">
                        <p class="fl-column-start right">
                            <span>a西湖的水，我的泪</span>
                            <span><span class="on">在线</span><span>粉丝是啥</span></span>
                        </p>
                    </div>
                </a>
                <a href="javascript:;" class="external fl-row-justy">
                    <div class="fl-row-left">
                        <img src="@/assets/images/backend-bg2.png" alt="">
                        <p class="fl-column-start right">
                            <span>a西湖的水，我的泪</span>
                            <span><span class="on">在线</span><span>粉丝是啥</span></span>
                        </p>
                    </div>
                </a>
            </div>
        </div>
   </div>
</template>

<script>
export default {
  name: 'fans',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
