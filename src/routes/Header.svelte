<script lang="ts">
	import { base } from '$app/paths';
</script>

<header>
	<a href={`${base}/`} rel="home">Ecopoint Climbing</a>
	<p>Community platform for information and inspiration about sustainable climbing</p>
</header>

<style>
	header {
		flex-direction: column;
		text-align: center;
		padding: 3em 0;
		height: 165px;
		width: 100%;
		background-image: url('$lib/images/banner-1.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-color: #ffffff;
		background-position: center;
		text-decoration: none;
		transition: opacity 0.2s;
		text-shadow: 0.1em 0.1em 0.2em white !important;
	}
	header a {
		color: black !important;

		opacity: 1;

		background-color: transparent;

		font-size: 2.25rem;

		font-weight: 800;
		line-height: 1.25;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	header p {
		line-height: 1.5;
		font-weight: 400;
		box-sizing: border-box;
	}

	a {
		box-shadow: none;
	}

	a:hover {
		color: #767676;
	}
</style>
