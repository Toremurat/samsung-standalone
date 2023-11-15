<template>
	<div class="container mrb-15">
		<div class="title desktop-only">
			<h1 class="heading pdt-10 mrb-15">
				Контакты
			</h1>
			<h2 class="heading mrt-0 mrb-10">
				Добро пожаловать в фирменный магазин Samsung
			</h2>
		</div>
		<div class="title mobile-only">
			<h1 class="heading pdt-5 mrb-10">
				Наш магазин
			</h1>
		</div>
		<contactsGallery />
	</div>
	<div class="container" id="textHero">
		<div class="contact-content">
			<div class="flex-row align-center">
				<div class="text">
					<h2 class="heading mrt-3 mrb-5 desktop-only">
						О магазине
					</h2>
					<h2 class="heading mrt-3 mrb-5 mobile-only">
						Добро пожаловать в фирменный магазин Samsung!
					</h2>
					<p class="text_base1 mrb-5">
						Первый фирменный магазин Samsung в Казахстане - это место, где инновации и высокие технологии
						встречаются с гостеприимством и качественным обслуживанием.
					</p>
					<p class="text_base1 mrb-5">
						Здесь вы найдете флагманские смартфоны, телевизоры, аудио и бытовую технику. Квалифицированные
						специалисты всегда готовы предоставить профессиональную консультацию и продемонстрировать
						возможности устройств.
					</p>
				</div>
				<div class="contact-box">
					<div class="inner">
						<h3 class="heading mrt-0 mrb-5">
							Контакты магазина
						</h3>
						<div class="addr-box">
							<p class="text_base1 black_100 mrb-4">
								Алматы, Самал-2, 111, ТРЦ Dostyk Plaza, 1 этаж
							</p>
							<div class="addr-link mrb-10">
								<p class="text_base_2 black_50  mrb-0">Проложить маршрут</p>
								<a
									href="https://2gis.kz/almaty/directions/points/%7C76.955573%2C43.233917%3B70000001076849171?floor=1&m=76.955831%2C43.233979%2F19.77">
									<img src="@/static/icons/2gis.svg" alt="">
								</a>
								<span class="verticalDiv black_25_bg"></span>
								<a
									href="https://yandex.ru/maps/162/almaty/?indoorLevel=1&ll=76.956320%2C43.233477&mode=routes&rtext=~43.233492%2C76.956694&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D32933881704&z=19.81">
									<img src="@/static/icons/yandex.svg" alt="">
								</a>
							</div>
						</div>
						<p class="text_base1_bold mrb-4 mrt-0">
							<a href="tel:+77719333322" class="text_base1_bold blue_80">+7 771 933 33 22</a>
							<span class="text_base2 black_50">
								Единый номер
							</span>
						</p>
						<p class="text_base1_bold mrt-0 mrb-0">
							<a href="https://wa.me/+77777888889" class="text_base1_bold blue_80">+7 777 788 88 89</a>
							<span class="text_base2 black_50">
								WhatsApp консультация
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="container footer mrt-35">
		<careServiceWidget />
	</div>
</template>

<script>
import contactsGallery from '@/components/contactsGallery.vue';
import careServiceWidget from '@/components/careServiceWidget.vue';

export default {
	name: 'ContactsPage',
	components: {
		contactsGallery,
		careServiceWidget
	}
}
</script>

<style scoped lang="scss">
#contactsSlider {
	margin: 0 !important;
}

.flex-row.align-center {
	flex-flow: row nowrap;
	display: flex;
	gap: 40px;
}

.contact-content .text {
	padding: 0 60px 0 0;
	max-width: 57%;
}

.contact-box {
	padding: 40px;
	border-radius: 20px;
	border: 1px solid #ededed;
	width: 100%;
}

.addr-link {
	display: flex;
	flex-flow: row nowrap;
	gap: 16px;
	align-items: center;
}

.verticalDiv.black_25_bg {
	height: 22px;
	width: 1px;
}

.addr-link a {
	display: flex;
}

.inner>p {
	display: flex;
	flex-flow: row;
	gap: 12px;
}

@media (max-width: 1240px) {

	.addr-link .text_base_2.black_50.mrb-0 {
		flex-basis: 100%;
	}

	.addr-link {
		row-gap: 4px;
		flex-flow: row wrap;
	}
}

@media (max-width: 1110px) {
	.inner .text_base1_bold {
		flex-flow: row wrap;
		row-gap: 0;
	}

	.inner .text_base1_bold a {
		flex-basis: 100%;
	}
}

@media (max-width: 900px) {

	.glide-item img.mobile-only {
		border-radius: 24px !important;
		overflow: hidden;
	}

	.contact-content .flex-row.align-center {
		flex-flow: column !important;
	}

	.contact-content .text {
		max-width: 100%;
		padding: 0;
	}

	.addr-link {
		flex-flow: row wrap;
	}

	.addr-link>p {
		flex-basis: 100%;
	}

	.inner>p {
		flex-flow: row wrap;
	}

	.inner>p a {
		flex-basis: 100%;
	}

	.contact-content .flex-row.align-center {
		flex-flow: column !important;
	}

	.contact-content .text {
		padding: 0 !important;
		max-width: 100% !important;
	}

	.container.mrb-15,
	#textHero {
		max-width: calc(100% - 40px) !important;
		padding: 0 20px !important;
	}

	.container.mrb-15 .glide img.mobile-only {
		border-radius: 24px !important;
	}

	#app>div>.container.mrb-15 {
		margin-bottom: 20px !important;
	}

	h3.heading {
		font-size: 24px;
		font-style: normal;
		font-weight: 600;
		line-height: 130%;
	}
	.container.footer.mrt-35{
		margin-top:80px;
	}
}

// html #app>div>.container.footer.mrt-35 {
// 	padding: 0 20px !important;
// }
</style>
<style>
@media (max-width: 900px) {
	#contactsSlider img.mobile-only {
		border-radius: 20px 20px 0 0!important;
		overflow: hidden;
	}
}
</style>
