<script>
	import Ratings from '$lib/components/Ratings.svelte';

	const ecopoints = [
		{
			title: 'Climbing trip to Valle Maggia (Switzerland) by public transport',
			summary: 'Ticino is wonderful. In autumn, winter and spring...',
			sections: {
				howToGetThere:
					'From <strong>Zurich</strong> you travel by train to <strong>Bellinzona</strong> (depending on the connection via Arth-Goldau), then to <strong>Locarno</strong>, where you switch to the bus which takes you directly to <strong>Avegno</strong> in the Valle Maggia (travel time in total: 2:30 h).',
				whereToStay: `If you stay at a campground, in a hotel or hostel taking part in the project “<a href="https://www.ticino.ch/en/ticket.html" target="_blank" rel="noopener">Ticino Ticket</a>”, you can use public transport for free.<br clear="none">
<br clear="none">
In <a href="https://www.camping-piccoloparadiso.com/en/" target="_blank" rel="noopener">Avegno</a> and <a href="https://www.tcs.ch/en/camping-travelling/camping-insider/campsites/tcs-campsites/campsite-gordevio-maggiatal.php" target="_blank" rel="noopener">Gordevio</a> for example, there are <strong>campgrounds</strong> from which you can even walk to different climbing crags (e.g. to Torbeccio in ca. 20 min., or to Ponte Brolla in ca. 30 min., or take the bus to other crags in the valley). You have to look in detail on how long the travel time from your overnight stay to the different climbing areas will be.<br clear="none">
<br clear="none">
Unfortunately, the campgrounds in Ticino are closed in winter. But you could have a look at Airbnb or conventional holiday home websites (lots of conventional holiday accommodations take part in the Ticino Ticket Project) and find a place where to stay in Valle Maggia, Centovalli, Locarno, or Losone. You might find a beautiful old stone house =). Even if you only find an accommodation in Locarno, you can still quite easily go climbing in Valle Maggia (20 min. bus ride to Avegno, 45 min. to Cevio) or even in the Valle Onsernone (e.g. 50 min. bus ride to Russo).`,
				howToReachCrags: `If you stay somewhere between Locarno and the end of the Valle Maggia: The <a href="https://fartiamo.ch/wp-content/uploads/2022/12/62.315.pdf" target="_blank" rel="noopener">bus</a> from e.g. Locarno (and other stops on the line) leaves every 30 min. Depending on where you want to climb, the ride from Locarno takes between 20 min. (Avegno) to 60 min. (Linescio, switch bus in Cevio).<br clear="none">
<br clear="none">
For example, you can go to Ponte Brolla and climb in the east sector (sport climbing), where the routes are already quite polished, but still beautiful. The difficulties range between 5a to 8b. Just around the corner is the sector Castelliere with lots of easy multi-pitch climbing. Or you can go to Avegno, Torbeccio, a climbing crag with multi-pitches and three sport climbing sectors (6b-8b). You can also get on the bus to the Valle Maggia – which takes you to the different crags with all kinds of difficulties and styles, e.g. Someo, Cevio, Linescio and so on. The approach to the crags from the bus stops ranges between 10 – 30 min.`,
				tips: `Beside the crags mentioned above, there are lots of other climbing crags in the area. And in addition, there are some <strong>boulder</strong> areas: directly in Avegno you can find great, but hard boulders in all difficulties; Brione is a famous boulder area, which you can reach from Locarno in 55 min (train to Tenero, then bus to Brione. Attention: Sometimes the bus can get quite crowded, so you might want to put your crashpad in the cargo space of the bus).<br clear="none">
<br clear="none">
<strong>Supermarkets</strong> can be found in Locarno (there is only a small kiosk by the train station) and in the villages Maggia and Cevio.<br clear="none">
<br clear="none">
For <strong>rest days</strong>, I recommend hiking or spending the day at the riverside of the Maggia. In Ponte Brolla, there are beautiful cliffs for cliff jumping, if you are keen on some adrenaline kick=). And if you enjoy strolling through the old villages, you will discover that every one of them is different from the others and tells us something about the long history of people living in remote places under harsh conditions in winter and great heat in summer, tending sheep, cows, and goats on steep slopes, living on subsistence farming.<br clear="none">
<br clear="none">
<strong>Attention</strong>: Sometimes, when the weather is bad in the north of the alps or when it’s a holiday weekend, trains and buses can get pretty crowded. So, you might want to plan your train/bus ride at times of lower rush (off-peak hours).`,
				howToBook: `<strong>From Switzerland</strong>: You can book the trip via the <a href="https://www.sbb.ch/en/home.html" target="_blank" rel="noopener">SBB website</a>. It might be useful to download the SBB-App (you can pay by credit card), which might be handier than the website. In buses, you have to pay in cash.<br clear="none">
<br clear="none">
<strong>From Germany</strong>: You can book your trip to Locarno via the <a href="https://www.bahn.com/en" target="_blank" rel="noopener">DB website</a> or App. You can have a look at the Austrian train website (<a href="https://shop.oebbtickets.at/en/ticket" target="_blank" rel="noopener">ÖBB</a>) and check a combination of DB and ÖBB tickets to get a cheaper ticket. From Locarno to your destination, you can buy the ticket via the SBB website/App or at a vending machine in Locarno / from the bus driver.<br clear="none">
<br clear="none">
<strong>From Austria</strong>: You can book your trip on the <a href="https://shop.oebbtickets.at/en/ticket" target="_blank" rel="noopener">ÖBB website</a> or App. If you plan in advance, there are often pretty cheap “Sparschiene”-tickets (e.g. trip to Locarno from Innsbruck/Bregenz: EUR 30.–). From Locarno to your destination, you can buy the ticket via the SBB website/App or at a vending machine in Locarno / from the bus driver.<br clear="none">
<br clear="none">
If you stay on a campground, in a hotel or hostel taking part in the project “<a href="https://www.ticino.ch/en/ticket.html" target="_blank" rel="noopener">Ticino Ticket</a>”, you can use public transport for free after arrival.<br clear="none">
<br clear="none">
If you plan to travel more often to/in Switzerland, you might want to buy a “<a href="https://www.sbb.ch/en/travelcards-and-tickets/railpasses/half-fare-travelcard.html" target="_blank" rel="noopener">Half Fare Travelcard</a>”, which costs CHF 185, but then cuts prices by half. Attention: Plan the purchase in advance – cf. registration/ identification process etc.`,
				author: `<a href="https://www.linkedin.com/in/theresa-koim-23033617a/" target="_blank" rel="noopener">Theresa Koim</a>`,
				gallery: {
					images: [
						{
							title: 'Cover picture Theresa climbing in Valle Maggia',
							src: 'https://ecopointclimbing.com/wp-content/uploads/2023/03/Cover-picture-Theresa-climbing-in-Valle-Maggia-c-Lena-Muller-300x300.jpg',
							href: 'https://ecopointclimbing.com/ecopoint/to-ticino-switzerland-by/cover-picture-theresa-climbing-in-valle-maggia-c-lena-muller/',
							credit: '(c) Lena Müller'
						},
						{
							title: 'Look at the lago Maggiore from the train',
							src: 'https://ecopointclimbing.com/wp-content/uploads/2023/03/Look-at-the-lago-Maggiore-from-the-train-c-Theresa-Koim-300x300.jpeg',
							href: 'https://ecopointclimbing.com/ecopoint/to-ticino-switzerland-by/look-at-the-lago-maggiore-from-the-train-c-theresa-koim/',
							credit: '(c) Theresa Koim'
						},
						{
							title: 'On the way to Linescio',
							src: 'https://ecopointclimbing.com/wp-content/uploads/2023/03/On-the-way-to-Linescio-c-Theresa-Koim-300x300.jpeg',
							href: 'https://ecopointclimbing.com/ecopoint/to-ticino-switzerland-by/on-the-way-to-linescio-c-theresa-koim/',
							credit: '(c) Theresa Koim'
						},
						{
							title: 'The coziest train – FART',
							src: 'https://ecopointclimbing.com/wp-content/uploads/2023/03/The-coziest-train-FART-c-Theresa-Koim-300x300.jpg',
							href: 'https://ecopointclimbing.com/ecopoint/to-ticino-switzerland-by/the-coziest-train-fart-c-theresa-koim/',
							credit: '(c) Theresa Koim'
						},
						{
							title: 'Valle Maggia',
							src: 'https://ecopointclimbing.com/wp-content/uploads/2023/03/Valle-Maggia-c-Lena-Muller-300x300.jpg',
							href: 'https://ecopointclimbing.com/ecopoint/to-ticino-switzerland-by/valle-maggia-c-lena-muller/',
							credit: '(c) Lena Müller'
						},
						{
							title: 'Approaching the crag via the Maggia river',
							src: 'https://ecopointclimbing.com/wp-content/uploads/2023/03/Approaching-the-crag-via-the-Maggia-river-c-Lena-Muller-300x300.jpg',
							href: 'https://ecopointclimbing.com/ecopoint/to-ticino-switzerland-by/approaching-the-crag-via-the-maggia-river-c-lena-muller/',
							credit: '(c) Lena Müller'
						}
					]
				}
			}
		}
	];

	const ecopoint = ecopoints[0];
</script>

<div class="wrap grid grid-cols-1 xl:grid-cols-3 gap-8">
	<aside>
		<section>
			<div>
				<h2 class="h2">Ratings</h2>
				<Ratings />
				<h2 class="h2">Ecopoint Facts</h2>
				<div
					class="inside ecopoint-facts ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content ui-accordion-content-active"
					style="height: 256.4px;"
					id="ui-id-2"
					aria-labelledby="ui-id-1"
					role="tabpanel"
					aria-hidden="false"
				>
					<h3>Approach</h3>
					<p>
						<span class="ecopoint-ecopointType">Train</span><span class="ecopoint-ecopointType"
							>Bus</span
						>
					</p>

					<h3>Nearest Major Railway Station</h3>
					<p><span class="ecopoint-ecopointType">Locarno</span></p>

					<h3>Accomodation</h3>
					<p>
						<span class="ecopoint-ecopointType">Camping</span><span class="ecopoint-ecopointType"
							>Apartment</span
						>
					</p>
				</div>
			</div>

			<div>
				<h2 class="h2">Climbing Facts</h2>
				<div>
					<h3>Climbing Type</h3>
					<div class="flex flex-wrap gap-2">
						{#each ['Trad Climbing', 'Sport Climbing', 'Bouldering', 'Multipitch'] as type}
							<span class="ecopoint-climbingType w-fit">{type}</span>
						{/each}
					</div>

					<h3>Difficulty</h3>
					<p><span class="climbing-difficulty">3b-8c+</span></p>

					<h3>Rock</h3>
					<p><span class="climbing-rock">Gneiss</span></p>

					<h3>Best Time</h3>
					<p class="climbing-bestTime">
						<span title="January" class="month bestMonth">J</span><span
							title="February"
							class="month bestMonth">F</span
						><span title="March" class="month bestMonth">M</span><span
							title="April"
							class="month bestMonth">A</span
						><span title="May" class="month bestMonth">M</span><span title="June" class="month"
							>J</span
						><span title="July" class="month">J</span><span title="August" class="month">A</span
						><span title="September" class="month">S</span><span
							title="October"
							class="month bestMonth">O</span
						><span title="November" class="month bestMonth">N</span><span
							title="December"
							class="month bestMonth">D</span
						>
					</p>

					<h3>Topo</h3>
					<p>
						<a
							title="Click to open topo..."
							href="https://www.thecrag.com/en/climbing/switzerland/alpen/tessin/valle-maggia"
							target="_blank">Click to open...</a
						>
					</p>
				</div>
			</div>
		</section>
	</aside>

	<main class="xl:col-span-2 xl:order-first">
		<h2 class="h2">{ecopoint.title}</h2>
		<article
			class="post-717 ecopoint type-ecopoint status-publish has-post-thumbnail hentry ecopoint-country-switzerland"
			id="post-717"
		>
			<div class="entry-inner thin">
				<div class="entry-content">
					<p>{@html ecopoint.summary}</p>

					<section>
						<h2 class="h2">How to get there</h2>
						<p>{@html ecopoint.sections.howToGetThere}</p>
					</section>

					<section>
						<h2 class="h2">Where to stay</h2>
						<p>{@html ecopoint.sections.whereToStay}</p>
					</section>

					<section>
						<h2 class="h2">How to reach the crag(s)</h2>
						<p>{@html ecopoint.sections.howToReachCrags}</p>
					</section>

					<section>
						<h2 class="h2">Tips</h2>
						<p>{@html ecopoint.sections.tips}</p>
					</section>

					<section>
						<h2 class="h2">How to book the trip</h2>
						<p>
							{@html ecopoint.sections.howToBook}
						</p>
					</section>

					<section>
						<h2 class="h2">About the author</h2>
						<p>
							<a href={ecopoint.sections.author.link} target="_blank" rel="noopener">
								{@html ecopoint.sections.author}
							</a>
						</p>
					</section>

					<section>
						<h2 class="h2">Photo gallery</h2>
						<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
							{#each ecopoint.sections.gallery.images as image}
								<figure
									class="gallery-item"
									role="button"
									tabindex="0"
									aria-label="Open image in full-screen."
								>
									<div class="gallery-icon landscape">
										<a href={image.href}>
											<img
												width="300"
												height="300"
												src={image.src}
												class="attachment-thumbnail size-thumbnail"
												alt={image.title}
												decoding="async"
											/>
										</a>
									</div>
								</figure>
							{/each}
						</div>
					</section>
				</div>
			</div>
		</article>
	</main>
</div>

<style>
	.climbing-difficulty,
	.climbing-rock,
	.ecopoint-climbingType {
		margin-right: 0.5em;
		background: #135199;
		border-radius: 1em;
		padding: 0.1em 0.7em;
		font-size: small;
		color: white;
		white-space: nowrap;
	}

	.ecopoint-ecopointType {
		margin-right: 0.5em;
		background: #c8d400;
		width: 100%;
		border-radius: 1em;
		padding: 0.1em 0.7em;
		font-size: small;
		color: white;
		white-space: nowrap;
	}

	.climbing-bestTime .month {
		display: inline-block;
		width: 1.5em;
		text-align: center;
		border: solid #135199 1px;
		color: gray;
	}

	.climbing-bestTime .bestMonth {
		color: white;
		background: #135199;
		border: solid #135199 1px;
	}

	.gallery-item {
		margin: auto;
	}

	h2 {
		margin-top: 1rem;
		margin-bottom: 1rem;
	}
	@media (min-width: 640px) {
		h2 {
			margin-top: 3rem;
		}
	}
</style>
