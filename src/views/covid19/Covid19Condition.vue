<template>
    <div class="info">
        <p>截止到<i>{{CovidInfo.modifyTime | time}}</i>的数据</p>
        <div class="infoNum">
            <div class="one">
                <p>较昨日<i style="color: rgb(247, 76, 49);">{{ CovidInfo.currentConfirmedIncr | number   }}</i></p>
                <p class="add" style="color: rgb(247, 76, 49);">{{ CovidInfo.currentConfirmedCount }}</p>
                <p>现存确诊</p>
            </div>
            <div class="one">
                <p>较昨日<i style="color: rgb(247, 130, 7);">{{ CovidInfo.confirmedIncr | number  }}</i></p>
                <p class="add" style="color: rgb(247, 130, 7);">{{ CovidInfo.confirmedCount }}</p>
                <p>累计确诊</p>
            </div>
            <div class="one">
                <p>较昨日<i style="color: rgb(162, 90, 78);">{{ CovidInfo.suspectedIncr | number   }}</i></p>
                <p class="add" style="color: rgb(162, 90, 78);">{{ CovidInfo.suspectedCount }}</p>
                <p>累计境外输入</p>
            </div>
            <div class="one">
                <p>较昨日<i style="color: rgb(174, 33, 44);">{{ CovidInfo.curedIncr | number   }}</i></p>
                <p class="add" style="color: rgb(174, 33, 44);">{{ CovidInfo.curedCount }}</p>
                <p>累计治愈</p>
            </div>
            <div class="one">
                <p>较昨日<i style="color: rgb(93, 112, 146);">{{ CovidInfo.deadIncr | number   }}</i></p>
                <p class="add" style="color: rgb(93, 112, 146);">{{ CovidInfo.deadCount }}</p>
                <p>累计死亡</p>
            </div>
            <div class="one">
                <p>较昨日<i style="color: rgb(40, 183, 163);">{{ CovidInfo.seriousIncr | number   }}</i></p>
                <p class="add" style="color: rgb(40, 183, 163);">{{ CovidInfo.seriousCount }}</p>
                <p>现存无症状</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                CovidInfo:{
                    modifyTime:"2019年12月12日12:12",//截止时间
                    confirmedCount:"",//累计确诊
                    confirmedIncr:"",//想比昨天累计确诊人数
                    curedCount:"",//累计治愈人数
                    curedIncr:"",//想比昨天累计确诊人数
                    currentConfirmedCount:"",//现在确诊人数
                    currentConfirmedIncr:"",//想比昨天现存确诊人数
                    deadCount:"",//累计死亡人数
                    deadIncr:"",//想比昨天新增死亡人数
                    suspectedCount:"",//累计境外输入人数
                    seriousCount:"",//现存无证装人数
                    seriousIncr:"",//想比昨天无症状
                    suspectedIncr:"",//新增境外输入人数
                    
                }
            }
        },
        mounted(){
        //    console.log(this.$api)
           this.$api.getCovidInfo().then(res=>{
            //    console.log(res.data.newslist[0].desc)
               let desc =res.data.newslist[0].desc
               this.CovidInfo=desc
           })
        },
        //过滤器
        filters:{
            time:function(val){
                let y = new Date(val).getFullYear();
                let m = new Date(val).getMonth()+1;
                let d = new Date(val).getUTCDate();
                let h = new Date(val).getHours();
                let mi = new Date(val).getMinutes();
                
                val =y+"-"+(m>=9? m:"0"+m)+"-"+(d>=10? d:"0"+d)+ "-"+(h>=10? h:"0"+h)+"："+(mi>=10? mi:"0"+mi)
                return val
            },
            number:function(val){
                // console.log(val)
               val= val>0?"+"+val:val
                return val
            }
        }
    }
</script>

<style lang="less" scoped>
    .info{
        box-sizing: border-box;
        padding:0.3rem;
        p{
            font-size: 14px;
            color:#666;
            i{
                color:#666;
                font-size: 12px;
            }
        }
        .add{
        font-weight: 600;
        }
        .infoNum{
            margin:15px 0;
            border:1px solid rgb(207, 207, 207);
            border-radius: 10px ;
            box-sizing: border-box;
            padding:0.4rem;
            min-height:1rem;
            display: flex;
            flex-wrap: wrap;
            .one{
                margin-top: 20px;
                text-align: center;
                width:33.33%;
                line-height: 0.4rem;
                font-size: 14px;
                
            }
        }
    }

</style>