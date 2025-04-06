<script>
	import { routes } from '$lib/routes';
</script>

<div
	class="input-group input-group-divider grid grid-cols-[auto,1fr,auto] gap-0 w-full max-w-md mx-auto"
>
	<div class="input-group-shim">
		<i class="fa-solid fa-earth-europe" />
	</div>
	<input class="input w-full" type="search" placeholder="Céüse, Kalymnos, Frankenjura..." />
	<a href={routes.map} class="btn variant-filled-secondary">Search</a>
</div>
