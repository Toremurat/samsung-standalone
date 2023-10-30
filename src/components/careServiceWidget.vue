<template>
    <div class="flex flow-row align-center care-widget">
        <div class="care-text">
            <p class="text_base1_bold black_100 mrt-0 mrb-1">Служба заботы</p>
            <p class="text_base2 black_75 mrb-0 mrt-0">Служба заботы поможет решить вопросы, возникшие у вас при
                обслуживании</p>
        </div>
        <div class="care-link">
            <router-link to="/care-service" class="">Связаться</router-link>
        </div>
    </div>
</template>

<script>
/* eslint-disable */

export default {
    name: 'careServiceWidget',
    props: {
    },
    data() {
        return {
        }
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.care-widget {
    margin-top: 0;
    margin-bottom: 60px;

    @media (max-width: 1366px) {
        margin-top: 0;
        margin-bottom: 38px;
    }

    @media (max-width: 900px) {
        margin-top: 0;
        margin-bottom: 28px;
    }
}

.flex.flow-row.align-center.care-widget {
    padding: 24px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    gap: 40px;
    background-size: cover !important;
    background: url(@/static/image/contact_slider/care-bg.webp);

    @media (max-width: 1366px) and (min-width: 900px) {
        .flex.flow-row.align-center.care-widget {
            border-radius: 24px;
            overflow: hidden;
            background-position: 50% 10% !important;
            background-size: cover !important;
        }
    }

    @media (max-width:900px) {
        background: url(@/static/image/contact_slider/care-bg-m.webp);
        background-size: cover;
        flex-flow: column;
        align-items: start;
        gap: 28px;
        padding: 24px 24px 38px;
    }
}

.care-link a {
    color: #FFF;
    padding: 16px 24px;
    border-radius: 12px;
    background: #2B47DA;
    transition: ease .3s all;

    @media (max-width:900px) {
        padding: 12px 16px;
    }
}

@media (max-width: 900px) {
    .care-text {
        max-width: 70%;
    }
}</style>
