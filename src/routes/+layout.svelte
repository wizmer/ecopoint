<script lang="ts">
	import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import { storePopup } from '@skeletonlabs/skeleton';
	import '../app.postcss';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<slot />
