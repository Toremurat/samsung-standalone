<template>
    <footer>
        <hr class="mrt-0 mrb-15">
        <div class="footer-wrap mrb-15">
            <div class="col-r logos">
                <img src="@/static/icons/samsung.svg" alt="" class="footer-img mrb-8">
                <img src="@/static/icons/evrika.svg" alt="" class="footer-img ">
            </div>
            <div class="col-r">
                <ul class="footer-menu pdl-10 mrl-0">
                    <li class="text_base1_bold black_100 mrb-6">
                        <router-link to="" :class="'black_100'">
                            Акции
                        </router-link>
                    </li>
                    <li class="text_base1_bold black_100 mrb-6">
                        <router-link to="" :class="'black_100'">
                            Контакты
                        </router-link>
                    </li>
                    <li class="text_base1_bold black_100" id="footer-collapse" @click="toggleCollapse"
                        :class="{ active: isCollapsed, blue_80: isCollapsed }">
                        Информация покупателям
                    </li>
                    <div class="footer-collasible" :class="{ collapsed: isCollapsed }">
                        <ul class="footer-submenu pdl-0">
                            <li class="text-base2 black_100 mrt-6">
                                Оплата
                            </li>
                            <li class="text-base2 black_100 mrt-6">
                                Доставка
                            </li>
                            <li class="text-base2 black_100 mrt-6">
                                Возврат и обмен
                            </li>
                            <li class="text-base2 black_100 mrt-6">
                                Оплата
                            </li>
                            <li class="text-base2 black_100 mrt-6">
                                Сервис
                            </li>
                            <li class="text-base2 black_100 mrt-6">
                                Публичная оферта
                            </li>
                        </ul>
                    </div>
                </ul>
            </div>
            <div class="col-r">
                <div class="footer-contacts pdl-8">
                    <p class="text_base1_bold mrb-4 mrt-0">
                        <a href="tel:" class="blue_80">+7 771 933 33 22</a>
                        <span class="text_base2 black_50">
                            Единый номер
                        </span>
                    </p>
                    <p class="text_base1_bold mrt-0 mrb-10">
                        <a href="tel:" class="blue_80">+7 777 788 88 89</a>
                        <span class="text_base2 black_50">
                            WhatsApp консультация
                        </span>
                    </p>
                    <p class="text_base1 black_100 mrb-4">
                        Алматы, Самал-2, 111, ТРЦ Dostyk Plaza, 1 этаж
                    </p>
                    <div class="addr-box">
                        <div class="addr-link">
                            <p class="text_base_2 black_50  mrb-1">Проложить маршрут</p>
                            <a href="http://">
                                <img src="@/static/icons/2gis.svg" alt="">
                            </a>
                            <span class="verticalDiv black_25_bg"></span>
                            <a href="http://">
                                <img src="@/static/icons/yandex.svg" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-r">
                <div class="footer-subscribe pdl-20">
                    <div class="inst ">
                        <a href="/">
                            <img src="@/static/icons/inst.svg" alt="" class="footer-inst mrr-3">
                            <p class="blue_80_hover text_base1_bold mrb-0 mrt-0 desktop-only">
                                Подписывайтесь<br>на наш Instagram
                            </p>
                        </a>
                    </div>
                    <a href="/" class="mobile-only">
                        <p class="text_base2_bold mrt-4 mrb-8">Подписывайтесь на наш Instagram</p>
                        <p class="text_base2 mrt-4 mrb-8">Чтобы следить за новинками и акциями</p>
                    </a>
                    <p class="text_base2 mrt-4 mrb-8">Чтобы следить за новинками и акциями</p>
                    <a href="email:samsung@evrika.com" class="text_base1 blue_80 email">samsung@evrika.com</a>
                </div>
            </div>
        </div>
        <hr class="mrt-0 mrb-3">
        <div class="copyright">
            <p class="text_base3 black_50 mrt-0 mrb-5">Copyright © 2023 ТОО Компания Эврика</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'footerMain',
    data() {
        return {
            isCollapsed: false,
        };
    },
    methods: {
        toggleCollapse() {
            this.isCollapsed = !this.isCollapsed;
        },
    },

};
</script>

<style lang="scss" scoped>
hr {
    color: #EDEDED;
    opacity: 1;
}

#footer-collapse {
    cursor: pointer;
}

#footer-collapse {
    cursor: pointer;
    transition: ease all .3s;
}

#footer-collapse.active:before {
    transform: rotate(180deg);
    transition: ease all .3s;
}

.footer-collasible {
    display: block; // Изначально отображается
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;

    &.collapsed {
        max-height: 500px; // Замените на желаемую высоту
    }
}

#footer-collapse::before {
    content: url(@/static/icons/smallArrow.svg);
    display: block;
    position: absolute;
    margin-left: -28px;
    width: 21px;
    height: 21px;
    margin-top: 3px;
    transition: ease all .3s;
}

.footer-wrap {
    display: flex;
    flex-flow: row nowrap;
    align-items: start;
    gap: 40px;

    @media (max-width: 1600px) {
        gap: 60px;
    }
}

.col-r.logos {
    max-width: unset;
    gap: 32px;
}

// .pdl-20 {

//     padding-left: 0px !important;
// }

.addr-link {
    display: flex;
    flex-flow: row nowrap;
    gap: 16px;
    align-items: center;
}

.verticalDiv.black_25_bg {
    width: 1px;
    height: 22px;
}

.addr-link a {
    display: flex;
}

.footer-contacts p {
    display: flex;
    flex-flow: row;
    gap: 8px;
}

.inst a {
    display: flex;
    flex-flow: row nowrap;
}

.footer-subscribe.pdl-20 {
    width: 330px;

    @media (max-width: 1600px) {
        width: 100%;
    }

    @media (max-width: 1080px) {
        width: 100%;
    }
}

.footer-menu.pdl-10.mrl-0 {
    width: 330px;

    @media (max-width: 1600px) {
        width: 100%;
        padding-left: 20px !important;

    }

    @media (max-width: 1080px) {
        width: 100%;
        padding-left: 20px !important;

    }
}

.footer-contacts.pdl-8 {
    width: 453px;

    @media (max-width: 1600px) {
        width: 100%;
        padding-left: 0 !important;
    }

    @media (max-width: 1080px) {
        width: 100%;
        padding-left: 0 !important;
    }
}

@media (max-width: 1600px) {
    .footer-contacts p {
        flex-flow: row wrap !important;
        gap: 8px !important;
    }

    .text_base1_bold.mrt-0.mrb-10 {
        margin-bottom: 20px;
    }

    .addr-link {
        flex-flow: row wrap !important;
    }

    .footer-contacts p.text_base_2.black_50.mrb-1 {
        flex-basis: 100%;
    }

    .col-r:not(.logos) {
        width: 27%;
    }

    .col-r:nth-of-type(3) {
        width: 35%;
    }

    .col-r.logos {
        max-width: 170px !important;
    }

}

@media (max-width: 1080px) {
    .footer-contacts p {
        flex-flow: row wrap !important;
        gap: 8px !important;
    }

    .text_base1_bold.mrt-0.mrb-10 {
        margin-bottom: 20px;
    }

    .addr-link {
        flex-flow: row wrap !important;
    }

    .footer-contacts p.text_base_2.black_50.mrb-1 {
        flex-basis: 100%;
    }

    .col-r:not(.logos) {
        width: 27%;
    }

    .col-r:nth-of-type(3) {
        width: 35%;
    }

    .col-r.logos {
        max-width: 170px !important;
    }

}

@media (max-width: 900px) {
    .footer-wrap {
        flex-flow: column !important;
    }

    .footer-subscribe.pdl-20 {
        padding-left: 0 !important;
    }

    .col-r.logos {
        display: none;
    }

    .col-r {
        width: 100% !important;
    }

    hr.mrt-0.mrb-15 {
        margin-bottom: 0;
    }

    .footer-menu.pdl-10.mrl-0 {
        padding: 0;
    }

    .footer-menu>li {
        padding: 20px;
        border-bottom: 1px solid #EDEDED;
        margin: 0;
    }

    .container.footer {
        padding: 0;
        max-width: 100%;
    }

    #footer-collapse::before {
        right: 20px;
    }

    .footer-submenu.pdl-0 {
        padding: 0 20px;
    }

    .footer-contacts span {
        display: flex;
        align-items: center;
    }

    .footer-contacts.pdl-8 {
        padding: 0 !important;
        display: flex;
        flex-flow: column;
    }

    .addr-box {
        order: -1;
        padding-bottom: 28px;
        border-bottom: 1px solid #ededed;
    }

    .footer-contacts>p:last-of-type {
        order: -2;
        margin-top: 28px !important;
    }

    .footer-contacts>p:first-of-type {
        padding: 28px 0 0;
    }

    .footer-wrap {
        gap: 0;
        margin-bottom: 28px !important;
    }

    .footer-contacts>p:nth-of-type(2) {
        margin-bottom: 28px;
    }

    footer ul.footer-menu.pdl-10.mrl-0 {
        padding-left: 0 !important;
        padding-right: 0 !important;
        margin: 0 !important;
    }

    .footer-contacts p.text_base_2.black_50.mrb-1 {
        flex-basis: auto;
    }

    .footer-subscribe.pdl-20 {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        column-gap: 8px;
        padding-top: 28px;
        border-top: 1px solid #ededed;
    }

    .text_base1.blue_80.email {
        flex-basis: 100%;
        border-top: 1px solid #ededed;
        margin-top: 28px;
        padding-top: 28px;
    }

    .footer-subscribe.pdl-20 a>p {
        margin: 0;
        color: #000 !important;
    }
}
</style>