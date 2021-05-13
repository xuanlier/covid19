<template>
  <div class="swiper">
    <h1>全国疫情统计图</h1>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item,index) in arr" :key="index">
          <img :src="item.image" alt="">
      </swiper-slide>
     
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="swiperText">
      <div
        :class="{ active: index === activeIndex }"
        class="swiperTextItem"
        v-for="(item, index) in arr"
        :key="index"
        @click="changeSwiper(index)"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
    
  data() {


      const that = this;
    return {
        activeIndex:0,
    //   arr: [
    //     "新增疑似/新增确诊",
    //     "现存确诊/现存疑似",
    //     "死亡/治愈",
    //     "病死率",
    //     "治愈率",
    //   ],
        arr:[],//轮播数据
      swiperOptions: {
        autoplay: true,
        speed:500,
        pagination: {
          el: ".swiper-pagination",
        },
        on: {
          slideChangeTransitionStart: function () {
            // alert(this.activeIndex);
            // console.log(this.activeIndex)
            that.activeIndex = this.activeIndex
          },
        },
        // Some Swiper option/callback...
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    // console.log("Current Swiper instance object", this.swiper);
    // this.swiper.slideTo(2, 1000, false);
    this.$api.getSwiperInfo().then(res=>{
        // console.log(res.data.result)
        if(res.data.status===200){
            // console.log(res.data.result)
            this.arr = res.data.result
            
        }
        // swiperArr=res.data.result
    })
  },
  methods: {
    changeSwiper(index) {
      console.log("----", index);
      //切换swiper 显示 ---
      this.swiper.slideTo(index, 1000, false);
      //点击切换按钮
      this.activeIndex = index

    },
  },
};
</script>

<style lang="less" scoped>
.swiper {
  position: relative;
  min-height: 6rem;
  box-sizing: border-box;
  padding: 0.2rem;
  background-color: rgb(248, 246, 246);
  h1 {
    font-weight: 600;
  }
  img{
      width:100%;
      margin-top: 20px;
  }
  .swiperText {
    font-size: 0.2rem;
    display: flex;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
  }
  .swiperTextItem {
    margin: 0 0.1rem;
    background-color: #e7e7e7;
    display: flex;
    box-sizing: border-box;
    padding: 0.15rem;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
  .active {
    background-color: #d7d7d7;
    color: #fff;
  }
}
</style>