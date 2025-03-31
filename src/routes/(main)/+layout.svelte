<script lang="ts">
	import Header from '../Header.svelte';

	import { base } from '$app/paths';
	import { page } from '$app/state';
	import ecopointLogo from '$lib/images/ecopoint-logo.png';
	import logoAvdstiftung from '$lib/images/logo-avdstiftung.png';
	import logoDav from '$lib/images/logo-dav.png';
	import logoIgklettern from '$lib/images/logo-igklettern.png';
	import logoOrtovox from '$lib/images/logo-ortovox.png';
	import logoPowerbar from '$lib/images/logo-pow.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="app">
	<Header />

	<main>
		<div class="navigation-top">
			<nav>
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
		{#if page.url.pathname === `${base}/ecopoint-trips`}
			<div class="single-featured-image-header">
				<img
					width="1920"
					height="1200"
					src="https://ecopointclimbing.com/wp-content/uploads/2023/03/Valle-Maggia-c-Lena-Muller-title-1920x1200.jpg"
					class="attachment-twentyseventeen-featured-image size-twentyseventeen-featured-image wp-post-image"
					alt=""
					decoding="async"
					fetchpriority="high"
					sizes="100vw"
					data-attachment-id="928"
					data-permalink="https://ecopointclimbing.com/ecopoint/to-ticino-switzerland-by/valle-maggia-c-lena-muller-title/"
					data-orig-file="https://ecopointclimbing.com/wp-content/uploads/2023/03/Valle-Maggia-c-Lena-Muller-title.jpg"
					data-orig-size="1920,1280"
					data-comments-opened="1"
					data-image-title="Valle Maggia (c) Lena Müller title"
					data-image-description=""
					data-image-caption=""
					data-medium-file="https://ecopointclimbing.com/wp-content/uploads/2023/03/Valle-Maggia-c-Lena-Muller-title-300x200.jpg"
					data-large-file="https://ecopointclimbing.com/wp-content/uploads/2023/03/Valle-Maggia-c-Lena-Muller-title-1024x683.jpg"
				/>
			</div>
		{/if}
		<div class="site-content-contain">
			<div id="content" class="site-content">
				<slot />
			</div>
		</div>

		<footer>
			<div class="flex w-full flex-row justify-around">
				<img class="h-[70px] w-[70px]" src={logoDav} alt="Sponsor DAV" />
				<img class="h-[70px] w-[140px]" src={logoAvdstiftung} alt="Sponsor Avdstiftung" />
				<img class="h-[70px] w-[70px]" src={logoIgklettern} alt="Sponsor Igklettern" />
				<img class="h-[70px] w-[70px]" src={logoOrtovox} alt="Sponsor Ortovox" />
				<img class="h-[70px] w-[70px]" src={logoPowerbar} alt="Sponsor Powerbar" />
			</div>
		</footer>
	</main>
</div>

<style>
	.app {
		/* background-image: url('$lib/images/cropped-cover-picture-option-C-Arthur-Ternant-1.jpg'); */
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	/* main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1px;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	} */

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		margin-top: 60px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}

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
