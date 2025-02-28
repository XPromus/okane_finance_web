<script lang="ts">
	import '../app.css';
	import { initializeStores, Toast } from "@skeletonlabs/skeleton";
    import NavigationBar from '$lib/components/NavigationBar.svelte';

	initializeStores();

	let { children } = $props();
</script>

<Toast />

<div class="w-screen h-screen flex flex-row">
	<NavigationBar />
	<div class="grow">
		{@render children()}
	</div>
</div>
