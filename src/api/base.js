//网络请求地址

const base = {
    //网址配置路径
    baseUrl:"http://api.tianapi.com",
    covidInfoUrl:"/txapi/ncov/index?key=cf463723555b91416314ac657fed397d",//疫情接口  ?key=cf463723555b91416314ac657fed397d

    //地图数据
    baseURL1:"https://qayz.api.storeapi.net",
    chinaMapUrl:"/api/94/219",
    //世界疫情数据
    baseUrl2:"https://qayz.api.storeapi.net",
    worldUrl:"/api/94/222",
    //统计图
    swiperUrl:"http://iwenwiki.com/wapicovid19/ncovimg.php",

    //     请求地址：http://apis.juhe.cn/springTravel/citys
    // 请求参数：=&key=eeae8f0fb9f2352a9808954942d1971d
    // 请求方式：GET
    //出行防疫政策
    // baseTripUrl:"http://apis.juhe.cn", //出行防疫数据  =>/api
    tripUrl:"/api/springTravel/citys",

}

export default base
