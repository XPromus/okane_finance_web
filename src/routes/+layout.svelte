<script lang="ts">
	import '../app.css';
	import { ToastProvider } from "@skeletonlabs/skeleton-svelte";
    import NavigationBar from '$lib/components/NavigationBar.svelte';

	let { children } = $props();
</script>

<ToastProvider />

<div class="w-screen h-screen flex flex-row">
	<NavigationBar />
	<div class="grow">
		{@render children()}
	</div>
</div>
