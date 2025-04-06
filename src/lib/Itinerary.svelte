<script lang="ts">
	import { Mode, type Itinerary } from '$lib/types/itinerary';

	export let itinerary: Itinerary;
	export let displayTotalDuration = true;

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

<div class="journey-container">
	<div class="journey-steps">
		{#if displayTotalDuration}
			<div class="total-duration">
				Trip duration: {formatDuration(itinerary.totalDuration)}
			</div>
		{/if}
		{#each itinerary.legs as leg, i}
			<div class="journey-segment">
				<div class="location-group">
					{#if i > 0}
						<div class="transport-line-half" />
					{/if}
					<div class="location">{leg.from.name}</div>
					<div class="transport-line-half" />
				</div>
				<div class="location-group">
					<div class="transport-line-half" />
					<i class="fa-solid {modeToIcon[leg.mode]}" />
					<div class="duration">{formatDuration(leg.duration)}</div>
					<div class="transport-line-half" />
				</div>
				{#if i === itinerary.legs.length - 1}
					<div class="location-group">
						<div class="transport-line-half" />
						<div class="location">{leg.to.name}</div>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
	.journey-schematic {
		padding-top: 1rem;
		padding-bottom: 1rem;
		width: 100%;
		display: flex;
	}

	.journey-container {
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
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
		flex: 0 0 auto; /* Replace width: 100% */
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

	.transport-line-half {
		width: 1px;
		height: 1rem;
		background-color: #9ca3af;
	}

	.location-group {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		break-inside: avoid;
	}

	@media (min-width: 768px) {
		.journey-steps {
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: flex-start;
			gap: 0.5rem 0rem;
			flex: 0 1 auto; /* Changed from flex: 1 to flex: 0 1 auto */
			min-width: 0;
		}

		.journey-segment {
			flex-direction: row;
			justify-content: center;
			align-items: center;
			flex: 0 0 auto;
			gap: 0rem;
		}

		.transport {
			flex-direction: row;
			gap: 0rem;
		}

		.transport-line {
			width: 2rem;
			height: 2px;
		}

		.duration {
			min-width: 4rem;
			text-align: center;
		}

		.total-duration {
			margin-bottom: 0;
			white-space: nowrap;
			flex-shrink: 0;
		}

		.journey-container {
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			gap: 0rem;
			padding-inline: 1rem;
			max-width: 80%; /* Prevent container from becoming too wide */
		}

		.transport-line-half {
			width: 1rem;
			height: 2px;
		}

		.location-group {
			flex-direction: row;
			white-space: nowrap;
			flex: 0 0 auto;
		}

		/* Style for line breaks */
		.journey-segment:last-of-type:not(:last-child) .transport-line-half:last-child {
			background-color: #9ca3af;
		}

		.journey-segment:first-of-type:not(:first-child)
			.location-group:first-child
			.transport-line-half:first-child {
			background-color: transparent;
		}
	}
</style>
