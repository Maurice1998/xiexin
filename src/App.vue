<template>
  <div id="app">
    <div id="titleTab">
      <div id="title">
        <img src="/static/images/xiexin@2.png" alt="" style="height: 47px;width: 98px;">
        <div class="fengexian"></div>
        <div class="titleFont">
          半导体管理驾驶舱
        </div>
      </div>
      <div id="tabList">
        <van-tabs v-model="active" @click="handleClick">
          <van-tab :title="i" v-for="(i,index) in tabList"></van-tab>
        </van-tabs>
      </div>
      <div id="timeShow">
        <div>{{dateStr}}</div>
        <div class="timeDD">{{timeStr}}</div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    created() {
      this.getTime();
    },
    data() {
      return {
        tabList: ['驾驶舱', '生产', '库存', '设备', '质量', '能源'],
        dateStr: undefined,
        timeStr: undefined,
        active: 0,
      }
    },
    methods: {
      handleClick(e) {
        console.log(e);
        if(e==1){
          this.$router.push('/Pro') 
        }else if(e==2){
          this.$router.push('/Store') 
        }
        else if(e==3){
          this.$router.push('/Device') 
        }
        else if(e==4){
          this.$router.push('/Quality') 
        }
        else if(e==5){
          this.$router.push('/Energy') 
        }else{
          this.$router.push('/') 
        }
      },
      setTime() {
        this.dateStr = this.$moment().format('YYYY年MM月DD日');
        this.timeStr = this.$moment().format('HH时mm分ss秒');
      },
      getTime() {
        setInterval(this.setTime, 1000)
      }
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #titleTab {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
  }

  #title {
    display: flex;
    width: 380px;
    justify-content: space-around;
    align-items: center;
  }

  .fengexian {
    width: 1px;
    height: 17.13px;
    opacity: 0.12;
    border: 1px solid #000000;
  }

  .titleFont {
    width: 160px;
    height: 24px;
    font-family: ShiShangZhongHei;
    font-size: 20px;
    color: #44556C;
  }

  #tabList {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    padding: 0 20px;
    padding-right: 220px;
  }

  .van-tab {
    font-family: ShiShangZhongHei;
    font-size: 20px;
    padding: 0 20px;
    margin-top: 10px;
  }

  .van-tab--active {
    color: #487FF7;
  }

  .van-tabs--line .van-tabs__wrap {
    height: 70px;
  }

  .van-tabs__line {
    margin-top: 20px;
    background-color: #487FF7;
  }

  .ivu-tabs-tab {
    border: none;
  }

  #timeShow {
    font-family: ShiShangZhongHei;
    font-size: 20px;
    padding-right: 100px;
  }

  .timeDD {
    height: 20px;
    font-family: YouSheBiaoTiHei;
    font-size: 15px;
    color: #3681E9;
  }
</style>