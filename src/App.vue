<template>
  <headingNav></headingNav>
  <div :style="'margin-top: 77px;'">
    <router-view></router-view>
  </div>
  <div>
    <div class="container bottom">
      <footerMain></footerMain>
    </div>
  </div>
</template>

<script>
import headingNav from './components/headingNav.vue';
import footerMain from './components/footerMain.vue';
export default {
  name: 'MainApp',
  components: {
    headingNav,
    footerMain
  }
}
</script>

<style lang="scss">
@import url(@/static/styles/main.css);

#app>div>.container {
  @media (min-width: 1600px) {
    max-width: 1600px;
    padding-left: 80px;
    padding-right: 80px;
  }

  @media (max-width: 1600px) and (min-width: 1366px) {
    max-width: 100%;
    padding-left: 80px;
    padding-right: 80px;
  }

  @media (max-width: 1366px) and (min-width: 1080px) {
    max-width: 100%;
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (max-width: 1080px) and (min-width: 900px) {
    max-width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 900px) {
    max-width: calc(100% - 10px);
    padding-left: 30px;
    padding-right: 30px;
  }
}

@media (max-width: 900px) {
  .container.mobile-full {
    max-width: 100% !important;
    padding: 0 !important;
  }

  .carousel__viewport {
    padding: 0 0 0 10px;
  }

  .carousel-wrapper .title.mrt-35.mrb-8 {
    padding: 0 20px;
  }

  .image-box,
  .info-box {
    flex-basis: 100%;
    width: 100%;
  }

  .container.bottom {
    padding: 0 !important;
    margin: 0 !important;
    max-width: 100% !important;
  }

  .container.bottom .col-r:not(:nth-of-type(2)) {
    padding: 0 20px;
  }

  .footer-submenu.pdl-0 {
    padding-bottom: 28px !important;
    border-bottom: 1px solid #ededed;
  }
}
</style>