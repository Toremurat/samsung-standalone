<template>
	<div class="container infoPage ">
		<InformationMenu></InformationMenu>
		<div class="content">
			<h1 class="title heading mrb-10">Trade in</h1>
			<div id="promo-content" style="margin-block:40px 0!important;">
				<div class="heading">
					<h2>Какую технику мы принимаем в Trade-in:</h2>
				</div>
				<strong>Смартфоны</strong>
				<p>Samsung, Apple, Huawei, Honor, Oppo, Vivo, Xiaomi</p>
				<div class="mini-spacer"></div>
				<strong>Планшеты</strong>
				<p>Samsung, Apple</p>
				<div class="mini-spacer"></div>
				<strong>Смарт-часы</strong>
				<p>Samsung, Apple</p>
				<div class="spacer"></div>
				<h3>Почему Trade-in это выгодно:</h3>
				<h4>Удобно</h4>
				<ol class="numbered-list">
					<li>Вам не придется тратить времени на фото, размещение объявлений, подготовку описаний, сотни
						звонков и встреч, чтобы любители поглазеть потрогали ваш телефон;</li>
					<li> Продав старый вы останетесь без связи. А купить новый и потом продавать старый может не каждый;
					</li>
				</ol>
				<div class="half-spacer"></div>
				<h4>Безопасно</h4>
				<ol class="numbered-list">
					<li>Вам не придется рисковать личными данными. Даже после сброса мошенники могут попытаться
						восстановить вашу личную информацию. В нашем Trade-in все устройства проходят полную очистку на
						специальном программном обеспечении отвечающим всем стандартам безопасности GDPR, Common
						Criteria EAL3+, ADISA, CESG, NATO OTAN, а также National Cyber Security Centre (NCSC);</li>
					<li>При продаже своей технике на рынке БУ есть высокий риск попасться в руки мошенников. Возможные
						варианты обманов:<ul class="unstyled-list">
							<li>Покупка за поддельные денежные купюры;</li>
							<li>У вас готовы купить без торга, но нужно отправить курьерской службой. Показывают, скрин,
								что деньги отправлены, но банковский перевод занимает до 3 дней. Вы отправляете свое
								устройство, платите за доставку, а деньги так и не поступают;</li>
							<li>Грабеж во время личной встречи;</li>
							<li>Подмена во время осмотра:<ul class="unstyled-list">
									<li>Вы принесли устройство в коробке, показали, устройство не понравилось, вы
										попрощались, а коробка уже без устройства;</li>
									<li>Вы принесли устройство без коробки чтобы показать. Его включили, посмотрели,
										выключили и отдали вам. После встречи оказалось, что вам отдали не ваше
										устройство, а внешне такое же, только не рабочее.</li>
								</ul>
							</li>
						</ul>
					</li>
				</ol>
				<div class="spacer"></div>
				<div class="warning blue" style="margin-bottom: 16px">Воспользуйтесь услугой Trade-in в фирменном
					магазине Samsung. Это выгодно и безопасно.</div>
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
	name: 'tradeIn',
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