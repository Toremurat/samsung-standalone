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
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M27.6145 20.7294C28.1971 21.0789 28.6632 21.1955 28.7797 21.545C29.0127 21.7781 29.0127 23.0598 28.4301 24.5747C27.8475 26.0895 25.284 27.4878 24.1187 27.6043C22.0213 27.9539 20.39 27.8373 16.3116 25.973C9.78626 23.1764 5.59139 16.651 5.24182 16.3014C4.89224 15.8353 2.67828 12.8057 2.67828 9.54304C2.67828 6.39689 4.30962 4.88207 4.89224 4.18293C5.47486 3.48378 6.17401 3.36726 6.64011 3.36726C6.98968 3.36726 7.45577 3.36726 7.80535 3.36726C8.27144 3.36726 8.73754 3.25074 9.32016 4.5325C9.78626 5.81427 11.1845 8.96042 11.3011 9.30999C11.4176 9.65957 11.5341 10.0091 11.3011 10.4752C10.1358 12.9222 8.73754 12.8057 9.43669 13.971C12.0002 18.2824 14.4472 19.7972 18.2925 21.6616C18.8751 22.0111 19.2247 21.8946 19.6908 21.545C20.0404 21.0789 21.3222 19.5641 21.6717 18.9815C22.1378 18.2824 22.6039 18.3989 23.1865 18.6319C23.7692 18.865 26.9153 20.3798 27.6145 20.7294Z"
            fill="white" />
        </svg>
      </a>
    </div>
    <div class="button whatsapp-custom">
      <a href="https://wa.me/+77777888889" target="_blank" title="Ответим в Whatsapp">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M26.1629 5.70679C28.899 8.44296 30.5929 12.026 30.5929 15.9348C30.5929 23.8827 23.9479 30.3974 15.9348 30.3974C13.5244 30.3974 11.1791 29.746 9.02928 28.6385L1.4071 30.5929L3.42665 23.101C2.18887 20.9511 1.47225 18.4756 1.47225 15.8697C1.47225 7.92178 7.98693 1.4071 15.9348 1.4071C19.8436 1.4071 23.4919 2.97063 26.1629 5.70679ZM15.9348 27.9218C22.5798 27.9218 28.1173 22.5147 28.1173 15.9348C28.1173 12.6775 26.7492 9.68075 24.4691 7.40061C22.1889 5.12047 19.1922 3.88268 16 3.88268C9.35501 3.88268 3.94783 9.28986 3.94783 15.8697C3.94783 18.1498 4.5993 20.3648 5.77194 22.3192L6.09767 22.7752L4.85988 27.2052L9.42016 25.9674L9.81104 26.228C11.7003 27.3355 13.785 27.9218 15.9348 27.9218ZM22.5798 18.9316C22.9055 19.127 23.1661 19.1922 23.2313 19.3876C23.3616 19.5179 23.3616 20.2345 23.0358 21.0814C22.7101 21.9283 21.2769 22.7101 20.6254 22.7752C19.4528 22.9707 18.5407 22.9055 16.2606 21.8632C12.6123 20.2997 10.2671 16.6514 10.0716 16.456C9.87619 16.1954 8.6384 14.5016 8.6384 12.6775C8.6384 10.9185 9.55045 10.0716 9.87619 9.68075C10.2019 9.28986 10.5928 9.22472 10.8534 9.22472C11.0488 9.22472 11.3094 9.22472 11.5049 9.22472C11.7654 9.22472 12.026 9.15957 12.3518 9.87619C12.6123 10.5928 13.3941 12.3518 13.4593 12.5472C13.5244 12.7426 13.5896 12.9381 13.4593 13.1987C12.8078 14.5668 12.026 14.5016 12.4169 15.1531C13.8501 17.5635 15.2182 18.4104 17.3681 19.4528C17.6938 19.6482 17.8892 19.5831 18.1498 19.3876C18.3453 19.127 19.0619 18.2801 19.2573 17.9544C19.5179 17.5635 19.7785 17.6287 20.1042 17.7589C20.43 17.8892 22.1889 18.7361 22.5798 18.9316Z"
            fill="white" />
        </svg>
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