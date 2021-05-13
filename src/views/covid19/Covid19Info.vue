<template>
    <div class="info">
        <p>新冠信息</p>
        <div class="covidinfo">
            <ul>
                <li>{{covidInfo.note1}}</li>
                <li>{{covidInfo.note2}}</li>
                <li>{{covidInfo.note3}}</li>
                <li>{{covidInfo.remark1}}</li>
                <li>{{covidInfo.remark2}}</li>
                <li>{{covidInfo.remark3}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                covidInfo:{
                    note1:"",
                    note2:"",
                    note3:"",
                    remark1:"",
                    remark2:"",
                    remark3:"",
                }
            }
        },
        //进入之后--获取动态信息
        mounted(){
            // console.log(this.$api);
            this.$api.getCovidInfo().then(res=>{
                // console.log(res.data);
                if(res.data.code == 200){
                    // console.log(res.data.newslist[0].desc);
                    let desc = res.data.newslist[0].desc
                    this.covidInfo=desc
                    // this.covidInfo.note1=desc.note1
                    // this.covidInfo.note2=desc.note2
                    // this.covidInfo.note3=desc.note3
                    // this.covidInfo.remark1=desc.remark1
                    // this.covidInfo.remark2=desc.remark2
                    // this.covidInfo.remark3=desc.remark3
                }
            })
        }
    }
</script>

<style lang="less" scoped>
    .info{
        box-sizing: border-box;
        padding:0.2rem;
          p {
            font-weight: 600;
        }
        p::before{
            content: "";
            width:50px;
            height:1000px;
            background-color: blueviolet;
        }
        .covidinfo{
            ul{
                padding:0.2rem;

                li{
                    font-size: 12px;
                    line-height: 0.4rem;
                    color:#666;
                }
            }
        }
    }
</style>