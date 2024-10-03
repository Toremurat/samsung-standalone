<template>
    <div v-if="postData" class="promo-wrapper container pdt-8">
        <div class="backlink" v-if="postData.button !== 0">
            <router-link to="/promo">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.8787 18.1012L5.77734 11.9998L11.8787 5.89844" stroke="#2B47DA" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M18.2226 13.0664C18.7749 13.0664 19.2226 12.6187 19.2226 12.0664C19.2226 11.5141 18.7749 11.0664 18.2226 11.0664V13.0664ZM5.98602 13.0664H18.2226V11.0664H5.98602V13.0664Z"
                        fill="#2B47DA" />
                </svg>
                Смотреть все акции
            </router-link>
        </div>
        <div class="promo-header">
            <div class="image-block">
                <img :src="'/static/image/promo/' + postData.slider_desktop" alt="postData.name" class="desktop-only">
                <img :src="'/static/image/promo/' + postData.slider_mobile" alt="postData.name" class="mobile-only">
            </div>
            <div class="promo-description">
                <h1 class="heading pdt-10 pdb-5 mrb-0 mrt-0">{{ postData.name }}</h1>
                <div class="date" v-if="postData.actual">
                    <p class="promo-dates text_base1_bold blue_80" v-if="postData.actual < 0">
                        <span class="clock"></span>Акция начнется {{ postData.date_start }}
                    </p>
                    <p class="promo-dates text_base1_bold blue_80" v-else-if="postData.old < 0">
                        <span class="clock"></span>Действует до {{ postData.date_end }}
                    </p>
                    <p class="promo-dates ended text_base1_bold blue_80" v-else>
                        <span class="clock"></span>Акция закончилась
                    </p>
                </div>
                <div class="filler" v-else></div>
            </div>
        </div>
        <div id="promo-content">
            <div class="description-item" v-show="postData.content && postData.content !== ''"
                v-html="postData.content">
            </div>
        </div>

    </div>

    <div class="slider container pdt-8" v-if="slidesArr.length !== 0">
        <carousel :items-to-show="4" :wrap-around="true" :breakpoints="breakpoints">
            <slide v-for="(carousel, index) in slidesArr" :key="index">
                <img :src="carousel" alt="carousel.alt">
            </slide>

            <template #addons>
                <Navigation>
                    <template #next>
                        <div class="prev nav-slide"></div>
                    </template>
                    <template #prev>
                        <div class="next nav-slide"></div>
                    </template>
                </Navigation>
                <Pagination></Pagination>
            </template>
        </carousel>
    </div>

    <div class="container pdt-8">
        <productPart></productPart>
    </div>


    <div class="container pdt-8" id="viewer" v-if="modelData && modelData.length !== 0">
        <div class="preorder-form form-group" v-if="!successPage">
            <h3 class="header"> Оформите предзаказ</h3>
            <div class="form-row d-flex flex-wrap">
                <div class="input-form flex-50">
                    <label class="mrb-0 black_50" for="name">Ваше имя *</label>
                    <input type="text" class="care-form-field" id="name" placeholder="Ваше имя" @change="formValidation"
                        @blur="formValidation" @focus="resetValidation" :value="data.name">
                </div>

                <div class="input-form flex-50">
                    <label class="mrb-0 black_50" for="phone">Ваш телефон *</label>
                    <input v-mask="'+7 (7##) ###-##-##'" type="text" class="care-form-field" id="phone"
                        placeholder="Ваш номер" @change="formValidation" @blur="formValidation" @focus="resetValidation"
                        :value="data.phone" />
                </div>

                <div class="input-form flex-50" v-if="modelData.length > 1">
                    <label class="mrb-0 black_50" for="city">Выберите город *</label>
                    <v-select v-model="data.city" id="city" type="select" :options="cities" label="text"
                        :placeholder="'Выберите город'" :style="'width:100%'" />
                </div>
                <div class="input-form flex-100" v-else>
                    <label class="mrb-0 black_50" for="city">Выберите город *</label>
                    <v-select v-model="data.city" id="city" type="select" :options="cities" label="text"
                        :placeholder="'Выберите город'" :style="'width:100%'" />
                </div>

                <div class="input-form flex-50" v-show="modelData.length > 1">
                    <label class="mrb-0 black_50" for="model">Выберите модель *</label>
                    <v-select v-model="data.model" id="model" type="select" :options="modelData" label="text"
                        :placeholder="'Выберите модель'" :style="'width:100%'" />
                </div>


                <div>
                    <button class="preorder_submit" @click="sendMessage">Отправить сообщение</button>
                </div>
            </div>
        </div>
        <div class="content-block success" id="successMe" v-if="successPage">
            <div class="alert alert-success">
                <h4 class="mrb-3 header green">Спасибо за предзаказ</h4>
                <p class="text_base1">Наш специалист свяжется с вами в ближайшее время.</p>
            </div>
        </div>
    </div>
    
    <div class="container mrt-35" v-if="subscribe && subscribe.length !== 0">
        <subscribeForm />
    </div>

    <div class="container pdt-8" id="viewer">
        <careServiceWidget />
    </div>

</template>

<script>
import axios from 'axios';
import careServiceWidget from '@/components/careServiceWidget.vue';
import subscribeForm from '@/components/subscribeForm.vue';
import productPart from '@/components/productPart.vue';
import 'vue3-carousel/dist/carousel.css';
import vSelect from "vue-select";
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
import { mask } from 'vue-the-mask'

export default {
    name: 'promoPage',
    components: {
        careServiceWidget,
        subscribeForm,
        productPart,
        Carousel,
        Slide,
        "v-select": vSelect,
        Navigation,
        Pagination,
    },
    directives: {
        mask,
    },
    data() {
        return {
            successPage: false,
            postData: {},
            slidesArr: [],
            errorData: [],
            carouselStatus: 0,
            data: {
                name: "",
                phone: "",
                city: "Алматы",
                model: "",
            },
            cities: [
                "Алматы",
                "Астана",
                "Шымкент",
                "Другой"
            ],
            modelData: [],
            formValide: false,
            breakpoints: {
                320: {
                    itemsToShow: 1,
                    snapAlign: 'start',
                },
                600: {
                    itemsToShow: 2,
                    snapAlign: 'start',
                },
                750: {
                    itemsToShow: 3,
                    snapAlign: 'start',
                },
                1024: {
                    itemsToShow: 4,
                    snapAlign: 'start',
                },
                mousedrag: true,
                touchDrag: true,
            },
        };
    },
    methods: {
        async fetchData() {
            try {
                const linkParam = this.$route.params.link;
                const response = await axios.get('/api/v2/promo/' + linkParam + '/');

                if (response.data && response.data.length > 0) {
                    const matchingData = response.data[0];
                    const today = Date.now();
                    const check = today - new Date(matchingData.date_start);
                    const old_check = today - new Date(matchingData.date_end);
                    const remain = this.calcRemain(matchingData.date_end);

                    this.modelData = matchingData.promo_description[0].preorder || [];
                    this.subscribe = matchingData.promo_description[0].subscribe || [];
                    this.data.model = this.modelData[0]
                    this.postData = {
                        ...matchingData,
                        content: matchingData.promo_description[0].content,
                        date_start: new Date(matchingData.date_start).toShortFormat(),
                        date_end: new Date(matchingData.date_end).toShortFormat(),
                        remain,
                        actual: check,
                        old: old_check,
                    };
                    console.log(this.postData.promo_description[0].preorder)
                    if (matchingData.promo_description && matchingData.promo_description.length > 0) {
                        this.slidesArr = matchingData.promo_description[0].carousel;
                    } else {
                        this.slidesArr = [];
                    }
                    this.updateMetaTags();
                } else {
                    this.postData = {};
                }
            } catch (error) {
                console.error(error);
                this.errorData.push(error);
            }
        },
        formValidation(e) {
            if (this.validation(e.target)) this.data[e.target.getAttribute('id')] = e.target.value;
        },
        validation(element) {
            let label = document.querySelector(`label[for=${element.getAttribute('id')}]`);
            if (element.getAttribute('id') == 'phone') {
                if (element.value.match(/\+7 \(\d\d\d\) \d\d\d-\d\d-\d\d/gu)) {
                    return true;
                } else {
                    element.classList.add('is-invalid');
                    label.classList.add('is-invalid');
                    return false;
                }
            } else {
                if (element.value == '') {
                    element.classList.add('is-invalid');
                    label.classList.add('is-invalid');
                    return false;
                } else {
                    return true;
                }
            }
        },
        resetValidation(e) {
            let label = document.querySelector(`label[for=${e.target.getAttribute('id')}]`);
            e.target.classList.remove('is-invalid');
            label.classList.remove('is-invalid');
            this.formValide = true;
        },
        sendMessage() {

            for (let item in this.data) {
                let element = document.querySelector('#' + item);
                if (!this.validation(element)) this.formValide = false;
            }
            if (this.formValide) {
                axios.post("/preorder", this.data)
                    .then(response => {
                        if (response.status == "error") {
                            console.error(response.massage);
                        } else {
                            this.showSuccessPage();
                            window.dataLayer = window.dataLayer || [];
                            window.dataLayer.push({
                                event: "preorder",
                                model: this.data.model,
                                name: this.data.name,
                                phone: this.data.phone,
                                city: this.data.city
                            });
                        }
                    })
                    .catch(error => {
                        console.error(error);
                    });
            } else {

                setTimeout(() => {
                    const viewerElement = document.querySelector('#viewer');
                    if (viewerElement) {
                        window.scrollTo({ top: viewerElement.offsetTop - 80, behavior: 'smooth' });
                    }
                }, 100);
            }

        },
        showSuccessPage() {
            this.successPage = true;
            setTimeout(() => {
                const viewerElement = document.querySelector('#viewer');
                if (viewerElement) {
                    window.scrollTo({ top: viewerElement.offsetTop - 80, behavior: 'smooth' });
                }
            }, 100);
        },
        calcRemain(endDate) {
            const result = Math.ceil((new Date(endDate) - Date.now()) / (1000 * 3600 * 24));
            return result > 0 ? `${result} ${result === 1 ? 'день' : 'дней'}` : '';
        },
        updateMetaTags() {
            document.title = this.postData.name + ' в фирменном магазине Samsung';

            const metaTags = [
                { name: "description", content: this.postData.description },
                { name: "og:description", content: this.postData.description }
            ];

            metaTags.forEach(({ name, content }) => {
                let metaTag = document.querySelector(`meta[name='${name}']`) || document.createElement("meta");
                metaTag.setAttribute("name", name);
                metaTag.setAttribute("content", content);
                document.head.appendChild(metaTag);
            });
        },
    },
    created() {
        this.fetchData();
    },
    computed: {
        remainInt() {
            return parseInt(this.postData.remain);
        },
        isMobile() {
            return window.innerWidth < 768;
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url(@/static/styles/main.css);

.carousel img {
    max-width: 320px;
    width: calc(100% - 24px);
}

.carousel button.carousel__prev {
    margin-left: -150px !important;
    opacity: 1;

    & .nav-slide {
        content: url(@/static/icons/arrow.svg);
        transform: rotate(180deg);
        display: block;
        width: 52px;
        height: 52px;
        position: relative;
        left: -54px;
    }


}

.carousel__viewport {
    width: calc(100% + 470px);
}

.carousel button.carousel__next {
    right: -50px;
    opacity: 1;

    & .nav-slide {
        content: url(@/static/icons/arrow.svg);
        transform: rotate(0deg);
        display: block;
        width: 52px;
        height: 52px;
        position: relative;
        right: -54px;
    }

}

.carousel__prev:hover:not(.carousel__prev--disabled) .nav-slide {
    content: url(@/static/icons/arrow-hover.svg) !important
}

.carousel__next:hover:not(.carousel__next--disabled) .nav-slide {
    content: url(@/static/icons/arrow-hover.svg) !important
}

.carousel__prev--disabled .nav-slide {
    content: url(@/static/icons/disabledArrow.svg) !important
}

.carousel__next--disabled .nav-slide {
    content: url(@/static/icons/disabledArrow.svg) !important
}



.carousel__pagination-button {
    background: #d9d9d9;
    width: 10px;
    height: 10px;
    box-shadow: none;
    border: none;
    padding: 0;
    border-radius: 50%;
    transition: all 100ms ease-in-out;
    line-height: 0;
    margin: 0 0.25em;
}

.carousel__pagination-button::after {
    content: none;
}

.carousel__pagination-button.carousel__pagination-button--active {
    background: #2B47DA;
}

.carousel__pagination {
    display: none !important;
}

.carousel-section {
    margin: 0 0 10px -10px;
}

@media (max-width:1360px) {
    .carousel__pagination {
        display: flex !important;
        top: 20px;
        margin: 0;
        position: relative;
    }

}

@media (max-width: 900px) {
    .carousel-section {
        margin: 0 0 0px -10px;
    }


    .title.mrt-35.mrb-8 {
        margin-top: -20px;
    }

    .carousel-wrapper .title.mrt-35.mrb-8 {
        margin-bottom: 16px;
        padding: 0 0 0 20px;
    }

    .carousel-section {
        width: calc(100% - 20px);
        margin: 0 20px 0 10px;
    }
}

@media (max-width: 700px) {
    .carousel img {
        max-width: 100%;
        width: calc(100% - 20px);
    }

    .carousel__pagination {
        top: 10px !important;
    }
}

.carousel img {
    border-radius: 24px;
}

.backlink {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    color: #2B47DA;
    cursor: pointer;
    margin-bottom: 20px;
    transition: ease all .15s;
    display: flex;
    align-items: center;
    gap: 4px;
}

.backlink a {
    display: flex;
    align-items: center;
    gap: 4px;
    color: #2B47DA;
}

.backlink:hover {
    filter: brightness(.7);
    transition: ease all .15s;
}

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

.flex-50 {
    flex-basis: calc(50% - 32px);
}

.flex-100 {
    flex-basis: 100%;
}

.form-row.d-flex.flex-wrap {
    gap: 32px;
}

.input-form input.is-invalid {
    border: 1px solid #FB6060;
    transition: all 0.15s ease;
}

label {
    transition: all 0.15s ease;
}

label.is-invalid {
    color: #FB6060 !important;
    transition: all 0.15s ease;
}

.input-form input:focus {
    border-color: #91A0EF;
}

// .container.mgt-35 .care-widget {
//     margin-top: 111px;
//     border-radius: 24px;
//     overflow: hidden;

//     @media (min-width:900px) {
//         margin-top: 100px;
//     }

// }

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

#app>div>.container#viewer {
    margin-top: 60px;
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

.image-block .desktop-only {
    display: block;
}

.image-block .mobile-only {
    display: none;
}

@media (max-width: 900px) {
    .promo-dates.ended.text_base1_bold.blue_80.mrb-20 {
        margin-bottom: 60px;
    }

    .image-block .mobile-only {
        display: block;
    }

    .image-block .desktop-only {
        display: none;
    }

    h1.heading {
        font-size: 32px;
        padding-top: 32px !important;
        padding-bottom: 0 !important;
    }
}

@media (max-width: 900px) {
    h1.heading {
        margin-bottom: 16px !important;
    }

    .form-row.d-flex.flex-wrap {
        display: flex;
        flex-flow: column;
        gap: 28px;
    }

    #app>div>.container#viewer {
        padding: 0 10px !important;
        margin-top: 60px;

    }

    input-form input {
        border-radius: 12px;
    }

    .vs__open-indicator {
        top: 30% !important;
    }

}

#app #promo-content a {
    color: rgb(13, 110, 253);
}
</style>
<style lang="scss">
#promo-content {
    & .gallery {
        gap: 40px;
        display: flex;
        flex-flow: row wrap;

        @media (max-width:700px) {
            gap: 12px 16px;
        }
    }

    & .col-sm-3 {
        flex-basis: calc(25% - 30px);
        padding: 0 !important;

        @media (max-width:700px) {
            flex-basis: calc(50% - 8px);
        }

        & img {
            width: 100%;
            border-radius: 24px;

            @media (max-width:700px) {
                border-radius: 20px;
            }
        }
    }


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

    & ol:not(.carousel__track):not(.carousel__pagination):not(> ul) {
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
            margin-top: 24px !important;

            @media (max-width: 900px) {
                margin-top: 20px !important;
            }
        }

        &.titled h4 {
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

    & ol.numbered-list {
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
            margin-top: 24px !important;

            @media (max-width: 900px) {
                margin-top: 20px !important;
            }
        }

        &.titled h4 {
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

    ul:not(.carousel__track):not(.carousel__pagination) {
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
            margin-top: 24px !important;

            @media (max-width: 900px) {
                margin-top: 20px !important;
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

    & li>ul {
        margin-top: 24px !important;
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

    margin: 60px 0 0px !important;

    @media (max-width: 900px) {
        margin: 40px 0 0 !important;
    }

    & table {
        width: 100%;
        border-collapse: collapse;
        table-layout: fixed;
    }

    & tr {
        &:first-of-type {
            @media (max-width: 900px) {
                border-left: 1px solid transparent;
            }
        }

        &:not(:first-of-type) {
            border-top: 1px solid #d3d3d3;
        }

        & td,
        & th {
            padding: 10px;
            font-weight: 400;
            font-size: 15px;
            line-height: 120%;
            border: 1px solid #e0e0e0;

            &:not(:first-of-type) {
                border-left: 1px solid #d3d3d3;
            }

            &.blue {
                background: #E5E8FA;
            }

            &.red {
                background: #FFEDED;
            }

            &.gray {
                background: #EDEDED;
            }

            &.green {
                background: rgb(202, 241, 207);
            }

            &.text-center {
                text-align: center;
            }

            &.bold {
                font-weight: 600;
            }
        }
    }

    & table {
        @media (max-width: 900px) {
            max-width: calc(100vw - 40px);
            overflow: scroll;
            width: calc(100vw - 40px);
            touch-action: manipulation;
            display: block;

            & tbody {
                min-width: 200vw;
                display: table;
            }

            & thead {
                min-width: 200vw;
                display: table;
            }

        }
    }

    .date {
        margin-top: 16px;
    }

    & .prod-wrap {
        display: flex;
        flex-flow: row wrap;
        gap: 40px;

        @media (max-width:900px) {
            & .product:nth-of-type(2n-1):not(:first-of-type):before {
                position: absolute;
                width: calc(100vw - 40px);
                background: #EDEDED;
                display: block;
                content: '';
                height: 1px;
                left: 0;
                margin: 20px 0;
                top: -40px;
            }
        }

        @media (max-width: 900px) {
            gap: 40px 16px;
        }

        & h3 {
            margin: 0 0 -28px;
            font-size: 36px;
            font-style: normal;
            font-weight: 500;
            line-height: 130%;
            flex-basis: 100%;

            @media (max-width: 900px) {
                font-size: 24px;
                font-style: normal;
                font-weight: 600;
                line-height: 130%;
                margin: 0 0 -20px;
            }
        }

        & .product {
            flex-basis: calc(25% - 30px);
            position: relative;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: min-content min-content auto auto;
            grid-gap: 0;

            @media (max-width:900px) {
                flex-basis: calc(50% - 8px);
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                max-width: calc(50% - 8px);
            }

            & .photo img {
                max-width: 100%;
                border-radius: 20px;
                overflow: hidden;
            }

            & .photo {
                position: relative;
            }
        }



        & span {
            position: absolute;
            left: 16px;
            bottom: 16px;
            border-radius: 20px;
            background: #2B47DA;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 150%;
            color: #fff;
            padding: 3px 8px;

            @media (max-width: 900px) {
                bottom: 16px;
            }
        }

        & .price {
            display: flex;
            flex-flow: row wrap;
            gap: 0 20px;
            align-items: center;
            padding: 0 16px;
            margin: 12px 0 8px;

            @media (max-width: 900px) {
                flex-flow: column;
                gap: 0;
                padding: 0;
                align-items: flex-start;
            }

            & p {
                font-size: 18px;
                font-style: normal;
                font-weight: 600;
                line-height: 140%;
                white-space: nowrap;
            }

            & strike {
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 100%;
                color: #282828;
                white-space: nowrap;
                margin: auto 0;
            }

            & small {
                font-size: 80%;
            }
        }

        & .product>p {
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;
            color: #7B7B7B;
            padding: 0 16px;
            margin-bottom: 16px !important;

            @media (max-width: 900px) {
                padding: 0;
                font-size: 14px;
            }

        }

        & a {
            display: inline-flex;
            border-radius: 12px;
            background: #F14635;
            padding: 12px 21px;
            position: relative;
            left: 16px;
            align-self: end;
            justify-self: start;

            @media (max-width:900px) {
                width: 100%;
                justify-items: center;
                align-items: center;
                left: 0;
                display: inline-flex;
                margin-top: auto;

                & img {
                    align-self: center;
                    margin: 0 auto;
                }
            }

            @media (max-width:370px) {
                padding: 8px 14px;

                & img {
                    max-width: 100%;
                    width: 100%;
                }
            }

        }
    }

}

#promo-content .prod-wrap .product>p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
}

b,
strong {
    font-weight: bolder;
}

.promo-header .date {
    margin: 16px 0 0 !important;
}

@media (max-width: 900px) {
    #app #promo-content .titled h4 {
        font-size: 18px !important;
        line-height: 140% !important;
        margin: 0 0 8px !important;
    }

}

@media (max-width: 900px) {

    #app>div>.promo-wrapper.container,
    #app>div>.container.mrt-35 {
        padding-inline: 20px !important;
        max-width: 100% !important;
        margin-inline: 0 !important;
        margin-top: 80px !important;
    }
}

#promo-content .BFcards {
    display: flex;
    flex-flow: row nowrap;
    gap: 40px;
}

#promo-content .BFcards img {
    max-height: 228px;
    margin-bottom: 20px;
}

#promo-content .BFcards div {
    display: flex;
    flex-flow: column;
    align-items: center;
    background: #2A2A2A;
    border-radius: 24px;
    flex-basis: calc(33% - 30px);
    padding: 40px 40px;
    gap: 0;
    text-align: center;
}

#promo-content .BFcards div .headingBF {
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    color: #fff;
    margin-bottom: 12px;
}

#promo-content .BFcards p {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    color: #C9C9C9;
    text-align: center;
}

#promo-content .prod-wrap .price strike {
    text-decoration: none;
    position: relative;
}

#promo-content .prod-wrap .price strike:after {
    content: '';
    position: absolute;
    width: 90%;
    height: 1px;
    background: #282828;
    left: 0;
    top: 50%;
}

@media (max-width: 900px) {
    .promo-header .image-block img.mobile-only {
        max-height: 113.6vw;
        object-fit: cover;
        object-position: top;
    }

    .promo-header h1.heading {
        display: none;
    }

    #promo-content .BFcards div {
        flex-basis: 100%;
    }

    #promo-content .BFcards {
        flex-flow: column;
    }

    #promo-content .BFcards p {
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
    }

    #promo-content .BFcards img {
        min-height: 60px;
        max-height: unset;
        width: 72px;
        margin: 0;
    }

    #promo-content .BFcards div .headingBF {
        flex-basis: calc(100% - 84px);
        margin: 4px 0 6px;
        font-size: 20px;
        font-weight: 500;
        line-height: 130%;
    }

    #promo-content .BFcards p {
        flex-basis: calc(100% - 84px);
        text-align: left;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
    }

    #promo-content .BFcards div {
        flex-flow: row wrap;
        gap: 0 12px;
        justify-content: flex-end;
        align-items: start;
        text-align: left;
        padding: 32px;
    }

    #promo-content .BFcards p br {
        display: none;
    }

    #promo-content .BFcards {
        gap: 20px;
    }

    #app .promo-header .promo-description .date {
        margin: 32px 0 0 !important;
    }
}

.content-block.success .alert {
    background: #F3FFEA;
    border-color: transparent;
    border-radius: 24px;
    padding: 24px;
    color: #008F25;
}

.content-block.success .alert p {
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    color: #282828;
}

.vs__actions {
    position: absolute !important;
    top: 0 !important;
    width: 100%;
    height: 100%;
}

.vs__open-indicator {
    top: 32% !important;
    left: calc(100% - 45px) !important;
    position: relative !important;
}

.vs__dropdown-toggle {
    max-height: 67px;
}

.preorder_submit {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 20px 28px;
    border-radius: 12px;
    background: var(--blue_80, #2B47DA);
    color: white;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    border: none;
    transition: ease all 0.3s;
}

.preorder_submit:hover {
    transition: ease all 0.3s;
    background: #1D39C9;
    color: white;
}

.is-invalid input {
    border: 1px solid #FB6060 !important;
    transition: all 0.15s ease !important;
}

@media (max-width:600px) {
    #viewer {
        & .vs__open-indicator {
            top: 32% !important;
        }

        & .vs__selected {
            overflow: hidden;
            white-space: nowrap;
            max-width: calc(100% - 70px);
            text-overflow: ellipsis;
        }
    }
}
</style>