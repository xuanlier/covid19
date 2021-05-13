## 疫情小项目
1. 网络请求数据  axios
2. echarts图表工具  地图
3. 轮播图swiper
4. vant使用 资源库  三方
5. 封装自己组件  tab 切换



## 项目   初始化配置
1. 初始化处理
2. css初始化  --静态文件
3. 安装axios 请求 ---（那封装好的请求）
    cnpm i axios --save
4. 创建一个文件 -- 公共配置文件  接口  请求方法
5. 创建请求接口 api 文件
6. 引入接口

## Vue 项目引入echarts 图表创建地图
1. 方法一、直接引入echarts 挂载main.js   vue实例原型上
    01. cnpm install echarts@4.8.0 --save 
    02. main.js 导入echarts 
    03. Vue.prototype.$echarts= echarts
2. 方法二、在组件内部只用echarts 
3. 方法三、 开发城vue 的插件


## vant  插件
1. 网址：https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart
## Vue 2 项目，安装 Vant 2：
npm i vant -S

## Vue 3 项目，安装 Vant 3：
npm i vant@next -S

## 自动按需引入组件
1. 安装插件
    npm i babel-plugin-import -D
2. 
    / 在.babelrc 中添加配置
    // 注意：webpack 1 无需设置 libraryDirectory
    {
    "plugins": [
        ["import", {
        "libraryName": "vant",
        "libraryDirectory": "es",
        "style": true
        }]
    ]
    }