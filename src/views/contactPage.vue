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
						В магазине вы найдете мобильные устройства, ТВ и аудио технику, бытовую технику, дисплеи и многое другое. Все
						это в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.
					</p>
					<p class="text_base1 mrb-5">
						В магазине вы найдете мобильные устройства, ТВ и аудио технику, бытовую технику, дисплеи и многое другое. Все
						это в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.В магазине вы найдете
						мобильные устройства, ТВ и аудио технику, бытовую технику, дисплеи и многое другое. Все это в одном магазине,
						где вас ждет превосходное обслуживание.
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
								<a href="http://">
									<img src="@/static/icons/2gis.svg" alt="">
								</a>
								<span class="verticalDiv black_25_bg"></span>
								<a href="http://">
									<img src="@/static/icons/yandex.svg" alt="">
								</a>
							</div>
						</div>
						<p class="text_base1_bold mrb-4 mrt-0">
							<a href="tel:" class="text_base1_bold blue_80">+7 771 933 33 22</a>
							<span class="text_base2 black_50">
								Единый номер
							</span>
						</p>
						<p class="text_base1_bold mrt-0 mrb-0">
							<a href="tel:" class="text_base1_bold blue_80">+7 777 788 88 89</a>
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

<style lang="scss">
@import url(../styles/main.css);

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
	.contact-content .text{
		padding: 0!important;
		max-width: 100%!important;
	}
}
</style>
