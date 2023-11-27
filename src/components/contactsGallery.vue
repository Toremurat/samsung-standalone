<template>
	<div class="slider">
		<div class="glide" id="contactsSlider">
			<div class="glide__track" data-glide-el="track">
				<ul class="glide__slides">
					<li class="glide-item">
						<img src="@/static/image/contact_slider/1-main.webp" alt="slides.alt" class="desktop-only">
						<img src="@/static/image/contact_slider/1-1.webp" alt="slides.alt" class="mobile-only">
					</li>
					<li class="glide-item">
						<img src="@/static/image/contact_slider/2-main.webp" alt="slides.alt" class="desktop-only">
						<img src="@/static/image/contact_slider/2-1.webp" alt="slides.alt" class="mobile-only">
					</li>
					<li class="glide-item">
						<img src="@/static/image/contact_slider/3-main.webp" alt="slides.alt" class="desktop-only">
						<img src="@/static/image/contact_slider/3-1.webp" alt="slides.alt" class="mobile-only">
					</li>
					<li class="glide-item">
						<img src="@/static/image/contact_slider/4-main.webp" alt="slides.alt" class="desktop-only">
						<img src="@/static/image/contact_slider/4-1.webp" alt="slides.alt" class="mobile-only">
					</li>
					<li class="glide-item">
						<img src="@/static/image/contact_slider/5-main.webp" alt="slides.alt" class="desktop-only">
						<img src="@/static/image/contact_slider/5-1.webp" alt="slides.alt" class="mobile-only">
					</li>
					<li class="glide-item">
						<img src="@/static/image/contact_slider/6-main.webp" alt="slides.alt" class="desktop-only">
						<img src="@/static/image/contact_slider/6-1.webp" alt="slides.alt" class="mobile-only">
					</li>
				</ul>
			</div>
			<div class="glide__bullets" data-glide-el="controls[nav]">
				<button class="glide__bullet" data-glide-dir="=0"></button>
				<button class="glide__bullet" data-glide-dir="=1"></button>
				<button class="glide__bullet" data-glide-dir="=2"></button>
				<button class="glide__bullet" data-glide-dir="=3"></button>
				<button class="glide__bullet" data-glide-dir="=4"></button>
				<button class="glide__bullet" data-glide-dir="=5"></button>
			</div>
			<!-- <div class="glide__arrows" data-glide-el="controls">
							<button class="glide__arrow glide__arrow--left" data-glide-dir="<">
									<div class="wrap"></div>
							</button>

							<button class="glide__arrow glide__arrow--right" data-glide-dir=">">
									<div class="wrap"></div>
							</button>

					</div> -->

		</div>
	</div>
</template>
<script>
import Glide from '@glidejs/glide'

export default {
	name: 'contactsGallery',
	data() {
		return {
		}
	},
	methods: {
		initGlide() {
			this.glide = new Glide('.glide', {
				type: 'slider',
				startAt: 0,
				rewind: false,
			});

			this.glide.mount();
		},
		updateGlide() {
			if (this.glide) {
				this.glide.update();
			}
		},
	},
	mounted() {
		this.initGlide();
		window.addEventListener('resize', this.updateGlide);
	},
	updated() {
		this.updateGlide();
	},
	beforeUnmount() {
		window.removeEventListener('resize', this.updateGlide);
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@glidejs/glide/dist/css/glide.core.min.css';

#contactsSlider:not(.glide) {
	margin-top: 140px;
	margin-bottom: 140px;

	@media (max-width: 1366px) {
		margin-top: 100px;
		margin-bottom: 100px;
	}

	@media (max-width: 900px) {
		margin-top: 80px;
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
	border-radius: 24px;
	overflow: hidden;
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
	top: 100%;
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
	.glide__arrows {
		display: none !important;
	}

	#contactsSlider {
		margin: 0 !important;
	}

	.glide-item {
		padding-top: 0 !important;
	}

	.glide img.mobile-only {
		border-radius: 0 !important;
	}

	.glide__track {
		border-radius: 0;
	}
}
</style>