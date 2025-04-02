<script lang="ts">
	import { AppBar, LightSwitch, popup } from '@skeletonlabs/skeleton';

	import ecopointLogo from '$lib/images/ecopoint-logo.png';
	import { routes } from '$lib/routes';

	// Drawer Handler
	function drawerOpen(): void {}
</script>

<AppBar
	background="bg-token"
	class="sticky top-0"
	padding="p-0"
	border="border-b border-t border-[#eeeeee]"
>
	<svelte:fragment slot="lead">
		<div class="flex items-center space-x-4">
			<!-- Hamburger Menu -->
			<button on:click={drawerOpen} class="btn-icon btn-icon-sm lg:!hidden">
				<i class="fa-solid fa-bars text-xl" />
			</button>
			<!-- Logo -->
			<a class="lg:!ml-0 w-[32px] lg:w-auto overflow-hidden" href="/" title="Go to Homepage">
				<img width="64px" height="64px" src={ecopointLogo} alt="Ecopoint logo" />
			</a>
		</div>
	</svelte:fragment>
	<div class="flex flex-row justify-center !space-x-2">
		<!-- Explore -->

		<a class="nav-item" href={routes.home}>Home</a>
		<div class="relative hidden lg:block nav-item">
			<!-- trigger -->
			<button
				class="btn hover:variant-soft-primary"
				use:popup={{ event: 'click', target: 'features' }}
			>
				<span class="nav-item">Ecopoint Trips</span>
				<i class="fa-solid fa-caret-down opacity-50" />
			</button>
			<div class="card p-4 w-60 bg-token z-50" data-popup="features">
				<nav class="list-nav z-50">
					<ul>
						<li>
							<a href={routes.map}>
								<span class="w-6 text-center">
									<i class="fa-solid fa-earth-europe" />
								</span>
								<span>Explore Map</span>
							</a>
						</li>
						<li>
							<a href={routes.ecopoint}>
								<span class="w-6 text-center"> <i class="fa-solid fa-magnifying-glass" /></span>
								<span>Filter</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
		<a class="nav-item" href={routes.contribute}>Contribute</a>
		<a class="nav-item" href={routes.resources}>Resources</a>
		<a class="nav-item" href={routes.inspiration}>Inspiration</a>
		<a class="nav-item" href={routes.contact}>Contact</a>
	</div>
	<svelte:fragment slot="trail">
		<div class="hidden lg:block m-8">
			<LightSwitch />
		</div>
	</svelte:fragment>
</AppBar>

<style lang="postcss">
	a {
		@apply relative hidden lg:block btn hover:variant-soft-primary;
	}

	/* .navigation-top {
		border-bottom: 2px solid #eee;
		border-top: 2px solid #eee;
	} */

	.nav-item {
		color: black;
		font-weight: 600;
		-webkit-transition: color 0.2s;
		transition: color 0.2s;
		text-decoration: none;
		@apply text-lg;
		text-transform: uppercase;
	}
</style>
