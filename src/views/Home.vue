<template>
  <div class="home">
    <!-- 顶部图片 -->
    <div class="header">
        <img src="../assets/image/1.jpg" alt="">
    </div>
   <!-- 疫情信息 -->
   <Covid19Info />
   <!-- 疫情状况 -->
   <Covid19Condition/>
   <!-- 疫情地图 -->
   <Map/>
   <!-- 轮播图 -->
   <Swiper />
   <!-- 疫情防疫政策消息城市 -->
   <!-- <Tourism /> -->
   <Trip  />
   <!-- 最新消息 -->
    <NewInfo/>
    
  </div>
</template>

<script>
import Covid19Info from "./covid19/Covid19Info"
import Covid19Condition from "./covid19/Covid19Condition"
import Map from "./map/Map"
import Swiper from "./swiper/Swiper"
import Tourism from "./tourism/Tourism"
import Trip from "./tourism/Trip"
import NewInfo from "./newInfo/NewInfo"
export default {
  name: 'Home',
  components: {
    Covid19Info,
    Covid19Condition,
    Map,
    Swiper,
    Tourism,
    Trip,
    NewInfo
  }
}
</script>
<style scoped lang="less">
body{
  margin: 0 auto;
  max-width: 750px;
}
  .header{
    img{
      width:100%;
    }
  }
</style>
