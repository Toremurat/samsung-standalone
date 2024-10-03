<template>
  <link src="@/static/styles/main.css" type="stylesheet">
  <headingNav></headingNav>
  <div :style="'margin-top: 77px;'">
    <router-view></router-view>
  </div>
  <div class="container bottom">


    <footerMain></footerMain>
  </div>
  <div class="contacts">
    <div class="button phone-custom" id="callback">
      <a href="tel:++77719333322">
        
      </a>
    </div>
    <div class="button whatsapp-custom">
      <a href="https://wa.me/+77777888889" target="_blank" title="Ответим в Whatsapp">
        
      </a>
    </div>
  </div>
</template>

<script>
import headingNav from './components/headingNav.vue';
import footerMain from './components/footerMain.vue';

export default {
  metaInfo() {
    return {
      title: this.$route.meta.title,
      meta: [
        {
          name: 'og:url',
          content: this.$route.meta.ogUrl,
        },
        {
          name: 'og:image',
          content: this.$route.meta.ogImage,
        },
        {
          name: 'og:description',
          content: this.$route.meta.description,
        },
        {
          name: 'description',
          content: this.$route.meta.description,
        },
        {
          name: 'keywords',
          content: this.$route.meta.keywords,
        },
      ],
    };
  },
  name: 'MainApp',
  components: {
    headingNav,
    footerMain,
  },
  mounted() {
    const script = document.createElement('script');
    script.src = 'https://kaspi.kz/kaspibutton/widget/ks-wi_ext.js';
    script.id = 'KS-Widget';
    document.body.appendChild(script);
  },
};
</script>


<style lang="scss">

.contacts {
  position: fixed;
  bottom: 32px;
  right: 32px;

  @media (max-width:900px) {
    bottom: 20px;
    right: 20px;
  }
}

.contacts>div {
  width: 56px;
  height: 56px;
  padding: 12px;
  border-radius: 50%;
  overflow: hidden;
}

#callback {
  background: #2B47DA;
}

.button.whatsapp-custom {
  background: #00AE26;
  margin-top: 10px;
}

#callback svg {
  -webkit-animation: ring 40s ease infinite;
  animation: ring 40s ease infinite;
  animation-delay: 0s;
  animation-delay: 5s;
}

// @import url('/public/static/styles/main.css');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');


html * {
  font-family: Inter !important;
}

#app>div>.container {
  @media (min-width: 1600px) {
    max-width: 1600px;
    padding-inline: 80px !important;
  }

  @media (max-width: 1600px) and (min-width: 1366px) {
    max-width: 100%;
    padding-inline: 80px !important;
  }

  @media (max-width: 1366px) and (min-width: 1171px) {
    max-width: 100%;
    padding-inline: 80px !important;
  }

  @media (max-width: 1170px) and (min-width: 1080px) {
    max-width: 100%;
    padding-inline: 40px !important;
  }

  @media (max-width: 1080px) and (min-width: 900px) {
    max-width: 100%;
    padding-inline: 30px !important;
  }

  @media (max-width: 900px) {
    max-width: calc(100% - 20px);
    padding-inline: 20px !important;
  }
}

#app>.bottom.container {
  @media (min-width: 1600px) {
    max-width: 1600px;
    padding-inline: 80px !important;
  }

  @media (max-width: 1600px) and (min-width: 1366px) {
    max-width: 100%;
    padding-inline: 80px !important;
  }

  @media (max-width: 1366px) and (min-width: 1171px) {
    max-width: 100%;
    padding-inline: 80px !important;
  }

  @media (max-width: 1170px) and (min-width: 1080px) {
    max-width: 100%;
    padding-inline: 40px !important;
  }

  @media (max-width: 1080px) and (min-width: 900px) {
    max-width: 100%;
    padding-inline: 30px !important;
  }

  @media (max-width: 900px) {
    max-width: calc(100% - 20px);
    padding-inline: 20px !important;
  }
}


@media (max-width: 1200px) {
  .container.bottom footer .pdl-20 {
    padding: 28px 0 0 !important;
  }
}

@media (max-width: 900px) {
  .container.mobile-full {
    max-width: 100% !important;
    padding: 0 !important;
  }

  .container.bottom footer .pdl-20 {
    padding: 28px 0 0 !important;
  }

  .carousel__viewport {
    padding: 0 0 0 10px;
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

  #app>div>.container.footer.mrt-35 {
    padding: 0 !important;
  }

  .carousel-wrapper.mrt-35.mrb-35 {
    margin: 80px 0;
  }

  #app>div>.container {
    padding: 0 !important;
  }
}

@media (max-width: 900px) {
  #app>.bottom.container {
    max-width: calc(100% - 20px);
    padding-inline: 0px !important;
  }
}

.slider-section a {
  pointer-events: none;
}

.carousel__pagination-button {
  background: #d9d9d9 !important;
  width: 10px !important;
  height: 10px !important;
  box-shadow: none !important;
  border: none !important;
  padding: 0 !important;
  border-radius: 50% !important;
  transition: all .1s ease-in-out !important;
  line-height: 0 !important;
  margin: 0 .25em !important;
}

.carousel__pagination-button:after {
  content: none !important;
}

.carousel__pagination-button.carousel__pagination-button--active {
  background: #2b47da !important;
}

.vs__open-indicator {
  transform: scale(0.7);
}

.promo-header h1.heading {
  padding: 0;
  padding-top: 0px;
}


#app .promo-header .date {
  margin: 16px 0 0 !important;
}

#promo-content a {
  color: #2B47DA;
}

@media (max-width: 900px) {

  #app #promo-content .btn {
    font-size: 14px;
  }
}

#app>div>.container.footer.mrt-35 {
  @media (min-width: 1600px) {
    max-width: 1600px;
    padding-inline: 80px !important;
  }

  @media (max-width: 1600px) and (min-width: 1366px) {
    max-width: 100%;
    padding-inline: 80px !important;
  }

  @media (max-width: 1366px) and (min-width: 1171px) {
    max-width: 100%;
    padding-inline: 80px !important;
  }

  @media (max-width: 1170px) and (min-width: 1080px) {
    max-width: 100%;
    padding-inline: 40px !important;
  }

  @media (max-width: 1080px) and (min-width: 900px) {
    max-width: 100%;
    padding-inline: 30px !important;
  }

  @media (max-width: 900px) {
    max-width: calc(100% - 10px);
    padding-inline: 20px !important;
  }
}

.addr-link img {
  display: flex !important;
}

.addr-link {
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  gap: 5px 20px !important;
}

@-webkit-keyframes ring {
  0% {
    -webkit-transform: rotate(-8deg);
    transform: rotate(-8deg);
  }

  0.25% {
    -webkit-transform: rotate(8deg);
    transform: rotate(8deg);
  }

  0.5% {
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }

  0.75% {
    -webkit-transform: rotate(10deg);
    transform: rotate(10deg);
  }

  1% {
    -webkit-transform: rotate(-13deg);
    transform: rotate(-13deg);
  }

  1.25% {
    -webkit-transform: rotate(13deg);
    transform: rotate(13deg);
  }

  1.5% {
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }

  1.75% {
    -webkit-transform: rotate(10deg);
    transform: rotate(10deg);
  }

  2% {
    -webkit-transform: rotate(-8deg);
    transform: rotate(-8deg);
  }

  2.25% {
    -webkit-transform: rotate(8deg);
    transform: rotate(8deg);
  }

  2.5% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

@keyframes ring {
  0% {
    -webkit-transform: rotate(-8deg);
    -ms-transform: rotate(-8deg);
    transform: rotate(-8deg);
  }

  0.25% {
    -webkit-transform: rotate(8deg);
    -ms-transform: rotate(8deg);
    transform: rotate(8deg);
  }

  0.5% {
    -webkit-transform: rotate(-10deg);
    -ms-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }

  0.75% {
    -webkit-transform: rotate(10deg);
    -ms-transform: rotate(10deg);
    transform: rotate(10deg);
  }

  1% {
    -webkit-transform: rotate(-13deg);
    -ms-transform: rotate(-13deg);
    transform: rotate(-13deg);
  }

  1.25% {
    -webkit-transform: rotate(13deg);
    -ms-transform: rotate(13deg);
    transform: rotate(13deg);
  }

  1.5% {
    -webkit-transform: rotate(-10deg);
    -ms-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }

  1.75% {
    -webkit-transform: rotate(10deg);
    -ms-transform: rotate(10deg);
    transform: rotate(10deg);
  }

  2% {
    -webkit-transform: rotate(-8deg);
    -ms-transform: rotate(-8deg);
    transform: rotate(-8deg);
  }

  2.25% {
    -webkit-transform: rotate(8deg);
    -ms-transform: rotate(8deg);
    transform: rotate(8deg);
  }

  2.5% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

br.mobile-only {
  width: 1px !important;
  height: 1px !important;
}

.carousel img[route] {
  cursor: pointer;
}
</style>