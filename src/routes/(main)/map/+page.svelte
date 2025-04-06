<script lang="ts">
	import { ecopoints } from '$lib/ecopoints';
	import Map from '$lib/Map.svelte';

	export const itineraries = ecopoints.map((ecopoint) => ecopoint.itinerary);
</script>

<div class="w-full">
	<Map inputClasses="h-[500px] z-10" {itineraries} />
</div>
