<template>
  <div class="trip">
    <h3>疫情期间出行政策</h3>
    <div class="one">
      <!-- 出发城市 -->
      <van-field
        v-model="fieldValue"
        is-link
        readonly
        label="出发地区"
        placeholder="请选择所在地区"
        @click="show = true"
      />
      <van-popup class="right" v-model="show" round position="bottom">
        <van-cascader
          v-model="cascaderValue"
          title="请选择所在地区"
          :options="options"
          @close="show = false"
          @finish="onFinish"
        />
      </van-popup>
      <!-- 到达城市 -->
      <van-field
        v-model="fieldValueTo"
        is-link
        readonly
        label="到达地区"
        placeholder="请选择所在地区"
        @click="showTo = true"
      />
      <van-popup v-model="showTo" round position="bottom">
        <van-cascader
          v-model="cascaderValueTo"
          title="请选择所在地区"
          :options="options"
          @close="showTo = false"
          @finish="onFinishTo"
        />
      </van-popup>
    </div>
    <div class="button">
        <van-cell class="btn"  is-link @click="showPopup">
          <p>点击查询</p>
          </van-cell>
      <van-popup
      class="bor"
        v-model="showBtn"
        closeable
        position="bottom"
        :style="{ height: '80%' }"
      >{{123456}}</van-popup>
    </div>
  </div>
</template>

<script>
import tripKeys from "../../api/secret";
export default {
  data() {
    return {
      show: false,
      showTo: false,
      showBtn:false,
      fieldValue: "",
      fieldValueTo: "",
      cascaderValue: "",
      cascaderValueTo: "",
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: "浙江省",
          value: "330000",
          children: [{ text: "杭州市", value: "330100" }],
        },
        {
          text: "江苏省",
          value: "320000",
          children: [{ text: "南京市", value: "320100" }],
        },
      ],
    };
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    // 出发
    onFinish({ selectedOptions }) {
      console.log(selectedOptions);
      this.show = false;
      this.fieldValue = selectedOptions.map((option) => option.text).join("/");
    },
    // 到达
    onFinishTo({ selectedOptions }) {
      console.log(selectedOptions);
      this.showTo = false;
      this.fieldValueTo = selectedOptions
        .map((option) => option.text)
        .join("/");
    },
    showPopup() {
      this.showBtn = true;
    },

  },
  mounted() {
    this.$api
      .getTrip({
        key: tripKeys.tripKey,
      })
      .then((res) => {
        console.log("---------------", res.data.result);
        if (res.data.result) {
          let arr = [];
          res.data.result.forEach((ele) => {
            let temp = {};
            temp.text = ele.province;
            temp.value = ele.province_id;
            temp.children = [];
            ele.citys.forEach((item) => {
              let obj = {};
              obj.text = item.city;
              obj.value = item.city_id;
              temp.children.push(obj);
            });
            arr.push(temp);
          });
          this.options = arr;
        } else {
          console.log("今日访问量已达上限");
        }
      });
  },
};
</script>

<style lang="less" scoped>
.trip {
  box-sizing: border-box;
  padding: 0.2rem;
}
h3 {
  font-weight: 600;
  margin: 10px 0;
}
// .van-cell__title.van-field__label {
//     width: 10%;
//     float: left;
// }
//  .van-cell__value .van-field__value{
//    float: right;
//  }
.button {
  width: 100%;
  background-color: chartreuse;
  color: #fff;
  text-align: center;
  margin-top: 0.2rem;
  height: 0.8rem;
  line-height: 0.8rem;
  i{
    display: none;
  }
  .btn{
    background-color: chartreuse;
    text-align: center;
    font-size: 16px;
    color:#fff;
    p{
      text-align: center;
      color:#fff;
    }
  }
  .bor{
    border-radius: 30px 30px 0 0 ;
  }
}
</style>