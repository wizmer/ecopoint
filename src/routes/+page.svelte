<script lang="ts">
	import { routes } from '$lib/routes';
</script>

<div class="bg-img-hero">
	<div class="">
		<div class="w-md-80 w-lg-60 mx-auto text-center">
			<!-- Title -->
			<div class="mb-5">
				<h1 class="h1">Ecopoint Climbing</h1>
				<p class="text-2xl font-medium">Information and inspiration about sustainable climbing</p>
			</div>
			<!-- End Title -->

			<!-- Buttons -->
			<a class="cta-button variant-filled-primary" href={routes.featured}>See featured trips</a>
			<a class="cta-button variant-ringed-primary" href={routes.contribute}>Contribute</a>

			<div class="mt-[200px]">
				<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
					<div class="input-group-shim">
						<i class="fa-solid fa-earth-europe" />
					</div>
					<input type="search" placeholder="Fonteinebleau, Céüse, Kalymnos..." />
					<button class="variant-filled-secondary">Search</button>
				</div>
			</div>

			<!-- End Buttons -->
		</div>
	</div>
</div>

<style lang="postcss">
	.bg-img-hero {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
			url('$lib/images/cropped-cover-picture-option-C-Arthur-Ternant-1.jpg') center/cover no-repeat;
		color: #fff;
		text-align: center;
	}

	.cta-button {
		@apply btn btn-xl font-medium;
		margin: 0 20px;
	}

	/* Make the search group bigger */
	.input-group input,
	.input-group button {
		@apply py-3 px-4 text-lg;
	}
</style>
