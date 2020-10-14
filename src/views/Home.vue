<template>
	<div class="home">
		<hero-section />
		<marketplays-applications-section />
		<sponsors-section />
		<services-section />
		<whats-great-section />
	</div>
</template>

<script>
import HeroSection from '@/components/sections/Hero'
import MarketplaysApplicationsSection from '@/components/sections/MarketplaysApplications'
import SponsorsSection from '@/components/sections/Sponsors'
import ServicesSection from '@/components/sections/Services'
import WhatsGreatSection from '@/components/sections/WhatsGreat'

export default {
	name: 'Home',
	components: {
		HeroSection,
		MarketplaysApplicationsSection,
		SponsorsSection,
		ServicesSection,
		WhatsGreatSection,
	}
}
</script>
