<template>
    <div class="quick-nav">
      <img src="../../assets/img/icon/icon2.png" alt="" class="monster">
      <a href="https://github.com/DaiWujun/Computer-assisted-translation-web-system" target="_blank">
        <img src="../../assets/img/icon/icon5.png" alt="" class="readme">
      </a>
      <img src="../../assets/img/icon/icon7.png" alt="" class="spark">
      <img src="../../assets/img/icon/hust.jpg" alt="" class="logo">
    </div>
</template>

<script>
  export default {
    name: 'QuickNav'
  }
</script>

<style scoped>
  .quick-nav {
    width: 303px;
    height: 318px;
    background-color: transparent;
  }

  .monster {
    width: 280px;
    height: 260px;
    /*position: absolute;*/
    /*top: 150px;*/
    /*left: 700px;*/
  }

  .readme {
    width: 300px;
    height: 285px;
    position: absolute;
    margin-left: 50%;
    top: 300px;
    left: 230px;
  }

  .spark {
    position: absolute;
    margin-left: 50%;
    top: 100px;
    left: 20px;
  }

  .logo {
    width: 220px;
    height: auto;
    position: absolute;
    margin-left: 50%;
    top: 70px;
    left: 270px;
  }

</style>
