<template>
	<div class="home">
		<hero-section />
		<marketplays-applications-section />
		<sponsors-section />
		<services-section />
	</div>
</template>

<script>
import HeroSection from '@/components/sections/Hero'
import MarketplaysApplicationsSection from '@/components/sections/MarketplaysApplications'
import SponsorsSection from '@/components/sections/Sponsors'
import ServicesSection from '@/components/sections/Services'

export default {
	name: 'Home',
	components: {
		HeroSection,
		MarketplaysApplicationsSection,
		SponsorsSection,
		ServicesSection
	}
}
</script>
