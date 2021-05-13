<template>
    <div>
        <!-- <p>中国地图</p> -->
        <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
        <div id="main" style="width: 7rem;height:6.5rem;"></div>
    </div>
</template>

<script>
import echarts from "echarts"
import provinceName from "../../utils/country"
    export default {
        data(){
            return{

            }
        },
        mounted(){
            this.china();
            //请求数据  [{ name:'' ,value:'' }]
            this.$api.getMapInfo().then(res=>{
                // console.log(res.data)
                // console.log(res.data.retdata)
                if(res.data.codeid===10000){
                    // console.log(res.data.retdata)
                        let chinaMapArr = [];
                    res.data.retdata.forEach(ele => {
                        let temp ={}
                        temp.name = ele.xArea
                        temp.value= ele.curConfirm
                        chinaMapArr.push(temp)
                    });
                    // console.log(chinaMapArr);
                    //插入地图上--
                    
                }
            })
            
            
        
        },
        methods:{
          china(id,chinaMapArr){
              // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: '中国疫情'
            },
            
            tooltip: {
                formatter:function(data){
                    return `<div>${ data.name }
                        <div> 现在确诊人：${ data.value }</div>
                    <div/>`
                }
            },
            visualMap:[
               {
                    type:'piecewise',
                    pieces: [ // 配置颜色区间
                      {
                            min: 0,
                            max: 0,
                            color: "#FFFFFF"
                        },
                        {
                            min: 1,
                            max: 10,
                            color: "#FDFDCF"
                        },
                        {
                            min: 10,
                            max: 100,
                            color: "#FE9E83"
                        },
                        {
                            min: 100,
                            max: 500,
                            color: "#E55A4E"
                        },
                        {
                            min: 500,
                            max: 10000000,
                            color: "#4F070D"
                        }
                    ]
               }
            ],
            series: [{
                name: '省',
                type: 'map',
                map:'china',
                zoom:1.2,
                nameMap:provinceName,//映射省份名字
                label:{
                    show:true,
                    fontSize:10,
                },
                data:[
                    {
                        name:"北京",
                        value:20
                    }
                ]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
          }
        }
    }
    
</script>

<style lang="less" scoped>

    #main{
        margin-top:10px;
    }
</style>