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
            <img :src="promoItem.home_image" alt="image">
          </div>
          <div class="info-box " :class="{ 'pdl-5': index % 2 === 0, 'pdr-5': index % 2 !== 0 }">
            <div class="duration blue_80 mrb-5 text_base1_bold" v-if="!isNaN(promoItem.remain)">
              до {{ promoItem.date_end }}
            </div>
            <!-- <span class="date" v-if="promoItem.startIn >= 0">
            {{ promoItem.startIn }} {{ getDaysText(promoItem.startIn) }} до начала
          </span>
          <span class="date" v-else>
            Осталось {{ promoItem.remain }} {{ getDaysText(promoItem.remain) }}
          </span> -->

            <div class="description">
              <h3 class="promoItem-title">{{ promoItem.name }}</h3>
              <div class="description-wrap" v-for="promoDesc in promoItem.description" :key="promoDesc[0]">
                <p v-html="promoDesc" :class="'mrt-5 mrb-0 text_base1'"></p>
              </div>
            </div>
            <!-- <div class="link-wrapper pdt-5 pdb-5 mrt-8">
              <router-link class="promo-link blue_80 blue_20_bg" :to="`/promo/${promoItem.link}`">Узнать
                подробнее</router-link>
            </div> -->
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
    }
  },
  methods: {
    async getPromos() {
      await axios.get('../static/json/main.json')
        .then(response => {
          let currentDate = new Date(); // Текущая дата

          this.promosList = response.data.map(element => {
            let startDate = new Date(element.date_start);
            let endDate = new Date(element.date_end);

            let remaining = Math.floor((endDate - currentDate) / (1000 * 60 * 60 * 24));
            let toStart = Math.floor((startDate - currentDate) / (1000 * 60 * 60 * 24));

            return {
              status: element.status,
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
          console.log(this.remaining)

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
    }
  },
  created() {
    console.log('ready');
    this.getPromos();
  },
  beforeMount() {

  },
  computed: {
    promoFiltered() {
      return this.promosList.filter(promoItem => promoItem.status !== this.statusFilter);
    },
  }
}
</script>

<style scoped>
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

#homePromo .title a {
  position: relative;
}

@media (min-width:900px) and (max-width: 1600px) {
  .promo-row {
    align-items: center;
  }

  .image-box img {
    height: 100%;
    object-fit: cover;
  }
}

@media (max-width: 900px) {
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
</style>


