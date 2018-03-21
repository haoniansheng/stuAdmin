<template>
<div style="height:100%;float:left">
  <div class="margin" v-bind:class="{ 'active':isScroll,'active1':isCollapse}" >
  </div>
  <el-menu  v-bind:class="{'scroll':isScroll,'active':isCollapse}"  default-active="1" class="menu el-menu-vertical-demo" router @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <el-menu-item index="Overview">
      <p class="el-icon-menu"></p>
      <span slot="title">总览</span>
    </el-menu-item>
    <el-menu-item index="StuTable">
      <p class="el-icon-document"></p>
      <span slot="title">学生信息</span>
    </el-menu-item>
    <el-submenu index="3">
      <template slot="title">
             <i class="el-icon-date"></i>
             <span slot="title">课程和项目</span>
           </template>
      <el-menu-item-group>
        <el-menu-item index="3-1">课程</el-menu-item>
        <el-menu-item index="3-2">课程 </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
              <i class="el-icon-edit-outline"></i>
              <span slot="title">评价系统</span>
            </template>
      <el-menu-item-group>
        <el-menu-item index="4-1">周评价</el-menu-item>
        <el-menu-item index="4-2">课程评价</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="5">
      <i class="el-icon-setting"></i>
      <span slot="title">个人中心</span>
    </el-menu-item>
    <div class="switchCollapse" v-on:click="switchCollapse">
      <i v-bind:class="{'el-icon-d-arrow-left':iconRightIsActive ,'el-icon-d-arrow-right':!iconRightIsActive}" class="icon-right"></i>
      <span slot="title"></span>
    </div>
  </el-menu>

</div>
</template>

<script>

export default {
  data() {
    return {
      isScroll:'',
      iconRightIsActive: false,
      isCollapse: false
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log("open" + key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log("Close" + key, keyPath);
    },
    switchCollapse: function() {
      this.iconRightIsActive = !this.iconRightIsActive
      this.isCollapse = !this.isCollapse
    },
    scrolled(){
      var scroll= document.documentElement.scrollTop || document.body.scrollTop;
      if(scroll>80){
        this.isScroll=true
      }else{
        this.isScroll=false
      }
    },
  },
  mounted() {
    document.body.addEventListener("scroll", this.scrolled)
  }
}



</script>

<style lang="scss">
.margin{
  width: 180px;
  height: 100%;
  position: absolute;
}
.margin.active{
  position: static;
  float: left;
}
.margin.active1{
  width: 65px;
}
.menu {
    min-height: calc(100% - 80px);
    height: 100%;
    width: 180px;
    float: left;
    background-color: #fff;
    border-right: 1px solid #e6e6e6;
}
.menu.scroll{
  position: fixed;
  top:0px;
}
.el-menu {
    border: none;
}
.menu.active {
    width: 65px;
}
.menu > ul {
    height: 100%;

}
.switchCollapse {
    text-align: center;
    padding-top: 20px;
    .icon-right {
        padding: auto;
        margin-right: auto;
    }
}

.switchCollapse {
    font-size: 14px;
    color: #303133;
    cursor: pointer;
    -webkit-transition: border-color 0.3s,background-color 0.3s,color 0.3s;
    transition: border-color 0.3s,background-color 0.3s,color 0.3s;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 56px;
    margin: 0 auto;
}
</style>
