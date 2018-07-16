<template>
    <div class="toolbar tabbar">
        <div class="toolbar-inner">
            <router-link to="/pages/home" class="tab-link external active">
                <i class="icon-shouye3 icon"></i>
                <span class="tabbar-label">首页</span>
            </router-link>
            <router-link to="/pages/fans" class="tab-link external ">
                <i class="icon-120 icon"></i>
                <span class="tabbar-label">粉丝</span>
            </router-link>
            <router-link to="/pages/order" class="tab-link external ">
                <i class="icon-order icon"></i>
                <span class="tabbar-label">订单</span>
            </router-link>
            <router-link to="/pages/data" class="tab-link external ">
                <i class="icon-dna icon"></i>
                <span class="tabbar-label">数据</span>
            </router-link>
            <router-link to="/pages/job" class="tab-link external ">
                <i class="icon-gongzuotaicopy icon"></i>
                <span class="tabbar-label">工作</span>
            </router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'myFooter'
    }
</script>