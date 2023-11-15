<template>
	<!-- eslint-disable  -->
	<div class="title mrt-35 mrb-8">
		<h2 class="heading mrb-0">Новинки уже в продаже</h2>
	</div>
	<div class="carousel-section">
		<carousel :items-to-show="4" :wrap-around="false" :breakpoints="breakpoints">
			<slide v-for="(carousel, index) in itemsArr" :key="index">
				<img :src="'/static/image/carousel/' + carousel.img" alt="carousel.alt" @click="toRoute"
					:route="carousel.link" v-if="carousel.link">
				<img :src="'/static/image/carousel/' + carousel.img" v-else alt="carousel.alt">
			</slide>
			<template #addons>
				<Navigation>
					<template #next>
						<div class="prev nav-slide"></div>
					</template>
					<template #prev>
						<div class="next nav-slide"></div>
					</template>
				</Navigation>
				<Pagination></Pagination>
			</template>
		</carousel>
	</div>
</template>
<script>
import axios from 'axios'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';

export default {
	components: {
		Carousel,
		Slide,
		Navigation,
		Pagination
	},
	name: 'productImg',
	data() {
		return {
			itemsArr: [],
			errorData: [],
			carouselStatus: 0,
			wrapAround: true,
			breakpoints: {
				320: {
					itemsToShow: 1,
					snapAlign: 'start',
				},
				// 700px and up
				600: {
					itemsToShow: 2,
					snapAlign: 'start',
				},
				750: {
					itemsToShow: 3,
					snapAlign: 'start',
				},
				// 1024 and up 
				1024: {
					itemsToShow: 4,
					snapAlign: 'start',
				},
				// 1600: {
				// 	itemsToShow: 5.5,
				// 	snapAlign: 'start',
				// },
				mousedrag: true,
				touchDrag: true,
			},
		}
	},
	methods: {
		async getcarousel() {
			await axios.get('../static/json/carousel.json')
				.then(response => {
					this.itemsArr = [];
					response.data.forEach(element => {
						this.itemsArr.push({
							"img": element.slide,
							"img-mobi": element.slide_m,
							"link": element.link,
							"sort": element.sort,
							"status": element.status,
							"alt": element.alt,
						});
					});

					this.itemsArr.sort((a, b) => a.sort - b.sort);
					this.itemsArr = this.itemsArr.filter(carousel => carousel.status !== this.carouselStatus);
				})

				.catch((error) => {
					this.promoData = {
						"message": 'Слайдов на данный момент нет'
					}
					console.log(error);
					this.errorData.push(error)
				});
		},
		toRoute(e) {
			let route = e.target.getAttribute('route');
			if (route == '') {
				route = '#';
			} else {
				route = '/' + route;
			}
			this.$router.push(route);
		}


	},
	computed: {
		// carouselFilter() {
		// 	return 
		// },
	},
	created() {
		this.getcarousel();
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.carousel a {
	width: 100%;
	height: 100%;
}

.carousel img {
	max-width: 320px;
	width: calc(100% - 24px);
}

.carousel button.carousel__prev {
	margin-left: -150px !important;
	opacity: 1;

	& .nav-slide {
		content: url(@/static/icons/arrow.svg);
		transform: rotate(180deg);
		display: block;
		width: 52px;
		height: 52px;
		position: relative;
		left: -54px;
	}


}

.carousel__viewport {
	width: calc(100% + 470px);
}

.carousel button.carousel__next {
	right: -50px;
	opacity: 1;

	& .nav-slide {
		content: url(@/static/icons/arrow.svg);
		transform: rotate(0deg);
		display: block;
		width: 52px;
		height: 52px;
		position: relative;
		right: -54px;
	}

}

.carousel__prev:hover:not(.carousel__prev--disabled) .nav-slide {
	content: url(@/static/icons/arrow-hover.svg) !important
}

.carousel__next:hover:not(.carousel__next--disabled) .nav-slide {
	content: url(@/static/icons/arrow-hover.svg) !important
}

.carousel__prev--disabled .nav-slide {
	content: url(@/static/icons/disabledArrow.svg) !important
}

.carousel__next--disabled .nav-slide {
	content: url(@/static/icons/disabledArrow.svg) !important
}



.carousel__pagination-button {
	background: #d9d9d9;
	width: 10px;
	height: 10px;
	box-shadow: none;
	border: none;
	padding: 0;
	border-radius: 50%;
	transition: all 100ms ease-in-out;
	line-height: 0;
	margin: 0 0.25em;
}

.carousel__pagination-button::after {
	content: none;
}

.carousel__pagination-button.carousel__pagination-button--active {
	background: #2B47DA;
}

.carousel__pagination {
	display: none !important;
}

.carousel-section {
	margin: 0 0 10px -10px;
}

@media (max-width:1360px) {
	.carousel__pagination {
		display: flex !important;
		top: 20px;
		margin: 0;
		position: relative;
	}

}

@media (max-width: 900px) {
	.carousel-section {
		margin: 0 !important;
		width: 100% !important;
	}

	// .carousel img{
	// 	max-width: 100%!important;
	// 	width: 100%!important;
	// }

	.title.mrt-35.mrb-8 {
		margin-top: -20px;
	}

	.carousel-wrapper .title.mrt-35.mrb-8 {
		margin-bottom: 16px;
		padding: 0 0 0 20px;
	}

	.carousel-section {}
}

@media (max-width: 700px) {
	.carousel img {
		max-width: 100%;
		width: calc(100% - 20px);
	}

	.carousel__pagination {
		top: -5px !important;
	}
}

.carousel img {
	border-radius: 24px;
}
</style>
<style>
.carousel-section {
	width: calc(100% + 20px);
	margin: 0 0 0 -10px;
}

/* @media (max-width: 1360px) {

	.carousel__prev,
	.carousel__next {
		display: none !important;
	}
} */
#app .carousel__pagination-item button {
	width: 8px !important;
	height: 8px !important;
	margin: 0 4.5px !important;
}
</style>