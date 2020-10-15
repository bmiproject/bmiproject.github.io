<template>
	<v-app>
		<header style="box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15)">
			<v-responsive 
				width="1300px" 
				height="100px"
				class="mx-auto no-flex"
			>
				<v-toolbar 
					flat
					class="py-5"
				>
					<v-app-bar-nav-icon class="d-sm-none"></v-app-bar-nav-icon>
					<v-toolbar-title>
						<a href="/">
							<v-img
								alt="BMI Logo"
								contain
								src="../src/assets/logo.png"
								width="345px"
							/>
						</a>
					</v-toolbar-title>
					<v-spacer></v-spacer>
					<v-row class="my-auto" no-gutters> 
						<v-col lg="5">
							<v-text-field
								clear-icon="mdi-magnify"
								class="rounded"
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
		</header>

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
<style>
	body, p { color: #555555; font-size: 16px; }
	h1, h2, h3, h4, h5, h6 { font-family: Roboto; font-style: normal; font-weight: 300; letter-spacing: -0.01em; }
	h1 { font-size: 60px; line-height: 70px; }
	h2 { font-size: 48px; line-height: 56px; }
	h3 { font-size: 36px; line-height: 42px; }
	h4 { font-size: 30px; line-height: 35px; }
	h5 { font-size: 24px; line-height: 28px; }
	h6 { font-size: 18px; line-height: 21px; }
	.no-flex { flex: none !important }
</style>