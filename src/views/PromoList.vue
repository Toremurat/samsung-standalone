<template>
    <div class="container">
        <PromoListBlock></PromoListBlock>
    </div>
    <div class="container footer">
        <careServiceWidget />
    </div>
</template>
<script>

import careServiceWidget from '@/components/careServiceWidget.vue';
import PromoListBlock from '@/components/PromoListBlock.vue';
export default {
    name: 'PromoList',
    components: {
        careServiceWidget,
        PromoListBlock
    }
}
</script>
<style scoped lang="scss">
.container.footer .care-widget {
    margin-top: 111px;
    border-radius: 24px;
    overflow: hidden;

    @media (min-width:900px) {
        margin-top: 100px;
    }


}

@media (max-width: 560px) {
    #app > div > .container {
        padding: 20px 0!important;
        max-width: calc(100% - 40px)!important;
    }
}
</style>