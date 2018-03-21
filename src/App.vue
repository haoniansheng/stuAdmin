<template>
  <div id="app">
    <router-view name="Header"/>
    <router-view  name="Menu"/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
      return {

      }
    },
    methods: {
      // scrolled(){
      //   var scroll= document.documentElement.scrollTop || document.body.scrollTop;
      //   if(scroll>80){
      //     this.isScroll=true
      //   }else{
      //     this.isScroll=false
      //   }
      // },
   },
   mounted() {
     // document.body.addEventListener("scroll", this.scrolled)
   },
}

</script>

<style lang="scss">

#app{
  height: 100%;
  width: 100%;
}
html,body{
    height:100%;
    overflow: hidden;
}
body {
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
  overflow: auto;
  font-weight: 400;
  height:100%;
  background-color: #F9F9F9;
  -webkit-font-smoothing: antialiased;
  /* background: url("../assets/demo-bg.jpg"); */
}

* {
  padding: 0px;
  margin: 0px;
}
a {
  text-decoration: none;
  color: #000;
}

header {
  height: 80px;
  /*background-color: rgba(255, 255, 255, 0.4);*/
  color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 80px;
  z-index: 100;
  position: relative;
}

header h1 {
  padding-left: 10%;
  margin: 0;
  float: left;
  font-size: 32px;
  font-weight: 400;
  color: #fff;
}
</style>
