<script lang="ts">
	const urls = [
		'https://www.youtube.com/embed/Hj_uTFNNp6k?si=p-vlYrn7uM7gXjS-',
		'https://player.vimeo.com/video/690609653?h=2844c4f119',
		'https://www.youtube.com/embed/Fq4Bs48_xjM',
		'https://www.youtube.com/embed/JRkFRXryJE4',
		'https://www.youtube.com/embed/4kM8Tsc8818',
		'https://www.youtube.com/embed/qDNN0uiT5Hs',
		'https://www.youtube.com/embed/Nym0AnSBvr4',
		'https://www.youtube.com/embed/yEB0qp4zLhU',
		'https://www.youtube.com/embed/OTAXYSxlaMA',
		'https://www.ardmediathek.de/embed/Y3JpZDovL2JyLmRlL2Jyb2FkY2FzdFNjaGVkdWxlU2xvdC80MDM3NDM5OTM4MTNfRjIwMjNXTzAwODE1NUEwL3NlY3Rpb24vNjMxNjIzNWQtOTBjMy00NGIxLWFhODEtZGE3YzYzMWE2MzBl'
	];

	const scaling = 0.8;
	const width = 560 * scaling;
	const height = 315 * scaling;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="wrap">
	<div id="primary" class="content-area">
		<main id="main" class="site-main">
			<section>
				<h1 class="h1">Inspiration</h1>
				<p class=" my-8 text-lg">Get insipired by Ecopoint Films</p>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
					{#each urls as url}
						<iframe
							{width}
							{height}
							src={url}
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerpolicy="strict-origin-when-cross-origin"
							allowfullscreen
						/>
					{/each}
				</div>
			</section>
		</main>
	</div>
</div>

<style>
	section div iframe {
		background-color: #f3f4f6;
	}
</style>
