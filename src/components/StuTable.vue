<template>
   <el-col  :span="18"  class="StuTable" >
    <div class="tableName">
      学生详细信息综合表
    </div>
    <div class="grid-content bg-purple-light">
      <el-table :data="tableData.stulist" border style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" min- width="180">
        </el-table-column>
        <el-table-column prop="age" label="年龄">
        </el-table-column>
        <el-table-column prop="school" label="学校">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="middle">
              修改
            </el-button>
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small">
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <!-- <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="tableData.curpage" :page-size="10" layout="total , prev, pager, next, jumper" :total="110">
      </el-pagination> -->
    </div>
  </el-col>
 </template>

<script>
export default {
  name: 'StuTable',
  data() {
    return {
      tableData: {
        stulist: [
          {
            name:'1'
          }
        ]
      }
    }
  },
  methods: {
    getStuAll: function() {
       this.jumpStuPage(1)
    },
    jumpStuPage:function(page){
      var that = this
      this.$http({
        method: 'post',
        url:'./student/getAllStudentWithPage.do',
        params: {
            curpage:page
        }
      })
      .then(function(response) {
        response.data.stulist.forEach((item, index) => {
          that.tableData.stulist.push({
            name: item.stu_name,
            age: item.age,
            school: item.school,
            sex: item.sex,
            stuId: item.stu_id
          })
        })
        that.tableData.curpage = response.data.curpage
      })
      .catch(function(error) {
        console.log(error);
      })
    }
  },
  created: function() {
    // this.getStuAll();
  },
}
</script>

<style lang="scss" scoped>

.StuTable {
    min-height: 600px;
    height: 4600px;
    background-color: #fff;
    border:1px solid #ddd;
    padding: 30px;
    margin-left: 5%;
    margin-top: 30px;
    .tableName {
        text-align: center;
        font-size: 150%;
        margin-bottom: 20px;
    }
}

.el-col {
    border-radius: 4px;
}

.bg-purple-dark {
    background: #fff;
}

.bg-purple {
    background: #fff;
}

.bg-purple-light {
    background: #fff;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
</style>
