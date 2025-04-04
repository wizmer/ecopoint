<script lang="ts">
	import { base } from '$app/paths';
	import type { Ecopoint } from '$lib/types/ecopoint';

	export let ecopoint: Ecopoint;

	// Get the first gallery image as fallback if no display image is set
	$: displayImage = ecopoint.displayImage ?? {
		src: ecopoint.sections.gallery.images[0].src,
		alt: ecopoint.sections.gallery.images[0].title
	};

	const href = `${base}/ecopoint/${ecopoint.slug}`;
</script>

<article class="group relative cursor-pointer">
	<a {href}>
		<div class="relative aspect-square overflow-hidden rounded-xl">
			<img
				src={displayImage.src}
				alt={displayImage.alt}
				class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
			/>
			<button
				class="absolute right-4 top-4 rounded-full p-2 text-gray-900 transition-opacity hover:text-primary-500"
				aria-label="Save to favorites"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-6 w-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
					/>
				</svg>
			</button>
		</div>
		<div class="mt-2 space-y-1">
			<div class="flex items-center justify-between">
				<h3 class="font-medium text-gray-900 line-clamp-1">{ecopoint.title}</h3>
				{#if ecopoint.facts?.rating}
					<div
						class="flex items-center gap-1"
						role="img"
						aria-label="Rating: {ecopoint.facts.rating} out of 5"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="h-4 w-4 text-primary-500"
						>
							<path
								fill-rule="evenodd"
								d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
								clip-rule="evenodd"
							/>
						</svg>
						<span class="text-sm font-medium">{ecopoint.facts.rating}</span>
					</div>
				{/if}
			</div>
			<p class="text-sm text-gray-600 line-clamp-2">{ecopoint.summary}</p>
			<div class="flex items-center justify-between text-sm text-gray-500">
				{#if ecopoint.facts?.difficulty}
					<span>Grade {ecopoint.facts.difficulty}</span>
				{/if}
				{#if ecopoint.facts?.bestMonths}
					<span>{ecopoint.facts.bestMonths.join(', ')}</span>
				{/if}
			</div>
		</div>
	</a>
</article>
