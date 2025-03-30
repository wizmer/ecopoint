<script lang="ts">
	import MainContent from '$lib/MainContent.svelte';
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
						<input class="input" type="text" placeholder="Climbing area (country)" />
						<span>by</span>
						<select class="input">
							<option disabled selected>Please select your transport method</option>
							<option value="train">Train</option>
							<option value="bus">Bus</option>
							<option value="bike">Bike</option>
							<option value="public transport">Public Transport</option>
							<option value="boat">Boat</option>
						</select>
					</div>
				</label>
				<label class="label mt-2">
					<span>Summary</span>
					<textarea class="textarea" placeholder="Summary" />
				</label>
				<label class="label mt-2">
					<span>How to get there</span>
					<textarea class="textarea" placeholder="How to get there" />
				</label>
				<label class="label mt-2">
					<span>Where to stay</span>
					<textarea class="textarea" placeholder="Where to stay" />
				</label>
				<label class="label mt-2">
					<span>How to reach the crag(s)</span>
					<textarea class="textarea" placeholder="How to reach the crag(s)" />
				</label>
				<label class="label mt-2">
					<span>Tips</span>
					<textarea class="textarea" placeholder="Tips" />
				</label>
				<label class="label mt-2">
					<span>How to book the trip</span>
					<textarea class="textarea" placeholder="How to book the trip" />
				</label>
			</fieldset>

			<fieldset>
				<legend class="font-semibold">Author Bio</legend>
				<label class="label mt-2">
					<span>About the author(s)</span>
					<textarea class="textarea" placeholder="About the author(s)" />
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
