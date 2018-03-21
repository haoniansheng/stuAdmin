<template>
  <div class="Overview">
    <el-col :span="8" :offset="6" class="chart1">
        <div class="chartTitle1">
          实习生性别与年龄统计
        </div>
       <ve-histogram :data="chartData1" :settings="chartSettings1"></ve-histogram>
    </el-col>
    <el-col :span="8" class="chart2">
      <div class="chartTitle2">
        实习生选课统计
      </div>
     <ve-pie :data="chartData2" :settings="chartSettings2"></ve-pie>
   </el-col>
  </div>
</template>

<script>


export default {
  name: 'Overview',
  data() {
    return {

    }
  },
  methods: {
    getChart1: function() {
      this.chartData1 = {
        columns: ['年龄', '成本', '利润', '占比', '其他'],
        rows: [
          { '男性': 15, '年龄': '20-25', '女性': 15 },
          { '男性': 12, '年龄': '25-30', '女性': 23 },
          { '男性': 21, '年龄': '30-35', '女性': 13 },
          { '男性': 41, '年龄': '35+', '女性': 31 }
        ]
      }
      this.chartSettings1 = {
        metrics: ['男性', '女性'],
        dimension: ['年龄']
      }
    },
    getChart2:function(){
      this.chartData2 = {
        columns: ['课程', '人数'],
        rows: [
          { '课程': 'JAVASE', '人数': 33},
          { '课程': 'Spring', '人数': 12 },
          { '课程': 'javaScript', '人数': 11 },
          { '课程': 'Html', '人数': 15 },
          { '课程': 'Css', '人数': 24 },
          { '课程': '其他', '人数': 1 }
        ]
      }
      this.chartSettings2 = {
        limitShowNum: 5,
        // legendName: {
        //   '其他': '别的时间的时候biu~'
        // }
      }
    }
  },
  created: function () {
      this.getChart1()
      this.getChart2()
    }
}
</script>

<style lang="scss" scoped>
  .Overview{
      margin-left: 30px;
  }
  .chart1,.chart2{
    margin: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
  }
  .chartTitle1,.chartTitle2{
    margin: 20px;
    font-size: 1.5rem
  }
</style>
