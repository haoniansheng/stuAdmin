<template>

  <div id="header">
    <div class="shadow">
      <div class="hover">
        <div class="mohu"></div>
        <header class="header">
          <div class="head-name">
            <a href="#">
              <h1>实习生追踪管理系统</h1>
            </a>
          </div>
        </header>
      </div>
    </div>
  </div>

</template>

<script>

 </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
* {
    padding: 0px;
    margin: 0px;
}
#header{
  z-index: 100;
  height: 80px;
  /*border-bottom: 1px solid #ddd;*/
  position: relative;
  width: 100%;

  .shadow {
    /*border-bottom-right-radius:20px;*/
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.50);
    overflow: hidden;
    /*border-bottom: 2px solid rgba(0, 0, 0, 0.5);*/
  }

  .hover {}

  .mohu {
    height: 80px;
    /*z-index: 10110;*/
    filter: blur(15px);
    overflow: hidden;
    /*background: url(img/demo-bg.jpg) center center / cover no-repeat;*/
    /*background: #ddd;*/
  }
  header h1 {
      padding-left: 120px;
      margin: 0;
      float: left;
      font-size: 32px;
      font-weight: 400;
      color: #fff;
  }
  header {
    height: 80px;
    /* background-color: rgba(255, 255, 255, 0.4); */
    color: #fff;
    top: 0;
    left: 0;
    width: 100%;
    line-height: 80px;
    z-index: 100;
    position: relative;
}
  .header {
    position: absolute;
    top: 0;
        width: 100%;
    overflow: hidden;
    // background-color: #20a0ff;
    background: linear-gradient(to bottom,#086ed5,#055db5);
  }
}



</style>
