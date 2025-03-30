<script>
	export let editor;
	export let key;
</script>

{#if editor}
	<button class="btn btn-sm" class:active={editor.isActive(key)} on:click>
		{key}
	</button>
{/if}

<style>
	button.active {
		background: black;
		color: white;
	}
</style>
