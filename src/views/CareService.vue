<template>
    <div class="container" v-if="!successPage">
        <div class="care-service-form form-group">
            <h1> Оставьте ваше сообщение </h1>
            <div>
                <label class="form-label" for="name">Ваше имя *</label>
                <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Ваше имя"
                    @change="formValidation"
                    @blur="formValidation"
                    @focus="resetValidation"
                    :value="data.name"
                >
                <label class="form-label" for="phone">Ваш телефон *</label>
                <input 
                    v-mask="'+7 (###) ###-##-##'"
                    type="text"
                    class="form-control"
                    id="phone"
                    placeholder="Ваш номер"
                    @change="formValidation"
                    @blur="formValidation"
                    @focus="resetValidation"
                    :value="data.phone"
                />
            </div>
            <div>
                <label class="form-label" for="message">Ваше сообщение *</label>
                <textarea
                    class="form-control"
                    id="message"
                    placeholder="Ваше сообщение"
                    @change="formValidation"
                    @blur="formValidation"
                    @focus="resetValidation"
                    :value="data.message"
                />
            </div>
            <div>
                <button 
                    class="form-control"
                    @click="sendMessage"
                >Отправить сообщение</button>
            </div>
        </div>
    </div>
    <div class="container success" v-if="successPage">
        <h1> Служба заботы </h1>
        <div class="alert alert-success">
            <h6>Спасибо за обращенеие</h6>
            <p>Ваше сообщение увидит руководство и мы обязательно примем меры, которые позволят сделать наш сервис еще лучше.</p>
        </div>
    </div>
    <div class="container footer">
        <careServiceWidget />
    </div>
</template>
<script>
import axios from 'axios'
import careServiceWidget from '@/components/careServiceWidget.vue';
import {mask} from 'vue-the-mask'
export default {
    name: 'CareService',
    components: {
        careServiceWidget,
    },
    directives: {mask},
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
            if (element.getAttribute('id') == 'phone') {
                if (element.value.match(/\+7 \(\d\d\d\) \d\d\d-\d\d-\d\d/gu)) {
                    return true;
                } else {
                    element.classList.add('is-invalid');
                    return false;
                }
            } else {
                if (element.value == '') {
                    element.classList.add('is-invalid');
                    return false;
                } else {
                    return true;
                }
            }
            
        },
        resetValidation(e) {
            e.target.classList.remove('is-invalid');
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
               this.$router.push("/"); 
            }, 10000);
        }
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