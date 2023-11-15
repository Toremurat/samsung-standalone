<template>
	<div id="sideMenu" class="pdt-3">
		<p class="text_base1_bold black_100 mrb-4 mrt-0">
			Информация покупателям
		</p>
		<ul class="sideMenu">
			<li class="text_base2 black_100 pdb-6">
				<router-link to="/payment">
					Оплата
				</router-link>
			</li>
			<li class="text_base2 black_100 pdb-6">
				<router-link to="/delivery">
					Доставка
				</router-link>
			</li>
			<li class="text_base2 black_100 pdb-6">
				<router-link to="/return-and-exchange">
					Возврат и обмен
				</router-link>
			</li>
			<li class="text_base2 black_100 pdb-6">
				<router-link to="/service">
					Сервис
				</router-link>
			</li>

			<li class="text_base2 black_100 pdb-6">
				<router-link to="/guarantee">
					Гарантия низкой цены
				</router-link>
			</li>
			<li class="text_base2 black_100 pdb-6">
				<router-link to="/trade-in">
					Trade-in
				</router-link>
			</li>
			<li class="text_base2 black_100 pdb-6">
				<router-link to="/smart-bonus">
					Smart Bonus
				</router-link>
			</li>

			<li class="text_base2 black_100 pdb-6">
				<router-link to="/public-policy">
					Публичная оферта
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'InformationMenu',
	props: {
	},
}
</script>
<style>
@media (max-width: 900px) {
	#sideMenu{
		display: none;
	}
}
.sideMenu li a:hover,
.sideMenu li a.router-link-exact-active {
	color: #2B47DA;
	transition: ease all .3s;

}

.sideMenu li a {
	transition: ease all .3s;
	color: #000;
}

.sideMenu {
	padding: 0 !important;
	margin: 0 !important;
}

#sideMenu {
	min-width: 285px;
	width: 285px;
	border-right: 1px solid #ededed;
	margin-right: 80px !important;
	padding-right: 55px;
	white-space: nowrap;
}</style>
