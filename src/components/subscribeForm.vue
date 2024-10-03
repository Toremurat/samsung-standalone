<template>
    <div class="preorder-form form-group" v-if="!successSubscribe" id="subs">
        <h3 class="header">Регистрация</h3>
        <div class="form-row d-flex flex-wrap">
            <div class="input-form flex-50">
                <label class="mrb-0 black_50" for="name">Ваше имя *</label>
                <input type="text" class="care-form-field" id="name" placeholder="Ваше имя" @change="formValidation"
                    @blur="formValidation" @focus="resetValidation" :value="data.name">
            </div>

            <div class="input-form flex-50">
                <label class="mrb-0 black_50" for="phone">Ваш телефон *</label>
                <input v-mask="'+7 (7##) ###-##-##'" type="text" class="care-form-field" id="phone"
                    placeholder="Ваш номер" @change="formValidation" @blur="formValidation" @focus="resetValidation"
                    :value="data.phone" />
            </div>

            <div class="input-form flex-50">
                <label class="mrb-0 black_50" for="date">Ваша дата рождения *</label>
                <input type="datepicker" class="care-form-field" id="date" v-mask="'##.##.####'" placeholder="дд.мм.гггг"
                    @change="formValidation" @blur="formValidation" @focus="resetValidation"
                    :value="data.date" />
            </div>

            <div class="input-form flex-50">
                    <label class="mrb-0 black_50" for="city">Выберите город *</label>
                    <v-select v-model="data.city" id="city" type="select" :options="cities" label="text"
                        :placeholder="'Выберите город'" :style="'width:100%'" />
                </div>
                
            
            <div>
                <button class="preorder_submit" @click="sendMessage">Отправить сообщение</button>
            </div>
        </div>
    </div>
    <div class="content-block success" id="successSub" v-if="successSubscribe">
        <div class="alert alert-success">
            <h4 class="mrb-3 header green">Спасибо за регистрацию</h4>
            <p class="text_base1">Для активировации бонусов скачайте наше приложение <a style="color: #2b47da;cursor: pointer;" @click="openAppStore">Evrika Smart</a></p>
            <p class="text_base1">Мы начислим вам 5000 бонусов в течении 10 дней.</p>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import vSelect from "vue-select";
import { mask } from 'vue-the-mask'

export default {
    name: 'promoPage',
    components: {
        "v-select": vSelect,
    },
    directives: {
        mask,
    },
    data() {
        return {
            successSubscribe: false,
            errorData: [],
            data: {
                name: "",
                phone: "",
                date: "",
                city: "Алматы",
            },
            cities: [
                "Алматы",
                "Атырау",
                "Астана",
                "Другой"
            ],
            formValide: false,
        };
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
            } else if (element.getAttribute('id') == 'date') {
                // Регулярное выражение для даты в формате "дд.мм.гггг"
                const datePattern = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19\d{2}|20\d{2})$/;
                const dateValue = element.value;

                if (!datePattern.test(dateValue)) {
                    element.classList.add('is-invalid');
                    label.classList.add('is-invalid');
                    return false;
                }

                // Преобразуем строку в объект даты
                const [day, month, year] = dateValue.split('.').map(Number);
                const inputDate = new Date(year, month - 1, day);
                const minDate = new Date(1900, 0, 1);
                const maxDate = new Date();

                // Проверяем, что дата в пределах допустимого диапазона
                if (inputDate < minDate || inputDate > maxDate) {
                    element.classList.add('is-invalid');
                    label.classList.add('is-invalid');
                    return false;
                }

                return true;
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
                axios.post("/subscribe", this.data)
                    .then(response => {
                        if (response.status == "error") {
                            console.error(response.message);
                        } else {
                            this.showSuccessPage();
                            window.dataLayer = window.dataLayer || [];
                            window.dataLayer.push({
                                event: "subscribe",
                                date: this.data.date,
                                name: this.data.name,
                                phone: this.data.phone,
                                city: this.data.city
                            });
                        }
                    })
                    .catch(error => {
                        console.error(error);
                    });
            } else {

                setTimeout(() => {
                    const viewerElement = document.querySelector('#viewer');
                    if (viewerElement) {
                        window.scrollTo({ top: viewerElement.offsetTop - 80, behavior: 'smooth' });
                    }
                }, 100);
            }

        },
        showSuccessPage() {
            this.successSubscribe = true;
            setTimeout(() => {
                const viewerElement = document.querySelector('#subs');
                if (viewerElement) {
                    window.scrollTo({ top: viewerElement.offsetTop - 80, behavior: 'smooth' });
                }
            }, 100);
        },
        openAppStore() {
            // Определяем платформу
            const userAgent = navigator.userAgent || navigator.vendor || window.opera;

            // Проверяем, является ли устройство iOS
            const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;

            // Проверяем, является ли устройство Android
            const isAndroid = /android/i.test(userAgent);

            // URL приложений в магазинах
            const appStoreURL = 'https://apps.apple.com/app/evrika-smart/id1631810749'; // Замените YOUR_APP_ID на ID вашего приложения в App Store
            const playStoreURL = 'https://play.google.com/store/apps/details?id=com.evrika&hl=ru'; // Замените YOUR_PACKAGE_NAME на ID вашего приложения в Google Play

            // Открываем соответствующий магазин приложений
            if (isIOS) {
                window.location.href = appStoreURL;
            } else if (isAndroid) {
                window.location.href = playStoreURL;
            } else {
                // Если платформа не определена, можно показать сообщение или предпринять другие действия
                window.location.href = 'https://evrika.com/bonuses';
            }
        }
    },
};
</script>
<style scoped>
.flex-50 {
  flex-basis: calc(50% - 32px);
}
.flex-50 {
  flex-basis: calc(50% - 30px);
}
.input-form {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  gap: 8px;
}
.form-row.d-flex.flex-wrap {
  gap: 32px;
}
@media (max-width:560px){
    #subs .form-row.d-flex.flex-wrap {
  align-items: flex-end;
}
.vs__actions {
  position: relative;
}
.vs__open-indicator {
  top: 15px !important;
}
#subs .flex-50 {
  flex-basis: 100%;
  width: 100%;
}
}
</style>