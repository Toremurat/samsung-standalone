<template>
    <div class="container" id="promoList">
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
// .container.footer .care-widget {
//     margin-top: 140px;
//     border-radius: 24px;
//     overflow: hidden;

//     @media (max-width:900px) {
//         margin-top: 80px!important;
//         margin-bottom: 60px!important;
//     }


// }

@media (max-width: 900px) {
    #app > div > .container {
        padding: 20px 0!important;
        max-width: calc(100% - 40px)!important;
    }
    #app > div > .footer {
        padding: 0px 0!important;
        max-width: calc(100% - 40px)!important;
    }
}
@media (max-width: 560px) {
    #app > div > .container {
        padding: 20px 0!important;
        max-width: calc(100% - 40px)!important;
    }
    #app > div > .footer {
        padding: 0px 0!important;
        max-width: calc(100% - 40px)!important;
    }
}
</style>