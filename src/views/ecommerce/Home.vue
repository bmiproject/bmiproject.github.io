<template>
	<div id="home">
		<hero-section />
		<sponsors-section />
		<services-section />
		<whats-great-section />
		<cta-section />
		<faq-section />
	</div>
</template>

<script>
import HeroSection from '@/components/sections/ecommerce/Hero'
import SponsorsSection from '@/components/sections/ecommerce/Sponsors'
import ServicesSection from '@/components/sections/ecommerce/Services'
import WhatsGreatSection from '@/components/sections/ecommerce/WhatsGreat'
import FaqSection from '@/components/sections/ecommerce/Faq'
import CtaSection from '@/components/sections/ecommerce/Cta'

export default {
	name: 'Home',
	components: {
		HeroSection,
		SponsorsSection,
		ServicesSection,
		WhatsGreatSection,
		FaqSection,
		CtaSection,
	}
}
</script>
