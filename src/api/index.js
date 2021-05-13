//请求方法
import axios from "../utils/request"
//接口
import base from "./base.js"
import secret from "./secret"
const api ={
    /**
     * 疫情的动态数据信息
     * 
     */
    getCovidInfo(){

        return axios.get(base.baseUrl + base.covidInfoUrl)
    },
    getMapInfo(){
        return axios.get(base .baseURL1 + base.chinaMapUrl +secret.sign)
    },
    getSwiperInfo(){
        return axios.get(base.swiperUrl)
    },
    // 出行城市列表
    getTrip(params){
        
        return axios.get(base.tripUrl,{
            params
        })
    }
}

//导出--api ={}
export default  api