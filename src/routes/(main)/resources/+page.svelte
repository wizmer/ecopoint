<script lang="ts">
</script>

<section class="wrap">
	<h1 class="h1">Resources</h1>

	<div class="subsection tips-section">
		<h2 class="subtitle">Tips & Tricks</h2>
		<ul class="list-disc">
			<li>
				<a class="anchor" href="https://www.komoot.com">Komoot</a> or
				<a href="https://www.bikemap.net">Bikemap</a>
				for planning bike routes
			</li>
			<li>
				<a href="https://www.warmshowers.org">Warm showers</a> for reciprocal hospitality for cyclists
				and hosts
			</li>
			<li>
				<a href="http://felsinfo.alpenverein.de">DAV Felsinfo</a> for planning climbing with public transport
				in Germany
			</li>
			<li>
				<a href="https://www.ecopoint-frankenjura.de">Ecopoint Frankenjura</a> for sustainable climbing
				in Frankenjura, Germany
			</li>
			<li>
				<a href="https://www.bahn-zum-berg.at/sportart/klettern/?d=5">Bahn zum Berg</a> for sustainable
				climbing day trips in Austria
			</li>
		</ul>
	</div>

	<div class="subsection">
		<h2 class="subtitle">Ecopoint Guidebooks</h2>
		<p class="mb-4">Here you find local guidbooks on how crags can be reached by fair means:</p>

		{#each [1, 2, 3, 4] as i, index}
			<div class="book-card">
				<h3 class={index % 2 === 1 ? 'reverse-title' : ''}>Tyrol, Austria</h3>
				<div class={`book-container ${index % 2 === 1 ? 'reverse' : ''}`}>
					<a
						href="https://lenamueller.com/sustainable-climbing-guide/"
						target="_blank"
						rel="noreferrer noopener"
						class="book-image-link"
					>
						<img
							width="222"
							height="277"
							src="https://ecopointclimbing.com/wp-content/uploads/2023/02/@Klimaneutral-Klettern_Guidebook_MOCKUP-10-zu-8.jpg"
							alt="Guidebook Tyrol"
							class="book-image"
						/>
					</a>
					<div class="book-details">
						<p class="description">
							Climate-friendly climbing - A guidebook on how to get to crags by bus, train and bike
							in Tyrol
						</p>
						<p class="authors">By Deniz Scheerer & Lena Müller</p>
						<p class="price">
							<strong>Available free of charge online in German here.</strong>
						</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style lang="postcss">
	h3 {
		color: black;
		font-weight: 800;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		font-size: 0.8125rem;
		clear: both;
		line-height: 1.4;
		margin: 0 0 0.75em;
		padding: 1.5em 0 0;
	}

	.subtitle {
		@apply h2 my-4;
	}

	.subsection {
		margin: 2rem 0;
	}
	.reverse-title {
		text-align: right;
	}
	.book-card {
		background: #fff;
		padding: 1.5rem;
		border-radius: 8px;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
		margin-bottom: 2rem;
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	.book-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	.book-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1rem;
	}

	.book-container.reverse {
		flex-direction: row-reverse;
	}

	.book-image {
		border-radius: 4px;
		max-width: 100%;
		height: auto;
	}

	.book-details {
		flex: 1;
	}

	@media (max-width: 600px) {
		.book-container {
			flex-direction: column;
			text-align: center;
		}
		.book-details {
			margin-top: 1rem;
		}
	}

	ul {
		list-style-position: inside;
	}
</style>
