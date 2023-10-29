<template>
	<div class="title">
		<h2>Наши акции <span><router-link to="#">Смотреть все акции</router-link></span></h2>
	</div>
	<div class="promo-wrapper" v-if="promosList && promosList.length > 0">
		<!-- <div class="promo-wrapper"> -->
		<div class="promo-container row">
			<div v-for="(promoItem, index) in promosList" :key="index" class="promo-row col-sm-12 flex-row align-center"
				:style="'order:' + promoItem.sort" :class="'col-sm-' + promoItem.size + ' index-' + (index + 1)">
				<div class="image-box rounded-8" :class="{ 'isOdd': index % 2 === 0, 'isEven': index % 2 !== 0 }">
					<img :src="promoItem.promo_image" alt="image">
					<!-- <img :src="require(`/static/image/promo${promoItem['image-home']}`)" alt="image"> -->
				</div>
				<div class="info-box">

					<span class="remain" v-if="promoItem.startIn > 0">
						До начала {{ promoItem.startIn }} {{ getDaysText(promoItem.startIn) }}
					</span>
					<span class="remain" v-else>
						Осталось {{ promoItem.remain }} {{ getDaysText(promoItem.remain) }}
					</span>
					<div class="date">До {{ promoItem.date_end }}</div>
					<router-link :to="`/promo/${promoItem.link}`">Узнать подробнее</router-link>

				</div>
			</div>
		</div>
	</div>
	<div class="null-message">{{ promosList.message }}</div>
</template>

<script>
/* eslint-disable */

import axios from 'axios'

Date.prototype.toShortFormat = function () {
	const monthNames = ['января', 'февраля', 'марта', 'апреля',
		'мая', 'июня', 'июля', 'августа',
		'сентября', 'октября', 'ноября', 'декабря'];

	const day = this.getDate();
	const monthIndex = this.getMonth();
	const monthName = monthNames[monthIndex];

	return `${day} ${monthName}`;
}

export default {
	name: 'promosList',
	props: {
	},
	data() {
		return {
			promosList: [],
			errorData: [],
			isHover: false,
			loadMessage: 'Загрузка...'
		}
	},

	methods: {
		async getPromos() {
			await axios.get('../static/json/main.json')
				.then(response => {
					let currentDate = new Date(); // Текущая дата

					this.promosList = response.data.map(element => {
						let startDate = new Date(element.date_start);
						let endDate = new Date(element.date_end);

						let remaining = Math.floor((endDate - currentDate) / (1000 * 60 * 60 * 24));
						let toStart = Math.floor((startDate - currentDate) / (1000 * 60 * 60 * 24));

						return {
							group: element.group,
							link: element.link,
							promo_image: element.promo_image,
							size: element.size,
							sort: element.home_sort,
							date_start: startDate.toShortFormat(),
							date_end: endDate.toShortFormat(),
							remain: remaining,
							startIn: toStart,
						};
					});

					this.promosList.sort((a, b) => a.sort - b.sort);
				})
				.catch((error) => {
					this.promoData = {
						"message": 'Акции на данный момент отсутсвуют'
					}
					console.log(error);
					this.errorData.push(error);
				});
		},
	},
	created() {
		console.log('ready');
		this.getPromos();
	},
	beforeMount() {

	},
	computed: {
		getDaysText() {
			return (days) => {
				const lastDigit = days % 10;
				if (lastDigit === 1 && days !== 11) {
					return 'день';
				} else if ((lastDigit === 2 || lastDigit === 3 || lastDigit === 4) && (days < 10 || days > 20)) {
					return 'дня';
				} else {
					return 'дней';
				}
			};
		},
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
