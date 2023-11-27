<template>
    <div class="err">
        <h1 class="heading" style="font-size: 202px;">404</h1>
        <h3 class="header">Страница не найдена!</h3>
        <router-link to="/">Вернуться на главную</router-link>
    </div>
    <div class="container mgt-35">
        <careServiceWidget />
    </div>
</template>
<script>
import careServiceWidget from '@/components/careServiceWidget.vue';

export default {
    components: {
        careServiceWidget
    },
    name: 'NotFound',
    props: {
    },
}
</script>
<style scoped>
.err {
    text-align: center;
    min-height: 43vh;
}

.err {
    display: flex;
    flex-flow: column;
    align-content: center;
    justify-content: center;
}

@media (max-width:900px) {
    .err h1.heading {
        margin-bottom: 0px !important;
        font-size: 125px!important;
    }
}
</style>
