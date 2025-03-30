<script>
	import Button from './TipTapButton.svelte';

	export let editor;

	const chainer = (editor, fn) => editor.chain().focus()[fn]().run();

	const toggleBold = (editor) => chainer(editor, 'toggleBold');
	const toggleItalic = (editor) => editor.chain().focus().toggleItalic().run();
	const toggleStrike = (editor) => editor.chain().focus().toggleStrike().run();
</script>

{#if editor}
	<div class="fixed-menu rounded-2xl m-2">
		<Button {editor} key="bold" on:click={() => toggleBold(editor)} />
		<Button {editor} key="italic" on:click={() => toggleItalic(editor)} />
		<Button {editor} key="strike" on:click={() => toggleStrike(editor)} />
	</div>
{/if}

<style>
	.fixed-menu {
		background: #ccc;
		padding: 2px;
		min-height: 36px;
	}
</style>
