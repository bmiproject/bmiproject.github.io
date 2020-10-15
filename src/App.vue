<template>
	<v-app>
		<header-layout />
		<v-main>
			<router-view></router-view>
		</v-main>
		<footer-layout />
	</v-app>
</template>

<script>
import HeaderLayout from '@/components/layout/Header'
import FooterLayout from '@/components/layout/Footer'
export default {
	name: 'App',
	components: {
		HeaderLayout,
		FooterLayout
	}
};
</script>
<style>
	body, p { color: #555555; font-size: 16px; }
	body, .v-main { background: #f5f5f5; }
	h1, h2, h3, h4, h5, h6 { font-family: Roboto; font-style: normal; font-weight: 300; letter-spacing: -0.01em; }
	h1 { font-size: 60px; line-height: 70px; }
	h2 { font-size: 48px; line-height: 56px; }
	h3 { font-size: 36px; line-height: 42px; }
	h4 { font-size: 30px; line-height: 35px; }
	h5 { font-size: 24px; line-height: 28px; }
	h6 { font-size: 18px; line-height: 21px; }
	.no-flex { flex: none !important }
	#home { background: #ffffff; }
</style>