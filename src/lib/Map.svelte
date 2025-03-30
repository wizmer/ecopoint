<script lang="ts">
	import { Loader } from '@googlemaps/js-api-loader';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { PUBLIC_GOOGLE_MAPS_API_KEY } from '$env/static/public';

	export let inputClasses;
	export let markers: any[] = [];
	export let map_center = { lat: 48.19450074661718, lng: 13.211331260173694 };
	export let zoom = 5;
	export let gestureHandling = 'auto';
	export const input_search = writable('');

	let container: any;
	let map: any;
	let google: any;
	let gmap_markers: google.maps.Marker[] = [];

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

		map = new Map(container, {
			zoom,
			center: map_center,
			mapId: 'DEMO_MAP_ID', // Map ID is required for advanced markers.
			gestureHandling
		});

		const service = new google.maps.places.PlacesService(map);

		let associations = Array.from(new Set(markers.map((marker) => marker.association)));

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

		for (let marker of markers) {
			let index = associations.indexOf(marker.association);
			const pinBackground = new PinElement({
				background: colors[index],
				glyphColor: 'white',
				borderColor: colors[index]
			});

			let map_marker = new AdvancedMarkerElement({
				position: marker.destination,
				map,
				title: `#${marker.index} - ${marker.title}`,
				content: pinBackground.element
			});
			gmap_markers.push(map_marker);

			map_marker.addListener('gmp-click', () => {
				goto(`${$page.url}/${marker.index}`);
			});
		}

		for (const marker of markers) {
			const arrowSymbol = {
				path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
				scale: 2,
				strokeColor: '#000',
				fillColor: '#000'
			};

			const arrowLine = new google.maps.Polyline({
				path: [marker.origin, marker.destination],
				geodesic: true,
				strokeColor: '#000',
				strokeOpacity: 1.0,
				strokeWeight: 2,
				icons: [
					{
						icon: arrowSymbol,
						offset: '50%'
					}
				],
				map
			});
		}

		if (!$input_search) {
			return;
		}
		const searchBox = new google.maps.places.SearchBox($input_search);
	});
</script>

<div class={inputClasses} bind:this={container} />
