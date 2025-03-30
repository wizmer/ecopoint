<script lang="ts">
	import { Loader } from '@googlemaps/js-api-loader';
	import { modeCurrent } from '@skeletonlabs/skeleton';
	import { createEventDispatcher, onDestroy } from 'svelte';

	import { browser } from '$app/environment';
	import { PUBLIC_GOOGLE_MAPS_API_KEY } from '$env/static/public';

	export let clickable = false;
	export let markers = [];
	export let map_center = { lat: 46.712724725936106, lng: 13.00700389666638 };

	const dispatch = createEventDispatcher();

	let unsubscribers: any[] = [];

	export let inputClasses = 'h-[500px]';
	let container: any;
	let zoom = 5;
	let google: any;
	let gmap_markers: google.maps.Marker[] = [];
	let clicked_marker: google.maps.Marker | null = null;
	let search_marker: google.maps.Marker | null = null;

	let styles = {
		dark: [
			{ elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
			{ elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
			{ elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
			{
				featureType: 'administrative.locality',
				elementType: 'labels.text.fill',
				stylers: [{ color: '#d59563' }]
			},
			{
				featureType: 'poi',
				elementType: 'labels.text.fill',
				stylers: [{ color: '#d59563' }]
			},
			{
				featureType: 'poi.park',
				elementType: 'geometry',
				stylers: [{ color: '#263c3f' }]
			},
			{
				featureType: 'poi.park',
				elementType: 'labels.text.fill',
				stylers: [{ color: '#6b9a76' }]
			},
			{
				featureType: 'road',
				elementType: 'geometry',
				stylers: [{ color: '#38414e' }]
			},
			{
				featureType: 'road',
				elementType: 'geometry.stroke',
				stylers: [{ color: '#212a37' }]
			},
			{
				featureType: 'road',
				elementType: 'labels.text.fill',
				stylers: [{ color: '#9ca5b3' }]
			},
			{
				featureType: 'road.highway',
				elementType: 'geometry',
				stylers: [{ color: '#746855' }]
			},
			{
				featureType: 'road.highway',
				elementType: 'geometry.stroke',
				stylers: [{ color: '#1f2835' }]
			},
			{
				featureType: 'road.highway',
				elementType: 'labels.text.fill',
				stylers: [{ color: '#f3d19c' }]
			},
			{
				featureType: 'transit',
				elementType: 'geometry',
				stylers: [{ color: '#2f3948' }]
			},
			{
				featureType: 'transit.station',
				elementType: 'labels.text.fill',
				stylers: [{ color: '#d59563' }]
			},
			{
				featureType: 'water',
				elementType: 'geometry',
				stylers: [{ color: '#17263c' }]
			},
			{
				featureType: 'water',
				elementType: 'labels.text.fill',
				stylers: [{ color: '#515c6d' }]
			},
			{
				featureType: 'water',
				elementType: 'labels.text.stroke',
				stylers: [{ color: '#17263c' }]
			}
		],
		light: []
	};

	export let execute_search = () => {
		const request = {
			// query: $input_search.value,
			fields: ['name', 'geometry']
		};

		const service = new google.maps.places.PlacesService(map);
		service.findPlaceFromQuery(
			request,
			(
				results: google.maps.places.PlaceResult[],
				status: google.maps.places.PlacesServiceStatus
			) => {
				if (
					status === google.maps.places.PlacesServiceStatus.OK &&
					results &&
					results[0]?.geometry?.location
				) {
					const coordinates = results[0].geometry.location;
					if (search_marker) {
						search_marker.setMap(null);
					}
					search_marker = new google.maps.Marker({
						position: coordinates,
						map
					});
					clicked_marker?.setMap(map);
					map.setCenter(coordinates);
				}
			}
		);
	};

	let map;
	async function loadMap(lightMode) {
		if (!browser) return;

		const loader = new Loader({
			apiKey: PUBLIC_GOOGLE_MAPS_API_KEY,
			version: 'weekly',
			libraries: ['places']
		});

		google = await loader.load();

		const { Map } = await google.maps.importLibrary('maps');

		const style = styles[lightMode ? 'light' : 'dark'];
		map = new Map(container, {
			zoom,
			center: map_center,
			styles: style
		});

		map.addListener('click', (e: any) => {
			const { lat: get_lat, lng: get_lng } = e.latLng;
			const lat = get_lat();
			const lon = get_lng();

			if (clickable) {
				if (clicked_marker) {
					clicked_marker.setMap(null);
				}
				clicked_marker = new google.maps.Marker({
					position: { lat, lng: lon },
					map,
					icon: {
						url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
					}
				});
				clicked_marker?.setMap(map);
			}

			dispatch('click', { lat, lon });
		});

		for (let marker of markers) {
			gmap_markers.push(
				new google.maps.Marker({
					position: marker,
					map,
					title: marker.title
				})
			);
		}

		if (gmap_markers.length) {
			var bounds = new google.maps.LatLngBounds();
			for (let marker of gmap_markers) {
				bounds.extend(marker.getPosition());
				marker.setMap(map);
			}
			map.fitBounds(bounds);
		}

		// if (!$input_search) {
		// 	return;
		// }
		//const searchBox = new google.maps.places.SearchBox($input_search);
	}

	onDestroy(() => {
		unsubscribers.forEach((un) => un());
	});

	$: map = loadMap($modeCurrent);
	$: console.log('map', map);
</script>

<div class={inputClasses} bind:this={container} />
