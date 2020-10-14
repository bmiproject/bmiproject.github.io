<template>
	<div class="home">
		<hero-section />
		<marketplays-applications-section />
		<sponsors-section />
		<services-section />
		<whats-great-section />
		<faq-section />
	</div>
</template>

<script>
import HeroSection from '@/components/sections/Hero'
import MarketplaysApplicationsSection from '@/components/sections/MarketplaysApplications'
import SponsorsSection from '@/components/sections/Sponsors'
import ServicesSection from '@/components/sections/Services'
import WhatsGreatSection from '@/components/sections/WhatsGreat'
import FaqSection from '@/components/sections/Faq'

export default {
	name: 'Home',
	components: {
		HeroSection,
		MarketplaysApplicationsSection,
		SponsorsSection,
		ServicesSection,
		WhatsGreatSection,
		FaqSection,
	}
}
</script>
