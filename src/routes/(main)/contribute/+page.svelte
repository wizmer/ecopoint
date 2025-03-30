<script lang="ts">
	import MainContent from '$lib/MainContent.svelte';
	import Tiptap from '$lib/Tiptap.svelte';
</script>

<MainContent>
	<section>
		<h1 class="h1 mb-10">Contribute</h1>

		<form class="flex flex-col items-start gap-4">
			<fieldset>
				<legend class="font-semibold">Contributor Info</legend>
				<label class="label mt-2">
					<span>Email</span>
					<input class="input" type="email" placeholder="Email" />
				</label>
				<div class="flex flex-row gap-2 mt-2">
					<label class="label">
						<span>First Name</span>
						<input class="input" type="text" placeholder="First Name" />
					</label>
					<label class="label">
						<span>Last Name</span>
						<input class="input" type="text" placeholder="Last Name" />
					</label>
				</div>
			</fieldset>

			<fieldset>
				<legend class="font-semibold">Trip Details</legend>
				<label class="label mt-2">
					<span>Title</span>
					<div class="flex items-center gap-2">
						<select class="input">
							<option disabled selected>Climbing category</option>
							<option value="climbing">Climbing</option>
							<option value="bouldering">Bouldering</option>
							<option value="tradclimbing">Trad climbing</option>
							<option value="sportclimbing">Sport climbing</option>
							<option value="multi-pitch">Multi-pitch</option>
						</select>
						<span class="text-nowrap">trip to</span>
						<input class="input" type="text" placeholder="Climbing area" />
						<span>by</span>
						<select class="input">
							<option disabled selected>Transport method</option>
							<option value="train">Train</option>
							<option value="bus">Bus</option>
							<option value="bike">Bike</option>
							<option value="public transport">Public Transport</option>
							<option value="boat">Boat</option>
						</select>
					</div>
				</label>
				<label class="label mt-2">
					<div>Summary</div>
					<Tiptap
						content="Describe the area, or the crag, or why you like the area/crag. Just what feels right for you! Please use no more than ~100 words."
					/>
				</label>
				<label class="label mt-2">
					<div>How to get there</div>
					<Tiptap
						content="Journey from your starting point to where you stayed overnight (e.g. which train(s), durations, where to change). If you travelled by bike, provide details about bike transport and the cycle path."
					/>
				</label>
				<label class="label mt-2">
					<div>Komoot</div>
					<Tiptap
						content="If you have a Komoot account, you can embed your journey here. Please ensure it’s visible for everyone and in English."
					/>
				</label>
				<label class="label mt-2">
					<div>Where to stay</div>
					<Tiptap
						content="Add information about your accommodation (incl. website) and other recommended accommodations."
					/>
				</label>
				<label class="label mt-2">
					<div>How to reach the crag(s)</div>
					<Tiptap
						content="Starting from your accommodation, describe how long it takes and how to get there (bus, walking, bike, train)."
					/>
				</label>
				<label class="label mt-2">
					<div>Tips</div>
					<Tiptap
						content="Information about the nearest supermarket, restday activities (how to get there & duration), other climbing styles, nearest guidebook shop, etc."
					/>
				</label>
				<label class="label mt-2">
					<div>How to book the trip</div>
					<Tiptap content="Websites and info on how to book the public transport." />
				</label>
			</fieldset>

			<fieldset>
				<legend class="font-semibold">Author Bio</legend>
				<label class="label mt-2">
					<div>About the author</div>
					<Tiptap content="You can add your name and a link to your social account/website." />
				</label>
			</fieldset>

			<button class="btn variant-filled-primary self-start">Submit</button>
		</form>
	</section>
</MainContent>

<style lang="postcss">
	fieldset {
		@apply border p-4 w-full;
	}
</style>
