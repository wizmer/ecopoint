<script>
	import { SlideToggle } from '@skeletonlabs/skeleton';

	import { routes } from '$lib/routes';
	let withBike = false;
</script>

<div class="flex flex-row gap-2 justify-center items-center m-4">
	<div class="flex items-center gap-2">
		<SlideToggle name="slide" bind:checked={withBike} />
		{#if withBike}
			<i class="fa-solid fa-bicycle mr-2" />
		{:else}
			<i class="fa-solid fa-person-walking mr-2" />
		{/if}
	</div>
	<div class="flex flex-col gap-2 w-full max-w-md">
		<div class="input-group input-group-divider grid grid-cols-[auto,1fr,auto] gap-0 w-full">
			<div class="input-group-shim">
				<i class="fa-solid fa-earth-europe" />
			</div>
			<input class="input w-full" type="search" placeholder="Céüse, Kalymnos, Frankenjura..." />
			<a href={routes.map} class="btn variant-filled-secondary">Search</a>
		</div>
	</div>
</div>
