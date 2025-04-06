<script lang="ts">
	import { Mode, type Itinerary } from '$lib/types/itinerary';

	export let itinerary: Itinerary;

	const modeToIcon: Record<Mode, string> = {
		[Mode.Train]: 'fa-train',
		[Mode.Bike]: 'fa-bicycle',
		[Mode.Bus]: 'fa-bus',
		[Mode.Car]: 'fa-car',
		[Mode.Walk]: 'fa-person-walking',
		[Mode.Boat]: 'fa-ship'
	};

	function formatDuration(minutes: number): string {
		const hours = Math.floor(minutes / 60);
		const mins = minutes % 60;
		return hours > 0 ? `${hours}h${mins > 0 ? ` ${mins}min` : ''}` : `${mins}min`;
	}
</script>

<div class="summary-container">
	<div class="transport-icons">
		{#each itinerary.legs as leg, i}
			<div class="transport-segment">
				<i class="fa-solid {modeToIcon[leg.mode]}" />
			</div>
		{/each}
		{formatDuration(itinerary.totalDuration)}
	</div>
</div>

<style>
	.summary-container {
		padding: 0.5rem;
		background-color: #f3f4f6;
		border-radius: 0.5rem;
	}

	.transport-icons {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.transport-segment {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.duration {
		font-size: 0.75rem;
		color: #6b7280;
	}

	.connector {
		width: 1rem;
		height: 2px;
		background-color: #9ca3af;
	}

	.total {
		font-size: 0.875rem;
		color: #4b5563;
		font-weight: 500;
	}

	@media (max-width: 640px) {
		.transport-icons {
			flex-wrap: wrap;
			justify-content: center;
		}
	}
</style>
