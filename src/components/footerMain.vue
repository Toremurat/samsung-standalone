<template>
    <footer class="mobile-only">
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
                        <a href="tel:+77719333322" class="blue_80">+7 771 933 33 22</a>
                        <span class="text_base2 black_50">
                            Единый номер
                        </span>
                    </p>
                    <p class="text_base1_bold mrt-0 mrb-10">
                        <a href="https://wa.me/+77777888889" class="blue_80">+7 777 788 88 89</a>
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
                            <a
                                href="https://2gis.kz/almaty/directions/points/%7C76.955573%2C43.233917%3B70000001076849171?floor=1&m=76.955831%2C43.233979%2F19.77">
                                <img src="@/static/icons/2gis.svg" alt="">
                            </a>
                            <span class="verticalDiv black_25_bg"></span>
                            <a
                                href="https://yandex.ru/maps/162/almaty/?indoorLevel=1&ll=76.956320%2C43.233477&mode=routes&rtext=~43.233492%2C76.956694&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D32933881704&z=19.81">
                                <img src="@/static/icons/yandex.svg" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-r">
                <div class="footer-subscribe pdl-20">
                    <div class="inst ">
                        <a href="https://www.instagram.com/samsungkz/">
                            <img src="@/static/icons/inst.svg" alt="" class="footer-inst mrr-3">
                            <p class="blue_80_hover text_base1_bold mrb-0 mrt-0 desktop-only">
                                Подписывайтесь<br>на наш Instagram
                            </p>
                        </a>
                    </div>
                    <a href="https://www.instagram.com/samsungkz/" class="mobile-only">
                        <p class="text_base2_bold mrt-4 mrb-8">Подписывайтесь на наш Instagram</p>
                        <p class="text_base2 mrt-4 mrb-8">Чтобы следить за новинками и акциями</p>
                    </a>
                    <p class="text_base2 mrt-4 mrb-8 desktop-only">Чтобы следить за новинками и акциями</p>
                    <a href="email:samsung@evrika.com" class="text_base1 blue_80 email">samsung@evrika.com</a>
                </div>
            </div>
        </div>
        <hr class="mrt-0 mrb-3">
        <div class="copyright">
            <p class="text_base3 black_50 mrt-0 mrb-5">Copyright © 2023 ТОО Компания Эврика</p>
        </div>
    </footer>
    <footer class="desktop-only">
        <hr class="mrt-0 mrb-15">
        <div class="footer-wrap mrb-15">
            <div class="col-r logos">
                <img src="@/static/icons/samsung.svg" alt="" class="footer-img">
                <img src="@/static/icons/evrika.svg" alt="" class="footer-img ">
            </div>
            <div class="col-r phones">
                <div class="phone">
                    <p class="text_base1_bold mrb-0 mrt-0">
                        <a href="tel:+77719333322" class="blue_80">+7 771 933 33 22</a>
                        <span class="text_base2 black_50">
                            Единый номер
                        </span>
                    </p>
                </div>
                <div class="phone">
                    <p class="text_base1_bold mrt-0 mrb-0">
                        <a href="https://wa.me/+77777888889" class="blue_80">+7 777 788 88 89</a>
                        <span class="text_base2 black_50">
                            WhatsApp консультация
                        </span>
                    </p>
                </div>
            </div>
            <div class="col-r addrs">
                <div class="footer-contacts">
                    <p class="text_base1 black_100 mrb-4">
                        Алматы, Самал-2, 111,<br>ТРЦ Dostyk Plaza, 1 этаж
                    </p>
                    <div class="addr-box">
                        <div class="addr-link">
                            <p class="text_base_2 black_50  mrb-1">Проложить маршрут</p>
                            <a
                                href="https://2gis.kz/almaty/directions/points/%7C76.955573%2C43.233917%3B70000001076849171?floor=1&m=76.955831%2C43.233979%2F19.77">
                                <img src="@/static/icons/2gis.svg" alt="">
                            </a>
                            <span class="verticalDiv black_25_bg"></span>
                            <a
                                href="https://yandex.ru/maps/162/almaty/?indoorLevel=1&ll=76.956320%2C43.233477&mode=routes&rtext=~43.233492%2C76.956694&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D32933881704&z=19.81">
                                <img src="@/static/icons/yandex.svg" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-r insta">
                <div class="footer-subscribe">
                    <div class="inst ">
                        <a href="https://www.instagram.com/samsungkz/">
                            <img src="@/static/icons/inst.svg" alt="" class="footer-inst mrr-3">
                            <div class="text">
                                <p class="blue_80_hover text_base1_bold mrb-0 mrt-0 desktop-only">
                                    Подписывайтесь<br class="notCertain">на наш Instagram
                                </p>
                                <p class="text_base2 black_100 certain">Чтобы следить за новинками и акциями</p>
                            </div>
                        </a>
                    </div>
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
footer.desktop-only {
    .footer-img {
        height: 52px;
    }

    .addr-link {
        width: 220px;
    }

    .phone>p {
        display: flex;
        flex-flow: column;
        gap: 4px;
    }

    .footer-wrap {
        display: flex;
        flex-flow: row wrap;
        align-items: flex-start;
        justify-content: space-between;
        gap: auto;
    }

    .col-r {
        display: flex;
        flex-flow: column;
        gap: 24px;
        width: auto;
    }

    .col-r.logos {
        max-width: 184px !important;
        gap: 28px !important;
        display: flex;
        flex-flow: column;
        align-items: flex-start;
    }

    .footer-contacts p {
        flex-basis: 100%;
        margin-bottom: 0 !important;
    }

    .footer-contacts {
        display: flex;
        flex-flow: column;
        gap: 24px;
    }

    .addr-link {
        flex-flow: row wrap;
        row-gap: 4px;
    }

    .footer-subscribe {
        display: flex;
        flex-flow: column;
        gap: 24px;
    }

    .notCertain {
        display: none;
    }

    .certain {
        display: block !important;
        margin: 0;
    }

    .inst a {
        align-items: center;
    }

    .inst a .text {
        display: flex;
        align-items: flex-start;
        flex-flow: column;
        justify-items: center;
    }

    @media (min-width: 1171px) and (max-width: 1360px) {
        .footer-wrap .certain {
            display: none !important;
        }

        .notCertain {
            display: block !important;
        }
    }

    @media (max-width: 1170px) {
        .footer-wrap {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: repeat(3, 1fr);
            grid-gap: 15px;
        }

        .logos {
            grid-column: 1 / 2;
            grid-row: 1 / 3;
        }

        .phones {
            grid-column: 2 / 3;
            grid-row: 1;
        }

        .addrs {
            grid-column: 2 / 3;
            grid-row: 2;
        }

        .insta {
            grid-column: 2 / 3;
            grid-row: 3;
        }

        .phone>p {
            flex-flow: row nowrap;
            gap: 8px;
            align-items: center;
        }

        .notCertain {
            display: none !important;
        }

        .certain {
            display: block !important;
            margin: 0 !important;
        }

        .footer-contacts p br {
            display: none;
        }

        .addr-link {
            flex-flow: row nowrap !important;
            white-space: nowrap;
        }

        .verticalDiv.black_25_bg {
            min-width: 1px !important;
            height: 22px !important;
            flex-basis: 1px;
            display: block !Important;
        }

        footer.desktop-only .footer-subscribe {
            gap: 40px !important;
        }

        footer.desktop-only .footer-contacts {
            gap: 12px !important;
        }

        footer.desktop-only .col-r {
            gap: 24px !important;
        }
    }
}

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
    align-items: flex-start;
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

    .footer-subscribe.pdl-20 {
        padding-left: 0 !important;
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
        flex-basis: 100%;
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

    .footer-contacts p.text_base_2.black_50.mrb-1 {
        margin-bottom: -4px;
    }

    .copyright {
        padding: 0 20px;
    }

    .footer-contacts .text_base1.black_100.mrb-4 {
        font-size: 16px !important;
    }

    .footer-submenu.pdl-0 {
        padding: 20px 20px !important;
    }

    .footer-submenu.pdl-0 li:not(:last-of-type) {
        margin-bottom: 20px;
    }

    .footer-wrap li.text_base1_bold a {
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 140%;
    }

    .inst+.mobile-only {
        flex-basis: calc(100% - 73px);
    }

    .footer-contacts p.text_base_2.black_50.mrb-1 {
        font-size: 14px;
    }

    .contactsMainOverlay .text_base1.black_75.mrb-15.mrt-0 {
        margin-bottom: 28px !important;
    }
}

@media (max-width:1260px) and (min-width: 900px) {
    .footer-contacts.pdl-8 .text_base1_bold:not(last-of-type) {
        flex-flow: column !important;
    }

    .footer-wrap {
        gap: 20px;
    }
}

#footer-collapse.active {
    border-color: transparent;
    transition: border-color ease .01s;
}

.care-link a:hover {
    background: #1D39C9;
    transition: ease all .3;
}

.care-link a {
    transition: ease all .3s;
}

.copyright p {
    font-weight: 400 !important;
}</style>