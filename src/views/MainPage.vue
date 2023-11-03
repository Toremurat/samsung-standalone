<template>
  <div class="container mobile-normal">
    <sliderHome></sliderHome>
  </div>
  <div class="container">

    <HomePromoBlock></HomePromoBlock>

  </div>
  <div class="container mobile-full  mrt-35 mrb-35">
    <div class="carousel-wrapper">
      <carouselHome></carouselHome>
    </div>
  </div>
  <div class="container" id="contactsHero">
    <contactsSlider></contactsSlider>
    <div class="contactsMainOverlay">
      <h3 class="header mrb-5">Добро пожаловать в фирменный магазин Samsung</h3>
      <p class="text_base1 black_75 mrb-15 mrt-0">В магазине вы найдете мобильные устройства, ТВ и аудио технику, бытовую
        технику,
        дисплеи и многое другое. Все это в одном магазине, где вас ждет превосходное обслуживание и экспертное
        сопровождение.</p>
      <p class="text_base1_bold black_100  mrb-4">Алматы, Самал-2, 111, <br class="xs-only">ТРЦ Dostyk Plaza, 1 этаж</p>
      <div class="addr-box">
        <div class="addr-link">
          <p class="text_base_2 black_50  mrb-1" style="flex-basis:100%">Проложить маршрут</p>
          <a
            href="https://2gis.kz/almaty/directions/points/%7C76.955573%2C43.233917%3B70000001076849171?floor=1&m=76.955831%2C43.233979%2F19.77">
            <img src="@/static/icons/2gis.svg" alt="">
          </a>
          <span class="verticalDiv black_25_bg"></span>
          <a
            href="https://yandex.ru/maps/162/almaty/?indoorLevel=1&ll=76.956320%2C43.233477&mode=routes&rtext=~43.233492%2C76.956694&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D32933881704&z=19.81">
            <img src="@/static/icons/yandex.svg" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="container footer mrt-35">
    <careServiceWidget />
  </div>
</template>

<script>
import sliderHome from '@/components/sliderHome.vue';
import HomePromoBlock from '@/components/HomePromoBlock.vue';
import carouselHome from '@/components/carouselHome.vue';
import contactsSlider from '@/components/contactsSlider.vue';
import careServiceWidget from '@/components/careServiceWidget.vue';

export default {
  name: 'MainPage',
  components: {
    HomePromoBlock,
    sliderHome,
    carouselHome,
    contactsSlider,
    careServiceWidget
  }
}
</script>
<style>
#contactsHero .slider .glide-item {
  height: 695px !important;
}

#contactsHero .slider .glide-item img {
  height: 100% !important;
  width: 100% !important;
}

@media (max-width: 1366px) {
  #contactsHero .slider .glide-item {
    height: 665px !important;
  }
}
</style>
<style scoped lang="scss">
@import url(@/static/styles/main.css);

.xs-only {
  display: none;
}

.contactsMainOverlay {
  position: absolute;
  background: #fff;
  margin-left: 40px;
  border-radius: 12px;
  padding: 60px;
  top: 60px;
  width: 560px;
  height: calc(100% - 120px);

}

.addr-link {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

.addr-link a {
  display: flex;
  align-items: center;
}

.verticalDiv {
  width: 1px;
  height: 22px;
  margin: 0 0;
  display: inline;
}

#contactsHero {
  position: relative;
}

@media (max-width:900px) {
  .promo-row {
    flex-flow: column !important;
    padding: 0;
  }

  .image-box.rounded-6 {
    order: -1 !important;
  }

  #app>div>.container {
    padding-left: 15px;
    padding-right: 15px;
    max-width: calc(100% - 40px);
  }

  .contactsMainOverlay {
    position: relative;
    top: 0;
    padding: 22px 32px 32px;
    width: 100%;
    height: auto;
    margin: 0;
  }

  #contactsHero {
    border: 1px solid #ededed;
    border-radius: 12px;
    margin: 80px 20px 80px !important;
    padding: 0 !important;
    width: calc(100% - 40px);
    overflow: hidden;
  }

  .container.mobile-full.mrt-35.mrb-35 {
    margin: 105px 0 80px;
  }

}

@media (max-width: 1599px) {
  .contactsMainOverlay {
    height: auto;
    // width: auto;
    // max-width: 52%;
  }
}

@media (max-width: 1400px) {
  .contactsMainOverlay {
    // max-width: 65%;
    // padding: 50px;
  }
}

@media (max-width: 1280px) {
  .contactsMainOverlay {
    // max-width: 75%;
    // padding: 40px;
  }
}

@media (max-width: 1150px) {
  .contactsMainOverlay {
    // max-width: 85%;
    // padding: 35px;
  }
}

@media (max-width: 990px) {
  .contactsMainOverlay {
    // max-width: 90%;
    // padding: 25px;

  }
}

@media (max-width: 900px) {
  .contactsMainOverlay {
    max-width: 100%;
    padding: 22px 32px 32px;
    width: 100%;
    height: auto;

  }

  #app>div>.container.mobile-normal {
    padding: 20px 0 0 0 !important;
  }

  .container.footer.mrt-35 {
    margin-top: 80px !important;
  }

  .text_base1.black_75.mrb-15.mrt-0 {
    margin-bottom: 28px !important;
  }
}
</style>
<style>
@media (max-width: 560px) {
  .xs-only {
    display: block !important;
  }

  .carousel__pagination-button,
  .glide__bullet {
    width: 8px !important;
    height: 8px !important;
    margin: 0 4.5px !important;
  }

  .glide__bullets {
    top: calc(100% - 8px) !important;
  }
}

.flex-row.flex.addr>div a:hover span {
  color: #2B47DA !important;
  transition: ease all .3s;
}
</style >