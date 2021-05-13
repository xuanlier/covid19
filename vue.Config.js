// /跨域   反向代理
module.exports = {
    devServe:{
        proxy:{
            '/api':{
                target:'http://apis.juhe.cn', //真实请求的网址
                ws:true,
                changeOrigin:true, //是否允许跨域
                pathReWrite:{   //重定向
                    '^/api':""
                }
            },
            // '/foo':{target:'<other_url>'
            // }
        }
    }
}