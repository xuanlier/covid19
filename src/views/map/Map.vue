<template>
    <div class="header">
        <p>疫情地图</p>
        <div class="nav">
            <ul>
                <li @click="changChina" class="gaoliang">中国疫情</li>
                <li @click="changInt">世界疫情</li>
            </ul>
        </div>
           <keep-alive include="/ ChinaMap|IntMap /">
            <compeonent :is="comName"></compeonent>
            </keep-alive>
        
        <!-- <ChinaMap/>
        <InitMap/> -->
    </div>
</template>

<script>
import ChinaMap from "../map/ChinaMap"
import InitMap from "../map/IntMap"

    export default {
         data(){
            return{
                comName:"ChinaMap",
                flag:true
            }    
        },
        components:{
                ChinaMap:()=> import("./ChinaMap"),
                IntMap:()=> import("./IntMap")

        },
        methods:{
            changChina(){
                this.comName = this.comName =="ChinaMap" ? "ChinaMap":"ChinaMap"
            },
            changInt(){
                this.comName = this.comName =="ChinaMap" ? "IntMap":"IntMap"
            }
        },
        mounted(){
            // console.log(this)
        }

    }
</script>

<style lang="less" scoped>
    .header{
        box-sizing: border-box;
        padding:0.2rem;
        min-height: 6rem;
        p{
            margin-bottom: 10px;
        }
        .nav ul{
            text-align: center;
            display: flex;
            flex-wrap: wrap;
            .gaoliang{
                background-color: chartreuse;
            }
            li{
                font-size: 12px;
                display: block;
                height:0.8rem;
                line-height: 0.8rem;
                background-color: #e7e7e7;
                width: 50%;
               
            }
            .bor{
                border-bottom: 1px solid #000;
            }
        }
        
    }
   
</style>