<template>
  <div class="Cockpit">
    <div class="line1">
      <div class="sales">
        <div class="salesTitle">
          <img src="/static/images/Cockpit/sales.png" alt="">
          <div>单位(T)</div>
        </div>
        <div id="salesChart"></div>
      </div>
      <div class="siPro">
        <div class="salesTitle">
          <img src="/static/images/Cockpit/si.png" alt="">
          <div>单位(T)</div>
        </div>
        <div id="siChart"></div>
      </div>
      <div class="downtimeRate">
        <div class="salesTitle">
          <img src="/static/images/Cockpit/downtime.png" alt="">
          <div>单位(%)</div>
        </div>
        <div id="downtimeChart"></div>
      </div>
    </div>
    <div class="line2">
      <div class="energy">
        <div class="salesTitle">
          <img src="/static/images/Cockpit/keyEnergyIndex.png" alt="">
          <div>单位(T)</div>
        </div>
        <div id="energyChart"></div>
      </div>
      <div class="quality">
        <div class="salesTitle">
          <img src="/static/images/Cockpit/qualityNotice.png" alt="">

        </div>
        <div id="qulityChart"></div>
      </div>
      <div class="device">
        <div class="salesTitle">
          <img src="/static/images/Cockpit/keyDeviceFin.png" alt="">
          <div>单位(%)</div>
        </div>
        <div id="deviceChart"></div>
      </div>
    </div>
    <div class="line3">
      <div class="storeManage">
        <div class="salesTitle">
          <img src="/static/images/Cockpit/storeManage.png" alt="">
          <div>单位(件)</div>
        </div>
        <div id="storeManageChart"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as echarts from 'echarts';
  export default {
    name: 'Cockpit',
    mounted() {
      this.draw()
    },
    created() {
      this.changeData()
    },
    data() {
      return {
        i: 0,
        qualityData: [[124, 233, 384, 278, 222, 124, 233, 384, 278, 222], [214, 133, 354, 278, 222, 124, 233, 384, 278, 222], [124, 233, 374, 278, 122, 124, 233, 384, 278, 222]],
        trueData: [124, 233, 384, 278, 222, 124, 233, 384, 278, 222]
      }
    },
    methods: {
      changeData() {
        let _this = this;
        setInterval(() => {
          _this.trueData = _this.qualityData[_this.i % 3];
          _this.i++;
          _this.drawQuality();
        }, 5000)
      },
      draw() {
        this.drawSales();
        this.drawSi();
        this.drawDownTimeRate();
        this.drawEnergy();
        this.deviceFinRate();
        this.drawStore();
        this.drawQuality();
      },
      drawSales() {
        var chartDom = document.getElementById('salesChart');
        var myChart = echarts.init(chartDom);
        var option;
        option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: ['接单量', '派产量', '发货量'],
            x: 'left',      //可设定图例在左、右、居中
            y: 'top',     //可设定图例在上、下、居中
            padding: [20, 0, 0, 20],
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
          },
          yAxis: {
            type: 'category',
            data: ['XHP', 'XHS', 'XHN']
          },
          series: [
            {
              name: '接单量',
              type: 'bar',
              data: ['381.2', '1705.3', '1328.2'],
              itemStyle: {
                normal: {
                  color: '#73A0FA'
                },
              },
            },
            {
              name: '派产量',
              type: 'bar',
              data: ['351.9', '1443.1', '1302.9'],
              itemStyle: {
                normal: {
                  color: '#73DEB3'
                },
              },
            },
            {
              name: '发货量',
              type: 'bar',
              data: ['235.5', '1265.1', '1530.7'],
              itemStyle: {
                normal: {
                  color: '#82CFEE'
                },
              },
            }
          ]
        };
        option && myChart.setOption(option);
      },
      drawSi() {
        var chartDom = document.getElementById('siChart');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: ['接单量', '派产量', '发货量'],
            x: 'left',      //可设定图例在左、右、居中
            y: 'top',     //可设定图例在上、下、居中
            padding: [20, 0, 0, 20],
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
          },
          yAxis: {
            type: 'category',
            data: ['XHP', 'XHS', 'XHN']
          },
          series: [
            {
              name: '接单量',
              type: 'bar',
              data: ['381.2', '1705.3', '1328.2'],
              itemStyle: {
                normal: {

                },
              },
            },
            {
              name: '派产量',
              type: 'bar',
              data: ['351.9', '1443.1', '1302.9'],
              itemStyle: {
                normal: {

                },
              },
            },
            {
              name: '发货量',
              type: 'bar',
              data: ['235.5', '1265.1', '1530.7'],
              itemStyle: {
                normal: {

                },
              },
            }
          ]
        };
        option && myChart.setOption(option);
      },
      drawDownTimeRate() {
        var chartDom = document.getElementById('downtimeChart');
        var myChart = echarts.init(chartDom);
        var option;
        option = {
          tooltip: {
            trigger: 'axis',
            position: function (pt) {
              return [pt[0], '10%'];
            }
          },
          legend: {
            data: ['宕机率']
          },
          toolbox: {
            feature: {
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['01-12', '01-14', '01-16', '01-18', '01-20', '01-22', '01-24']
          },
          yAxis: {
            type: 'value'
          },

          series: [
            {
              name: '宕机率',
              type: 'line',
              symbol: 'none',
              sampling: 'lttb',
              itemStyle: {
                color: 'rgb(255, 70, 131)'
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgb(255, 158, 68)'
                }, {
                  offset: 1,
                  color: 'rgb(255, 70, 131)'
                }])
              },
              data: ['19', '6', '23', '30', '12', '39', '20']
            }
          ]
        };
        option && myChart.setOption(option);
      },
      drawEnergy() {
        var chartDom = document.getElementById('energyChart');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: ['日消耗', '月消耗'],
            x: 'left',      //可设定图例在左、右、居中
            y: 'top',     //可设定图例在上、下、居中
            padding: [20, 0, 0, 20],
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
          },
          yAxis: {
            type: 'category',
            data: ['蒸汽消耗t', '循环水消耗t', '电能消耗万Kwh']
          },
          series: [
            {
              name: '日消耗',
              type: 'bar',
              data: ['460', '270', '500'],
              itemStyle: {
                normal: {
                  color: '#10c8d1'
                },
              },
            },
            {
              name: '月消耗',
              type: 'bar',
              data: ['1200', '2000', '3500'],
              itemStyle: {
                normal: {
                  color: '#1d89ed'
                },
              },
            }
          ]
        };
        option && myChart.setOption(option);
      },
      deviceFinRate() {
        var chartDom = document.getElementById('deviceChart');
        var myChart = echarts.init(chartDom);
        var option;
        option = {
          tooltip: {
            trigger: 'axis',
            position: function (pt) {
              return [pt[0], '10%'];
            }
          },
          legend: {
            data: ['设备完好率']
          },
          toolbox: {
            feature: {
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['01-12', '01-14', '01-16', '01-18', '01-20', '01-22', '01-24']
          },
          yAxis: {
            type: 'value'
          },

          series: [
            {
              name: '设备完好率',
              type: 'line',
              symbol: 'none',
              sampling: 'lttb',
              itemStyle: {
                color: 'rgb(0,245,255)'
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgb(255,239,213)'
                }, {
                  offset: 1,
                  color: 'rgb(0,245,255)'
                }])
              },
              data: ['19', '6', '23', '30', '12', '39', '20']
            }
          ]
        };
        option && myChart.setOption(option);
      },
      drawStore() {
        var chartDom = document.getElementById('storeManageChart');
        var myChart = echarts.init(chartDom);
        var option;
        var dataAxis = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
        var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
        var yMax = 500;
        var dataShadow = [];
        for (var i = 0; i < data.length; i++) {
          dataShadow.push(yMax);
        }
        option = {
          legend: {
            data: ['库存'],
            x: 'left',      //可设定图例在左、右、居中
            y: 'top',     //可设定图例在上、下、居中
            padding: [20, 0, 0, 20],
          },
          xAxis: {
            data: dataAxis,
          },
          yAxis: {
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#999'
              }
            }
          },
          series: [
            {
              name: '库存',
              type: 'bar',
              showBackground: true,
              itemStyle: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#83bff6' },
                    { offset: 0.5, color: '#188df0' },
                    { offset: 1, color: '#188df0' }
                  ]
                )
              },
              emphasis: {
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      { offset: 0, color: '#2378f7' },
                      { offset: 0.7, color: '#2378f7' },
                      { offset: 1, color: '#83bff6' }
                    ]
                  )
                }
              },
              data: data
            }
          ]
        };
        option && myChart.setOption(option);
      },
      drawQuality() {
        var chartDom = document.getElementById('qulityChart');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Fss', 'TYU', 'HUo', 'UOO', 'UNS']
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [220, 220, 220, 220, 220, 220, 220, 220, 220, 220],
              type: 'line',
              showSymbol: false,
              itemStyle: {
                normal: {   //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0, color: '#42DDFF' // 0% 处的颜色
                  }, {
                    offset: 0.5, color: '#42AAFF' // 100% 处的颜色
                  }, {
                    offset: 1, color: '#1E84FF' // 100% 处的颜色
                  }]
                  ),  //背景渐变色 
                  lineStyle: {        // 系列级个性化折线样式  
                    type: 'solid',
                    color: "red"
                  }
                }
              },//线条样式
            }, {
              data: this.trueData,
              type: 'line',
              itemStyle: {
                normal: {   //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0, color: '#64EDE5' // 0% 处的颜色
                  }, {
                    offset: 0.5, color: '#62EDE5' // 100% 处的颜色
                  }, {
                    offset: 1, color: '#4ECC99' // 100% 处的颜色
                  }]
                  ),  //背景渐变色 
                  lineStyle: {        // 系列级个性化折线样式  
                    type: 'solid',
                    color: "#4fd6d2"
                  }
                }
              },//线条样式
            }]
        };

        option && myChart.setOption(option);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Cockpit {
    background-color: #f0f2f6;
    height: 1000px;
  }

  .line1 {
    padding: 0 50px;
    padding-top: 30px;
    display: flex;
    justify-content: flex-start;
  }

  .line2 {
    padding: 0 50px;
    padding-top: 20px;
    display: flex;
    justify-content: flex-start;
  }

  .line3 {
    padding: 0 50px;
    padding-top: 20px;
    display: flex;
    justify-content: flex-start;
  }

  .sales {
    width: 656px;
    height: 298.84px;
    background: #FFFFFF;
    border-radius: 5px;
  }

  .siPro {
    width: 578px;
    height: 298.84px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-left: 20px;
  }

  .downtimeRate {
    width: 546px;
    height: 298.84px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-left: 20px;
  }

  .salesTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }

  #salesChart {
    height: 228.84px;
    width: 656px;
  }

  #siChart {
    height: 228.84px;
    width: 578px;
  }

  #downtimeChart {
    width: 546px;
    height: 228.84px;
  }

  .energy {
    width: 542px;
    height: 318px;
    background: #FFFFFF;
    border-radius: 5px;
  }

  #energyChart {
    width: 542px;
    height: 248px;
  }

  .quality {
    width: 692px;
    height: 318px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-left: 20px;
  }

  #qulityChart {
    width: 692px;
    height: 258px;
  }

  .device {
    width: 546px;
    height: 318px;
    background: #FFFFFF;
    margin-left: 20px;
    border-radius: 5px;
  }

  #deviceChart {
    width: 546px;
    height: 248px;
  }

  .storeManage {
    width: 1820px;
    height: 280px;
    background: #FFFFFF;
    border-radius: 5px;
  }

  #storeManageChart {
    width: 1820px;
    height: 260px;
  }
</style>