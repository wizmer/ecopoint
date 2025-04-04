<script>
	import { marked } from 'marked';
	export let content = '';
	export let rows = 3;

	let markdown = '';
	let fullScreen = false;
	let preview = false;

	// Dummy handlers for markdown editing actions
	function handleBold() {
		markdown += ' **bold** ';
	}
	function handleItalic() {
		markdown += ' _italic_ ';
	}
	function handleHeading() {
		markdown = '# Heading\n' + markdown;
	}
	function handleImage() {
		markdown += ' ![alt text](url) ';
	}
	function handleLink() {
		markdown += ' [link](url) ';
	}
	function handleEmoji() {
		markdown += ' 😊 ';
	}
	function handleHashtag() {
		markdown += ' #tag ';
	}
	function handleListUl() {
		markdown += '\n- List item';
	}
	function handleListOl() {
		markdown += '\n1. List item';
	}
	function handleCode() {
		markdown += ' `code` ';
	}
	function handleQuote() {
		markdown += '\n> Quote';
	}
</script>

<!-- Toolbar -->
<div class="button-bar">
	<div class="buttons">
		<button
			type="button"
			on:click|stopPropagation={() =>
				window.open('https://www.camptocamp.org/articles/151910', '_blank')}
			title="Help"
		>
			<i class="fa fa-question-circle" />
		</button>
		<span>&nbsp;</span>
		<button
			type="button"
			on:click|stopPropagation={() => (fullScreen = !fullScreen)}
			title={fullScreen ? 'Leave fullscreen' : 'Toggle fullscreen'}
		>
			<i class={'fa ' + (fullScreen ? 'fa-compress' : 'fa-expand')} />
		</button>
	</div>
	<div class="buttons">
		<button
			type="button"
			on:click|stopPropagation={handleBold}
			disabled={preview}
			title="strong text"
		>
			<i class="fa fa-bold" />
		</button>
		<button
			type="button"
			on:click|stopPropagation={handleItalic}
			disabled={preview}
			title="emphasized text"
		>
			<i class="fa fa-italic" />
		</button>
		<button
			type="button"
			on:click|stopPropagation={handleHeading}
			disabled={preview}
			title="Heading"
		>
			<i class="fa fa-heading" />
		</button>
		<span>&nbsp;</span>
		<button
			type="button"
			on:click|stopPropagation={handleImage}
			disabled={preview}
			title="Insert image"
		>
			<i class="fa fa-image" />
		</button>
		<button
			type="button"
			on:click|stopPropagation={handleLink}
			disabled={preview}
			title="Insert link"
		>
			<i class="fa fa-link" />
		</button>
		<button
			type="button"
			on:click|stopPropagation={handleEmoji}
			disabled={preview}
			title="Insert emoji"
		>
			<i class="fa fa-grin" />
		</button>
		<span>&nbsp;</span>
		<button
			type="button"
			on:click|stopPropagation={handleHashtag}
			disabled={preview}
			title="Pitch description tag"
		>
			<i class="fa fa-hashtag" />
		</button>
		<button
			type="button"
			on:click|stopPropagation={handleListUl}
			disabled={preview}
			title="Unordered list"
		>
			<i class="fa fa-list-ul" />
		</button>
		<button
			type="button"
			on:click|stopPropagation={handleListOl}
			disabled={preview}
			title="Ordered list"
		>
			<i class="fa fa-list-ol" />
		</button>
		<button
			type="button"
			on:click|stopPropagation={handleCode}
			disabled={preview}
			title="Unformatted text"
		>
			<i class="fa fa-code" />
		</button>
		<button type="button" on:click|stopPropagation={handleQuote} disabled={preview} title="Quote">
			<i class="fa fa-comment" />
		</button>
		<span>&nbsp;</span>
		<button
			type="button"
			on:click|stopPropagation={() => (preview = !preview)}
			title={preview ? 'Back to code' : 'Preview'}
		>
			<i class={'fa ' + (preview ? 'fa-code' : 'fa-eye')} />
			{preview ? ' Back to code' : ' Preview'}
		</button>
	</div>
</div>

{#if fullScreen}
	<style>
		:global(body) {
			overflow: hidden;
		}
	</style>
{/if}

<textarea bind:value={markdown} {rows} placeholder={content} class:fullscreen={fullScreen} />
{#if !preview}
	<div class="preview">{@html marked(markdown)}</div>
{/if}

<style lang="postcss">
	.button-bar {
		@apply bg-surface-200;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		padding: 0.25rem 0.5rem;
		margin-bottom: 0.25rem;

		row-gap: 0.25rem;
	}

	.buttons {
		display: flex;
		flex-wrap: wrap;
		row-gap: 0.25rem;
	}

	.buttons button {
		background: none;
		border: 1px solid #ccc;
		padding: 0.25rem 0.5rem; /* Smaller button padding */
		cursor: pointer;
		font-size: 0.9rem; /* Slightly smaller font size */
	}

	.buttons button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	textarea,
	.preview {
		box-sizing: border-box;
		display: block;
		width: 100%;
	}

	textarea {
		font-family: monospace, Roboto;
		height: 25%;
		border: none;
		margin: 0;
		padding: 1rem;
	}

	.fullscreen {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 9999;
		font-size: 1.2rem;
	}

	.preview {
		height: 75%;
		padding: 2rem;
		border-top: solid 2px #888;
	}
</style>
