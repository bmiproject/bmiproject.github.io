<template>
	<div id="home">
		<hero-section />
		<sponsors-section />
		<how-it-works-section />
		<information-section />
	</div>
</template>

<script>
import HeroSection from '@/components/sections/ecommerce/Hero'
import SponsorsSection from '@/components/sections/ecommerce/Sponsors'
import HowItWorksSection from '@/components/sections/ecommerce/HowItWorks'
import InformationSection from '@/components/sections/ecommerce/Information'

export default {
	name: 'Home',
	components: {
		HeroSection,
		SponsorsSection,
		HowItWorksSection,
		InformationSection,
	}
}
</script>
