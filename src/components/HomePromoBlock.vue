<template>
  <div id="homePromo">
    <div class="title  mrb-9">
      <h2 class="heading mrt-0 mrb-0">Наши акции <span class="pdl-10"><router-link to="/promo/"
            class="text_base2_bold blue_80">Смотреть все
            акции</router-link></span></h2>
    </div>
    <div class="promo-wrapper" v-if="promosList && promosList.length > 0">
      <div class="promo-container row">
        <div v-for="(promoItem, index) in promoFiltered" :key="index" class="promo-row col-sm-12 flex-row align-center"
          :style="'order:' + promoItem.sort" :class="'col-sm-' + promoItem.size + ' index-' + (index + 1)">
          <div class="image-box rounded-6" :class="{ 'isOdd': index % 2 === 0, 'isEven': index % 2 !== 0 }">
            <router-link :to="`/${promoItem.link}`">
              <img :src="promoItem.home_image" alt="image" :style="{ 'max-height': maxWidth }">
            </router-link>
          </div>
          <div class="info-box " :class="{ 'pdl-5': index % 2 === 0, 'pdr-5': index % 2 !== 0 }">
            <div class="dates  mrb-5" v-if="!isNaN(promoItem.remain)">
              <div class="duration blue_80 text_base1_bold" v-if="promoItem.startIn <= 0">
                до {{ promoItem.date_end }}
              </div>
              <div class="remaining" v-else-if="promoItem.startIn >= 0">
                <span class="date text_base1_bold blue_80" v-if="!isNaN(promoItem.remain)">
                  {{ promoItem.startIn }} {{ getDaysText(promoItem.startIn) }} до начала
                </span>
              </div>
            </div>
            <div class="description">
              <h3 class="promoItem-title mrb-5">{{ promoItem.name }}</h3>
              <div class="description-wrap" >
                <p v-html="promoItem.description" :class="'mrt-5 mrb-0 text_base1'"></p>
              </div>
            </div>
            <div class="link-wrapper pdt-5 pdb-5 mrt-8">
              <router-link class="promo-link blue_80 blue_20_bg text_base2_bold" :to="`/${promoItem.link}`">Узнать
                подробнее</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="null-message">{{ promosList.message }}</div>
</template>

<script>
import axios from 'axios';

Date.prototype.toShortFormat = function () {
  const monthNames = ['января', 'февраля', 'марта', 'апреля',
    'мая', 'июня', 'июля', 'августа',
    'сентября', 'октября', 'ноября', 'декабря'];

  const day = this.getDate();
  const monthIndex = this.getMonth();
  const monthName = monthNames[monthIndex];

  return `${day} ${monthName}`;
}

export default {
  name: 'promosList',
  props: {
  },

  data() {
    return {
      promosList: [],
      errorData: [],
      isHover: false,
      loadMessage: 'Загрузка...',
      statusFilter: 0,
      maxWidth: null,
    }
  },
  methods: {
    async getPromos() {
      await axios.get('/api/main/')
        .then(response => {
          let currentDate = new Date(); // Текущая дата

          this.promosList = response.data.map(element => {
            let startDate = new Date(element.date_start);
            let endDate = new Date(element.date_end);

            let remaining = Math.floor((endDate - currentDate) / (1000 * 60 * 60 * 24));
            let toStart = Math.floor((startDate - currentDate) / (1000 * 60 * 60 * 24));

            return {
              status: element.home_status,
              group: element.group,
              name: element.name,
              link: element.link,
              description: element.description,
              home_image: element.home_image,
              size: element.size,
              sort: element.home_sort,
              date_start: startDate.toShortFormat(),
              date_end: endDate.toShortFormat(),
              remain: remaining,
              startIn: toStart,
            };
          });

          // Сортировка по полю 'sort'
          this.promosList.sort((a, b) => a.sort - b.sort);
        })
        .catch((error) => {
          this.promoData = {
            "message": 'Акции на данный момент отсутствуют'
          }
          console.log(error);
          this.errorData.push(error);
        });
    },
    getDaysText(days) {
      const lastDigit = days % 10;
      if (lastDigit === 1 && days !== 11) {
        return 'день';
      } else if ((lastDigit === 2 || lastDigit === 3 || lastDigit === 4) && (days < 10 || days > 20)) {
        return 'дня';
      } else {
        return 'дней';
      }
    },
    updateMaxHeight() {
      if (window.innerWidth < 1360 && window.innerWidth > 900) {
        const infoBoxes = document.querySelectorAll('.info-box');
        let maxInfoBoxHeight = 0;

        infoBoxes.forEach((box) => {
          const boxHeight = box.offsetHeight;
          if (boxHeight > maxInfoBoxHeight) {
            maxInfoBoxHeight = boxHeight;
          }
        });

        this.maxHeight = maxInfoBoxHeight + 'px';
      } else {
        this.maxHeight = null;
      }
    },
  },
  created() {
    this.getPromos();
    this.updateMaxHeight();
  },
  beforeMount() {

  },
  mounted() {
    window.addEventListener('resize', this.updateMaxHeight);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateMaxHeight);
  },
  computed: {
    promoFiltered() {
      return this.promosList.filter(promoItem => promoItem.status !== this.statusFilter);
    },
  }
}
</script>

<style scoped>
.description-wrap p>p {
  margin-bottom: 0;
}

#homePromo .title a:before {
  content: '';
  width: 100%;
  height: 1px;
  background: blue;
  display: block;
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
}

.heading.mrt-0.mrb-0 {
  margin-bottom: 36px;
}

.promo-row.col-sm-12.flex-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
}

.info-box {
  align-items: self-start;
  flex-basis: auto;
}

.info-box .duration {
  align-self: flex-end;
}

.image-box.rounded-6 {
  min-width: unset;
  height: 100%;
}

#homePromo .title a {
  position: relative;
}

@media (min-width:900px) and (max-width: 1600px) {
  .promo-row {
    align-items: stretch;
  }

  .info-box {
    display: flex;
    align-items: center;
    flex-flow: row wrap;
  }

  .image-box img {
    height: auto;
    object-fit: cover;
    border-radius: 24px;
  }
}

@media (max-width: 900px) {
  .promo-row.col-sm-12.flex-row {
    display: flex;
    flex-flow: column !important;
    gap: 24px !important;
  }

  .mrt-5 {
    margin-top: 16px !important;
  }

  .mrb-5 {
    margin-bottom: 16px !important;
  }

  .promoItem-title.mrb-5 {
    margin-bottom: -8px !important;
  }

  .promo-row .duration.blue_80.mrb-5.text_base1_bold {
    margin-bottom: 8px !important;
  }

  .link-wrapper.mrt-8 {
    margin-top: 28px;
  }

  p>p {
    margin: 0 !important;
  }

  .promo-row {
    flex-flow: column !important;
  }

  .promo-container.row {
    display: flex;
    flex-flow: column;
    gap: 60px;
  }

  .image-box.rounded-6 {
    order: -1;
  }

  #homePromo .title span {
    width: 100%;
    display: block;
    padding: 0 !important;
  }

  .title.mrb-9 {
    margin-bottom: 30px;
  }

  .promo-row {
    gap: 20px !important;
  }

  .duration.blue_80.mrb-5.text_base1_bold {
    margin-bottom: 0 !important;
  }

  .info-box.pdl-5,
  .info-box.pdr-5 {
    padding: 0;
  }

  .description .mrt-5.mrb-0.text_base1 {
    margin-top: 12px;
  }



}

.dates.mrb-5 {
  width: 100% !important;
  flex-basis: 100%;
}

.link-wrapper.pdt-5.pdb-5.mrt-8 {
  flex-basis: 100%;
}
</style>
<style>
.promo-link:hover {
  color: #1D39C9;
  background: #E5E8FA !important;
  transition: all ease .3s;
}

.promo-link {
  transition: all ease .3s;
}

.infoPage .verticalDiv {
  width: 1px!important;
  height: 22px!important;
}
.infoPage .addr-link {
  display: flex!important;
  gap: 5px 20px!important;
  flex-flow: row wrap!important;
  align-items: center;
}
.infoPage .addr-link>p {
  flex-basis: 100%!important;
}

@media (max-width: 900px) {
  #contactsHero .addr-link {
    gap: 5px 15px !important;
  }
}
</style>


