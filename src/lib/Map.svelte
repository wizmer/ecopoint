<script lang="ts">
	import { Loader } from '@googlemaps/js-api-loader';
	import { onDestroy, onMount } from 'svelte';
	import { writable } from 'svelte/store';

	import { Mode, type Itinerary } from './types/itinerary';

	import { browser } from '$app/environment';
	import { PUBLIC_GOOGLE_MAPS_API_KEY } from '$env/static/public';

	export let inputClasses;
	export let itineraries: Itinerary[] = [];
	export let map_center = { lat: 48.19450074661718, lng: 13.211331260173694 };
	export let zoom = 5;
	export let gestureHandling = 'auto';
	export const input_search = writable('');
	export let showLegend = false;

	let container: any;
	let map: any;
	let google: any;
	let gmap_markers: google.maps.Marker[] = [];
	let polylines: google.maps.Polyline[] = [];

	// Define colors for different transport modes
	const modeColors = {
		[Mode.Bus]: '#FF6B6B',
		[Mode.Train]: '#4ECDC4',
		[Mode.Car]: '#45B7D1',
		[Mode.Bike]: '#96CEB4',
		[Mode.Walk]: '#FFEEAD',
		[Mode.Boat]: '#4A90E2'
	};

	onMount(async () => {
		if (!browser) return;

		const loader = new Loader({
			apiKey: PUBLIC_GOOGLE_MAPS_API_KEY,
			version: 'weekly',
			libraries: ['places']
		});

		google = await loader.load();

		const { Map } = await google.maps.importLibrary('maps');
		const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary('marker');
		const { Place } = await google.maps.importLibrary('places');

		map = new Map(container, {
			zoom,
			center: map_center,
			mapId: 'DEMO_MAP_ID', // Map ID is required for advanced markers.
			gestureHandling,
			// Add scale control
			scaleControl: true,
			scaleControlOptions: {
				style: google.maps.ScaleControlStyle.METRIC // Use metric system
			}
		});

		// Remove the PlacesService initialization
		// const service = new google.maps.places.PlacesService(map);

		// Initialize the Place API if needed
		const searchPlace = async (query: string) => {
			try {
				const place = new Place({
					id: query,
					requestedLanguage: 'en'
				});

				const placeResult = await place.fetchFields({
					fields: ['location', 'displayName']
				});

				return placeResult;
			} catch (error) {
				console.error('Error fetching place:', error);
				return null;
			}
		};

		let colors = [
			'#eb3040',
			'#eb6949',
			'#eb8d27',
			'#988921',
			'#85ab71',
			'#5e8d6f',
			'#58b69e',
			'#c87499',
			'#cb4d8e'
		];

		for (const itinerary of itineraries) {
			for (const leg of itinerary.legs) {
				const line = new google.maps.Polyline({
					path: [
						{ lat: leg.from.lat, lng: leg.from.lon },
						{ lat: leg.to.lat, lng: leg.to.lon }
					],
					geodesic: true,
					strokeColor: modeColors[leg.mode],
					strokeOpacity: 0.8,
					strokeWeight: 3,
					map: map
				});
				polylines.push(line);

				// Add markers for each waypoint
				const pinBackground = new PinElement({
					background: '#ffffff',
					glyphColor: modeColors[leg.mode],
					borderColor: modeColors[leg.mode]
				});

				let waypoint_marker = new AdvancedMarkerElement({
					position: { lat: leg.from.lat, lng: leg.from.lon },
					map,
					title: leg.from.name,
					content: pinBackground.element
				});
				gmap_markers.push(waypoint_marker);
			}

			// Add final destination marker for the last leg
			const lastLeg = itinerary.legs[itinerary.legs.length - 1];
			const finalPinBackground = new PinElement({
				background: '#ffffff',
				glyphColor: modeColors[lastLeg.mode],
				borderColor: modeColors[lastLeg.mode]
			});

			let final_marker = new AdvancedMarkerElement({
				position: { lat: lastLeg.to.lat, lng: lastLeg.to.lon },
				map,
				title: lastLeg.to.name,
				content: finalPinBackground.element
			});
			gmap_markers.push(final_marker);
		}

		// Add this after all markers are created
		if (gmap_markers.length > 0) {
			const bounds = new google.maps.LatLngBounds();

			// Extend bounds with all marker positions
			gmap_markers.forEach((marker) => {
				bounds.extend(marker.position);
			});

			// Add some padding to the bounds
			const padding = {
				top: 50,
				right: 50,
				bottom: 50,
				left: 50
			};

			// Fit map to bounds with padding
			map.fitBounds(bounds, padding);
		}

		if ($input_search) {
			// Update search functionality to use Place
			const place = await searchPlace($input_search);
			if (place && place.location) {
				map.setCenter(place.location);
				map.setZoom(15);
			}
		}
	});

	onDestroy(() => {
		polylines.forEach((line) => line.setMap(null));
	});
</script>

<div class={inputClasses} bind:this={container} />

{#if showLegend}
	<div class="legend">
		{#each Object.entries(modeColors) as [mode, color]}
			<div class="legend-item">
				<div class="color-box" style="background-color: {color}" />
				<span>{mode}</span>
			</div>
		{/each}
	</div>
{/if}

<style>
	.legend {
		position: absolute;
		bottom: 24px;
		right: 24px;
		background: white;
		padding: 12px;
		border-radius: 4px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	}

	.legend-item {
		display: flex;
		align-items: center;
		margin: 4px 0;
	}

	.color-box {
		width: 16px;
		height: 16px;
		margin-right: 8px;
		border-radius: 2px;
	}
</style>
