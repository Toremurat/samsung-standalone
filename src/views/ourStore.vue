<template>
    <div class="container mrb-15">
        <div class="title">
            <h1 class="heading pdt-10 mrb-15">
                О магазине
            </h1>
        </div>
        <div class="block-about">
            <div class="img-block">
                <img src="@/static/image/outer-store.webp" alt="Первый фирменный магазин Samsung в Казахстане">
            </div>
            <div class="text-block">
                <h3 class="header mrt-0 mrb-0">
                    Первый фирменный магазин Samsung в Казахстане
                </h3>
                <p class="text_base1 black_75">
                    Первый фирменный магазин Samsung в Казахстане - это место, где инновации и высокие технологии
                    встречаются с гостеприимством и качественным обслуживанием.
                </p>
            </div>
        </div>

        <div class="block-about">
            <div class="text-block">
                <h3 class="header mrt-0 mrb-0">
                    Инновационная техника и экспертная консультация
                </h3>
                <p class="text_base1 black_75">
                    Здесь вы найдете суперсовременные мобильные устройства, ТВ и аудио технику, бытовую технику, дисплеи и
                    различные аксессуары. Квалифицированные специалисты всегда готовы предоставить профессиональную
                    консультацию и продемонстрировать возможности устройств.
                </p>
            </div>
            <div class="img-block">
                <img src="@/static/image/inner-store.webp" alt="Инновационная техника и экспертная консультация">
            </div>
        </div>

        <div class="block-about">
            <div class="img-block">
                <img src="@/static/image/lounge-store.webp" alt="Играйте, узнавайте, впечатляйтесь!">
            </div>
            <div class="text-block">
                <h3 class="header mrt-0 mrb-0">
                    Играйте, узнавайте, впечатляйтесь!
                </h3>
                <p class="text_base1 black_75">
                    Насладитесь вашей любимой мобильной игрой на большом экране телевизора. Убедитесь, что ваш телефон
                    заряжен, и воспользуйтесь бесплатным Wi-Fi, пока вы знакомитесь с последними инновационными продуктами
                    от Samsung. Присоединяйтесь к мастер-классам, где будут раскрываться преимущества и особенности этих
                    продуктов.
                </p>
            </div>
        </div>
    </div>


    <div class="container footer mrt-35">
        <careServiceWidget />
    </div>
</template>

<script>
import careServiceWidget from '@/components/careServiceWidget.vue';// eslint-disable-next-line

export default {
    name: 'ContactsPage',
    components: {
        careServiceWidget
    },
}
</script>

<style scoped lang="scss">
.block-about {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 40px;
}

.block-about>div {
    flex-basis: calc(50% - 20px);
}

.block-about:nth-of-type(3) .text-block {
    padding-inline: 0 20px;
}

.block-about .text-block {
    padding-inline: 20px 0;
}

.block-about:not(:last-of-type) {
    margin-bottom: 80px;
}

.block-about h3.header {
    margin-bottom: 20px;
}

img {
    max-width: 100%;
}

.container.mrb-15 .glide img.mobile-only {
    border-radius: 24px !important;
}

#app>div>.container.mrb-15 {
    margin-bottom: 20px !important;
}

h3.heading {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
}

.container.footer.mrt-35 {
    margin-top: 80px;
}

@media (max-width: 900px) {
    .block-about>div {
        flex-basis: 100%;
    }

    #app>div>.container.mrb-15 {
        padding: 0 15px !important;
    }

    .block-about {
        gap: 24px;
        align-items: flex-start;
    }

    .block-about .text-block {
        padding-inline: 0 !important;
    }

    .block-about>div.img-block {
        order: -1;
    }

    .block-about:not(:last-of-type) {
        margin-bottom: 40px;
    }

    .block-about h3.header {
        margin-bottom: 12px;
    }
}</style>
