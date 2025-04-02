<script lang="ts">
	import Map from '$lib/Map.svelte';

	export const markers = [
		{
			index: 0,
			origin: {
				lng: 6.081698,
				lat: 47.150058
			},
			destination: {
				lng: 7.074859,
				lat: 46.148852
			},
			title: 'Saint Julien - Chemin des Crottes',
			association: 'Saint_Julien',
			description: '',
			nom: ''
		},
		{
			index: 1,
			origin: {
				lng: 5.081698,
				lat: 51.150058
			},
			destination: {
				lng: 25.090078,
				lat: 41.151679
			},
			title: 'Saint Julien - Douane de Perly',
			association: 'Saint_Julien',
			description: '',
			nom: ''
		},
		{
			index: 2,
			origin: {
				lng: 6.081698,
				lat: 49.150058
			},
			destination: {
				lng: 5.090078,
				lat: 43.151679
			},
			title: 'Saint Julien - Stade de la Paguette',
			association: 'Saint_Julien',
			description: '',
			nom: ''
		},
		{
			index: 3,
			origin: {
				lat: 48.8566,
				lng: 2.3522
			},
			destination: {
				lat: 45.764,
				lng: 4.8357
			},
			title: 'Paris to Lyon',
			association: 'France',
			description: '',
			nom: ''
		},
		{
			index: 4,
			origin: {
				lat: 51.5074,
				lng: -0.1278
			},
			destination: {
				lat: 53.4808,
				lng: -2.2426
			},
			title: 'London to Manchester',
			association: 'UK',
			description: '',
			nom: ''
		},
		{
			index: 5,
			origin: {
				lat: 52.52,
				lng: 13.405
			},
			destination: {
				lat: 48.1351,
				lng: 11.582
			},
			title: 'Berlin to Munich',
			association: 'Germany',
			description: '',
			nom: ''
		},
		{
			index: 6,
			origin: {
				lat: 40.4168,
				lng: -3.7038
			},
			destination: {
				lat: 41.3851,
				lng: 2.1734
			},
			title: 'Madrid to Barcelona',
			association: 'Spain',
			description: '',
			nom: ''
		},
		{
			index: 7,
			origin: {
				lat: 41.9028,
				lng: 12.4964
			},
			destination: {
				lat: 40.8518,
				lng: 14.2681
			},
			title: 'Rome to Naples',
			association: 'Italy',
			description: '',
			nom: ''
		},
		{
			index: 8,
			origin: {
				lat: 48.2082,
				lng: 16.3738
			},
			destination: {
				lat: 50.0755,
				lng: 14.4378
			},
			title: 'Vienna to Prague',
			association: 'Central Europe',
			description: '',
			nom: ''
		},
		{
			index: 9,
			origin: {
				lat: 52.3676,
				lng: 4.9041
			},
			destination: {
				lat: 48.8566,
				lng: 2.3522
			},
			title: 'Amsterdam to Paris',
			association: 'Western Europe',
			description: '',
			nom: ''
		},
		{
			index: 10,
			origin: {
				lat: 38.7223,
				lng: -9.1393
			},
			destination: {
				lat: 41.1579,
				lng: -8.6291
			},
			title: 'Lisbon to Porto',
			association: 'Portugal',
			description: '',
			nom: ''
		},
		{
			index: 11,
			origin: {
				lat: 59.3293,
				lng: 18.0686
			},
			destination: {
				lat: 57.7089,
				lng: 11.9746
			},
			title: 'Stockholm to Gothenburg',
			association: 'Sweden',
			description: '',
			nom: ''
		}
	];
</script>

<div class="w-full">
	<Map inputClasses="h-[500px] -z-50" {markers} />
</div>
