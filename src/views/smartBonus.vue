<template>
	<div class="container infoPage ">
		<InformationMenu></InformationMenu>
		<div class="content">
			<h1 class="title heading mrb-10">Smart bonus</h1>
			<div id="promo-content" style="margin-block:40px 0!important;">
				<div class="heading">
					<h2>Мы делаем Ваши покупки ещё выгодней!</h2>
				</div>
				<div class="warning blue">Копите бонусы и оплачивайте до 99% от стоимости товаров</div>
				<div class="half-spacer"></div>
				<h4>Как работает бонусная карта</h4>
				<ol class="numbered-list">
					<li>Получайте 5% бонусов за каждую покупку (1% при покупке в кредит);</li>
					<li>Оплачивайте до 99% от стоимости товаров.</li>
				</ol>
				<div class="half-spacer"></div>
				<p>1 бонус = 1 тенге</p>
				<div class="mini-spacer"></div>
				<p>Бонусы действительны 180 дней со дня совершения покупки</p>
				<div class="half-spacer"></div>
				<a class="btn" href="https://evrika.com/bonuses" target="_blank">Проверить баланс карты</a>
				<div class="spacer"></div>
				<h3>Как использовать бонусную карту</h3>
				<ol class="numbered-list titled">
					<li>
						<h4>Совершайте покупки</h4>
						<p>Получайте бонусы за покупки. Чем выше стоимость товара, тем больше бонусов. Ищите товары с
							повышенными бонусами.</p>
					</li>
					<li>
						<h4>Копите Smart бонусы</h4>
						<p>Предъявите бонусную карту на кассе или укажите ее номер при оформлении заказа и мы начислим
							вам
							бонусы которые активируются через 16 дней и будут активны в течении 180 дней.</p>
					</li>
					<li>
						<h4>Используйте бонусы</h4>
						<p>Используйте бонусы при оплате. Накопленные бонусы – это Ваша скидка до 99% при совершении
							следующей покупки.</p>
					</li>
				</ol>
				<div class="spacer"></div>
				<h3>Участники клуба</h3>
				<ul class="unstyled-list titled">
					<li>
						<h4>Фирменный магазин Samsung</h4>
						<p>Единственный в Казахстане фирменный магазин Samsung</p>
					</li>
					<li>
						<h4>Фирменный магазин Sony Centre</h4>
						<p>Магазины электроники Sony в городах Алматы, Астана и Шымкент</p><a target="_blank"
							href="https://sonycenter.kz">sonycenter.kz</a>
					</li>
					<li>
						<h4>Фирменный магазин Bosch</h4>
						<p>Магазины бытовой и кухонной техники Bosch в городах Алматы, Астана и Шымкент</p><a
							target="_blank" href="https://boschcenter.kz">boschcenter.kz</a>
					</li>
					<li>
						<h4>Фирменный магазин Benetton</h4>
						<p>Магазины женской, мужской и детской одежды в городе Алматы</p><a target="_blank"
							href="https://ucb.kz">ucb.kz</a>
					</li>
					<li>
						<h4>Гипермаркет электроники Evrika</h4>
						<p>Мультибрендовые магазины во всех городах Казахстана</p><a target="_blank"
							href="https://evrika.com">evrika.com</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="container mgt-35">
		<careServiceWidget />
	</div>
</template>
<script>
import InformationMenu from '@/components/InformationMenu.vue'
import careServiceWidget from '@/components/careServiceWidget.vue';

export default {
	components: {
		InformationMenu,
		careServiceWidget
	},
	name: 'garantiePage',
	props: {
	},
}
</script>
<style>
.infoPage {
	display: flex;
	flex-flow: row wrap;
	align-items: stretch;
	margin-block: 117px 140px !important;
}

.content {
	flex-basis: calc(100% - 365px);
}

@media (max-width: 900px) {
	.infoPage {
		margin-block: 100px 0px !important;
	}



	h1.heading {
		margin-bottom: 40px !important;
	}

	#app>div>.container.infoPage {
		padding-inline: 10px !important;
	}

	.content {
		flex-basis: 100%;
	}

	#promo-content ol li+li {
		margin-top: 16px;
	}
}

#promo-content ol li+li {
	margin-top: 24px;
}
</style>
<style scoped lang="scss">
.container.infoPage {
	min-height: 39.5vh;
}
</style>
<style lang="scss">

@media (max-width:900px) {
	#app>div>.container.mgt-35 {
		padding-left: 20px !important;
		max-width: unset;
		width: 100%;
		padding-right: 20px !important;
	}
}
</style>

