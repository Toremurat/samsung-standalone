
<template>
    <div v-if="postData" class="promo-wrapper container mgb-35 pdt-10">
        <div class="promo-header">
            <div class="image-block">
                <img :src="this.postData.image" alt="this.postData.name">
            </div>
            <div class="promo-description">
                <h1 class="heading pdt-10 pdb-5 mrb-0 mrt-0">{{ this.postData.name }}</h1>
                <div class="date" v-if="this.postData.actual">
                    <p class="promo-dates text_base1_bold blue_80 mrb-20" v-if="this.postData.actual < 0">
                        <span class="clock"></span>Акция начнется {{ this.postData.date_start }}
                    </p>
                    <p class="promo-dates text_base1_bold blue_80 mrb-20" v-else-if="this.postData.old < 0">
                        <span class="clock"></span>Действует до {{ this.postData.date_end }}
                    </p>
                    <p class="promo-dates ended text_base1_bold blue_80 mrb-20" v-else>
                        <span class="clock"></span>Акция закончилась
                    </p>
                </div>
                <div class="filler" v-else></div>
            </div>
        </div>
        <div id="promo-content">
            <div class="description-item" v-for="contentData in this.postData.content" :key="contentData[0]"
                v-html="contentData">
            </div>
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
                        let check = Date.now() - new Date(matchingData.date_start);
                        let old_check = Date.now() - new Date(matchingData.date_end);
                        this.postData = {
                            "status": matchingData.status,
                            "link": matchingData.link,
                            "content": matchingData.content,
                            "name": matchingData.name,
                            "image": matchingData.promo_image,
                            "date_start": date_start.toShortFormat(),
                            "date_end": date_end.toShortFormat(),
                            "remain": remainDay,
                            "text": matchingData.text,
                            "actual": check,
                            "old": old_check
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
    computed: {
        remainInt() {
            // Преобразуйте this.postData.remain в целое число с помощью parseInt
            return parseInt(this.postData.remain);
        }
    }
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
@import url(@/static/styles/main.css);

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

#app>div>.promo-wrapper.container.mgb-35.pdt-10,
#app>div>.container.mgt-35 {
    @media (min-width: 1600px) {
        max-width: 1600px;
        padding-left: 80px;
        padding-right: 80px;
    }

    @media (max-width: 1600px) and (min-width: 1366px) {
        max-width: 100%;
    }

    @media (max-width: 1366px) and (min-width: 1080px) {
        max-width: 100%;
        padding-left: 80px;
        padding-right: 80px;
    }

    @media (max-width: 1080px) and (min-width: 900px) {
        max-width: 100%;
        padding-left: 20px !important;
        padding-right: 30px !important;
    }

    @media (max-width: 900px) {
        max-width: calc(100%);
        padding-left: 20px !important;
        padding-right: 20px !important;
    }
}

@media (max-width: 1200px) {
    .container.bottom footer .pdl-20 {
        padding: 28px 0 0 !important;
    }
}

@media (max-width: 900px) {
    .promo-dates.ended.text_base1_bold.blue_80.mrb-20 {
        margin-bottom: 60px;
    }

    h1.heading {
        font-size: 32px;
        padding-top: 32px !important;
        padding-bottom: 0 !important;
    }
}
</style>
<style lang="scss">
#promo-content {

    & h2,
    h3,
    h4 {
        margin: 0 0 16px;

        @media (max-width: 900px) {
            margin: 0 0 12px;
        }
    }

    & p,
    li,
    ul,
    a,
    span {
        margin: 0;
    }

    & p,
    li,
    a,
    ul,
    span,
    div {
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;

        @media (max-width: 900px) {
            font-size: 16px;
        }
    }

    & .heading h2 {
        font-style: normal;
        font-weight: 600;
        line-height: 130%;
        margin: 0 0 16px;
        font-size: 36px;

        @media (max-width: 900px) {
            font-size: 24px;
        }
    }

    & h3 {
        font-size: 36px;
        font-style: normal;
        font-weight: 600;
        line-height: 130%;

        @media (max-width: 900px) {
            font-size: 24px;
        }
    }

    & h4 {
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 130%;

        @media (max-width: 900px) {
            font-size: 20px;
        }
    }

    & .warning {
        &.blue {
            padding: 24px;
            border-radius: 20px;
            background: #eaedff;
            display: flex;
            align-items: flex-start;

            @media (max-width: 900px) {
                font-size: 16px;
            }

            &:before {
                content: url("data:image/svg+xml,%3Csvg width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg id=%27Frame 426%27%3E%3Ccircle id=%27Ellipse 80%27 cx=%2712%27 cy=%2712%27 r=%2711%27 stroke=%27%232B47DA%27 stroke-width=%272%27/%3E%3Cpath id=%27Vector 9%27 d=%27M12 9.59961V17.9996%27 stroke=%27%232B47DA%27 stroke-width=%272%27/%3E%3Cpath id=%27Vector 10%27 d=%27M12 6.40039L12 8.00039%27 stroke=%27%232B47DA%27 stroke-width=%272%27/%3E%3C/g%3E%3C/svg%3E%0A");
                height: 24px;
                margin-right: 12px;
                top: 3px;
            }
        }

        &.green {
            padding: 24px;
            border-radius: 20px;
            background: #EBFFE8;
            display: flex;
            align-items: flex-start;

            @media (max-width: 900px) {
                font-size: 16px;
            }

            &:before {
                content: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Frame 426'%3E%3Ccircle id='Ellipse 80' cx='12' cy='12' r='11' stroke='%2300AE26' stroke-width='2'/%3E%3Cpath id='Vector 9' d='M12 9.59961V17.9996' stroke='%2300AE26' stroke-width='2'/%3E%3Cpath id='Vector 10' d='M12 6.40039L12 8.00039' stroke='%2300AE26' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E%0A");
                height: 24px;
                margin-right: 12px;
                top: 3px;
            }
        }

        &.red {
            padding: 24px;
            border-radius: 20px;
            background: #FFEDED;
            display: flex;
            align-items: flex-start;

            @media (max-width: 900px) {
                font-size: 16px;
            }

            &:before {
                content: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Frame 426'%3E%3Ccircle id='Ellipse 80' cx='12' cy='12' r='11' stroke='%23EE2626' stroke-width='2'/%3E%3Cpath id='Vector 9' d='M12 9.59961V17.9996' stroke='%23EE2626' stroke-width='2'/%3E%3Cpath id='Vector 10' d='M12 6.40039L12 8.00039' stroke='%23EE2626' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E%0A");
                height: 24px;
                margin-right: 12px;
                top: 3px;
            }
        }
    }

    & .spacer {
        padding: 40px 0;

        @media (max-width: 900px) {
            padding: 30px 0;
        }
    }

    & .half-spacer {
        padding: 20px 0;

        @media (max-width: 900px) {
            padding: 18px 0;
        }
    }

    & .mini-spacer {
        padding: 12px 0;

        @media (max-width: 900px) {
            padding: 10px 0;
        }
    }

    & .small-spacer {
        padding: 10px 0;

        @media (max-width: 900px) {
            padding: 8px 0;
        }
    }

    & .numbered-list {
        list-style: none;
        counter-reset: custom-counter;
        padding-left: 36px;

        & li {
            position: relative;

            &:before {
                counter-increment: custom-counter;
                content: counter(custom-counter) ".";
                color: #2B47DA;
                margin-left: -20px;
                position: absolute;
                font-weight: 600;
            }
        }

        & li+li {
            margin-top: 24px;

            @media (max-width: 900px) {
                margin-top: 20px;
            }
        }

        & .titled h4 {
            font-size: 18px;
            margin: 0;
            line-height: 140%;
            margin: 0 0 8px;
        }

        @media (max-width: 900px) {
            margin: 4px 0 0;
            font-size: 16px;
        }
    }

    .unstyled-list {
        list-style: none;
        padding-left: 36px;

        & li {
            position: relative;

            &:before {
                content: "";
                margin-left: -15px;
                position: absolute;
                font-weight: 600;
                height: 5px;
                width: 5px;
                display: block;
                background: #2B47DA;
                border-radius: 50%;
                top: 10px;
            }

            & a {
                margin: 8px 0 0;
                display: block;

                @media (max-width: 900px) {
                    margin: 4px 0 0;
                }
            }
        }

        & li+li {
            margin-top: 24px;

            @media (max-width: 900px) {
                margin-top: 20px;
            }
        }

        &.titled h4 {
            font-size: 18px;
            margin: 0;
            line-height: 140%;
            margin: 0 0 8px;

            @media (max-width: 900px) {
                margin: 4px 0 0;
                font-size: 16px;
            }
        }
    }

    & .btn {
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 140%;
        padding: 20px 28px;
        background: #EAEDFF;
        border-radius: 12px;
        margin: 0;
        color: #2b47da;
        transition: ease all .3s;

        &:hover {
            background: #E5E8FA;
            color: #1D39C9;
            transition: ease all .3s;
        }

        @media (max-width: 900px) {
            padding: 16px 20px;
            font-size: 16px;
        }
    }

    margin: 80px 0 140px;

    @media (max-width: 900px) {
        margin: 60px 0 100px;
    }


}
</style>