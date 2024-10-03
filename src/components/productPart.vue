
<template>
    <div v-if="prodItems" class="promo-wrapper" id="prodPart">
        <div class="description-item" v-show="prodItems.products && prodItems.products.length">
                <div v-for="category in uniqueCategories" :key="category" class="prod-wrap">
                    <h3 class="categoryName">
                        {{ category }}
                    </h3>
                    <div v-for="product in filteredProducts(category)" :key="product.model" class="product">
                        <div class="photo">
                            <img :src="'/static/image/promo/product-images/' + getImage(product.image) + '.webp'">
                            <span v-if="product.rrp != product.prp">-{{Math.round(((product.rrp - product.prp) / Math.abs(product.rrp)) * 100) || 0}}%</span>
                        </div>
                        <div class="price" v-if="product.rrp == product.prp || !product.prp ">
                            <p>{{ formatNumber(product.rrp) }}<small>₸</small></p>
                        </div>
                        <div class="price" v-else-if="product.rrp == product.prp || !product.rrp">
                            <p>{{ formatNumber(product.prp) }}<small>₸</small></p>
                        </div>

                        <div class="price" v-else>
                            <p>{{ formatNumber(product.prp) }}<small>₸</small></p>
                            <strike>{{ formatNumber(product.rrp) }}<small>₸</small></strike>
                        </div>
                        <p>{{ product.name }} {{ product.model }}</p>
                        <!-- Kaspi button wrapper -->
                        <div class="kaspi-wrapper" v-show="product.kaspi">
                            <div :id="'kaspi-' + product.model"></div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'productPart',
    data() {
        return {
            prodItems: {},
            errorData: [],
        };
    },
    methods: {
        async fetchData() {
            try {
                const linkParam = this.$route.params.link;
                const response = await axios.get('/api/v2/promo/' + linkParam + '/');

                if (response.data && response.data.length > 0) {
                    const matchingData = response.data[0];
                    this.prodItems = {
                        products: matchingData.promo_description[0].products || [],
                    };
                } else {
                    this.prodItems = {
                        products: [],
                    };
                }
            } catch (error) {
                console.error(error);
                this.errorData.push(error);
            }
        },
        filteredProducts(category) {
            return this.prodItems.products ? this.prodItems.products.filter(product => product.category === category) : [];
        },
        getImage(image) {
            return image ? image.replace(/[/\s]/g, '') : '';
        },
        formatNumber(number) {
            return number ? Number(number).toLocaleString('ru-RU') : '';
        },
        initializeKaspiButtons() {
            // Динамически добавляем кнопку Kaspi для каждого продукта с support Kaspi
            this.prodItems.products.forEach(product => {
                if (product.kaspi) {
                    const dynamicElement = document.getElementById(`kaspi-${product.model}`);
                    if (dynamicElement) {
                        dynamicElement.innerHTML = `<div class="ks-widget" data-template="button" data-merchant-sku="${product.kaspi}" data-merchant-code="merchant-code" data-city="750000000"></div>`;
                    }
                }
            });

            // Реинициализация виджетов после вставки динамических кнопок
            if (window.ksWidgetInitializer) {
                window.ksWidgetInitializer.reinit();
            }
        },
    },
    created() {
        this.fetchData();
    },
    computed: {
        isMobile() {
            return window.innerWidth < 768;
        },
        uniqueCategories() {
            return this.prodItems.products ? Array.from(new Set(this.prodItems.products.map(product => product.category))) : [];
        },
    },
};
</script>

<style scoped lang="scss">
@import url(@/static/styles/main.css);

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
</style>
<style lang="scss" scoped>
#prodPart {
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

    @media (max-width: 900px) {
        margin: 40px 0 0 !important;
    }



    & .prod-wrap {
        display: flex;
        flex-flow: row wrap;
        gap: 40px;
        margin-top: 40px;
        & + .prod-wrap{
            margin-top: 60px;
        }
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
            align-items: baseline;
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
                margin: 0;
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

#prodPart .prod-wrap .product>p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
}

#prodPart .prod-wrap .price strike {
    text-decoration: none;
    position: relative;
}

#prodPart .prod-wrap .price strike:after {
    content: '';
    position: absolute;
    width: 90%;
    height: 1px;
    background: #282828;
    left: 0;
    top: 50%;
}
</style>