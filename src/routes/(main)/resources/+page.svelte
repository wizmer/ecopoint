<script lang="ts">
	const books = [
		{
			title: 'Tyrol, Austria',
			image:
				'https://ecopointclimbing.com/wp-content/uploads/2023/02/@Klimaneutral-Klettern_Guidebook_MOCKUP-10-zu-8-819x1024.jpg',
			description:
				'Climate-friendly climbing – A guidebook on how to get to crags by bus, train and bike in Tyrol',
			authors: 'By Deniz Scheerer & Lena Müller',
			downloadLink: 'https://lenamueller.com/sustainable-climbing-guide/',
			linkText: 'Available free of charge online in German'
		},
		{
			title: 'Grenoble, France',
			image:
				'https://ecopointclimbing.com/wp-content/uploads/2023/09/10-zu-4-fur-website-fuhrer-frankreich.png',
			description:
				'Sustainable climbing in the grenoble area – Multipitch routes between 6a and 7a accessible without a car',
			authors: 'By Léane Cantin',
			downloadLink: 'https://drive.google.com/file/d/1vzmAdS11ypFDzUt8x3Vl1wQEo8uEo2VL/view?pli=1',
			linkText: 'Available free of charge online in French'
		},
		{
			title: 'Southern Frankenjura, Germany',
			image:
				'https://ecopointclimbing.com/wp-content/uploads/2024/07/c-Ecopoint-Franken-819x1024.jpeg',
			description: 'A guide for traveling by train, bus & bike to climbing in Franconia',
			authors: 'By Ecopoint Frankenjura Initiative',
			downloadLink:
				'https://www.ecopoint-frankenjura.de/_files/ugd/cae890_ef82119bb4fe456cba521a64bdb39e76.pdf',
			linkText: 'Available free of charge online in German'
		},
		{
			title: 'Baden-Württemberg, Germany',
			image:
				'https://ecopointclimbing.com/wp-content/uploads/2023/02/Rock-Rail-c-Landesverband-Baden-Wurttemberg-des-Deutschen-Alpenvereins-Ronald-Nordmann-Herbstweg-Heiko-Wiening-Bahn-Bike.jpg',
			description: 'Rock & Rail - by train and bike to the crags in Baden-Württemberg',
			authors: 'By Landesverband Baden-Württemberg DAV',
			downloadLink:
				'https://www.alpenverein.de/chameleon/public/86005ead-55bb-5f42-bd7b-de6a5b4180b0/DAV_Rock__Rail_21585.pdf',
			linkText: 'Available free of charge online in German'
		},
		{
			title: 'Austria',
			image: 'https://ecopointclimbing.com/wp-content/uploads/2023/09/cut-for-website.jpg',
			description: 'Mobility Guide Sport Climbing – Alpine Tourism and Mobility',
			authors: 'By Alpenverein Österreich',
			downloadLink:
				'https://www.alpenverein.at/portal_wAssets/img/news/2019/mobilitaetsguide-sportklettern/Mobilitaetsguide-Sportklettern.pdf',
			linkText: 'Available free of charge online in German'
		}
	];
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

		{#each books as book, index}
			<div class="book-card">
				<h3 class={index % 2 === 1 ? 'reverse-title' : ''}>{book.title}</h3>
				<div class={`book-container ${index % 2 === 1 ? 'reverse' : ''}`}>
					<a
						href={book.downloadLink}
						target="_blank"
						rel="noreferrer noopener"
						class="book-image-link"
					>
						<img
							width="222"
							height="277"
							src={book.image}
							alt="Guidebook {book.title}"
							class="book-image"
						/>
					</a>
					<div class="book-details">
						<p class="description">
							{book.description}
						</p>
						<p class="authors">{book.authors}</p>
						<p class="price">
							<a href={book.downloadLink} target="_blank" rel="noreferrer noopener">
								<strong>{book.linkText}</strong>
							</a>
						</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- <img loading="lazy" decoding="async" width="752" height="939" data-attachment-id="481" data-permalink="https://ecopointclimbing.com/resources/rock-rail-c-landesverband-baden-wurttemberg-des-deutschen-alpenvereins-ronald-nordmann-herbstweg-heiko-wiening-bahn-bike/" data-orig-file="https://ecopointclimbing.com/wp-content/uploads/2023/02/Rock-Rail-c-Landesverband-Baden-Wurttemberg-des-Deutschen-Alpenvereins-Ronald-Nordmann-Herbstweg-Heiko-Wiening-Bahn-Bike.jpg" data-orig-size="752,939" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;Lena M\u00fcller&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;1676283614&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;1&quot;}" data-image-title="Rock &amp; Rail (c) Landesverband Baden-Württemberg des Deutschen Alpenvereins, Ronald Nordmann (Herbstweg), Heiko Wiening (Bahn &amp; Bike)" data-image-description="" data-image-caption="" data-medium-file="https://ecopointclimbing.com/wp-content/uploads/2023/02/Rock-Rail-c-Landesverband-Baden-Wurttemberg-des-Deutschen-Alpenvereins-Ronald-Nordmann-Herbstweg-Heiko-Wiening-Bahn-Bike-240x300.jpg" data-large-file="https://ecopointclimbing.com/wp-content/uploads/2023/02/Rock-Rail-c-Landesverband-Baden-Wurttemberg-des-Deutschen-Alpenvereins-Ronald-Nordmann-Herbstweg-Heiko-Wiening-Bahn-Bike.jpg" src="https://ecopointclimbing.com/wp-content/uploads/2023/02/Rock-Rail-c-Landesverband-Baden-Wurttemberg-des-Deutschen-Alpenvereins-Ronald-Nordmann-Herbstweg-Heiko-Wiening-Bahn-Bike.jpg" alt="" class="wp-image-481 size-full" srcset="https://ecopointclimbing.com/wp-content/uploads/2023/02/Rock-Rail-c-Landesverband-Baden-Wurttemberg-des-Deutschen-Alpenvereins-Ronald-Nordmann-Herbstweg-Heiko-Wiening-Bahn-Bike.jpg 752w, https://ecopointclimbing.com/wp-content/uploads/2023/02/Rock-Rail-c-Landesverband-Baden-Wurttemberg-des-Deutschen-Alpenvereins-Ronald-Nordmann-Herbstweg-Heiko-Wiening-Bahn-Bike-240x300.jpg 240w" sizes="auto, (max-width: 706px) 89vw, (max-width: 767px) 82vw, 740px"> -->

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
		text-align: center;
	}

	.subtitle {
		@apply h2 my-4;
	}

	.subsection {
		margin: 2rem 0;
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

	.book-image {
		border-radius: 4px;
		max-width: 100%;
		height: auto;
	}

	.book-details {
		flex: 1;
	}

	.book-container {
		display: flex;
		flex-direction: column;
		text-align: center;
		align-items: center;
	}
	.book-details {
		margin-top: 1rem;
	}

	ul {
		list-style-position: inside;
	}

	@media (min-width: 600px) {
		h3 {
			text-align: left;
		}
		.reverse-title {
			text-align: right;
		}
		.book-container {
			flex-direction: row;
			align-items: center;
			gap: 1rem;
		}

		.book-container.reverse {
			flex-direction: row-reverse;
		}
	}
</style>
