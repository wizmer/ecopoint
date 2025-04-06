<script lang="ts">
	// No additional script logic is needed for this form layout.
</script>

<div class="wrap">
	<section>
		<h1 class="h1 mb-10">Contact</h1>
		<form class="flex flex-col items-start gap-4">
			<fieldset>
				<legend class="font-semibold">Contact Info</legend>
				<label class="label mt-2" for="name">
					<div>Your Name</div>
					<input id="name" class="input" type="text" aria-required="true" />
				</label>
				<label class="label mt-2" for="email">
					<div>Your Email</div>
					<input id="email" class="input" type="email" aria-required="true" />
				</label>
				<label class="label mt-2" for="subject">
					<div>Subject</div>
					<input id="subject" class="input" type="text" />
				</label>
			</fieldset>

			<fieldset>
				<legend class="font-semibold">Message</legend>
				<label class="label mt-2" for="message">
					<div>Your Message</div>
					<textarea id="message" class="input" rows="10" />
				</label>
			</fieldset>

			<button type="submit" class="btn btn-xl variant-filled-primary self-center mb-10">
				Submit
			</button>
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
