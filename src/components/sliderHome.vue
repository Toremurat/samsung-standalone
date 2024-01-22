<template>
	<!-- eslint-disable  -->

	<div class="slider-section mrb-35 ">
		<carousel :items-to-show="1" :wrap-around="false">
			<slide v-for="(slider, index) in slidesArr" :key="index">
				<img :src="'/static/image/promo/' + slider.img" alt="slider.alt" class="desktop-only" :route="slider.link"
					@click="toRoute">
				<img :src="'/static/image/promo/' + slider.img_mobi" alt="slider.alt" class="mobile-only"
					:route="slider.link" @click="toRoute">
				<button class="link btn-slider" :route="slider.link" @click="toRoute">Узнать подробнее</button>
			</slide>
			<template #addons>
				<Navigation v-if="!isMobile">
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
	name: 'productImg',
	components: {
		Carousel,
		Slide,
		Navigation,
		Pagination
	},
	data() {
		return {
			slidesArr: {},
			errorData: [],
			data: [],
			slidesStatus: 0,
			wrapAround: true,
			mousedrag: true,
			touchDrag: true,
		}
	},
	methods: {
		async getSlides() {
			await axios.get('/api/v2/promo/')
				.then(response => {
					this.slidesArr = [];
					response.data.forEach(element => {
						this.slidesArr.push({
							"img": element.slider_desktop,
							"img_mobi": element.slider_mobile,
							"link": element.link,
							"sort": element.slider_sort,
							"status": element.slider_status,
							"alt": element.alt,
						});
					});

					this.slidesArr = this.slidesArr.filter(slider => slider.status !== this.slidesStatus);
					this.slidesArr.sort((a, b) => a.sort - b.sort);
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
				route = '/';
			} else {
				route = '/' + route;
			}
			this.$router.push(route);
		}

	},
	computed: {
		isMobile() {
			return window.innerWidth < 768;
		},
	},
	created() {
		this.getSlides();

	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img {
	cursor: pointer;
}

.slider-section {
	margin-top: 95px;

	@media (max-width: 560px) {
		// margin: 0 0 0 -10px;
	}
}

.carousel__viewport img {
	border-radius: 24px;
	overflow: hidden;
}

.carousel__slide img {
	max-width: 100%;
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
		left: -64px;
	}
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
		right: -64px;
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


.img {
	max-width: 100%;
}

.link.btn-slider {
	position: absolute;
	left: 86px;
	bottom: 86px;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	color: #fff;
	border: none;
	border-radius: 15px;
	background: #000;
	height: 70px;
	width: 235px;
	font-size: 19px;
	font-weight: 600;
	@media (max-width: 1700px) and (min-width: 901px) {
		left: 5.3vw;
		bottom: 5.3vw;
		border-radius: 10px;
		height: 4.1vw;
		width: 14.2vw;
		font-size: 1.15vw;
	}
	@media (max-width: 900px) {
		left: calc(50% - 22.5vw);
		bottom: 8.8vw;
		border-radius: 10px;
		height: 13vw;
		width: 45vw;
		font-size: 3.7vw;
	}
}

@media (max-width: 900px) {

	.carousel__prev,
	.carousel__next {
		display: none !important;
	}

	.title.mrt-35.mrb-8 {
		margin-top: 80px;
	}

	.carousel__viewport {
		padding: 0 !important;
	}

	.slider-section.mrb-35 {
		margin-bottom: 80px;
		margin-top: -10px;
	}
}
</style>
<style>
@media (max-width: 1170px) {

	.carousel .carousel__prev,
	.carousel .carousel__next {
		display: none !important;
	}
}

@media (max-width: 900px) {
	.carousel>.carousel__viewport {
		padding: 0 !important;
	}

	.container.mobile-normal .carousel__pagination {
		margin: 10px 0 0;
	}

	.carousel .carousel__prev,
	.carousel .carousel__next {
		display: none !important;
	}
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

.carousel__pagination-button {
	background: #d9d9d9 !important;
	width: 10px !important;
	height: 10px !important;
	box-shadow: none !important;
	border: none !important;
	padding: 0 !important;
	border-radius: 50% !important;
	transition: all .1s ease-in-out !important;
	line-height: 0 !important;
	margin: 0 .25em !important;
}

.carousel__pagination-button:after {
	content: none !important;
}

.carousel__pagination-button.carousel__pagination-button--active {
	background: #2b47da !important;
}

.vs__open-indicator {
	transform: scale(0.7);
}
</style>