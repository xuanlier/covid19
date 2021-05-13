
<template>
    <div>
        <!-- <p>国际地图</p> -->
         <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
        <div id="main2" style="width: 7rem;height:6.5rem;"></div>
    </div>
</template>

<script>
import echarts from "echarts"
import worldName from "../../utils/country"
    export default {
        data(){
            return{

            }
        },
         mounted(){
            this.int();
        },
        methods:{
          int(){
              // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main2'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: '世界疫情'
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
                            max: 10000,
                            color: "#4F070D"
                        }
                    ]
               }
            ],
            series: [{
                name: '国',
                type: 'map',
                map:'world',
                zoom:1.2,
                roam:true,//缩放
                nameMap:worldName,//映射国家名字
                // label:{
                //     show:true,
                //     fontSize:10,
                // },
                data: [
                    {
                        name:'中国',
                        value:200,
                    },
                    {
                        name:'俄罗斯',
                        value:20,
                    },
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
     #main2{
        margin-top:10px;
    }
</style>