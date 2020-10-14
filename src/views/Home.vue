<template>
	<div class="home">
		<hero-section />
		<marketplays-applications-section />
	</div>
</template>

<script>
import HeroSection from '@/components/sections/Hero'
import MarketplaysApplicationsSection from '@/components/sections/MarketplaysApplications'

export default {
	name: 'Home',
	components: {
		HeroSection,
		MarketplaysApplicationsSection,
	}
}
</script>
