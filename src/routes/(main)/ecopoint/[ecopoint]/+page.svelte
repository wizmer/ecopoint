<script lang="ts">
	import { page } from '$app/stores';
	import Ratings from '$lib/components/Ratings.svelte';
	import { ecopoints } from '$lib/ecopoints';
	import Tiptap from '$lib/Tiptap.svelte';
	import type { Ecopoint } from '$lib/types/ecopoint';

	const ecopoint = ecopoints.find((ecopoint) => {
		return ecopoint.slug === $page.params.ecopoint;
	}) as Ecopoint;

	let isEditable = false;
</script>

<button class="btn btn-sm variant-ringed-primary" on:click={() => (isEditable = !isEditable)}
	>Suggest a modification</button
>
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
					<Tiptap {isEditable} bind:content={ecopoint.summary} />
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
