<template>
    <div class="toolbar tabbar" v-if="menuBol">
        <div class="toolbar-inner">
            <router-link 
                v-for="(item,index) in footerItem" 
                :key="index" 
                :to="item.url" 
                class="tab-link external" 
                :class="{active:!(index-menuIndex)}" 
                @click.native="tabsToggle(index,true)">
                <i class="icon" :class="item.icon"></i>
                <span class="tabbar-label">{{item.name}}</span>
            </router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'myFooter',
        data(){
            return{
                // menuIndex:0,
                footerItem:[{
                    "url":"/pages/home",
                    "name":"首页",
                    "icon":"icon-shouye3"
                },{
                    "url":"/pages/fans",
                    "name":"粉丝",
                    "icon":"icon-120"
                },{
                    "url":"/pages/order",
                    "name":"订单",
                    "icon":"icon-order"
                },{
                    "url":"/pages/data",
                    "name":"数据",
                    "icon":"icon-dna"
                },{
                    "url":"/pages/job",
                    "name":"工作",
                    "icon":"icon-gongzuotaicopy"
                },]
            }

        },
        computed:{
            menuIndex(){
                return this.$store.state.activeNum
            },
            menuBol(){
                return this.$store.state.menuBol
            }
        },
        methods:{
            tabsToggle(index,bol){
                this.$store.commit({type:"menuActive",index:index,bol:bol})
            }
        }
    }
</script>