<template>
	<div class="home">
		<hero-section />
		<marketplays-applications-section />
		<sponsors-section />
	</div>
</template>

<script>
import HeroSection from '@/components/sections/Hero'
import MarketplaysApplicationsSection from '@/components/sections/MarketplaysApplications'
import SponsorsSection from '@/components/sections/Sponsors'

export default {
	name: 'Home',
	components: {
		HeroSection,
		MarketplaysApplicationsSection,
		SponsorsSection
	}
}
</script>
