<template>
    <footer id="footer">
        <v-responsive
            class="no-flex mx-auto"
            :max-width="containerSize"
        >
            adsdas
        </v-responsive>
    </footer>
</template>
<script>
export default {
    name: 'footer-layout',
	data: () => ({
		topMenu: [
			{ name: 'how-it-works', label: 'How it works' },
			{ name: 'solutions', label: 'Solutions' },
			{ name: 'login', label: 'Login', link: 'login' },
		]
	}),
}
</script>
