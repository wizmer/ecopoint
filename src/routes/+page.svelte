<script lang="ts">
	import { routes } from '$lib/routes';
</script>

<div class="bg-img-hero">
	<div class="flex flex-col w-md-80 w-lg-60 mx-auto text-center justify-evenly h-full gap-8">
		<div>
			<div class="mb-5">
				<h1 class="h1">Ecopoint Climbing</h1>
				<p class="text-2xl font-medium">Information and inspiration about sustainable climbing</p>
			</div>
			<div class="flex flex-wrap gap-8 justify-center">
				<a class="cta-button variant-filled-primary" href={routes.featured}>See featured trips</a>
				<a class="cta-button variant-ringed-primary" href={routes.contribute}>Contribute</a>
			</div>
		</div>

		<div
			class="input-group input-group-divider grid grid-cols-[auto,1fr,auto] gap-0 w-full max-w-md mx-auto"
		>
			<div class="input-group-shim">
				<i class="fa-solid fa-earth-europe" />
			</div>
			<input class="input w-full" type="search" placeholder="Search..." />
			<button class="btn variant-filled-secondary">Search</button>
		</div>

		<!-- End Buttons -->
	</div>
</div>

<style lang="postcss">
	.bg-img-hero {
		height: 100vh;
		background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
			url('$lib/images/cropped-cover-picture-option-C-Arthur-Ternant-1.jpg') center/cover no-repeat;
		color: #fff;
	}

	.cta-button {
		@apply btn btn-xl font-medium;
	}

	/* Make the search group bigger */
	.input-group input,
	.input-group button {
		@apply py-3 px-4 text-lg;
	}
</style>
