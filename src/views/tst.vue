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
        top: -5px !important;
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

    .date {
        margin-top: 16px;
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
}</style>