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
    background: #EAEDFF;
    position: relative;
    overflow: hidden;
    border-radius: 24px;

    &:before {
        position: absolute;
        content: url("data:image/svg+xml,%3Csvg width='142' height='141' viewBox='0 0 142 141' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M90.0249 117.16C96.1101 112.71 95.9111 105.417 92.7954 101.415C89.756 97.5125 86.0578 96.7174 83.4331 97.4247C83.207 94.7156 81.2002 91.512 76.5154 89.9845C71.3797 88.31 64.7508 90.6915 62.634 97.9272C59.8252 107.256 65.4952 119.941 66.9207 120.942C68.3462 121.943 82.0585 122.999 90.0249 117.16Z' fill='%2391A0EF' fill-opacity='0.5'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M55.651 75.4918C57.9902 65.2897 51.1487 57.8173 44.241 56.4523C37.5026 55.1209 32.8991 57.6495 30.7882 60.7785C28.0875 58.1416 23.0685 56.6049 16.7638 59.2622C9.85232 62.1753 5.06221 70.7023 9.4209 80.2195C14.9565 92.5619 32.4413 100.716 34.8473 100.47C37.2534 100.225 52.6016 88.8629 55.651 75.4918Z' fill='%2391A0EF' fill-opacity='0.5'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M124.457 54.0161C132.18 42.3789 127.156 29.8286 119.173 24.8728C111.387 20.0384 104.449 21.0287 100.34 23.9419C98.2092 19.3781 92.6659 15.0969 83.5431 15.4471C73.5423 15.831 63.5477 24.2228 64.5099 38.1575C65.6118 56.1738 83.6045 74.5858 86.7244 75.4113C89.8443 76.2368 114.356 69.2755 124.457 54.0161Z' fill='%2391A0EF' fill-opacity='0.5'/%3E%3C/svg%3E%0A");
        left: 24px;
        top: -40px;
        z-index: 1;
    }

    &:after {
        position: absolute;
        content: url("data:image/svg+xml,%3Csvg width='133' height='145' viewBox='0 0 133 145' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M33.0171 38.1597C26.9319 33.7105 27.1308 26.4166 30.2466 22.4156C33.286 18.5126 36.9842 17.7175 39.6089 18.4248C39.835 15.7158 41.8418 12.5121 46.5266 10.9846C51.6622 9.31014 58.2912 11.6916 60.408 18.9273C63.2168 28.2557 57.5468 40.9409 56.1213 41.942C54.6958 42.943 40.9835 43.9987 33.0171 38.1597Z' fill='%2391A0EF' fill-opacity='0.5'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M78.102 54.5422C75.7628 44.3401 82.6042 36.8677 89.512 35.5028C96.2504 34.1713 100.854 36.6999 102.965 39.8289C105.665 37.192 110.684 35.6553 116.989 38.3127C123.901 41.2258 128.691 49.7527 124.332 59.2699C118.796 71.6123 101.312 79.7668 98.9056 79.5209C96.4995 79.2749 81.1513 67.9133 78.102 54.5422Z' fill='%2391A0EF' fill-opacity='0.5'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M17.0323 104.016C9.30929 92.379 14.334 79.8287 22.3164 74.8729C30.1031 70.0385 37.0412 71.0288 41.1497 73.942C43.2806 69.3783 48.8238 65.0971 57.9467 65.4472C67.9474 65.8311 77.9421 74.2229 76.9798 88.1576C75.8779 106.174 57.8853 124.586 54.7653 125.411C51.6454 126.237 27.1337 119.276 17.0323 104.016Z' fill='%2391A0EF' fill-opacity='0.5'/%3E%3C/svg%3E%0A");
        right: 24px;
        top: 0px;
        z-index: 1;
    }

    .flex.flow-row.align-center.care-widget {
        position: relative;
    }

    @media (max-width: 1366px) and (min-width: 900px) {
        .flex.flow-row.align-center.care-widget {
            border-radius: 24px;
            overflow: hidden;
            background-position: 50% 10% !important;
            background-size: cover !important;
        }
    }

    @media (max-width:900px) {
        background: #EAEDFF;
        background-size: cover;
        flex-flow: column;
        align-items: flex-start;
        gap: 28px;
        padding: 24px 24px 38px;
    }
}

.care-link {
    z-index: 2;
}
.care-link a {
    color: #FFF;
    padding: 16px 24px;
    border-radius: 12px;
    background: #2B47DA;
    transition: ease .3s all;


    @media (max-width:900px) {
        padding: 12px 16px;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
    }
}

@media (min-width: 900px) and (max-width: 1150px){
    .flex.flow-row.align-center.care-widget:after,
    .flex.flow-row.align-center.care-widget:before{
        content: none!important
    }
}
@media (max-width: 900px) {
    .care-text {
        max-width: 70%;
    }

    .flex.flow-row.align-center.care-widget {
        background-size: 150% !important;
        background-repeat: no-repeat !important;
        border-radius: 24px;
    }

    .care-link a {
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
    }

    .flex.flow-row.align-center.care-widget:after {
        content: url("data:image/svg+xml,%3Csvg width='107' height='175' viewBox='0 0 107 175' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M29.0095 50.2256C30.0518 41.8288 37.3142 38.0428 42.939 38.9148C48.426 39.7655 51.2244 42.9586 51.9634 45.919C54.7438 44.6621 58.9813 44.8817 63.0365 48.6428C67.482 52.7658 68.7645 60.5673 62.8232 66.5928C55.2071 74.4394 39.6707 75.8023 37.9109 74.9506C36.151 74.0988 27.631 61.2261 29.0095 50.2256Z' fill='%2391A0EF' fill-opacity='0.5'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M55.2846 26.6827C51.272 23.1794 51.8568 18.0567 54.2942 15.4299C56.6719 12.8676 59.3239 12.5333 61.1286 13.1913C61.453 11.2979 63.0611 9.16493 66.4523 8.37524C70.1699 7.50956 74.6914 9.59029 75.7404 14.8133C77.149 21.5517 72.3839 30.1364 71.3194 30.7542C70.2548 31.372 60.5369 31.2791 55.2846 26.6827Z' fill='%2391A0EF' fill-opacity='0.5'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M23.8056 132.646C14 121.918 17.1555 108.208 24.5691 101.833C31.8009 95.615 39.0934 95.5215 43.7846 97.8586C45.2443 92.8247 50.2581 87.5344 59.6944 86.4327C70.0389 85.225 81.6602 92.2521 82.9035 106.734C84.6574 125.435 69.1072 147.25 66.0315 148.599C62.9558 149.947 36.6371 146.717 23.8056 132.646Z' fill='%2391A0EF' fill-opacity='0.5'/%3E%3C/svg%3E%0A");
        position: absolute;
        right: 12px;
        max-height: 100%;
        object-fit: cover;
        top: 16px;
    }
    .flex.flow-row.align-center.care-widget:before {
        content: none;
    }

    .flex.flow-row.align-center.care-widget {
        position: relative;
    }
}</style>
