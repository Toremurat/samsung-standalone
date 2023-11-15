<template>
	<div class="container infoPage ">
		<InformationMenu></InformationMenu>
		<div class="content">
			<h1 class="title heading mrb-10">Сервис</h1>
			<div class="text-group">
				<div class="text-block">
					<h3 class="header mrb-4">Поддержка клиентов </h3>
					<h2 class="inliner heading mrb-4 mrt-0 blue_80">
						7799
						<span>Бесплатно <br>с мобильного</span>
					</h2>
					<p class="text_base1 mrt-0 mrb-0">
						<span class="black_50">Время работы: </span>Понедельник - воскресенье,
						8:00-20:00
					</p>
				</div>
			</div>

			<div class="text-group">
				<div class="text-block">
					<h3 class="header mrb-4 mrt-20">Авторизированные сервисные центры</h3>
					<div class="input-form">
						<!-- <label class="mrb-0 text_base2 black_50" for="text">Выберите город</label> -->
						<v-select v-model="selectedCity" :options="options" label="text" :placeholder="'Выберите город'"
							:style="'width:100%'" />
					</div>
					<div class="result-service">
						<div v-for="(service, index) in filteredServices" :key="index" class="service-block">
							<p class="service-name text_base1_bold black_75 mrt-0 mrb-4">{{ service.name }}</p>
							<p class="addr text_base2 black_75 mrt-0 mrb-4">{{ service.addr }}</p>
							<a class="tel text_base2 black_75" v-if="service.tel1"
								:href="'tel:' + splitted(service.tel1)">{{ service.tel1 }}</a>
							<a class="tel text_base2 black_75" v-if="service.tel2"
								:href="'tel:' + splitted(service.tel2)">{{ service.tel2 }}</a>
							<a class="tel text_base2 black_75" v-if="service.tel3"
								:href="'tel:' + splitted(service.tel3)">{{ service.tel3 }}</a>
							<a class="tel text_base2 black_75" v-if="service.tel4"
								:href="'tel:' + splitted(service.tel4)">{{ service.tel4 }}</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="container mgt-35">
		<careServiceWidget />
	</div>
</template>

<script>
import InformationMenu from "@/components/InformationMenu.vue";
import careServiceWidget from '@/components/careServiceWidget.vue';
import vSelect from "vue-select";
export default {
	components: {
		InformationMenu,
		careServiceWidget,
		"v-select": vSelect,
	},
	name: "servicePage",
	props: {},
	data() {
		return {
			options: [
				'Алматы',
				'Астана',
				'Шымкент',
				'Караганда',
				'Актау',
				'Актобе',
				'Алмалык',
				'Атырау',
				'Балхаш',
				'Кокшетау',
				'Костанай',
				'Павлодар',
				'Петропавловск',
				'Рудный',
				'Семей',
				'Талдыкорган',
				'Тараз',
				'Уральск',
				'Усть-Каменогорск',
				'Экибастуз',
			],
			serviceObj: [
				{ 'city': 'Алматы', 'name': 'БытТехСервис', 'addr': 'Алматы, ул. Жандосова, д. 7, оф. 2, уг. ул. Ауэзова.', 'tel1': '+7 707 505 30 03', 'tel2': '+7 707 863 07 12' },
				{ 'city': 'Алматы', 'name': 'Сервис Маг', 'addr': 'Алматы, Суюнбая 38А', 'tel1': '+7 771 718 86 81' },
				{ 'city': 'Алматы', 'name': 'Victory 121', 'addr': 'ул. Розыбакиева, д. 275a (выше ТРЦ «Мега», выше ул. Малахова)', 'tel1': '+7 727 302 26 13', 'tel2': '+7 707 998 05 66', 'tel3': '+7 727 224 75 88', 'tel4': '+7 727 296 01 57' },
				{ 'city': 'Астана', 'name': 'Сервис Плаза', 'addr': 'ул. Достык, 8', 'tel1': '+7 707 845 97 20' },
				{ 'city': 'Астана', 'name': 'Сервис Плаза', 'addr': 'ул. Ташенова 10/1', 'tel1': '+7 776 110 59 59', 'tel2': '+7 707 845 97 20', 'tel3': '+7 717 273 47 78' },
				{ 'city': 'Актау', 'name': 'ИП Кочтов', 'addr': '23 мкр., дом 100, офис 7', 'tel1': '+7 729 260 51 36', 'tel2': '+7 707 980 30 64' },
				{ 'city': 'Актау', 'name': 'Мобилайн', 'addr': '6-й мкр., дом 36 .', 'tel1': '+7 729 253 14 93', 'tel2': '+7 775 510 20 00' },
				{ 'city': 'Актобе', 'name': 'Сервисный центр Альянс', 'addr': 'ул.Маресьева, 4Д', 'tel1': '+7 771 843 07 08', 'tel2': ', +7 702 904 81 73' },
				{ 'city': 'Актобе', 'name': 'Сервис-Плаза Актобе', 'addr': 'улица Н.Шайкенова, д. 17, кв. 2', 'tel1': '+7 771 443 00 10' },
				{ 'city': 'Алмалык', 'name': 'ЭВРИКА', 'addr': 'ул. А.Темура, д.46' },
				{ 'city': 'Атырау', 'name': 'АСКОН Атырау', 'addr': 'ул. Атамбаева, 19', 'tel1': '+7 712 225 4111' },
				{ 'city': 'Атырау', 'name': 'ИП Мастерфон', 'addr': 'пр. Азаттык, 26, кв 2', 'tel1': '+7 701 994 11 00' },
				{ 'city': 'Балхаш', 'name': 'Электрон', 'addr': ' ул. Агыбай батыра, д. 9-1', 'tel1': '+7 710 364 08 02' },
				{ 'city': 'Караганда', 'name': 'Авторизованный Сервисный Центр', 'addr': 'ул.Ермекова, д.52', 'tel1': '+7 721 243 52 00', 'tel2': '+7 771 005 55 00' },
				{ 'city': 'Кокшетау', 'name': 'ИП Service All', 'addr': 'ул. Габдулина 38', 'tel1': '+7 716 233 38 57', 'tel2': '+7 701 958 72 33' },
				{ 'city': 'Кокшетау', 'name': 'ПК "Промавтоматика"', 'addr': 'ул. С. Жунусова, дом 33', 'tel1': '+7 716 225 71 00' },
				{ 'city': 'Костанай', 'name': 'Profi24', 'addr': 'ул.Орджоникидзе 25', 'tel1': '+7 747 500 02 99' },
				{ 'city': 'Павлодар', 'name': 'Электрон PV', 'addr': 'ул. Катаева, 53', 'tel1': '+7 718 268 70 15', 'tel2': '+7 718 221 40 00' },
				{ 'city': 'Павлодар', 'name': 'GSM SERVICE ITC PV', 'addr': 'ул. Машхур Жусупа 280', 'tel1': '+7 702 018 55 52' },
				{ 'city': 'Петропавловск', 'name': 'Квазар Сервис ТОО', 'addr': 'ул.Абая д.86', 'tel1': '+7 715 250 59 59' },
				{ 'city': 'Рудный', 'name': 'Электрон', 'addr': 'ул. Горняков, д. 92/23', 'tel1': '+7 714 314 65 60' },
				{ 'city': 'Семей', 'name': 'Сервисный центр "АЛБИ"', 'addr': 'ул. Дулатова 168', 'tel1': '+7 722 256 19 57', 'tel2': '+7 707 660 86 31' },
				{ 'city': 'Семей', 'name': 'LLP Intellect Service', 'addr': 'ул. К. Мухамедханова 23 офис 3', 'tel1': '+7 747 853 13 04' },
				{ 'city': 'Талдыкорган', 'name': 'ПОЛИСЕРВИС', 'addr': 'Н.Назарбавеа д.145 кв.1', 'tel1': '+7 728 232 24 22', 'tel2': '+7 705 625 19 00' },
				{ 'city': 'Тараз', 'name': 'Климатика Монтаж', 'addr': 'ул. Ташкентская 144', 'tel1': '+7 747 930 67 27' },
				{ 'city': 'Тараз', 'name': 'GSM-Master service', 'addr': 'ул.Казыбек би 120/3', 'tel1': '+7 726 245 75 58' },
				{ 'city': 'Уральск', 'name': 'AV Service', 'addr': 'проспект Абулхаир хана 51', 'tel1': '+7 711 293 99 89', 'tel2': '+7 711 293 99 49', 'tel3': '+7 711 293 99 29' },
				{ 'city': 'Уральск', 'name': 'MASTER GSM', 'addr': 'ул.М.Маметовой 114', 'tel1': '+7 711 254 11 33', 'tel2': '+7 707 876 39 99' },
				{ 'city': 'Усть-Каменогорск', 'name': 'Ремонт и Сервис', 'addr': 'пр. Шакарима, 183', 'tel1': '+7 723 252 10 90' },
				{ 'city': 'Усть-Каменогорск', 'name': 'ИП "Богатырев Д.С." DVO.KZ', 'addr': ' ул. Кабанбай Батыра 140. ТД "Евразия" 4 Этаж, бутик №48', 'tel1': '+7 723 260 17 01', 'tel2': '+7 777 993 63 63' },
				{ 'city': 'Шымкент', 'name': 'Evrika', 'addr': 'ул.Рыскулова 22', 'tel1': '+7 725 239 50 02' },
				{ 'city': 'Шымкент', 'name': 'Samsung Service Centre', 'addr': 'пр. Республики 4, ТРЦ "CITY Shopping Gallery"', 'tel1': '+7 776 332 56 88', 'tel2': '+7 725 235 94 64', 'tel3': '+7 707 135 94 64' },
				{ 'city': 'Шымкент', 'name': '5-й элемент', 'addr': 'проспект Абая 28/2', 'tel1': '+7 725 235 94 64', 'tel2': '+7 707 135 94 64' },
				{ 'city': 'Экибастуз', 'name': 'Электрон сервис-центр', 'addr': 'ул. Б. Момышулы, 34', 'tel1': '+7 718 740 47 07' },
				{ 'city': 'Экибастуз', 'name': 'СОТЕЛ СЕРВИС', 'addr': 'ул. Ауэзова, 30/83', 'tel1': '+7 718 740 08 40' },
			],
			filteredServices: [],
			selectedCity: null,
		};
	},
	methods: {
		filterServices() {
			this.filteredServices = this.serviceObj.filter((service) => service.city === this.selectedCity);
		},
		splitted(phoneNumber) {
			// Функция для удаления всех символов, кроме цифр и плюса
			return phoneNumber.replace(/[^\d+]/g, "");
		},
	},
	watch: {
		selectedCity: "filterServices"
	}
};

</script>

<style>
.infoPage {
	display: flex;
	flex-flow: row wrap;
	align-items: stretch;
	margin-block: 117px 140px !important;
}

.content {

	min-width: calc(100% - 365px);
}

.infoPage .numbered-list {
	list-style: none;
	counter-reset: custom-counter;
	padding-left: 36px;
}

.infoPage .numbered-list li {
	position: relative;
}

.infoPage .numbered-list li:before {
	counter-increment: custom-counter;
	content: counter(custom-counter) ".";
	color: #2B47DA;
	margin-left: -20px;
	position: absolute;
	font-weight: 600;
}

.infoPage .numbered-list li+li,
.infoPage .list-dotted li+li {
	margin-top: 20px;
}

.infoPage .list-dotted {
	list-style: none;
	padding-left: 36px;
}

.infoPage .list-dotted li {
	position: relative;
}

.infoPage .list-dotted li:before {
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

.infoPage .list-dotted li a {
	margin: 8px 0 0;
	display: block;
}

.infoPage h3.header {
	font-weight: 600;
}

.infoPage .list-dotted {
	padding-left: 25px;
}

.input-form {
	display: flex;
	flex-flow: column;
	align-items: flex-start;
	gap: 8px;
}

.input-form input {
	width: 100%;
	padding: 20px 28px;
	border-radius: 12px;
	border: 1px solid #c9c9c9;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 140%;
	transition: all 0.15s ease;
	background: #fff;
	-webkit-appearance: none;
}

.v-select {
	display: flex;
	flex-flow: column;
	align-items: center;
	position: relative;
}

.vs__dropdown-toggle {
	width: 100%;
}

.vs__open-indicator {
	position: absolute;
	left: calc(100% - 45px);
	top: -37px;
}

.vs__actions {
	position: relative;
	top: -50%;
}

.vs__dropdown-menu {
	display: flex;
	flex-flow: column;
	padding: 0;
	position: relative;
	top: 0;
	left: 0;
	text-align: left;
	width: 100%;
	border-radius: 0px 0 12px 12px;
	border: solid 1px #C9C9C9;
	top: -8px;
	z-index: 11;
	background: #fff;
}

.vs__dropdown-menu li {
	padding: 20px;
	width: 100%;
	text-transform: none;
	text-decoration: none;
	font-style: normal;
	color: #000;
	transition: ease all .3s;
}

.vs__dropdown-menu li:last-of-type {
	border-radius: 0 0 12px 12px;
}

.vs__dropdown-menu li:hover {
	background: #EAEDFF;
	color: #2B47DA;
	transition: ease all .3s;
}

.vs__dropdown-menu {
	max-height: 270px !important;
	overflow-y: scroll;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	position: absolute;
	top: calc(100% - 2px);
	border-top: 0;
}

.vs__selected {
	position: absolute;
	top: 22px;
	left: 28px;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	z-index: 2;
}

.vs__clear {
	display: none;
}

.v-select.vs--open input {
	border-radius: 12px 12px 0 0;
	transition: ease all .3s;
	border-bottom-color: transparent;
}

.v-select.vs--open .vs__open-indicator {
	transform: rotate(-180deg);
	transition: ease all .3s;
}

.vs__open-indicator {
	transition: ease all .3s;
}

@media (max-width: 900px) {
	.infoPage {
		margin-block: 100px 0px !important;
	}

	.vs__open-indicator {
		top: -32px;
	}

	h1.heading {
		margin-bottom: 40px !important;
	}

	#app>div>.container.infoPage {
		padding-inline: 10px !important;
	}

	.content {
		flex-basis: 100%;
	}
}
</style>
<style scoped lang="scss">
.service-block {
	flex-basis: calc(50% - 32px);
	border-radius: 24px;
	border: 1px solid #ededed;
	padding: 28px;
}

.result-service {
	display: flex;
	flex-flow: row wrap;
	align-items: stretch;
	gap: 32px;
	margin-top: 40px;
}

.service-block a {
	flex-basis: 100%;
	display: block;
	margin-top: 4px;
}

@media (min-width: 900px) {
	.inliner {
		max-width: 310px !important;

		& span {
			font-size: 14px;
			font-style: normal;
			font-weight: 400;
		}
	}
}

.inliner span {
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: 140%;
}

.inliner {
	display: flex;
	align-items: center;
	gap: 16px;
	max-width: 80%;
}

@media (max-width: 900px) {
	.service-block {
		flex-basis: 100%;
		padding: 24px;
	}

	.result-service {
		display: flex;
		flex-flow: row wrap;
		align-items: normal;
		gap: 12px;
		margin: 12px 0 0;
	}

	.input-form input {
		padding: 16px 24px;
		font-size: 16px;
	}

	.vs__dropdown-menu li {
		padding: 16px 24px;
		font-size: 16px;
	}
}
</style>
<style lang="scss">
@media (max-width:900px) {
	#app>div>.container.mgt-35 {
		padding-left: 20px !important;
		max-width: unset;
		width: 100%;
		padding-right: 20px !important;
	}
}
</style>