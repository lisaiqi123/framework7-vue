<template>
   <div class="page-content">
    <!-- guide1 -->
    <div class="guide guide-info pr fl-column-centerTop">
      <div class="pr head">
          <img src="@/assets/images/show.png" alt="">
          <span class="pa">导购</span>
      </div>
      <p>孙国峰</p>
      <p class="fl-row-center"><i class="icon icon-weizhi"></i>方太居然之家北四环店家北四环店</p>
      <div class="box pa fl-row-around">
          <router-link to="fans" @click.native="change(1,true)" class="external fl-column-center"><span>1.5w</span><span>粉丝</span></router-link>
          <router-link to="order" @click.native="change(2,true)" class="external fl-column-center"><span>8</span><span>订单</span></router-link>
          <router-link to="fans" @click.native="change(1,true)" class="external fl-column-center"><span>8888</span><span>合伙人</span></router-link>
      </div>
      <router-link to="erweima" @click.native="change(-1,false)"  class="external pa"><i class="icon icon-erweima1"></i></router-link>
    </div>
    <div class="list-items G-mt-73">
      <router-link to="order" @click.native="change(2,true)" class="external fl-row-justy">
          <p class="fl-row-center"><span></span>订单管理</p><i class="icon icon-xiangyou"></i>
      </router-link>
      <router-link to="order" class="external fl-row-justy">
          <p class="fl-row-center"><span></span>商品管理</p><i class="icon icon-xiangyou"></i>
      </router-link>
      <router-link to="order" class="external fl-row-justy">
          <p class="fl-row-center"><span></span>经营数据</p><i class="icon icon-xiangyou"></i>
      </router-link>
      <router-link to="order" class="external fl-row-justy">
          <p class="fl-row-center"><span></span>评价管理</p><i class="icon icon-xiangyou"></i>
      </router-link>
      <router-link to="order" class="external fl-row-justy">
          <p class="fl-row-center"><span></span>辅助功能</p><i class="icon icon-xiangyou"></i>
      </router-link>
      <router-link to="order" @click.native="change(-1,false)" class="external fl-row-justy">
          <p class="fl-row-center"><span></span>添加合伙人</p><i class="icon icon-xiangyou"></i>
      </router-link>
    </div>
</div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data(){
        return{
            
        }

    },
    // computed:{
    //     menuIndex(){
    //         return this.$store.commit({type:"menuActive",index:0,bol:true})
    //     },
    // },
    methods:{
        change(index,bol){
            this.$store.commit({type:"menuActive",index:index,bol:bol})
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
