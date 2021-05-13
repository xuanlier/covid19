<template>
  <div class="footer">
    <p>最新消息</p>
    <ul>
      <li class="one" v-for="(item, index) in covidInfo" v-bind:key="index">
        <van-cell is-link @click="showPopup">
            <div class="left">
            <p>{{ item.pubDateStr }}</p>
            </div>
            <div class="right">
            <p>{{ item.title }} </p>
            <i>{{ item.summary }}</i>
            </div>
        </van-cell>
        <van-popup
        
            class="padding"
            v-model="show"
            closeable
            position="bottom"
            :style="{ height: '80%' }"
            ><p>{{ item.summary }}</p>
            <p>消息来自{{item.infoSource}}</p>
            <a :href="item.sourceUrl">详细情况</a>
            
            </van-popup>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
        show:false,
      covidInfo: {
        pubDateStr: "",
        title: "",
        summary: "",
      },
    };
  },
  methods: {
      showPopup() {
      this.show = true;
    },
  },
  mounted() {
    // console.log(this.$api)
    this.$api.getCovidInfo().then((res) => {
      if (res.data.code == 200) {
        // console.log(res.data);
        let news = res.data.newslist[0].news;
        this.covidInfo = news;
      }
    });
  },
};
</script>

<style lang="less" scoped>
.footer {
  width: 7rem;
  box-sizing: border-box;
  margin: 10px auto;
  padding: 10px;
  border: 1px solid #666;
  box-shadow: 0 0 2px 0;
  p{
      font-weight: 600;
  }
  ul .one {
      margin: 10px 0;
    display: flex;
    flex-wrap: wrap;
      .padding{
          display: block;
          box-sizing: border-box;
          padding:0.6rem ;
          border-radius: 0.8rem 0.8rem 0 0;
      }
    .left {
      width: 30%;
      font-size: 12px;
      margin-right: 10px;
      p {
        color: #fff;
        text-align: center;
        background-color: red;
        display: block;
        height: 0.35rem;
        line-height: 0.35rem;
        font-weight: 600;
      }
    }
    .right {
      width: 90%;
      font-size: 12px;
      margin: 0 auto;
      position: relative;
      p {
        display: block;
        font-weight: 900;
        font-size: 16px;
        margin-bottom: 5px;
    
      }
      i {
          font-size: 16px;
        display: block;
        color: #666;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        line-clamp: 1;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>