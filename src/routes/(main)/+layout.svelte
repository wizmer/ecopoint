<script lang="ts">
	import Header from '../Header.svelte';

	import { base } from '$app/paths';
	import { page } from '$app/state';
	import NavBar from '$lib/components/NavBar.svelte';
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

	<NavBar />

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
	<main>
		<div class="site-content-contain">
			<div id="content" class="site-content">
				<slot />
			</div>
		</div>
	</main>

	<hr class="border-t border-black my-4" />

	<footer class="wrap">
		<div class="flex w-full flex-row flex-wrap justify-around">
			<img class="h-[70px] object-cover" src={logoDav} alt="Sponsor DAV" />
			<img class="h-[70px] object-cover" src={logoAvdstiftung} alt="Sponsor Avdstiftung" />
			<img class="h-[70px] object-cover" src={logoIgklettern} alt="Sponsor Igklettern" />
			<img class="h-[70px] object-cover" src={logoOrtovox} alt="Sponsor Ortovox" />
			<img class="h-[70px] object-cover" src={logoPowerbar} alt="Sponsor Powerbar" />
		</div>
	</footer>
</div>

<style>
	.app {
		/* background-image: url('$lib/images/cropped-cover-picture-option-C-Arthur-Ternant-1.jpg'); */
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		margin-top: 60px;
		margin-bottom: 60px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
