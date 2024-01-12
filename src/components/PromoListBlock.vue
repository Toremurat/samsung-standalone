<template>
	<div id="promoList">
		<div class="title mrb-9">
			<h1 class="heading pdt-0 mrb-0">Акции</h1>
		</div>
		<div class="promo-wrapper" v-if="groupedPromos && groupedPromos.length > 0">
			<div v-for="(group, index) in groupedPromos" :key="index" class="group-promo col-sm-12">
				<h2 class="heading" :style="'flex-basis:100%'">{{ getGroupTitle(group[0].group) }}</h2>
				<div v-for="(promoItem, index) in group" :key="index"
					:class="'promo-row index' + index + 1 + ' col-sm-' + promoItem.size">
					<div class="promo-item">
						<router-link :to="'/' + promoItem.link">
							<div class="image-box rounded-6">
								<img :src="'/static/image/promo/' +promoItem.image_desktop" alt="image" class="">
							</div>
						</router-link>
						<div class="info-box">
							<div class="link-wrapper pdt-0 pdb-0">
								<router-link class="promo-link blue_80 blue_20_bg"
									:to="'/' + promoItem.link">Подробнее</router-link>
							</div>
							<div class="dates" v-if="!isNaN(promoItem.remain)">
								<span class="date text_base2_bold" v-if="promoItem.startIn >= 0">
									{{ promoItem.startIn }} {{ getDaysText(promoItem.startIn) }} до начала
								</span>
								<span class="date text_base2_bold" v-else-if="promoItem.remain >= 0">
									Осталось {{ promoItem.remain }} {{ getDaysText(promoItem.remain) }}
								</span>
								<span class="date text_base2_bold" v-else-if="promoItem.remain <= 0">
									Закончилась
								</span>
								<div class="duration mrb-0 pdt-1 black_50 text_base2">
									до {{ promoItem.date_end }}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="null-message">{{ promosList.message }}</div>
</template>
<script>
import axios from 'axios';

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
	props: {},
	data() {
		return {
			promosList: [],
			errorData: [],
			isHover: false,
			loadMessage: 'Загрузка...',
			statusFilter: 0,
		}
	},
	methods: {
		async getPromos() {
			await axios.get('/api/v2/promo/')
				.then(response => {
					let currentDate = new Date(); // Текущая дата

					this.promosList = response.data.map(element => {
						let startDate = new Date(element.date_start);
						let endDate = new Date(element.date_end);

						let remaining = Math.floor((endDate - currentDate) / (1000 * 60 * 60 * 24));
						let toStart = Math.floor((startDate - currentDate) / (1000 * 60 * 60 * 24));

						return {
							status: element.promo_status,
							group: element.group,
							name: element.name,
							link: element.link,
							description: element.description,
							image_desktop: element.slider_desktop,
							image_mobile: element.slider_mobile,
							size: element.size,
							sort: element.promo_sort,
							date_start: startDate.toShortFormat(),
							date_end: endDate.toShortFormat(),
							remain: remaining,
							startIn: toStart,
						};
					});

					// Сортировка по полю 'group' и 'sort'
					this.promosList.sort((a, b) => {
						if (a.group !== b.group) {
							return a.group - b.group; // Сначала сортировка по group
						}
						return a.sort - b.sort; // Затем сортировка внутри группы
					});
				})
				.catch((error) => {
					this.promoData = {
						"message": 'Акции на данный момент отсутствуют'
					}
					console.log(error);
					this.errorData.push(error);
				});
		},
		getDaysText(days) {
			const lastDigit = days % 10;
			if (lastDigit === 1 && days !== 11) {
				return 'день';
			} else if ((lastDigit === 2 || lastDigit === 3 || lastDigit === 4) && (days < 10 || days > 20)) {
				return 'дня';
			} else {
				return 'дней';
			}
		},
		getGroupTitle(group) {
			// Возвращаем заголовок для каждой группы
			switch (group) {
				case 1:
					return 'Выгодные предложения';
				case 2:
					return 'В рассрочку';
				case 3:
					return 'Специальные предложения';
				default:
					return 'Другие предложения';
			}
		}
	},
	created() {
		this.getPromos();
	},
	beforeMount() {

	},
	computed: {
		groupedPromos() {
			// Группируем акции по полю 'group'
			const groups = {};
			for (const promo of this.promosList) {
				if (promo.status !== 0) { // Фильтрация по статусу
					if (!groups[promo.group]) {
						groups[promo.group] = [];
					}
					groups[promo.group].push(promo);
				}
			}
			// Преобразуем объект в массив
			return Object.values(groups);
		},
	}
}
</script>

<style scoped lang="scss">
.promo-item {
	width: 100%;
}

.image-box,
.info-box {
	width: 100%;
}

.info-box {
	border-radius: 0 0 24px 24px !important;
}

.image-box img {
	width: 100%;
}

.image-box {
	border-radius: 24px 24px 0 0 !important;
}

.promo-wrapper {
	display: flex;
	flex-flow: column;
	gap: 111px;

	@media (max-width: 900px) {
		gap: 100px;
	}
}

.col-sm-12 {
	max-width: 100%;
	flex-basis: 100%;
}

.col-sm-6 {
	max-width: 50%;
	flex-basis: calc(50% - 20px);

	@media (max-width: 900px) {
		max-width: 100%;
		flex-basis: 100%;
		// flex-basis: calc(50% - 10px);
	}
}

.col-sm-4 {
	max-width: 33%;
	flex-basis: calc(33% - 30px);

	@media (max-width: 900px) {
		max-width: 100%;
		flex-basis: 100%;
	}
}

.group-promo {
	display: flex;
	flex-flow: row wrap;
	gap: 40px;

	@media (max-width: 900px) {
		gap: 20px;
	}
}

.info-box {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 28px;
}

.promo-row {
	border: 1px solid #ededed;
	border-radius: 24px;
}

.flex-column {
	gap: 0;
}

@media (min-width: 900px) {
	#promoList .heading.pdt-0.mrb-0 {
		padding-top: 40px;
	}

	.link-wrapper.pdt-5.pdb-5 {
		padding: 0;
	}

	.link-wrapper.pdt-5.pdb-5 a {
		display: block;
	}
}

@media (min-width: 900px) and (max-width: 1200px) {

	.promo-row.col-sm-12,
	.promo-row.col-sm-6,
	.promo-row.col-sm-4 {
		max-width: 50%;
		flex-basis: calc(50% - 20px);
	}
}
@media (min-width: 780px) and (max-width: 900px) {

	.promo-row.col-sm-12,
	.promo-row.col-sm-6,
	.promo-row.col-sm-4 {
		max-width: 50%;
		flex-basis: calc(50% - 10px);
	}
}

@media (max-width: 560px) {
	.promo-link.blue_80.blue_20_bg {
		font-size: 14px;
		font-style: normal;
		font-weight: 600;
		line-height: 140%;
		padding: 16px 20px;
	}

	.dates {
		text-align: right;
	}

	.info-box {
		padding: 24px;
	}


}
</style>
<style>
#promoList .promo-row .link-wrapper a {
	display: block !Important;
	font-weight: 600;
}
</style>
