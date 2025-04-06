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

<div class="journey-schematic">
	<div class="total-duration">
		Trip duration: {formatDuration(itinerary.totalDuration)}
	</div>
	<div class="journey-steps">
		{#each itinerary.legs as leg, i}
			<div class="journey-segment">
				<div class="location">{leg.from.name}</div>
				<div class="transport">
					<i class="fa-solid {modeToIcon[leg.mode]}" />
					<div class="duration">{formatDuration(leg.duration)}</div>
					<div class="transport-line" />
				</div>
				{#if i === itinerary.legs.length - 1}
					<div class="location">{leg.to.name}</div>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
	.journey-schematic {
		padding: 2rem;
		width: 100%;
	}

	.journey-steps {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		width: 100%;
	}

	.journey-segment {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		width: 100%;
	}

	.location {
		font-weight: bold;
		padding: 0.5rem;
		background-color: #f3f4f6;
		border-radius: 0.5rem;
		min-width: 120px;
		text-align: center;
	}

	.transport {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
	}

	.duration {
		font-size: 0.875rem;
		color: #6b7280;
	}

	.transport-line {
		width: 2px;
		height: 2rem;
		background-color: #9ca3af;
	}

	.total-duration {
		text-align: center;
		font-weight: bold;
		color: #4b5563;
		margin-bottom: 1rem;
		padding: 0.5rem;
		background-color: #f3f4f6;
		border-radius: 0.5rem;
		display: inline-block;
		margin-inline: auto;
	}

	@media (min-width: 768px) {
		.journey-steps {
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: center;
			gap: 1rem 2rem;
		}

		.journey-segment {
			flex-direction: row;
			justify-content: center;
			align-items: center;
			width: auto;
			flex: 0 1 auto;
		}

		.transport {
			flex-direction: row;
			gap: 0.5rem;
		}

		.transport-line {
			width: 4rem;
			height: 2px;
		}

		.duration {
			min-width: 4rem;
			text-align: center;
		}

		.total-duration {
			margin-bottom: 2rem;
		}
	}
</style>
