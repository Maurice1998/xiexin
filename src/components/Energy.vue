<template>
    <div class="container">
        <div class="line1">
            <div class="eleConsume">
                <div class="titleText">
                    <img src="/static/images/Cockpit/start.png" alt="">
                    电能消耗
                </div>
                <div id="eleConsumeChart"></div>
            </div>
            <div class="airComsume">
                <div class="titleText">
                    <img src="/static/images/Cockpit/start.png" alt="">
                    仪表/压缩空气消耗
                </div>
                <div id="airComsumeChart"></div>
            </div>
        </div>
        <div class="line2">
            <div class="waterConsume">
                <div class="titleText">
                    <img src="/static/images/Cockpit/start.png" alt="">
                    水消耗
                </div>
                <div id="waterConsumeChart"></div>
            </div>
            <div class="H2Comsume">
                <div class="titleText">
                    <img src="/static/images/Cockpit/start.png" alt="">
                    氢气消耗
                </div>
                <div id="H2ComsumeChart"></div>
            </div>
        </div>
        <div class="line3">
            <div class="steamConsume">
                <div class="titleText">
                    <img src="/static/images/Cockpit/start.png" alt="">
                    蒸汽消耗
                </div>
                <div id="steamConsumeChart"></div>
            </div>
            <div class="N2Comsume">
                <div class="titleText">
                    <img src="/static/images/Cockpit/start.png" alt="">
                    氮气消耗
                </div>
                <div id="N2ComsumeChart"></div>
            </div>
        </div>
    </div>
</template>
<script>
    import * as echarts from 'echarts';
    export default {
        mounted() {
            this.draw()
        },
        data() {
            return {

            }
        },
        methods: {
            draw() {
                this.drawEleChart()
                this.drawSteamChart()
                this.drawWaterChart()
                this.drawAirChart()
            },
            drawSteamChart() {
                let chartDom1 = document.getElementById('steamConsumeChart');
                console.log('11', chartDom1)
                let myChart2 = echarts.init(chartDom1);
                let option;
                option = {
                    legend: {
                        data: ['总量', '单位消耗'],
                        x: 'right',      //可设定图例在左、右、居中right
                        y: 'top',     //可设定图例在上、下、居中
                        padding: [0, 20, 0, 0]
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                    },
                    yAxis: [
                        {
                            type: 'value',
                            name: '(t)',
                            splitLine: { show: false },
                            axisLine: {
                                show: true,
                            },
                            axisLabel: {

                            }
                        },
                        {
                            type: 'value',
                            name: '(t/t)',
                            splitLine: { show: false },
                            position: 'right',
                            axisLine: {
                                show: true,
                            },
                            axisLabel: {

                            }
                        }
                    ],
                    series: [{
                        name: '总量',
                        data: [38000, 22000, 24000, 12000, 8000, 10000, 18000, 12020, 22000, 25000, 19100, 31200],
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        { offset: 0, color: '#83bff6' },
                                        { offset: 0.5, color: '#64aef2' },
                                        { offset: 1, color: '#188df0' }
                                    ]
                                )
                            },
                        },
                    },
                    {
                        name: '单位消耗',
                        data: [18000, 12000, 14000, 10000, 3000, 6000, 11000, 8020, 11000, 22000, 14100, 21200],
                        type: 'bar',
                        yAxisIndex: 1,
                        itemStyle: {
                            normal: {

                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        { offset: 1, color: '#4ECC99' },
                                        { offset: 0.5, color: '#3bd8cf' },
                                        { offset: 0, color: '#64EDE5' }
                                    ]
                                )
                            },
                        },
                    }]
                };
                option && myChart2.setOption(option);
            },
            drawEleChart() {
                let chartDom1 = document.getElementById('eleConsumeChart');
                console.log('11', chartDom1)
                let myChart2 = echarts.init(chartDom1);
                let option;
                option = {
                    legend: {
                        data: ['总量', '还原炉'],
                        x: 'right',      //可设定图例在左、右、居中right
                        y: 'top',     //可设定图例在上、下、居中
                        padding: [20, 20, 0, 0]
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                    },
                    yAxis: {
                        type: 'value',
                        name: '(Kwh)'
                    },
                    series: [{
                        name: '总量',
                        data: [900, 1000, 1210, 700, 1490, 1222, 800, 1020, 990, 1230, 1100, 1200],
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        { offset: 0, color: '#83bff6' },
                                        { offset: 0.5, color: '#64aef2' },
                                        { offset: 1, color: '#188df0' }
                                    ]
                                )
                            },
                        },
                    },
                    {
                        name: '还原炉',
                        data: [800, 999, 1010, 670, 1190, 922, 756, 922, 890, 1010, 700, 900],
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        { offset: 1, color: '#4ECC99' },
                                        { offset: 0.5, color: '#3bd8cf' },
                                        { offset: 0, color: '#64EDE5' }
                                    ]
                                )
                            },
                        },
                    }]
                };
                option && myChart2.setOption(option);
            },
            drawAirChart(){
                let chartDom1 = document.getElementById('airComsumeChart');
                console.log('11', chartDom1)
                let myChart2 = echarts.init(chartDom1);
                let option;
                option = {
                    legend: {
                        data: ['总量', '单位消耗'],
                        x: 'right',      //可设定图例在左、右、居中right
                        y: 'top',     //可设定图例在上、下、居中
                        padding: [0, 20, 0, 0]
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                    },
                    yAxis: [
                        {
                            type: 'value',
                            name: '(Nm³)',
                            splitLine: { show: false },
                            axisLine: {
                                show: true,
                            },
                            axisLabel: {

                            }
                        },
                        {
                            type: 'value',
                            name: '(Nm³/kg-Si)',
                            splitLine: { show: false },
                            position: 'right',
                            axisLine: {
                                show: true,
                            },
                            axisLabel: {

                            }
                        }
                    ],
                    series: [{
                        name: '总量',
                        data: [900, 1000, 1210, 700, 1490, 1222, 800, 1020, 990, 1230, 1100, 1200],
                        type: 'bar',
                        barWidth : 25,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        { offset: 0, color: '#83bff6' },
                                        { offset: 0.5, color: '#64aef2' },
                                        { offset: 1, color: '#188df0' }
                                    ]
                                )
                            },
                        },
                    },
                    {
                        name: '单位消耗',
                        data: [600, 899, 510, 670, 990, 822, 556, 922, 890, 1010, 700, 900],
                        type: 'line',
                        yAxisIndex: 1,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        { offset: 1, color: '#4ECC99' },
                                        { offset: 0.5, color: '#3bd8cf' },
                                        { offset: 0, color: '#64EDE5' }
                                    ]
                                )
                            },
                        },
                    }]
                };
                option && myChart2.setOption(option);
            },
            drwaH2Chart(){

            },
            drwaN2Chart(){

            },
            drawWaterChart() {
                var chartDom = document.getElementById('waterConsumeChart');
                var myChart = echarts.init(chartDom);
                var option;

                option = {
                    color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
                    
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    legend: {
                        data: ['总量', '新鲜水', '脱盐水', '高纯水'],
                        x: 'right',      //可设定图例在左、右、居中right
                        y: 'top',     //可设定图例在上、下、居中
                        padding: [0, 20, 0, 0]
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                    {
                            name: '脱盐水',
                            type: 'line',
                            stack: '总量',
                            smooth: true,
                            lineStyle: {
                                width: 0
                            },
                            showSymbol: false,
                            areaStyle: {
                                opacity: 0.8,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#FFB600'
                                }, {
                                    offset: 1,
                                    color: '#f4e2b3'
                                }])
                            },
                            emphasis: {
                                focus: 'series'
                            },
                            data: [320, 132, 201, 334, 190, 130, 220, 201, 334, 190, 130, 220]
                        },
                        {
                            name: '新鲜水',
                            type: 'line',
                            stack: '总量',
                            smooth: true,
                            lineStyle: {
                                width: 0
                            },
                            showSymbol: false,
                            areaStyle: {
                                opacity: 0.8,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#007F51'
                                }, {
                                    offset: 1,
                                    color: '#92d9bf'
                                }])
                            },
                            emphasis: {
                                focus: 'series'
                            },
                            data: [120, 282, 111, 234, 220, 340, 310, 111, 234, 220, 340, 310]
                        },
                        {
                            name: '高纯水',
                            type: 'line',
                            stack: '总量',
                            smooth: true,
                            lineStyle: {
                                width: 0
                            },
                            showSymbol: false,
                            areaStyle: {
                                opacity: 0.8,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#0B8DCE'
                                }, {
                                    offset: 1,
                                    color: '#8acaea'
                                }])
                            },
                            emphasis: {
                                focus: 'series'
                            },
                            data: [220, 402, 231, 134, 190, 230, 120, 231, 134, 190, 230, 120]
                        },
                        {
                            name: '总量',
                            type: 'line',
                            stack: '总量',
                            smooth: true,
                            lineStyle: {
                                width: 0
                            },
                            showSymbol: false,
                            areaStyle: {
                                opacity: 0.8,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#FF2910'
                                }, {
                                    offset: 1,
                                    color: '#f5a07f'
                                }])
                            },
                            emphasis: {
                                focus: 'series'
                            },
                            data: [140, 232, 101, 264, 90, 340, 250, 101, 264, 90, 340, 250]
                        }
                    ]
                };

                option && myChart.setOption(option);
            },
        },
    }
</script>
<style>
    .container {
        width: 100%;
        height: 1000px;
        background-color: #f0f2f6;
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

    .eleConsume {
        width: 900px;
        height: 300px;
        border-radius: 5px;
        background: #FFFFFF;
    }

    #eleConsumeChart {
        width: 900px;
        height: 280px;
    }

    .airComsume {
        width: 900px;
        height: 300px;
        border-radius: 5px;
        background: #FFFFFF;
        margin-left: 20px;
    }

    #airComsumeChart{
        width: 900px;
        height: 280px;
    }

    .waterConsume {
        width: 900px;
        height: 300px;
        border-radius: 5px;
        background: #FFFFFF;
    }

    #waterConsumeChart {
        width: 900px;
        height: 240px;
    }

    .H2Comsume {
        width: 900px;
        height: 300px;
        border-radius: 5px;
        background: #FFFFFF;
        margin-left: 20px;
    }


    #H2ComsumeChart{
        width: 900px;
        height: 280px;
    }

    .steamConsume {
        width: 900px;
        height: 300px;
        border-radius: 5px;
        background: #FFFFFF;
    }

    #steamConsumeChart {
        width: 900px;
        height: 280px;
    }

    .N2Comsume {
        width: 900px;
        height: 300px;
        border-radius: 5px;
        background: #FFFFFF;
        margin-left: 20px;
    }

    #N2ComsumeChart{
        width: 900px;
        height: 280px;
    }

    .titleText {
        height: 21px;
        font-family: ShiShangZhongHei;
        text-align: left;
        padding: 20px;
        font-size: 17px;
        color: #000000;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    img {
        margin-right: 5px;
    }
</style>