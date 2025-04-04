<script lang="ts">
	import Tiptap from '$lib/Tiptap.svelte';

	const grades = [
		'3a',
		'3b',
		'3c',
		'4a',
		'4b',
		'4c',
		'5a',
		'5b',
		'5c',
		'6a',
		'6b',
		'6c',
		'7a',
		'7b',
		'7c',
		'8a',
		'8b',
		'8c'
	];
	const formPlaceholders = {
		title: {
			category: {
				label: 'Climbing category',
				options: [
					{ value: 'climbing', label: 'Climbing' },
					{ value: 'bouldering', label: 'Bouldering' },
					{ value: 'tradclimbing', label: 'Trad climbing' },
					{ value: 'sportclimbing', label: 'Sport climbing' },
					{ value: 'multi-pitch', label: 'Multi-pitch' }
				]
			},
			area: 'Climbing area',
			transport: {
				label: 'Transport method',
				options: [
					{ value: 'train', label: 'Train' },
					{ value: 'bus', label: 'Bus' },
					{ value: 'bike', label: 'Bike' },
					{ value: 'public transport', label: 'Public Transport' },
					{ value: 'boat', label: 'Boat' }
				]
			}
		},
		sections: {
			tripSummary:
				'Describe the area, or the crag, or why you like the area/crag. Just what feels right for you! Please use no more than ~100 words.',
			howToGetThere: `Describe how you got from your starting point to your end point (=place where you stayed overnight). 
Include info about the train or bus journey: which train(s), train durations, where to change trains, total journey duration.

If you travelled also by bike, please provide information about bike transport in the train. For the cycle path you can either include information in your text: route, duration, hm, kilometres cycled, condition of the cycle path (busy road or cycle path?), which bike you used.
Or even better, if you have a komoot account, you can mention the rought details in the text and for the precise details share the bike route by sending me your journey. Please make the journey visible for everyone and name the journey in english.`,
			whereToStay: `Add information about your accomodation (incl. website if possible).
If you know of other accomodations or accomodation types, please add this information here as well. (e.g. if you have stayed in a campsite but you know there are also other campsites or also apartments available nearby).`,
			howToReachCrags:
				'Starting from your accommodation, describe how long it takes and how to get there (bus, walking, bike, train).',
			tips: 'Information about the nearest supermarket, restday activities (how to get there & duration), etc.',
			howToBookTrip: 'Websites and info on how to book the public transport.'
		},
		links: {
			publicTransport: 'Add public transport links here...',
			komoot:
				"If you have a Komoot account, you can embed your journey here. Please ensure it's visible for everyone and in English.",
			guidebook: 'Guidebook URL or nearest place to buy it',
			misc: 'Add any miscellaneous links here...'
		},
		author: 'Your name and/or a link to your public URL (social network, personal website, etc.)',
		ecopointFacts: {
			climbingTypes: {
				label: 'Climbing Type(s)',
				options: [
					{ value: 'trad', label: 'Trad' },
					{ value: 'sport', label: 'Sport' },
					{ value: 'bouldering', label: 'Bouldering' },
					{ value: 'multipitch', label: 'Multi-pitch' },
					{ value: 'bigwall', label: 'Big Wall' },
					{ value: 'ice', label: 'Ice Climbing' },
					{ value: 'mixed', label: 'Mixed Climbing' },
					{ value: 'dws', label: 'Deep Water Soloing' }
				]
			},
			approachTypes: {
				label: 'Approach Type(s)',
				options: [
					{ value: 'train', label: 'Train' },
					{ value: 'bus', label: 'Bus' },
					{ value: 'bike', label: 'Bike' },
					{ value: 'walk', label: 'Walk (30+ min)' }
				]
			},
			accommodationTypes: {
				label: 'Accommodation Type(s)',
				options: [
					{ value: 'camping', label: 'Camping' },
					{ value: 'apartment', label: 'Apartment' },
					{ value: 'hostel', label: 'Hostel' },
					{ value: 'hotel', label: 'Hotel' },
					{ value: 'lodge', label: 'Mountain Lodge' }
				]
			},
			rockTypes: {
				label: 'Rock Type(s)',
				options: [
					{ value: 'limestone', label: 'Limestone' },
					{ value: 'granite', label: 'Granite' },
					{ value: 'gneiss', label: 'Gneiss' },
					{ value: 'sandstone', label: 'Sandstone' },
					{ value: 'basalt', label: 'Basalt' },
					{ value: 'conglomerat', label: 'Conglomerat' },
					{ value: 'dolomit', label: 'Dolomit' }
				]
			},
			months: {
				label: 'Best Months to Climb',
				options: [
					{ value: 'jan', label: 'Jan' },
					{ value: 'feb', label: 'Feb' },
					{ value: 'mar', label: 'Mar' },
					{ value: 'apr', label: 'Apr' },
					{ value: 'may', label: 'May' },
					{ value: 'jun', label: 'Jun' },
					{ value: 'jul', label: 'Jul' },
					{ value: 'aug', label: 'Aug' },
					{ value: 'sep', label: 'Sep' },
					{ value: 'oct', label: 'Oct' },
					{ value: 'nov', label: 'Nov' },
					{ value: 'dec', label: 'Dec' }
				]
			}
		}
	};
</script>

<div class="wrap">
	<section>
		<h1 class="h1 mb-10">Contribute</h1>

		<form class="flex flex-col items-start gap-4">
			<div class="card">
				<fieldset>
					<legend class="font-semibold">Ecopoint Facts</legend>

					<label class="label mt-2">
						<div>Nearest Major Railway Station</div>
						<input
							type="text"
							class="input"
							placeholder="Please name the last biggest railway station close to the crag"
						/>
					</label>

					<label class="label mt-2">
						<div>{formPlaceholders.ecopointFacts.climbingTypes.label}</div>
						<div class="flex flex-wrap gap-2">
							{#each formPlaceholders.ecopointFacts.climbingTypes.options as option}
								<label class="chip variant-soft">
									<input type="checkbox" value={option.value} class="checkbox" />
									<span>{option.label}</span>
								</label>
							{/each}
						</div>
					</label>

					<label class="label mt-2">
						<div>{formPlaceholders.ecopointFacts.approachTypes.label}</div>
						<div class="flex flex-wrap gap-2">
							{#each formPlaceholders.ecopointFacts.approachTypes.options as option}
								<label class="chip variant-soft">
									<input type="checkbox" value={option.value} class="checkbox" />
									<span>{option.label}</span>
								</label>
							{/each}
						</div>
					</label>

					<label class="label mt-2">
						<div>Travel Duration</div>
						<input
							type="text"
							class="input"
							placeholder="Time duration from starting to end point"
						/>
					</label>

					<label class="label mt-2">
						<div>{formPlaceholders.ecopointFacts.accommodationTypes.label}</div>
						<div class="flex flex-wrap gap-2">
							{#each formPlaceholders.ecopointFacts.accommodationTypes.options as option}
								<label class="chip variant-soft">
									<input type="checkbox" value={option.value} class="checkbox" />
									<span>{option.label}</span>
								</label>
							{/each}
						</div>
					</label>

					<label class="label mt-2">
						<div>{formPlaceholders.ecopointFacts.rockTypes.label}</div>
						<div class="flex flex-wrap gap-2">
							{#each formPlaceholders.ecopointFacts.rockTypes.options as option}
								<label class="chip variant-soft">
									<input type="checkbox" value={option.value} class="checkbox" />
									<span>{option.label}</span>
								</label>
							{/each}
						</div>
					</label>

					<label class="label mt-2">
						<div>{formPlaceholders.ecopointFacts.months.label}</div>
						<div class="flex flex-wrap gap-2">
							{#each formPlaceholders.ecopointFacts.months.options as option}
								<label class="chip variant-soft">
									<input type="checkbox" value={option.value} class="checkbox" />
									<span>{option.label}</span>
								</label>
							{/each}
						</div>
					</label>

					<label class="label mt-2">
						<div>TheCrag.com Link</div>
						<input
							type="url"
							class="input"
							placeholder="Website link to the area on www.thecrag.com"
						/>
					</label>

					<label class="label mt-2">
						<div>Difficulty Range</div>
						<div class="flex items-center gap-2">
							<select id="difficultyMin" class="input" aria-label="Minimum difficulty grade">
								<option disabled selected>Min grade</option>
								{#each grades as option}
									<option value={option}>{option}</option>
								{/each}
							</select>
							<span>to</span>
							<select id="difficultyMax" class="input" aria-label="Maximum difficulty grade">
								<option disabled selected>Max grade</option>
								{#each grades as option}
									<option value={option}>{option}</option>
								{/each}
							</select>
						</div>
					</label>
				</fieldset>
			</div>

			<div class="card">
				<fieldset>
					<legend class="font-semibold">Trip Details</legend>
					<label class="label mt-2">
						<div>Title</div>
						<div class="flex flex-wrap items-center gap-2">
							<select
								id="climbingCategory"
								class="input"
								aria-label={formPlaceholders.title.category.label}
							>
								<option disabled selected>{formPlaceholders.title.category.label}</option>
								{#each formPlaceholders.title.category.options as option}
									<option value={option.value}>{option.label}</option>
								{/each}
							</select>
							<span class="text-nowrap">trip to</span>
							<input
								id="climbingArea"
								class="input"
								type="text"
								placeholder={formPlaceholders.title.area}
								aria-label="Climbing area"
							/>
							<span>by</span>
							<select
								id="transportMethod"
								class="input"
								aria-label={formPlaceholders.title.transport.label}
							>
								<option disabled selected>{formPlaceholders.title.transport.label}</option>
								{#each formPlaceholders.title.transport.options as option}
									<option value={option.value}>{option.label}</option>
								{/each}
							</select>
						</div>
					</label>
					<label class="label mt-2" for="tripSummary">
						<div>Summary</div>
						<Tiptap id="tripSummary" placeholder={formPlaceholders.sections.tripSummary} />
					</label>
					<label class="label mt-2" for="howToGetThere">
						<div>How to get there</div>
						<Tiptap
							id="howToGetThere"
							rows={10}
							placeholder={formPlaceholders.sections.howToGetThere}
						/>
					</label>
					<label class="label mt-2" for="whereToStay">
						<div>Where to stay</div>
						<Tiptap id="whereToStay" placeholder={formPlaceholders.sections.whereToStay} />
					</label>
					<label class="label mt-2" for="howToReachCrags">
						<div>How to reach the crag(s)</div>
						<Tiptap id="howToReachCrags" placeholder={formPlaceholders.sections.howToReachCrags} />
					</label>
					<label class="label mt-2" for="tips">
						<div>Tips</div>
						<Tiptap id="tips" placeholder={formPlaceholders.sections.tips} />
					</label>
					<label class="label mt-2" for="howToBookTrip">
						<div>How to book the trip</div>
						<Tiptap id="howToBookTrip" placeholder={formPlaceholders.sections.howToBookTrip} />
					</label>
				</fieldset>
			</div>

			<div class="card">
				<fieldset>
					<legend class="font-semibold">Links</legend>
					<label class="label mt-2" for="publicTransportLinks">
						<div>Public Transport Links</div>
						<textarea
							id="publicTransportLinks"
							class="input"
							placeholder={formPlaceholders.links.publicTransport}
						/>
					</label>
					<label class="label mt-2" for="gpxUpload">
						<div>GPX Upload</div>
						<input id="gpxUpload" class="input" type="file" accept=".gpx" multiple />
					</label>

					<label class="label mt-2" for="komoot">
						<div>Komoot</div>
						<Tiptap id="komoot" placeholder={formPlaceholders.links.komoot} />
					</label>
					<label class="label mt-2" for="gpxUpload">
						<div>Guidebook</div>
						<input
							id="guidebook"
							class="input"
							type="text"
							placeholder={formPlaceholders.links.guidebook}
						/>
					</label>
					<label class="label mt-2" for="miscLinks">
						<div>Misc. Links</div>
						<textarea id="miscLinks" class="input" placeholder={formPlaceholders.links.misc} />
					</label>
				</fieldset>
			</div>

			<div class="card">
				<fieldset>
					<legend class="font-semibold">Author Bio</legend>
					<label class="label mt-2" for="aboutAuthor">
						<div>About the author (optional)</div>
						<Tiptap id="aboutAuthor" placeholder={formPlaceholders.author} />
					</label>
				</fieldset>
			</div>

			<button type="submit" class="btn btn-xl variant-filled-primary self-center mb-10"
				>Submit</button
			>
		</form>
	</section>
</div>

<style lang="postcss">
	.card {
		@apply p-4 w-full bg-secondary-100-800-token;
	}

	.card:nth-child(even) {
		@apply bg-warning-100-800-token;
	}

	fieldset {
		@apply p-4 mt-4;
	}

	/* Improve label text appearance only to the first div */
	.label > div:first-of-type {
		@apply font-bold text-lg;
	}

	legend {
		@apply font-semibold text-xl mb-2;
	}
</style>
