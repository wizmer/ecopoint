<script lang="ts">
	import MainContent from '$lib/MainContent.svelte';
</script>

<MainContent>
	<section>
		<h1 class="h1">Contact</h1>

		<form class="flex flex-col items-start gap-4">
			<input type="text" placeholder="Your name" />
			<input type="email" placeholder="Your email" />
			<input type="text" placeholder="Subject" />
			<textarea placeholder="Your message"></textarea>
			<button class="btn">Submit</button>
		</form>
	</section>
</MainContent>
