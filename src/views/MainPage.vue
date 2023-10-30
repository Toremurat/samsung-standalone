<template>
  <div class="container mobile-full">
    <sliderHome></sliderHome>
  </div>
  <div class="container">

    <HomePromoBlock></HomePromoBlock>

  </div>
  <div class="container mobile-full">
    <div class="carousel-wrapper mrt-35 mrb-35">
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
      <p class="text_base2_bold black_100  mrb-4">Алматы, Самал-2, 111, ТРЦ Dostyk Plaza, 1 этаж</p>
      <div class="addr-box">
        <div class="addr-link">
          <p class="text_base_2 black_50  mrb-1" style="flex-basis:100%">Проложить маршрут</p>
          <a href="http://">
            <img src="@/static/icons/2gis.svg" alt="">
          </a>
          <span class="verticalDiv black_25_bg"></span>
          <a href="http://">
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

<style scoped lang="scss">
@import url(../styles/main.css);

.contactsMainOverlay {
  position: absolute;
  top: 60px;
  background: #fff;
  margin-left: 40px;
  width: 560px;
  height: calc(100% - 120px);
  border-radius: 12px;
  padding: 60px;
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
  margin: 0 16px;
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
    margin: 80px 35px !important;
    padding: 0 !important;
    width: calc(100% - 70px);
    overflow: hidden;

  }

}
</style>
