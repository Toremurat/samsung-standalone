<template>
	<!-- eslint-disable  -->
	<div class="title mrt-35 mrb-8">
		<h2 class="heading mrb-0">Новинки уже в продаже</h2>
	</div>
	<div class="carousel-section">
		<carousel :items-to-show="4.5" :wrap-around="false" :breakpoints="breakpoints">
			<slide v-for="(carousel, index) in itemsArr" :key="index">
				<img :src="'/static/image/carousel/' + carousel.img" alt="carousel.alt">
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
			</template>
		</carousel>
	</div>
</template>
<script>
import axios from 'axios'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

export default {
	components: {
		Carousel,
		Slide,
		Navigation,
	},
	name: 'productImg',
	data() {
		return {
			itemsArr: [],
			errorData: [],
			carouselStatus: 1,
			wrapAround: true,
			breakpoints: {
				320: {
					itemsToShow: 1.3,
					snapAlign: 'start',
				},
				// 700px and up
				600: {
					itemsToShow: 2.5,
					snapAlign: 'start',
				},
				750: {
					itemsToShow: 3.5,
					snapAlign: 'start',
				},
				// 1024 and up
				1024: {
					itemsToShow: 4.5,
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
					this.itemsArr.filter(carousel => carousel.status !== this.carouselStatus);
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
		left: -74px;
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



.glide__arrows {
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
	width: 1600px;
	left: -64px;
	position: absolute;
	top: calc(50% - 26px);
}

.glide__arrow.glide__arrow--left .wrap {
	content: url(@/static/icons/arrow.svg);
	transform: rotate(180deg)
		/*! background: url(@/static/icons/arrow.svg); */
}

.glide__arrow.glide__arrow--right .wrap {
	content: url(@/static/icons/arrow.svg);
}

.glide__arrow.glide__arrow--disabled .wrap {
	content: url(@/static/icons/disabledArrow.svg)
}

.glide__arrow:hover:not(.glide__arrow--disabled) .wrap {
	content: url(@/static/icons/arrow-hover.svg)
}

.glide img {
	max-width: 100%;
}

/* .glide__track {
	border-radius: 24px;
	height: 100% !important;
	width: 100% !important;
}

.glide-item {
	text-align: center;
	display: flex;
	-webkit-align-items: center;
	-webkit-justify-content: center;
	padding: 20px 0;
}

.glide__bullets {
	top: calc(100% + 10px);
	position: absolute;
	z-index: 2;
	bottom: 2em;
	left: 50%;
	display: inline-flex;
	list-style: none;
	transform: translateX(-50%);
}

.glide__bullet {
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

.glide__bullet.glide__bullet--active {
	background: #2B47DA;
} */
@media (max-width: 900px) {

	.carousel__prev,
	.carousel__next {
		display: none !important;
	}

	.title.mrt-35.mrb-8 {
		margin-top: 80px;
	}
}
</style>