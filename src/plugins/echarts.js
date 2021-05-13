import echarts from 'echarts'
// import worldName from "../utils/country"

//创建install 函数
/**
 * 
 *     Object.defineProperties('object',options)
 * object 原对象  给这个对象添加属性  或者修改
 * options  操作原对象配置信息
 */
const install = function(Vue){
    //Vue.prototype.$echarts={line(),draw()}
    Object.defineProperties(Vue.prototype,{
        $charts:{
            get(){
                return {
                    //绘制折线---
                    line(){
                        console.log('绘制线')
                    },
                    // china(id){
                    //         // 基于准备好的dom，初始化echarts实例
                    //   var myChart = echarts.init(document.getElementById('main'));
              
                    //   // 指定图表的配置项和数据
                    //   var option = {
                    //       title: {
                    //           text: '中国疫情'
                    //       },
                    //       tooltip: {},
                    //       series: [{
                    //           name: '省',
                    //           type: 'map',
                    //           map:'china',
                    //           zoom:1.2,
                    //           data:[
                    //               {
                    //                   name:"北京",
                    //                   value:20
                    //               }
                    //           ]
                    //       }]
                    //   };
              
                    //   // 使用刚指定的配置项和数据显示图表。
                    //   myChart.setOption(option);
                    // }
                }
            }
        }
    })
}   


export default install