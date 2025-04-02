<script lang="ts">
	import { popup } from '@skeletonlabs/skeleton';

	import { base } from '$app/paths';
	import ecopointLogo from '$lib/images/ecopoint-logo.png';
</script>

<div class="navigation-top">
	<nav>
		<!-- trigger -->
		<button
			class="btn hover:variant-soft-primary"
			use:popup={{ event: 'click', target: 'theme', closeQuery: 'a[href]' }}
		>
			<i class="fa-solid fa-palette text-lg md:!hidden" />
			<span class="hidden md:inline-block">Theme</span>
			<i class="fa-solid fa-caret-down opacity-50" />
		</button>
		<!-- popup -->
		<div class="card p-4 w-60 shadow-xl z-500" data-popup="theme">
			<section class="flex justify-between items-center">
				<h6 class="h6">Mode</h6>
			</section>
			<hr />
		</div>
		<a href={`${base}/`}>
			<img src={ecopointLogo} alt="Ecopoint logo" />
		</a>
		<a href={`${base}/`}>Home</a>
		<a href={`${base}/ecopoint-trips`}>Ecopoint Trips</a>
		<a href={`${base}/contribute`}>Contribute</a>
		<a href={`${base}/resources`}>Resources</a>
		<a href={`${base}/inspiration`}>Inspiration</a>
		<a href={`${base}/contact`}>Contact</a>
	</nav>
</div>

<style>
	nav {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	nav a {
		padding: 14px 16px;
		text-decoration: none;
		font-size: 17px;
	}

	nav a img {
		height: 3em;
		margin-right: 8px;
	}

	.navigation-top {
		background: #fff;
		border-bottom: 1px solid #eee;
		border-top: 1px solid #eee;
		font-size: 16px;
		font-size: 1rem;

		position: sticky;
		top: 0;
		overflow: hidden;
	}

	.navigation-top a {
		color: #222;
		font-weight: 600;
		-webkit-transition: color 0.2s;
		transition: color 0.2s;
	}

	.navigation-top .current-menu-item > a,
	.navigation-top .current_page_item > a {
		color: #767676;
	}
</style>
