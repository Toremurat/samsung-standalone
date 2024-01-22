
<template>
    <div v-if="prodData" class="prod-wrapper container pdt-8">
        <div class="prod-header">
            <div class="image-block">
                <img :src="this.prodData.image" :alt="this.prodData.name" class="desktop-only">
                <img :src="this.prodData.image_m" :alt="this.prodData.name" class="mobile-only">
            </div>
            <div class="prod-description pdt-10 pdb-0">
                <h1 class="heading  mrb-0 mrt-0 pdt-0 pdb-0" style="margin:0!important; padding-top:0!important">{{
                    this.prodData.name }}</h1>
                <!-- <div class="bank-btns">
                    <div class="kaspi" v-if="this.prodData.kaspi">
                        <a :href="this.prodData.kaspi" target="_blank" class="kaspi-link">
                            <img src="@/static/icons/kaspi.svg" alt="" class="desktop-only">
                            <img src="@/static/icons/kaspi-m.svg" alt="" class="mobile-only">
                        </a>
                    </div>
                    <div class="halyk" v-if="this.prodData.halyk">
                        <a :href="this.prodData.halyk" target="_blank" class="halyk-link">
                            <img src="@/static/icons/halyk.svg" alt="" class="desktop-only">
                            <img src="@/static/icons/halyk-m.svg" alt="" class="mobile-only">
                        </a>
                    </div>
                </div> -->
            </div>
        </div>
        <div id="prod-content">
            <div class="description-item" v-html="prodData.content">
            </div>
        </div>
    </div>

    <div class="slider container" v-if="this.prodData.slide_status !== 0">
        <carousel :items-to-show="4" :wrap-around="false" :breakpoints="breakpoints">
            <slide v-for="(carousel, index) in slidesArr" :key="index">
                <img :src="carousel.img" alt="carousel.alt">
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

    <div class="container mrt-35">
        <careServiceWidget />
    </div>
</template>

<script>
import axios from 'axios'
import careServiceWidget from '@/components/careServiceWidget.vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';

export default {
    name: 'productPage',
    components: {
        careServiceWidget,
        Carousel,
        Slide,
        Navigation,
        Pagination

    },
    data() {
        return {
            prodData: [],
            errorData: [],
            slidesArr: [],
            carouselStatus: 0,
            wrapAround: true,
            breakpoints: {
                320: {
                    itemsToShow: 1,
                    snapAlign: 'start',
                },
                // 700px and up
                600: {
                    itemsToShow: 2,
                    snapAlign: 'start',
                },
                750: {
                    itemsToShow: 3,
                    snapAlign: 'start',
                },
                // 1024 and up
                1024: {
                    itemsToShow: 4,
                    snapAlign: 'start',
                },
                // 1600: {
                // 	itemsToShow: 5.5,
                // 	snapAlign: 'start',
                // },
                mousedrag: true,
                touchDrag: true,
            },
        };
    },
    methods: {
        addClass() {
            const contactsEl = document.querySelector('#app');
            if (contactsEl) {
                contactsEl.classList.add('atProd');
            }
        },
        async getprod() {
            const linkParam = this.$route.params.link;
            axios.get('/api/product/')
                .then(response => {
                    const matchingData = response.data.find(item => item.link.substring(item.link.indexOf("product/") + 8) === linkParam);
                    if (matchingData) {
                        this.prodData = {
                            "status": matchingData.status,
                            "link": matchingData.link,
                            "content": matchingData.content,
                            "desc": stripHtmlTags(matchingData.description),
                            "name": matchingData.name,
                            "kaspi": matchingData.kaspi,
                            "halyk": matchingData.halyk,
                            "image": matchingData.desktop_image,
                            "image_m": matchingData.mobile_image,
                            "slide_status": matchingData.slider_status
                        };
                        this.updateMetaTags();
                    }

                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async getcarousel() {
            try {
                const linkParam = this.$route.params.link;
                const response = await axios.get('/api/product/');
                const matchingData = response.data.find(item => item.link.substring(item.link.indexOf("product/") + 8) === linkParam);

                if (response) {
                    const carouselImages = matchingData.carousel || [];
                    this.slidesArr = carouselImages.map(img => ({ img }));
                } else {
                    this.slidesArr = [];
                }
            } catch (error) {
                this.prodData = {
                    message: 'Карусели на данный момент нет'
                };
                console.error(error);
                this.errorData.push(error);
            }
        },

        updateMetaTags() {
            // Обновите мета-тег title
            document.title = this.prodData.name + ' в фирменном магазине Samsung';

            // Обновите мета-тег description
            let descriptionTag = document.querySelector("meta[name='description']");
            if (!descriptionTag) {
                descriptionTag = document.createElement("meta");
                descriptionTag.setAttribute("name", "description");
                document.head.appendChild(descriptionTag);
            }
            descriptionTag.setAttribute("content", this.prodData.desc);

            // Обновите мета-тег og:description
            let ogDescriptionTag = document.querySelector("meta[property='og:description']");
            if (!ogDescriptionTag) {
                ogDescriptionTag = document.createElement("meta");
                ogDescriptionTag.setAttribute("property", "og:description");
                document.head.appendChild(ogDescriptionTag);
            }
            ogDescriptionTag.setAttribute("content", this.prodData.description);
        },


    },
    created() {
        this.getprod();
        this.getcarousel();
    },
    mounted() {
        this.addClass()
    },
    computed: {
        isMobile() {
            return window.innerWidth < 768;
        },
    },

}
function stripHtmlTags(html) {
    // Создайте временный div-элемент
    var tmp = document.createElement("div");
    tmp.innerHTML = html;

    // Получите текстовое содержимое без HTML-тегов
    return tmp.textContent || tmp.innerText;
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url(@/static/styles/main.css);

@media (max-width: 900px) {
    #app>div>.prod-wrapper.container {
        padding: 0 20px !important;
        width: 100% !important;
        margin: 0;
        max-width: 100% !important;
    }
}

.prod-description {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
}

.bank-btns {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 20px;
}

.kaspi a {
    background: #f14635;
}

.bank-btns a {
    padding: 16px 24px;
    border-radius: 12px;
}

.halyk a {
    background: #008669;
}

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

// .container.mgt-35 .care-widget {
//     margin-top: 111px;
//     border-radius: 24px;
//     overflow: hidden;

//     @media (min-width:900px) {
//         margin-top: 100px;
//     }

// }

#prod-content {
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

#app>div>.prod-wrapper.container.mgb-35.pdt-10,
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

.bank-btns a {
    display: flex !important;

}

@media (max-width: 900px) {

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


}

#app #prod-content a {
    color: rgb(13, 110, 253);
}
</style>
<style lang="scss">
#prod-content {
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

    margin: 60px 0 0px;

    @media (max-width: 900px) {
        margin: 60px 0 0px !important;
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
}

b,
strong {
    font-weight: bolder;
}

.prod-header .date {
    margin: 16px 0 0 !important;
}

@media (max-width: 900px) {
    #app #prod-content .titled h4 {
        font-size: 18px !important;
        line-height: 140% !important;
        margin: 0 0 8px !important;
    }


    .bank-btns {
        position: fixed;
        bottom: 0;
        z-index: 3;
        gap: 12px;
        width: 100vw;
        padding: 20px !important;
        left: 0;
        background: #fff;
        border-top: 1px solid #ededed;
    }

    .bank-btns a {
        padding: 16px 20px;
        /*! width: calc(50% - 6px); */
        display: inline-flex;
        justify-self: center;
        width: 100%;
    }

    .bank-btns div {
        width: calc(50% - 6px);
    }

    .bank-btns div img {
        position: relative;
        margin: 0 auto;
    }

}

.glide img {
    height: 100%;
}

.glide__arrow {
    appearance: none;
    background: none;
    border: none;

}

.glide__arrows {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    width: calc(100% + 128px);
    left: -64px;
    position: absolute;
    top: calc(50% - 26px);
}

.glide__arrow.glide__arrow--left .wrap {
    content: url(@/static/icons/arrow.svg);
    transform: rotate(180deg)
        /*! background: url(@/static/icons/arrow.svg); */
}

.glide__arrow.glide__arrow--right .wrap {
    content: url(@/static/icons/arrow.svg);
}

.glide__arrow.glide__arrow--disabled .wrap {
    content: url(@/static/icons/disabledArrow.svg)
}

.glide__arrow:hover:not(.glide__arrow--disabled) .wrap {
    content: url(@/static/icons/arrow-hover.svg)
}

.glide img {
    max-width: 100%;
    border-radius: 24px;
    overflow: hidden;
}

.glide__track {
    border-radius: 24px;
    height: 100% !important;
    width: 100% !important;
}

.glide-item {
    text-align: center;
    display: flex;
    -webkit-align-items: center;
    -webkit-justify-content: center;
    padding: 20px 0;
}

.glide__bullets {
    top: 100%;
    position: absolute;
    z-index: 2;
    bottom: 2em;
    left: 50%;
    display: inline-flex;
    list-style: none;
    transform: translateX(-50%);
}

.glide__bullet {
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

.glide__bullet.glide__bullet--active {
    background: #2B47DA;
}

@media (max-width: 900px) {
    .glide__arrows {
        display: none !important;
    }

    .atProd footer.mobile-only {
        //margin-bottom: 120px;
        margin-bottom: 0px;
    }

    .atProd .contacts {
        // bottom: 103px !important;
        bottom: 20px !important;
        right: 20px;
        z-index: 3 !important;
    }

    .glide-item {
        padding-top: 0 !important;
    }

    .glide img.mobile-only {
        border-radius: 0 !important;
    }

    .glide__track {
        border-radius: 0;
    }

    #app.atProd>div>.container.mrt-35 {
        padding: 0 20px !important;
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