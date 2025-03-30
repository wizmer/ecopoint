<script lang="ts">
	import Tiptap from '$lib/Tiptap.svelte';
</script>

<div class="wrap">
	<section>
		<h1 class="h1 mb-10">Contribute</h1>

		<form class="flex flex-col items-start gap-4">
			<fieldset>
				<legend class="font-semibold">Contributor Info</legend>
				<label class="label mt-2" for="email">
					<span>Email</span>
					<input id="email" class="input" type="email" aria-required="true" />
				</label>
				<div class="flex flex-row gap-2 mt-2">
					<label class="label" for="firstName">
						<span>First Name</span>
						<input id="firstName" class="input" type="text" />
					</label>
					<label class="label" for="lastName">
						<span>Last Name</span>
						<input id="lastName" class="input" type="text" />
					</label>
				</div>
			</fieldset>

			<fieldset>
				<legend class="font-semibold">Trip Details</legend>
				<label class="label mt-2">
					<div>Title</div>
					<div class="flex items-center gap-2">
						<select id="climbingCategory" class="input" aria-label="Climbing category">
							<option disabled selected>Climbing category</option>
							<option value="climbing">Climbing</option>
							<option value="bouldering">Bouldering</option>
							<option value="tradclimbing">Trad climbing</option>
							<option value="sportclimbing">Sport climbing</option>
							<option value="multi-pitch">Multi-pitch</option>
						</select>
						<span class="text-nowrap">trip to</span>
						<input
							id="climbingArea"
							class="input"
							type="text"
							placeholder="Climbing area"
							aria-label="Climbing area"
						/>
						<span>by</span>
						<select id="transportMethod" class="input" aria-label="Transport method">
							<option disabled selected>Transport method</option>
							<option value="train">Train</option>
							<option value="bus">Bus</option>
							<option value="bike">Bike</option>
							<option value="public transport">Public Transport</option>
							<option value="boat">Boat</option>
						</select>
					</div>
				</label>
				<label class="label mt-2" for="tripSummary">
					<div>Summary</div>
					<Tiptap
						id="tripSummary"
						content="Describe the area, or the crag, or why you like the area/crag. Just what feels right for you! Please use no more than ~100 words."
					/>
				</label>
				<label class="label mt-2" for="howToGetThere">
					<div>How to get there</div>
					<Tiptap
						id="howToGetThere"
						content="Journey from your starting point to where you stayed overnight (e.g. which train(s), durations, where to change). If you travelled by bike, provide details about bike transport and the cycle path."
					/>
				</label>
				<label class="label mt-2" for="whereToStay">
					<div>Where to stay</div>
					<Tiptap
						id="whereToStay"
						content="Add information about your accommodation (incl. website) and other recommended accommodations."
					/>
				</label>
				<label class="label mt-2" for="howToReachCrags">
					<div>How to reach the crag(s)</div>
					<Tiptap
						id="howToReachCrags"
						content="Starting from your accommodation, describe how long it takes and how to get there (bus, walking, bike, train)."
					/>
				</label>
				<label class="label mt-2" for="tips">
					<div>Tips</div>
					<Tiptap
						id="tips"
						content="Information about the nearest supermarket, restday activities (how to get there & duration), other climbing styles, nearest guidebook shop, etc."
					/>
				</label>
				<label class="label mt-2" for="howToBookTrip">
					<div>How to book the trip</div>
					<Tiptap
						id="howToBookTrip"
						content="Websites and info on how to book the public transport."
					/>
				</label>
			</fieldset>

			<fieldset>
				<legend class="font-semibold">Links</legend>
				<label class="label mt-2" for="publicTransportLinks">
					<div>Public Transport Links</div>
					<textarea
						id="publicTransportLinks"
						class="input"
						placeholder="Add public transport links here..."
					/>
				</label>
				<label class="label mt-2" for="gpxUpload">
					<div>GPX Upload</div>
					<input id="gpxUpload" class="input" type="file" accept=".gpx" multiple />
				</label>

				<label class="label mt-2" for="komoot">
					<div>Komoot</div>
					<Tiptap
						id="komoot"
						content="If you have a Komoot account, you can embed your journey here. Please ensure it’s visible for everyone and in English."
					/>
				</label>
				<label class="label mt-2" for="miscLinks">
					<div>Misc. Links</div>
					<textarea
						id="miscLinks"
						class="input"
						placeholder="Add any miscellaneous links here..."
					/>
				</label>
			</fieldset>

			<fieldset>
				<legend class="font-semibold">Author Bio</legend>
				<label class="label mt-2" for="aboutAuthor">
					<div>About the author</div>
					<Tiptap
						id="aboutAuthor"
						content="You can add your name and a link to your social account/website."
					/>
				</label>
			</fieldset>

			<button type="submit" class="btn btn-xl variant-filled-primary self-end mb-10">Submit</button>
		</form>
	</section>
</div>

<style lang="postcss">
	.wrap {
		@apply max-w-screen-xl;
	}
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
