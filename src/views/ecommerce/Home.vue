<template>
	<div id="home">
		<hero-section />
		<sponsors-section />
		<how-it-works-section />
	</div>
</template>

<script>
import HeroSection from '@/components/sections/ecommerce/Hero'
import SponsorsSection from '@/components/sections/ecommerce/Sponsors'
import HowItWorksSection from '@/components/sections/ecommerce/HowItWorks'

export default {
	name: 'Home',
	components: {
		HeroSection,
		SponsorsSection,
		HowItWorksSection,
	}
}
</script>
