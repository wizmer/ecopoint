<script lang="ts">
	import Tiptap from '$lib/Tiptap.svelte';

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
		author: 'Your name and/or a link to your public URL (social network, personal website, etc.)'
	};
</script>

<div class="wrap">
	<section>
		<h1 class="h1 mb-10">Contribute</h1>

		<form class="flex flex-col items-start gap-4">
			<!-- <fieldset>
				<legend class="font-semibold">Contributor Info</legend>
				<label class="label mt-2" for="email">
					<span>Email</span>
					<input id="email" class="input" type="email" aria-required="true" />
				</label>
				<div class="flex flex-row flex-wrap gap-2 mt-2">
					<label class="label grow" for="firstName">
						<span>First Name</span>
						<input id="firstName" class="input" type="text" />
					</label>
					<label class="label grow" for="lastName">
						<span>Last Name</span>
						<input id="lastName" class="input" type="text" />
					</label>
				</div>
			</fieldset> -->

			<!-- ************** TRIP DETAILS *************** -->
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
					<Tiptap id="tripSummary" content={formPlaceholders.sections.tripSummary} />
				</label>
				<label class="label mt-2" for="howToGetThere">
					<div>How to get there</div>
					<Tiptap id="howToGetThere" rows={10} content={formPlaceholders.sections.howToGetThere} />
				</label>
				<label class="label mt-2" for="whereToStay">
					<div>Where to stay</div>
					<Tiptap id="whereToStay" content={formPlaceholders.sections.whereToStay} />
				</label>
				<label class="label mt-2" for="howToReachCrags">
					<div>How to reach the crag(s)</div>
					<Tiptap id="howToReachCrags" content={formPlaceholders.sections.howToReachCrags} />
				</label>
				<label class="label mt-2" for="tips">
					<div>Tips</div>
					<Tiptap id="tips" content={formPlaceholders.sections.tips} />
				</label>
				<label class="label mt-2" for="howToBookTrip">
					<div>How to book the trip</div>
					<Tiptap id="howToBookTrip" content={formPlaceholders.sections.howToBookTrip} />
				</label>
			</fieldset>

			<!-- ************** LINKS *************** -->
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
					<Tiptap id="komoot" content={formPlaceholders.links.komoot} />
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

			<!-- ************** AUTHOR *************** -->
			<fieldset>
				<legend class="font-semibold">Author Bio</legend>
				<label class="label mt-2" for="aboutAuthor">
					<div>About the author (optional)</div>
					<Tiptap id="aboutAuthor" content={formPlaceholders.author} />
				</label>
			</fieldset>

			<button type="submit" class="btn btn-xl variant-filled-primary self-center mb-10"
				>Submit</button
			>
		</form>
	</section>
</div>

<style lang="postcss">
	fieldset {
		@apply border p-4 w-full mb-6; /* Added bottom margin */
	}

	/* Improve label text appearance only to the first div */
	.label > div:first-of-type {
		@apply font-bold text-lg text-gray-800;
	}

	legend {
		@apply font-semibold text-xl mb-2 text-secondary-500;
	}
</style>
