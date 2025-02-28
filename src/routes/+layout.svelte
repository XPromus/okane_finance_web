<script lang="ts">
	import '../app.css';
	import { initializeStores, Toast } from "@skeletonlabs/skeleton";
    import TitleBar from '$lib/components/TitleBar.svelte';

	initializeStores();

	let { children } = $props();
</script>

<Toast />

<div class="w-screen h-screen flex flex-row">
	<TitleBar />
	<div class="grow">
		{@render children()}
	</div>
</div>
