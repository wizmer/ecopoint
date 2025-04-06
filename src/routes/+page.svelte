<script lang="ts">
	import EcopointCard from '$lib/components/EcopointCard.svelte';
	import { ecopoints } from '$lib/ecopoints';
	import Search from '$lib/Search.svelte';

	const featuredEcopoints = [...ecopoints, ...ecopoints, ...ecopoints, ...ecopoints];
</script>

<div class="container mx-auto px-4 py-8">
	<Search />

	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
		{#each featuredEcopoints as ecopoint}
			<EcopointCard {ecopoint} />
		{/each}
	</div>
</div>

<style lang="postcss">
	/* Add any additional styles here */
</style>
