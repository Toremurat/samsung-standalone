<template>
	<nav class="header">
		<div class="header-sticky container">
			<div class="left-container" @touch="closeDropdowns();">
				<div class="burger" :class="{ morph: isDesktopDropdownActive || isMobileDropdownActive }"
					@click="toggleState();">
					<div class="icon">
						<i class="line burger top-line"></i>
						<i class="line burger middle-line"></i>
						<i class="line burger bottom-line"></i>
					</div>
				</div>
				<div class="vertical-divider"></div>
				<div id="logo">
					<router-link @click="closeDropdowns" to="/">
						<img src="@/static/image/logo/logo.svg" alt="" class="desktop-only">
						<img src="@/static/image/logo/logo-m.webp" alt="" class="mobile-only">
					</router-link>
				</div>
			</div>
			<div class="right-container desktop-only">
				<div class="flex-row flex addr">
					<div class="addr-1">
						<a targer="_blank"
							href="https://2gis.kz/almaty/directions/points/%7C76.955573%2C43.233917%3B70000001076849171?floor=1&m=76.955831%2C43.233979%2F19.77"
							target="_blank">
							<img src="@/static/icons/addr.svg" alt="" class="icon">
							<span class="text black_75 text_base2">
								ТРЦ Dostyk Plaza
							</span>
						</a>
					</div>
					<div class="tel-1">
						<a targer="_blank" href="tel:+77719333322">
							<img src="@/static/icons/tel.svg" alt="" class="icon">
							<span class="text black_75 text_base2">
								+7 771 933 33 22
							</span>
						</a>
					</div>
				</div>
			</div>
			<div class="vertical-dropdown-desktop" :class="{ active: isDesktopDropdownActive }">
				<div class="row pdt-15 pdb-20">
					<div class="col-sm-4">
						<ul class="menu-list">
							<li class="list-item text_base1_bold black_100 pdb-6">
								<router-link @click="closeDropdowns" to="/promo/" class="text_base1_bold black_100">
									Акции
								</router-link>
							</li>
							<li class="list-item text_base1_bold black_100 pdb-6">
								<router-link @click="closeDropdowns" to="/contacts/" class="text_base1_bold black_100">
									Контакты
								</router-link>
							</li>
							<li class="list-item text_base1_bold black_100 pdb-6">
								<router-link @click="closeDropdowns" to="/care-service" class="text_base1_bold black_100">
									Служба заботы
								</router-link>
							</li>
							<li class="list-item text_base1_bold black_100">
								<router-link @click="closeDropdowns" to="/about-store" class="text_base1_bold black_100">
									О магазине
								</router-link>
							</li>
						</ul>
					</div>
					<div class="col-sm-4">
						<ul class="menu-list">
							<li class="list-item text_base2 black_100 pdb-6">
								<p class=" text_base1_bold black_100 mrt-0 mrb-0">
									Информация покупателям
								</p>
							</li>

							<li class="list-item text_base2 black_100 pdb-6">
								<router-link @click="closeDropdowns" to="/payment" class=" black_100">
									Оплата
								</router-link>
							</li>
							<li class="list-item text_base2 black_100 pdb-6">
								<router-link @click="closeDropdowns" to="/delivery" class=" black_100">
									Доставка
								</router-link>
							</li>
							<li class="list-item text_base2 black_100 pdb-6">
								<router-link @click="closeDropdowns" to="/return-and-exchange" class=" black_100">
									Возврат и обмен
								</router-link>
							</li>
							<li class="list-item text_base2 black_100 pdb-6">
								<router-link @click="closeDropdowns" to="/service" class=" black_100">
									Сервис
								</router-link>
							</li>

							<li class="list-item text_base2 black_100 pdb-6">
                                <router-link to="/guarantee" @click="closeDropdowns" class=" black_100">
                                    Гарантия низкой цены
                                </router-link>
                            </li>
                            <li class="list-item text_base2 black_100 pdb-6">
                                <router-link to="/trade-in" @click="closeDropdowns" class=" black_100">
                                    Trade-in
                                </router-link>
                            </li>
                            <li class="list-item text_base2 black_100 pdb-6">
                                <router-link to="/smart-bonus" @click="closeDropdowns" class=" black_100">
                                    Smart Bonus
                                </router-link>
                            </li>

							<li class="list-item text_base2 black_100">
								<router-link @click="closeDropdowns" to="/public-policy" class=" black_100">
									Публичная оферта
								</router-link>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="vertical-dropdown-mobile" :class="{ active: isMobileDropdownActive }">
				<ul class="sidebar-menu">
					<li class="menu-items text_base1_bold black_100">
						<router-link @click="closeDropdowns" to="/promo/">Акции</router-link>
					</li>
					<li class="menu-items text_base1_bold black_100">
						<router-link @click="closeDropdowns" to="/contacts/">Контакты</router-link>
					</li>
					<li class="menu-items text_base1_bold black_100">
						<router-link @click="closeDropdowns" to="/care-service/">Служба заботы</router-link>
					</li>
					<li class="menu-items text_base1_bold black_100">
						<router-link @click="closeDropdowns" to="/about-store/">О магазине</router-link>
					</li>
					<li class="menu-items text_base1_bold black_100 dropper" :class="{ toggle: isActive }"
						@click="toggleCollapse();">
						Информация покупателям
					</li>
					<div class="mobile-collapse" :class="{ active: isActive }">
						<ul class="sidebar-submenu">
							<li class="menu-items text_base_2 black_100">
								<router-link @click="closeDropdowns" to="/payment">
									Оплата
								</router-link>
							</li>
							<li class="menu-items text_base_2 black_100">
								<router-link @click="closeDropdowns" to="/delivery">
									Доставка
								</router-link>
							</li>
							<li class="menu-items text_base_2 black_100">
								<router-link @click="closeDropdowns" to="/return-and-exchange">
									Возврат и обмен
								</router-link>
							</li>
							<li class="menu-items text_base_2 black_100">
								<router-link @click="closeDropdowns" to="/service">
									Сервис
								</router-link>
							</li>

							<li class="menu-items text_base_2 black_100">
                                <router-link @click="closeDropdowns" to="/guarantee">
                                    Гарантия низкой цены
                                </router-link>
                            </li>
                            <li class="menu-items text_base_2 black_100">
                                <router-link @click="closeDropdowns" to="/trade-in">
                                    Trade-in
                                </router-link>
                            </li>
                            <li class="menu-items text_base_2 black_100">
                                <router-link @click="closeDropdowns" to="/smart-bonus">
                                    Smart Bonus
                                </router-link>
                            </li>

							<li class="menu-items text_base_2 black_100">
								<router-link @click="closeDropdowns" to="/public-policy">
									Публичная оферта
								</router-link>
							</li>
						</ul>
					</div>
				</ul>
				<div class="tel-box">
					<div class="tel-row">
						<a href="tel:+77719333322" class="text_base_1_bold blue_80">
							+7 771 933 33 22
						</a>
						<p class="text_base_2 black_50">Единый номер</p>
					</div>
					<div class="tel-row">
						<a href="https://wa.me/+77777888889" class="text_base_1_bold blue_80">
							+7 777 788 88 89
						</a>
						<p class="text_base_2 black_50">WhatsApp консультация</p>
					</div>
				</div>
				<div class="addr-box">
					<div class="addr-title text_base_1 black_100">
						Алматы, Самал-2, 111,<br> ТРЦ Dostyk Plaza, 1 этаж
					</div>
					<div class="addr-link">
						<p class="text_base_2 black_50">Проложить маршрут</p>
						<a
							href="https://2gis.kz/almaty/directions/points/%7C76.955573%2C43.233917%3B70000001076849171?floor=1&m=76.955831%2C43.233979%2F19.77">
							<img src="@/static/icons/2gis.svg" alt="">
						</a>
						<span class="verticalDiv"></span>
						<a
							href="https://yandex.ru/maps/162/almaty/?indoorLevel=1&ll=76.956320%2C43.233477&mode=routes&rtext=~43.233492%2C76.956694&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D32933881704&z=19.81">
							<img src="@/static/icons/yandex.svg" alt="">
						</a>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'headingNav',
	props: {},
	data() {
		return {
			isMobileDropdownActive: false, // Флаг для состояния мобильного dropdown-списка
			isDesktopDropdownActive: false, // Флаг для состояния десктопного dropdown-списка
			isActive: false,
		};
	},
	methods: {
		globalClick(event) {
			// Получаем элемент .header-sticky
			const headerSticky = this.$el.querySelector('.header-sticky');
			// Получаем элемент .vertical-dropdown-desktop
			const dropdown = this.$el.querySelector('.vertical-dropdown-desktop');

			// Проверяем, что клик не произошел внутри .header-sticky или .vertical-dropdown-desktop
			if (!headerSticky.contains(event.target) && !dropdown.contains(event.target)) {
				this.isDesktopDropdownActive = false;
			}
		},
		toggleState() {
			// Получаем ширину экрана
			const windowWidth = window.innerWidth;

			// Если ширина экрана меньше 600px, открываем мобильный dropdown
			if (windowWidth < 600) {
				this.isMobileDropdownActive = !this.isMobileDropdownActive;
				this.isDesktopDropdownActive = false; // Закрываем десктопный dropdown
			} else {
				// В противном случае (десктоп), открываем десктопный dropdown
				this.isDesktopDropdownActive = !this.isDesktopDropdownActive;
				this.isMobileDropdownActive = false; // Закрываем мобильный dropdown
			}
		},
		closeDropdowns() {
			this.isMobileDropdownActive = false; // Закрываем мобильное меню
			this.isDesktopDropdownActive = false; // Закрываем десктопное меню
		},
		toggleCollapse() {
			const collapse = document.querySelector(".mobile-collapse");
			this.isActive = !this.isActive;

			if (this.isActive) {
				this.animateDropdown(collapse, 0, collapse.scrollHeight, 300);
			} else {
				this.animateDropdown(collapse, collapse.scrollHeight, 0, 300);
			}
		},
		animateDropdown(element, startHeight, endHeight, duration) {
			element.style.height = startHeight + "px";
			element.style.transition = "height " + duration / 1000 + "s ease";
			requestAnimationFrame(() => {
				element.style.height = endHeight + "px";
			});
		},
	},
	created() {
		// Добавляем обработчик события клика к объекту window
		window.addEventListener('click', this.globalClick);
	},

	unmounted() {
		// Удаляем обработчик события клика при уничтожении компонента
		window.removeEventListener('click', this.globalClick);
	},
};
</script>
<style>
#logo a {
	display: block;
}
</style>
<style lang="scss" scoped>
// Стили для мобильного dropdown
.tel-box {
	z-index: 2;
	position: relative;
}

.header {
	position: fixed;
	width: 100%;
	top: 0;
	z-index: 22;
	background: #fff;
}

.vertical-dropdown-desktop {
	opacity: 0;
	max-height: 0;
	overflow: hidden;
	transition: max-height 0.3s ease;

	&.active {
		max-height: 500px; // Установите желаемую максимальную высоту
		opacity: 1;
	}
}

.vertical-dropdown-mobile {
	display: none;

	@media (max-width: 600px) {
		opacity: 0;
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.3s ease;

		&.active {
			min-height: calc(100vh - 64px);
			height: calc(100% - 64px);
			opacity: 1;
			overflow-y: scroll;
		}

		display: block;
	}
}

.menu-list {
	list-style: none;
	padding: 0;
	margin: 0 5px;
}

.vertical-dropdown-desktop {
	width: 100%;
}

.row.pdt-15.pdb-20 {
	padding: 60px 0 80px;
}

.vertical-dropdown-desktop .col-sm-4 {
	width: auto;
	min-width: 211px;
	padding: 0;
}

.vertical-dropdown-desktop .row {
	display: flex;
	flex-flow: row;
	gap: 60px;
	padding-left: 15px !important;
}

.burger .icon i {
	height: 2px;
	width: 100%;
	background: blue;
}

.burger .icon {
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: space-between;
	width: 40px;
	height: 26px;
}

.header-sticky.container {
	max-width: 1600px;
	position: sticky;
	top: 0;
	left: 0;
	display: flex;
	flex-flow: row wrap;
	padding: 12px 80px;
	margin: 0 auto;

	@media (max-width: 1600px) and (min-width: 1366px) {
		max-width: 100%;
		padding-left: 80px;
		padding-right: 80px;
	}

	@media (max-width: 1366px) and (min-width: 1080px) {
		max-width: 100%;
		padding-left: 40px;
		padding-right: 40px;
	}

	@media (max-width: 1080px) and (min-width: 900px) {
		max-width: 100%;
		padding-left: 20px;
		padding-right: 20px;
	}

	@media (max-width: 900px) {
		max-width: calc(100% - 0px);
		padding-left: 0;
		padding-right: 0;
	}

}

.left-container {
	flex-basis: 50%;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	gap: 28px;
	padding: 6px 0;
}

.right-container.desktop-only {
	flex-basis: 50%;
	align-items: center;
	padding: 6px 0;
	display: flex;
	justify-content: flex-end;
}

.vertical-divider {
	width: 1px;
	height: 100%;
	background: #ededed;
	margin-right: 2px;
}



.flex-row.flex.addr {
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-end;
	gap: 40px;
	align-items: center;
}

.flex-row.flex.addr>div a {
	display: flex;
	flex-flow: row nowrap;
	gap: 8px;
	align-items: center;
}

.flex-row.flex.addr>div a {
	align-items: center;
	display: flex;
}


.header {
	border-bottom: 1px solid rgba(238, 238, 238, 0.93);
}

.mobile-collapse {
	opacity: 0;
	background-color: #fff;
	// border: 1px solid #ededed;
	padding: 0;
	// display: none;
}

.mobile-collapse.active {
	opacity: 1;
}

.mobile-collapse:not(.active) {
	max-height: 0;
}

.mobile-collapse.active {
	margin-bottom: 28px;
}

.burger .icon i {
	height: 2px;
	width: 100%;
	background: #2B47DA;
	transition: transform 0.3s; // Добавляем транзицию для плавного изменения transform
}

.burger.morph .icon .top-line {
	transform: translateY(0px);
}

.burger.morph .icon .middle-line {
	transform: translateY(-6px);
	opacity: 1; // По умолчанию, средний линии должен быть видимым
}

.burger.morph .icon .bottom-line {
	transform: translateY(-12px);
}

.burger.morph .icon .middle-line {
	display: block;
	opacity: 0;
}

.burger.morph .icon .bottom-line {
	transform: rotate(45deg) translateY(-8px) translateX(-10px);
}

.burger.morph .icon .top-line {
	transform: rotate(-45deg) translateY(8px) translateX(-8px);
}

@media (max-width:900px) {

	.mobile-collapse:not(.active) {
		height: 0;
	}

	.mobile-collapse.active {
		height: 100%;
	}

	.right-container.desktop-only {
		display: none !important;
	}

	.header-sticky.container {
		padding: 0 !important;
	}

	.left-container {
		padding: 12px 30px !important;
	}

	.sidebar-menu {
		padding: 0 !important;
		margin: 0 !important;
	}

	#homePromo .title span {
		width: 100%;
		display: block;
		padding: 0 !important;
	}

	.right-container.desktop-only {
		display: none !important;
	}

	.vertical-dropdown-mobile {
		width: 100%;
	}

	.sidebar-menu {
		padding: 0 !important;
	}

	.sidebar-menu>.menu-items {
		padding: 20px;
		border-top: 1px solid #ededed;
	}

	nav+div {
		margin-top: 66px !important;
	}

	.sidebar-menu .menu-items a {
		color: #000;
	}

	.sidebar-menu .menu-items.dropper:before {
		content: url(@/static/icons/smallArrow.svg);
		display: block;
		position: absolute;
		right: 20px;
		width: 21px;
		height: 21px;
		margin-top: 3px;
		transition: ease all 0.3s;
	}

	.sidebar-menu .menu-items.toggle {
		color: #2B47DA !important;
	}

	.sidebar-menu .menu-items.toggle:before {
		transform: rotate(180deg);
		transition: ease all 0.3s;
	}

	.sidebar-submenu {
		padding: 0 !important;
		margin: 0 20px 20px !important;
	}

	.sidebar-menu>.menu-items:last-of-type {
		margin-bottom: -20px;
	}

	.sidebar-submenu .menu-items {
		margin: 20px 0 0;
	}

	.sidebar-submenu .menu-items:first-of-type {
		margin-top: 20px;
	}

	.sidebar-submenu .menu-items:last-of-type {
		margin-bottom: 20px;
	}

	.tel-box {
		padding: 28px 20px;
		border-top: 1px solid #ededed;
		border-bottom: 1px solid #ededed;
	}

	.tel-row+.tel-row p {
		margin: 0;
	}

	.addr-box {
		padding: 28px 20px;
	}

	.addr-link p {
		margin: 20px 0 8px;
		flex-basis: 100%;
	}

	.addr-link span {
		height: 22px;
		width: 1px;
		display: inline-block;
		background: #C9C9C9;
		margin: 0;
	}

	.addr-link {
		display: flex;
		align-items: center;
		flex-flow: row wrap;
	}

	.vertical-divider[data-v-5dc86151] {
		min-width: 1px;
		height: 100%;
		background: #ededed;
		margin-right: 2px;
		display: inline-block;
	}

	#logo img {
		max-height: 40px;
	}

	.left-container {
		gap: 20px;
	}

	.text_base_1_bold {
		font-size: 16px;
		line-height: 150%;
		font-weight: 600;
		font-family: inter;
	}

	.text_base_1 {
		font-size: 16px;
		line-height: 150%;
	}

	.text_base_2 {
		font-size: 14px;
		line-height: 150%;
	}

	.tel-row {
		display: flex;
		flex-flow: column;
		gap: 5px;
	}

	.tel-row+.tel-row {
		margin-top: 20px;
	}

	.addr-link p {
		margin-bottom: 0px !important;
	}

	p {
		margin-top: 0;
		margin-bottom: 0;
	}

	.menu-items.text_base_2.black_100>a {
		font-family: Inter;
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
	}

	.menu-items.text_base1_bold.black_100 a {
		font-size: 16px;
		font-style: normal;
		font-weight: 600;
		line-height: 140%;
	}

	.vertical-dropdown-desktop {
		max-width: 100vw;
		padding: 0 20px;
	}
}

.burger {
	cursor: pointer;
}

.menu-list li a:hover {
	color: #2B47DA !important;
	transition: ease all .15s;
}

.menu-list li a {
	transition: ease all .15s;
}
</style>
<style>
.flex-row.flex.addr a:hover {
	color: #1D39C9;
}
</style>