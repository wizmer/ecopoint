<script lang="ts">
	import { Ratings } from '@skeletonlabs/skeleton';
	let value = { current: 3.5, max: 5 };
	function iconClick(event: CustomEvent<{ index: number }>): void {
		value.current = event.detail.index;
	}
</script>

<div class="flex flex-row items-center gap-4">
	<span class="text-2xl">{value.current}</span>
	<Ratings
		justify="start"
		bind:value={value.current}
		max={value.max}
		interactive
		on:icon={iconClick}
	>
		<svelte:fragment slot="empty"><i class="fa-regular fa-star" /></svelte:fragment>
		<svelte:fragment slot="half"><i class="fa-solid fa-star-half-stroke" /></svelte:fragment>
		<svelte:fragment slot="full"><i class="fa-solid fa-star" /></svelte:fragment>
	</Ratings>
</div>
