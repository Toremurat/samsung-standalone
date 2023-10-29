<template>
  <div class="container">
    <sliderHome></sliderHome>
    <HomePromoBlock></HomePromoBlock>

    <!-- <PromoListBlock></PromoListBlock> -->
  </div>
  <div class="container">
    <div class="carousel-wrapper">
      <carouselHome></carouselHome>
    </div>
  </div>
</template>

<script>
import sliderHome from '@/components/sliderHome.vue';
import HomePromoBlock from '@/components/HomePromoBlock.vue';
import carouselHome from '@/components/carouselHome.vue';
// import PromoListBlock from '@/components/PromoListBlock.vue';

export default {
  name: 'MainPage',
  components: {
    HomePromoBlock,
    sliderHome,
    carouselHome,
    // PromoListBlock
  }
}
</script>

<style scoped lang="scss">

</style>
