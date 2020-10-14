<template>
	<v-app>
		<v-responsive 
			width="1300px" 
			min-height="100px"
			class="mx-auto">
			<v-toolbar 
				flat
				class="py-3"
			>
				<v-app-bar-nav-icon class="d-sm-none"></v-app-bar-nav-icon>
				<v-toolbar-title>
					<a href="/">
						<v-img
							alt="BMI Logo"
							class="shrink mr-2"
							contain
							src="../src/assets/logo.png"
							width="345px"
						/>
					</a>
				</v-toolbar-title>
						<v-spacer></v-spacer>
				<v-row align="center"> 
					<v-col lg="5">
						<v-text-field
							clear-icon="mdi-magnify"
							class="rounded mt-6"
							dense
							outlined
							placeholder="Search"
						>
							<template slot="append">
								<v-icon color="#BE1E2D">mdi-magnify</v-icon>
							</template>
						</v-text-field>
					</v-col>
					<v-col 
						class="text-right"
						lg="7"
					>
						<v-btn 
							class="topmenu-link text-capitalize"
							:key="item.name"
							:to="item.link"
							text
							v-for="item in topMenu"
							v-html="item.label"
						></v-btn>
						<v-btn class="ml-2" color="primary">
							Sign Up
						</v-btn>
					</v-col>
				</v-row>
			</v-toolbar>
		</v-responsive>

		<v-main>
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

<script>
export default {
	name: 'App',
	data: () => ({
		topMenu: [
			{ name: 'how-it-works', label: 'How it works' },
			{ name: 'solutions', label: 'Solutions' },
			{ name: 'login', label: 'Login', link: 'login' },
		]
	}),
};
</script>