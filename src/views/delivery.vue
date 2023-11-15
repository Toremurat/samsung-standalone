<template>
	<div class="container infoPage ">
		<InformationMenu></InformationMenu>
		<div class="content">
			<h1 class="title heading mrb-10">Доставка</h1>
			<div class="text-group">
				<div class="text-block">
					<h3 class="header mrb-4">Бесплатная доставка по городу</h3>
					<p class="text_base1_bold blue_80 mrt-0 mrb-2">Бесплатная доставка доступна по городу Алматы</p>
					<p class="text_base1 black_75 mrt-0 mrb-10">
						Доставка осуществляется в пределах админинстративных границ города. Eсли вы находитесь в другом
						городе воспользуйтесь платной доставкой.
					</p>
					<h4 class="mrt-0 mrb-4 header">Условия доставки</h4>
					<p class="text_base1 mrt-0 mrb-5"><span class="black_50">График работы доставки: </span>7 дней в неделю
					</p>
					<p class="text_base1 mrt-0 mrb-5"><span class="black_50">Время работы: </span>10:00-20:00</p>
					<p class="text_base1 mrt-0 mrb-0"><span class="black_50">Сроки доставки: </span>1-2 дня</p>
				</div>
			</div>

			<div class="text-group">
				<div class="text-block">
					<h3 class="header mrb-4 mrt-20">Платная доставка</h3>
					<p class="text_base1_bold blue_80 mrt-0 mrb-10">Доставка транспортной компанией в другие города</p>
					<p class="mobile-only mrt-0 mrb-10" style="margin-top:-40px">Доставка осуществляется в пределах
						админинстративных границ города. Eсли вы находитесь в другом городе воспользуйтесь платной
						доставкой.</p>
					<h4 class="mrt-0 mrb-4 header">Условия доставки</h4>
					<p class="text_base1 mrt-0 mrb-5"><span class="black_50">График работы доставки: </span>Каждый вторник и
						четверг</p>
					<p class="text_base1 mrt-0 mrb-5"><span class="black_50">Время работы: </span>10:00-20:00</p>

					<h4 class="header mrb-4 mrt-10">Рассчет стоимости</h4>
					<div class="input-form" style="position:relative">
						<label v-if="shouldShowPlaceholder" class="pop text_base1 black_50" for="text">Выберите
							город</label>
						<v-select v-model="selectedCity" :options="cities" label="text" :placeholder="'Выберите город'"
							:style="'width:100%'" />
					</div>
					<p style="display:none;margin:0;">{{ selectedCity }}</p>
					<div class="result-service blue" v-html="resultMessage.content">
					</div>
				</div>
			</div>

			<div class="text-group">
				<div class="text-block">
					<h3 class="header mrb-4 mrt-20">Самовывоз из магазина</h3>
					<p class="text_base1_bold blue_80 mrt-0 mrb-10">Самовывоз из фирменных магазинов Samsung</p>

					<div class="addr-box">
						<div class="addr-title text_base1 black_100 mrt-0 mrb-4">
							Алматы, Самал-2, 111, ТРЦ Dostyk Plaza, 1 этаж
						</div>
						<div class="addr-link">
							<p class="text_base2 black_50 mrt-0 mrb-0">Проложить маршрут</p>
							<a
								href="https://2gis.kz/almaty/directions/points/%7C76.955573%2C43.233917%3B70000001076849171?floor=1&m=76.955831%2C43.233979%2F19.77">
								<img src="@/static/icons/2gis.svg" alt="">
							</a>
							<span class="verticalDiv"></span>
							<a
								href="https://yandex.ru/maps/162/almaty/?indoorLevel=1&ll=76.956320%2C43.233477&mode=routes&rtext=~43.233492%2C76.956694&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D32933881704&z=19.81">
								<img src="@/static/icons/yandex.svg" alt="">
							</a>
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
import vSelect from "vue-select";
import careServiceWidget from "@/components/careServiceWidget.vue";
export default {
	components: {
		InformationMenu,
		careServiceWidget,
		"v-select": vSelect,
	},
	name: "deliveryPage",
	props: {},
	data() {
		return {
			cities: [
				{ text: 'Алматы', id: 0 },
				{ text: 'Астана', id: 0 },
				{ text: 'Шымкент', id: 0 },
				{ text: 'Караганда', id: 0 },
				{ text: 'Актобе', id: 1 },
				{ text: 'Тараз', id: 1 },
				{ text: 'Павлодар', id: 1 },
				{ text: 'Усть-Каменогорск', id: 1 },
				{ text: 'Семей', id: 1 },
				{ text: 'Атырау', id: 1 },
				{ text: 'Костанай', id: 1 },
				{ text: 'Кызылорда', id: 1 },
				{ text: 'Уральск', id: 1 },
				{ text: 'Петропавловск', id: 1 },
				{ text: 'Актау', id: 1 },
				{ text: 'Темиртау', id: 1 },
				{ text: 'Туркестан', id: 1 },
				{ text: 'Кокшетау', id: 1 },
				{ text: 'Талдыкорган', id: 1 },
				{ text: 'Экибастуз', id: 1 },
				{ text: 'Рудный', id: 1 },
				{ text: 'Алматинская область', id: 2 },
				{ text: 'Туркестанская область', id: 3 },
				{ text: 'Жамбылская область', id: 3 },
				{ text: 'Акмолинская область', id: 2 },
				{ text: 'Кызылординская область', id: 3 },
				{ text: 'Карагандинская область', id: 2 }
			],
			message: [
				{ id: 0, content: '<div class="warning mrt-5"><p class="text_base1 black_75">Бесплатная доставка</p></div>', },
				{ id: 1, content: '<div class="warning mrt-5"><p class="text_base1 black_75">Доставка транспортной компанией.</p><p class="text_base2 black_75">Для получения точной стоимости обратитесь по номеру <a href="tel:+77719333322" class="blue_80">+7 771 933 33 22</a></p></div>', },
				{ id: 3, content: '<div class="warning mrt-5"><p class="text_base1 black_75">Стоимость доставки: <b>до 4000 тенге</b></p><p class="text_base2 black_75">Для получения точной стоимости обратитесь по номеру <a href="tel:+77719333322" class="blue_80">+7 771 933 33 22</a></p></div>', },
				{ id: 2, content: '<div class="warning mrt-5"><p class="text_base1 black_75">Стоимость доставки: <b>до 5000 тенге</b></p><p class="text_base2 black_75">Для получения точной стоимости обратитесь по номеру <a href="tel:+77719333322" class="blue_80">+7 771 933 33 22</a></p></div>', },
			],
			resultMessage: {},
			selectedCity: { text: '', id: null },
		};
	},
	methods: {
		filtered() {
			const cityId = this.selectedCity.id;
			this.resultMessage = this.message.find(service => service.id === cityId) || { content: '' };
		},
	},
	computed: {
		shouldShowPlaceholder() {
			return typeof this.selectedCity.id !== 'number';
		},
	},
	watch: {
		selectedCity: function (newCity) {
			this.filtered(newCity);
		}
	}
};

</script>

<style >
.pop.text_base1.black_50 {
	position: absolute;
	z-index: 2;
	top: 22px;
	pointer-events: none;
	left: 30px;
	font-size: 18px !important;
	font-style: normal;
	font-weight: 400 !important;
}

.mobile-only.mrt-0.mrb-10 {
	line-height: 1.5 !important;
}

.result-service.blue .warning {
	padding: 28px;
	border-radius: 24px;
	background: #eaedff;
	gap: 12px;
	display: flex;
	flex-flow: column;
}

.verticalDiv {
	min-width: 1px;
	height: 22px;
	display: block;
	background: #C9C9C9;
}

.addr-link {
	align-content: center;
}

.result-service.blue .warning p {
	margin: 0;
}

.infoPage {
	display: flex;
	flex-flow: row wrap;
	align-items: stretch;
	margin-block: 117px 0 !important;
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
		margin-block: 100px 0 !important;
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

	span.black_50 {
		display: block;
		margin-bottom: 4px;
	}

	h4.header {
		font-size: 20px;
		font-style: normal;
		font-weight: 500;
		line-height: 130%;
	}

	.vs--open .vs__open-indicator {
		transform: rotate(180deg) scale(0.7) !important;
	}

	.vs__open-indicator {
		transform: scale(0.7) !important;
		margin-left: 10px;
		top: -35px !important;
	}

	.input-form input {
		padding: 16px 24px;
		font-size: 16px !important;
	}

	.vs__dropdown-menu li {
		padding: 16px 24px;
		font-size: 16px !important;
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

	.pop.text_base1.black_50 {
		font-size: 16px !important;
		top: 16px !important;
		left: 24px !important;
	}

	.vs__selected {
		font-size: 16px !important;
		top: 16px !important;
		left: 24px !important;
	}

	.input-form input {
		padding: 16px 24px !important;
		font-size: 16px !important;
	}

	.vs__dropdown-menu li {
		padding: 16px 24px !important;
		font-size: 16px !important;
	}
}
</style>
<style scoped>
@media (max-width: 900px) {

	.infoPage .btn {
		font-size: 12px;
		font-style: normal;
		font-weight: 600;
		padding: 12px 16px;
	}


}
</style>