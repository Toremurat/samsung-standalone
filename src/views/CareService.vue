<template>
    <div class="care-service_wrapper container mrb-35  black_100">
        <h1 class="heading" id="top">Служба заботы</h1>
        <div v-if="!successPage" class="content-block">
            <div class="care-description mrb-10">
                <h4 class="mrb-5 header">Служба заботы фирменного магазина Samsung всегда поможет решить вопросы, возникшие
                    у вас
                    при обслуживании</h4>
                <p class="text_base1 mrb-4">Пожалуйста, свяжитесь с нами и расскажите о своем опыте.</p>
                <p class="text_base1 mrb-0">Ваше сообщение увидит руководство и мы обязательно примем меры, которые позволят
                    сделать наш сервис еще лучше.</p>
            </div>
            <div class="care-service-form form-group">
                <h3 class="header"> Оставьте ваше сообщение </h3>
                <div class="form-row">
                    <div class="form_placer">
                        <label class="mrb-0 black_50" for="name">Ваше имя *</label>
                        <input type="text" class="care-form-field" id="name" placeholder="Ваше имя" @change="formValidation"
                            @blur="formValidation" @focus="resetValidation" :value="data.name">
                    </div>
                    <div class="form_placer mrb-8">
                        <label class="mrb-0 black_50" for="phone">Ваш телефон *</label>
                        <input v-mask="'+7 (7##) ###-##-##'" type="text" class="care-form-field" id="phone"
                            placeholder="Ваш номер" @change="formValidation" @blur="formValidation" @focus="resetValidation"
                            :value="data.phone" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form_placer mrb-8">
                        <label class="mrb-0 black_50" for="message">Ваше сообщение *</label>
                        <textarea class="care-form-field" id="message" placeholder="Ваше сообщение" @change="formValidation"
                            @blur="formValidation" @focus="resetValidation" :value="data.message" />
                    </div>
                </div>
                <div>
                    <button class="care-form_submit" @click="sendMessage">Отправить сообщение</button>
                </div>
            </div>
        </div>
        <div class="content-block success" v-if="successPage">
            <div class="alert alert-success">
                <h4 class="mrb-3 header green">Спасибо за обращение</h4>
                <p class="text_base1">Ваше сообщение увидит руководство и мы обязательно примем меры, которые позволят
                    сделать наш сервис еще
                    лучше.</p>
            </div>
        </div>
        <div v-if="!successPage" class="content-image" @load="scrollToTop();">
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { mask } from 'vue-the-mask'
export default {
    name: 'CareService',
    components: {
    },
    directives: {
        mask,
    },
    data() {
        return {
            data: {
                name: "",
                phone: "",
                message: "",
            },
            formValide: true,
            successPage: false,
        }
    },
    methods: {
        formValidation(e) {
            if (this.validation(e.target)) this.data[e.target.getAttribute('id')] = e.target.value;
        },
        validation(element) {
            let label = document.querySelector(`label[for=${element.getAttribute('id')}]`);
            if (element.getAttribute('id') == 'phone') {
                if (element.value.match(/\+7 \(\d\d\d\) \d\d\d-\d\d-\d\d/gu)) {
                    return true;
                } else {
                    element.classList.add('is-invalid');
                    label.classList.add('is-invalid');
                    return false;
                }
            } else {
                if (element.value == '') {
                    element.classList.add('is-invalid');
                    label.classList.add('is-invalid');
                    return false;
                } else {
                    return true;
                }
            }
        },
        resetValidation(e) {
            let label = document.querySelector(`label[for=${e.target.getAttribute('id')}]`);
            e.target.classList.remove('is-invalid');
            label.classList.remove('is-invalid');
            this.formValide = true;
        },
        sendMessage() {

            for (let item in this.data) {
                let element = document.querySelector('#' + item);
                if (!this.validation(element)) this.formValide = false;
            }
            if (this.formValide) {
                axios.post("/care-service", this.data)
                    .then(response => {
                        if (response.status == "error") {
                            console.error(response.massage);
                        } else {
                            this.showSuccessPage();
                        }
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }

        },
        showSuccessPage() {
            this.successPage = true;
            setTimeout(() => {
                this.scrollToTop();
            }, 50);
            setTimeout(() => {
                this.$router.push("/");
            }, 20000);
        },
        scrollToTop() {
            window.scrollTo(0, 0);
            console.log("Scrolling to top...");
        },
    },

}
</script>
<style scoped lang="scss">
.care-form-field#message {
    min-height: 150px;
}

.content-block.success {
    margin-bottom: 100px;

    @media(min-width: 1080px) {
        margin-bottom: 20vh;
    }
}

.care-service_wrapper {
    margin-top: 110px;
}

.green {
    color: #008F25
}

.alert.alert-success {
    border-radius: 24px;
    background: #F3FFEA;
    padding: 24px;
    border: none;
}

.content-image {
    background: url(@/static/image/promo/care-service/block.webp);
    background-size: cover;
    background-position: center;
    border-radius: 24px;
}

.care-form_submit {
    appearance: none;
    padding: 20px 28px;
    border-radius: 12px;
    background: var(--blue_80, #2B47DA);
    color: white;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    border: none;
    transition: ease all .3s;
}

.care-form_submit:hover {
    transition: ease all .3s;
    background: #1D39C9;
    color: white;
}

label {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
}

.care-form-field:focus {
    border-color: #91A0EF;
}

.care-form-field {
    padding: 20px 28px;
    border-radius: 12px;
    border: 1px solid #c9c9c9;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    transition: all .15s ease;
}

.care-form-field.is-invalid {
    border: 1px solid #FB6060;
    transition: all .15s ease;
}

label {
    transition: all .15s ease;
}

label.is-invalid {
    color: #FB6060 !important;
    transition: all .15s ease;
}

.care-service_wrapper.container {
    display: flex;
    flex-flow: row wrap;
    align-items: stretch;
    gap: 40px 80px;
}

.care-service-form.form-group {
    display: flex;
    flex-flow: row wrap;
}

h3.header {
    flex-basis: 100%;
}

.form-row {
    flex-basis: 100%;
    display: flex;
    flex-flow: row wrap;
    gap: 8px 32px;
}

.form-row:first-of-type .form_placer {
    flex-basis: calc(50% - 16px);
}

.form-row .form_placer {
    flex-basis: 100%;
}

.care-form-field {
    width: 100%;
}

h1 {
    flex-basis: 100%;
    margin: 0;

}

.content-block {
    flex-basis: 54.5%;
    max-width: 54.5%;
}

.content-image {
    flex-basis: calc(45.5% - 80px);
}

@media (max-width: 900px) {

    .care-service_wrapper {
        margin-top: 40px;
    }

    .care-service_wrapper.container {
        flex-flow: column !important;
        align-items: center;
    }

    .content-image {
        min-height: 240px;
        order: -1;
        width: 100%;
    }

    .heading {
        align-self: flex-start;
        order: -1;
    }

    .content-block {
        max-width: unset;
    }

    .form-row {
        flex-flow: column;
    }

    .form-row {
        margin-bottom: 28px;
    }

    .form_placer.mrb-8 {
        margin-bottom: 0;
    }

    .care-service_wrapper.container.mrb-35 {
        margin-bottom: 80px;
    }

    label {
        padding-bottom: 8px;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
    }

    h1#top {
        margin: 16px 0 0px !important;
    }

    .form-row {
        gap: 28px !important;
    }

    .care-form-field {
        padding: 16px 24px;
        font-size: 16px;
    }

    .care-form_submit {
        padding: 16px 20px;
    }
}

@media (max-width:720px) and (min-width:490px) {
    .content-image {
        background-size: 70% !important;
        background-position: 50% 100% !important;
        background-repeat: no-repeat !important;
        background-color: #eaeeff !important;
    }
}

@media (max-width:900px) and (min-width:720px) {
    .content-image {
        background-size: 50% !important;
        background-position: 50% 100% !important;
        background-repeat: no-repeat !important;
        background-color: #eaeeff !important;
    }
}

label {
    padding-bottom: 8px;
}

.care-service-form.form-group h3.header {
    margin-bottom: 28px;
}

@media (max-width: 900px) and (min-width: 560px) {
    #app>div>.container.care-service_wrapper {
        padding: 0 30px !important;
    }
}

@media (max-width: 560px) {
    #app>div>.container {
        padding: 0 !important;
        max-width: calc(100% - 40px) !important;
    }
}</style>