<template>
	<!-- eslint-disable  -->

	<div class="slider-section mrb-35 ">
		<carousel :items-to-show="1" :wrap-around="false">
			<slide v-for="(slider, index) in slidesArr" :key="index">
				<router-link :to="slider.link">
					<img :src="'/static/image/slider/' + slider.img" alt="slider.alt" class="desktop-only"  v-if="!isMobile">
					<img :src="'/static/image/slider/' + slider.img_mobi" alt="slider.alt" class="mobile-only" v-else>
				</router-link>
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
			await axios.get('../static/json/slider.json')
				.then(response => {
					this.slidesArr = [];
					response.data.forEach(element => {
						this.slidesArr.push({
							"img": element.slide,
							"img_mobi": element.slide_m,
							"link": element.link,
							"sort": element.sort,
							"status": element.status,
							"alt": element.alt,
						});
					});

					this.slidesArr.sort((a, b) => a.sort - b.sort);
					this.slidesArr.filter(slider => slider.status !== this.slidesStatus);
				})

				.catch((error) => {
					this.promoData = {
						"message": 'Слайдов на данный момент нет'
					}
					console.log(error);
					this.errorData.push(error)
				});
		},


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
.slider-section{
	margin-top: 95px;
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
		left: -74px;
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
		right: -74px;
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
@media (max-width: 900px) {

	.carousel__prev,
	.carousel__next {
		display: none !important;
	}

	.title.mrt-35.mrb-8 {
		margin-top: 80px;
	}
}
</style>j