<template>
  <div class="container infoPage ">
    <InformationMenu></InformationMenu>
    <div class="content">
      <h1 class="title heading mrb-10">Оплата</h1>
      <div class="iconbox-group mrb-20">
        <h3 class="header mrb-4">Способы оплаты</h3>

        <div class="icon-box">
          <div class="money"></div>
          <div class="text">
            <p class="text_base1_bold black_100 mrb-2 mrt-0">
              Наличными
            </p>
            <p class="text_base2 black_75 mrb-0 mrt-0">
              Вы можете оплатить покупку наличными в нашем магазине
            </p>
          </div>
        </div>

        <div class="icon-box">
          <div class="bank"></div>
          <div class="text">
            <p class="text_base1_bold black_100 mrb-2 mrt-0">
              Оплата картой
            </p>
            <p class="text_base2 black_75 mrb-0 mrt-0">
              Вы можете оплатить покупку банковской картой в нашем магазине
            </p>
          </div>
        </div>

        <div class="icon-box">
          <div class="qr"></div>
          <div class="text">
            <p class="text_base1_bold black_100 mrb-2 mrt-0">
              Kaspi QR / Halyk QR
            </p>
            <p class="text_base2 black_75 mrb-0 mrt-0">
              Оплачивайте посредством Kaspi QR или Halyk QR и получайте бонусы
            </p>
          </div>
        </div>

        <div class="icon-box">
          <div class="loan"></div>
          <div class="text">
            <p class="text_base1_bold black_100 mrb-2 mrt-0">
              Рассрочка или кредит
            </p>
            <p class="text_base2 black_75 mrb-0 mrt-0">
              У нас Вы всегда сможете купить товары в рассрочку или кредит
            </p>
          </div>
        </div>

        <div class="icon-box">
          <div class="bonus"></div>
          <div class="text">
            <p class="text_base1_bold black_100 mrb-2 mrt-0">
              Бонусной картой
            </p>
            <p class="text_base2 black_75 mrb-0 mrt-0">
              Зарабатывайте бонусные балы и оплачивайте ими до 99%. <router-link to="/promo/smart-bonus"
                :class="`inline-link`">Подробнее</router-link>
            </p>
          </div>
        </div>

        <div class="icon-box">
          <div class="invoice"></div>
          <div class="text">
            <p class="text_base1_bold black_100 mrb-2 mrt-0">
              Счет на оплату
            </p>
            <p class="text_base2 black_75 mrb-0 mrt-0">
              У наших кассиров Вы можете запросить счет на оплату
            </p>
          </div>
        </div>

      </div>
      <div class="text-block">
        <h3 class="header mrb-4">Прочие условия</h3>
        <p class="text_base1 black_75 mrb-0 mrt-0">
          Для совершения покупок в фирменном магазине Samsung физические лица должны достигнуть 14-летнего возраста. До 18
          лет возможно приобретение товаров только за счет личных средств (стипендии, заработной платы) или при наличии
          письменного согласия родителей, усыновителей или других законных представителей.
        </p>
      </div>
    </div>
  </div>
  <div class="container mgt-35">
        <careServiceWidget />
    </div>
</template>

<script>
import careServiceWidget from '@/components/careServiceWidget.vue';
import InformationMenu from "@/components/InformationMenu.vue";

export default {
  components: {
    careServiceWidget,
    InformationMenu,
  },
  name: "paymentPage",
  props: {},
};
</script>

<style>
.infoPage {
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  margin-block: 117px 140px !important;
}

.content {
  flex-basis: calc(100% - 365px);
}

@media (max-width: 900px) {
  .infoPage {
    margin-block: 100px 0px !important;
  }

  h1.heading {
    margin-bottom: 40px !important;
  }

  #app>div>.container.infoPage {
    padding-inline: 10px !important;
  }

  .content {
    flex-basis: 100%;
  }
}
</style>
<style scoped lang="scss">

.icon-box {
  flex-basis: calc(50% - 32px);
  border-radius: 24px;
  border: 1px solid #ededed;
  padding: 28px;
  display: flex;
  gap: 32px;
  align-items: flex-start;
}
.iconbox-group .header.mrb-4 {
  margin-bottom: -16px!important;
}
.iconbox-group .header.mrb-4 {
  flex-basis: 100%;
}

.iconbox-group {
  display: flex;
  flex-flow: row wrap;
  gap: 32px;
}

.icon-box .money {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='60' height='60' rx='12' fill='%23EAEDFF'/%3E%3Crect x='12.2637' y='21' width='35.4713' height='18.0001' rx='3' stroke='%232B47DA' stroke-width='2'/%3E%3Cpath d='M26.9492 26.1523H33.0518' stroke='%232B47DA' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M26.9492 29.0679H33.0518' stroke='%232B47DA' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M30 29.55L30 34.9533' stroke='%232B47DA' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E%0A");
  height: 60px;
  min-width: 60px;
}

.icon-box .bank {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='60' height='60' rx='12' fill='%23EAEDFF'/%3E%3Crect x='11.998' y='18.5305' width='36.0024' height='22.9391' rx='3' stroke='%232B47DA' stroke-width='2'/%3E%3Crect x='11.998' y='23.4548' width='36.0024' height='4.47069' stroke='%232B47DA' stroke-width='2'/%3E%3Cpath d='M17.5469 32.2844H30.8439' stroke='%232B47DA' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M17.5469 36.1763H24.9414' stroke='%232B47DA' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E%0A");
  height: 60px;
  min-width: 60px;
}

.icon-box .qr {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='60' height='60' rx='12' fill='%23EAEDFF'/%3E%3Cpath d='M21.9999 14.0002H15C14.4477 14.0002 14 14.448 14 15.0002V22.0001M37.9996 14.0002H44.9995C45.5518 14.0002 45.9995 14.448 45.9995 15.0002V22.0001M45.9995 37.9999V44.9998C45.9995 45.552 45.5518 45.9998 44.9995 45.9998H37.9996M21.9999 45.9998H15C14.4477 45.9998 14 45.552 14 44.9998V37.9999' stroke='%232B47DA' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cmask id='path-3-inside-1_723_2062' fill='white'%3E%3Crect x='32.873' y='18.9233' width='8.205' height='8.205' rx='1'/%3E%3C/mask%3E%3Crect x='32.873' y='18.9233' width='8.205' height='8.205' rx='1' stroke='%232B47DA' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' mask='url(%23path-3-inside-1_723_2062)'/%3E%3Cmask id='path-4-inside-2_723_2062' fill='white'%3E%3Crect x='19.7441' y='18.9233' width='8.205' height='8.205' rx='1'/%3E%3C/mask%3E%3Crect x='19.7441' y='18.9233' width='8.205' height='8.205' rx='1' stroke='%232B47DA' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' mask='url(%23path-4-inside-2_723_2062)'/%3E%3Cmask id='path-5-inside-3_723_2062' fill='white'%3E%3Crect x='19.7441' y='32.0513' width='8.205' height='8.205' rx='1'/%3E%3C/mask%3E%3Crect x='19.7441' y='32.0513' width='8.205' height='8.205' rx='1' stroke='%232B47DA' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' mask='url(%23path-5-inside-3_723_2062)'/%3E%3Cpath d='M33.9258 36.9014V33.1831H36.5879M36.5879 38.9036H39.25V36.0434' stroke='%232B47DA' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
  height: 60px;
  min-width: 60px;
}

.icon-box .loan {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='60' height='60' rx='12' fill='%23EAEDFF'/%3E%3Cpath d='M33.3276 18.5476C41.7382 18.5476 48.5537 25.3631 48.5537 33.7737C48.5537 42.1843 41.7382 48.9997 33.3276 48.9997C26.1714 48.9997 20.1607 44.0549 18.5366 37.3989C18.2538 36.2388 18.1016 35.0208 18.1016 33.7737' stroke='%232B47DA' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M15.3242 36.5939L17.7459 33.6429C17.8546 33.5124 18.0432 33.4907 18.1737 33.5994L21.1246 36.0211' stroke='%232B47DA' stroke-width='2' stroke-miterlimit='10' stroke-linecap='round'/%3E%3Cpath d='M19.7834 27.6762C24.3884 27.6762 28.1215 23.9431 28.1215 19.3381C28.1215 14.7331 24.3884 11 19.7834 11C15.1784 11 11.4453 14.7331 11.4453 19.3381C11.4453 23.9431 15.1784 27.6762 19.7834 27.6762Z' stroke='%232B47DA' stroke-width='2' stroke-miterlimit='10'/%3E%3Cpath d='M17.0801 15.946H22.489' stroke='%232B47DA' stroke-width='2' stroke-miterlimit='10' stroke-linecap='round'/%3E%3Cpath d='M17.0801 19.0547H19.7845H22.489' stroke='%232B47DA' stroke-width='2' stroke-miterlimit='10' stroke-linecap='round'/%3E%3Cpath d='M19.748 19.0547V23.5645' stroke='%232B47DA' stroke-width='2' stroke-miterlimit='10' stroke-linecap='round'/%3E%3Cpath d='M25.5527 31.2094L28.8681 27.894V39.1661M33.533 30.8618C33.533 29.8725 34.328 27.894 36.3713 27.894C39.2097 27.894 39.2623 29.9361 39.2623 30.5727C39.2623 31.2094 38.7892 32.5438 36.529 35.0405C34.7209 37.0379 33.7783 38.168 33.533 38.4834H40.0507' stroke='%232B47DA' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
  height: 60px;
  min-width: 60px;
}

.icon-box .bonus {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='60' height='60' rx='12' fill='%23EAEDFF'/%3E%3Crect x='10.998' y='17.8745' width='38.0015' height='24.251' rx='3' stroke='%232B47DA' stroke-width='2'/%3E%3Cpath d='M25.9863 23.1558H33.2322M33.2322 26.8745H26.3853V30.9121M26.3853 30.9121V36.844H31.2704C32.1843 36.6945 34.0119 35.9069 34.0119 33.9529C34.0119 31.5103 32.5665 30.9121 31.2704 30.9121C30.2336 30.9121 27.5817 30.9121 26.3853 30.9121Z' stroke='%232B47DA' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
  height: 60px;
  min-width: 60px;
}

.icon-box .invoice {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='60' height='60' rx='12' fill='%23EAEDFF'/%3E%3Crect x='16' y='11' width='27.9998' height='37.9998' rx='3' stroke='%232B47DA' stroke-width='2'/%3E%3Ccircle cx='35.7816' cy='41.0809' r='3.00617' stroke='%232B47DA' stroke-width='2'/%3E%3Cpath d='M22.0938 17.0767L37.9073 17.0767' stroke='%232B47DA' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M22.0938 21.6951L37.9073 21.6951' stroke='%232B47DA' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M22.0938 26.3132L37.9073 26.3132' stroke='%232B47DA' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M22.0938 30.7915H31.1324' stroke='%232B47DA' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E%0A");
  height: 60px;
  min-width: 60px;
}

@media (max-width: 1100px) {
  .icon-box {
    flex-basis: 100%;
  }
}

@media (max-width: 900px) {
  .icon-box {
    flex-basis: 100%;
    gap: 20px;
  }

  .iconbox-group .header.mrb-4 {
    margin-bottom: -8px !important;
  }

  .iconbox-group {
    display: flex;
    flex-flow: row wrap;
    gap: 20px;
    margin-bottom: 60px !important;
  }
}
</style>
<style lang="scss">

@media (max-width:900px) {
	#app>div>.container.mgt-35 {
		padding-left: 20px !important;
		max-width: unset;
		width: 100%;
		padding-right: 20px !important;
	}
}
</style>