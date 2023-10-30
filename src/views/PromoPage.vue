
import CareServiceWidget from '@/components/careServiceWidget.vue';
<template>
    <div v-if="postData" class="promo-wrapper container mgb-35 pdt-10">
        <div class="promo-header">
            <div class="image-block">
                <img :src="this.postData.image" alt="this.postData.name">
            </div>
            <div class="promo-description">
                <h1 class="heading pdt-10 pdb-5 mrb-0 mrt-0" v-title="this.postData.name">{{ this.postData.name }}</h1>
                <p class="promo-dates text_base1_bold blue_80 mrb-20" v-if="this.postData.remain != ''"><span
                        class="clock"></span>Действует до {{
                            this.postData.date_end }}</p>
                <p class="promo-dates ended text_base1_bold mrb-20 " v-else><span class="clock"></span>Акция закончилась</p>
            </div>
        </div>
        <div id="promo-content" class="description-wrapper" v-for="contentData in this.postData.content" :key="contentData[0]">
            <div v-html="contentData" :class="'mrt-5 text_base1'"></div>
        </div>
    </div>
    <div class="container mgt-35">
        <careServiceWidget />
    </div>
</template>

<script>
import axios from 'axios'
import careServiceWidget from '@/components/careServiceWidget.vue';
export default {
    name: 'promoPage',
    components: {
        careServiceWidget
    },
    data() {
        return {
            postData: [],
            errorData: []
        };
    },
    methods: {
        async getPromo() {
            // Получите значение параметра "link" из текущего маршрута
            const linkParam = this.$route.params.link;
            // Функция для определения склонения слова "день"
            function whatDay(num) {
                if (num == 1 || (num > 20 && num % 10 == 1))
                    return "день";
                if (num < 5 || (num > 20 && num % 10 < 5 && num % 10 > 0))
                    return "дня";
                return "дней";
            }
            axios.get('../static/json/main.json')
                .then(response => {
                    // Фильтруйте данные по совпадению link
                    const matchingData = response.data.find(item => item.link === linkParam);
                    if (matchingData) {
                        let date_end = new Date(matchingData.date_end);
                        let date_start = new Date(matchingData.date_start);
                        let today = Date.now();
                        let result = date_end - today;
                        if (result < 0)
                            result = 0;
                        let num = Math.ceil(result / (1000 * 3600 * 24));
                        if (num == 0)
                            num = 1;
                        let remainDay = num + ' ' + whatDay(num);
                        if (date_start > today || today > date_end)
                            remainDay = '';
                        this.postData = {
                            "status": matchingData.status,
                            "link": matchingData.link,
                            "content": matchingData.content,
                            "name": matchingData.name,
                            "image": matchingData.promo_image,
                            "date_start": date_start.toShortFormat(),
                            "date_end": date_end.toShortFormat(),
                            "remain": remainDay,
                            "text": matchingData.text // добавьте данные описания
                        };
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    created() {
        this.getPromo();
    },
}
Date.prototype.toShortFormat = function () {
    const monthNames = ['января', 'февраля', 'марта', 'апреля',
        'мая', 'июня', 'июля', 'августа',
        'сентября', 'октября', 'ноября', 'декабря'];

    const day = this.getDate();
    const monthIndex = this.getMonth();
    const monthName = monthNames[monthIndex];

    return `${day} ${monthName}`;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url(../styles/main.css);

.promo-dates {
    display: flex;
    align-items: center;
    gap: 8px;
}

.clock {
    background: url(@/static/icons/clock.svg);
    height: 32px;
    width: 32px;
    display: inline-block;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 900px) {
        height: 28px;
        width: 28px;
    }
}

.container.mgt-35 .care-widget {
    margin-top: 111px;
    border-radius: 24px;
    overflow: hidden;

    @media (min-width:900px) {
        margin-top: 100px;
    }

}

#promo-content {
    display: flex;
    flex-flow: column;
    gap: 40px;

    & ul.list {
        padding: 0 0 0 36px;
        list-style: none;
        counter-reset: cstCounter;
    }

    & ul.list li {
        padding: 0 0 16px;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
        position: relative;
    }

    & p {
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        margin: 0;
    }

    & ul.list li::before {
        counter-increment: cstCounter;
        content: counter(cstCounter) ".";
        position: absolute;
        left: -20px;
        color: #2B47DA;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
        top: 0px;
    }
}

h3.header {
    margin: 0 0 16px !important;
}

h4.header {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    margin: 0 0 12px !important;
}

.pdt-10 {
    padding-top: 40px !important;
}

.mgb-35 {
    margin-bottom: 140px !important;
}

.image-block img {
    width: 100%;
    border-radius: 24px;
}
</style>