<template>
	<div class="slider" v-if="slidesArr.length">
		<div class="glide" id="prod">
			<div class="glide__track" data-glide-el="track">
				<ul class="glide__slides">
					<li class="glide-item" v-for="(slides, index) in slidesFilter" :key="index">
						<router-link :to="'/promo/'+ slides.link">
							<img :src="'@/static/image/slider/' + slides.img" alt="slides.alt" class="desktop-only">
							<img :src="'@/static/image/slider/' + slides.img_mobi" alt="slides.alt" class="mobile-only">
						</router-link>
					</li>
				</ul>
			</div>
			<div class="glide__bullets" data-glide-el="controls[nav]">
				<button class="glide__bullet" :data-glide-dir="'=' + i" :alt="bullets.img" v-for="(bullets, i) in slidesArr"
					:key="i"></button>
			</div>
			<div class="glide__arrows" data-glide-el="controls" v-if="!isMobile">
				<button class="glide__arrow glide__arrow--left" data-glide-dir="<">
					<div class="wrap"></div>
				</button>

				<button class="glide__arrow glide__arrow--right" data-glide-dir=">">
					<div class="wrap"></div>
				</button>

			</div>

		</div>
	</div>
</template>
<script>
import axios from 'axios'
import Glide from '@glidejs/glide'

export default {
	name: 'productImg',
	data() {
		return {
			slidesArr: {},
			errorData: [],
			data: [],
			slidesStatus: 0,
		}
	},
	methods: {
		async getSlides() {
			await axios.get('@/static/json/slider.json')
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
				})

				.catch((error) => {
					this.promoData = {
						"message": 'Слайдов на данный момент нет'
					}
					console.log(error);
					this.errorData.push(error)
				});
		},
		async fetchData() {
			await new Promise(r => setTimeout(r, 300));
			const newData = this.slidesArr;
			this.data = newData;
		},


	},
	watch: {
		data: function () {
			new Glide('.glide', { type: 'slider', rewind: false, startAt: 0, perView: 1, }).mount();
		}
	},
	computed: {
		isMobile() {
			return window.innerWidth < 900;
		},
		slidesFilter() {
			return this.slidesArr.filter(slides => slides.status !== this.slidesStatus);
		},
	},
	created() {
		this.getSlides();

	},
	mounted() {
		this.fetchData();
		// new Glide('.glide').mount()
		// this.loadedAxiosDOM()
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@glidejs/glide/dist/css/glide.core.min.css';

#prod {
	margin-top: 28px;
	margin-bottom: 140px;

	@media (max-width: 1366px) {
		margin-top: 28px;
		margin-bottom: 100px;
	}

	@media (max-width: 900px) {
		margin-top: 20px;
		margin-bottom: 80px;
	}
}

.glide img {
	height: 100%;
}

.glide__arrow {
	appearance: none;
	background: none;
	border: none;

}

.glide__arrows {
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
	width: calc(100% + 128px);
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

.glide__track {
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
}


@media (max-width: 900px) {
	.glide-item {
		padding: 0;
		align-items: start;
		height: unset;
	}
}
</style>