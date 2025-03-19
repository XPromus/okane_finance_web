<script lang="ts">
	import '../app.css';
	import { ToastProvider } from "@skeletonlabs/skeleton-svelte";
    import NavigationBar from '$lib/components/NavigationBar.svelte';

	import "iconify-icon";
    
	let { children } = $props();
</script>

<ToastProvider />

<div class="w-screen h-screen flex flex-row bg-surface-100">
	<NavigationBar />
	<div class="grow">
		{@render children()}
	</div>
</div>
