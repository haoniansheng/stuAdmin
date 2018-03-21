<template>

  <H1 class="error">ERROR</H1>
   
</template>

<script>
export default {
  name: 'Error',
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.error{
  position: absolute;
  left: 43%;
  top: 10%;
  color: #000;
}
* {
    padding: 0px;
    margin: 0px;
}
#header{
  z-index: 100;
  height: 80px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  .shadow {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.50);
    overflow: hidden;
  }
  .mohu {
    height: 80px;
    /*z-index: 10110;*/
    filter: blur(15px);
    overflow: hidden;
    /*background: url(img/demo-bg.jpg) center center / cover no-repeat;*/
    /*background: #ddd;*/
  }
  header h1 {
      padding-left: 10%;
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
