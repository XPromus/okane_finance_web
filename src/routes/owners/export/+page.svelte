<script lang="ts">
    import OwnerExportPage from '$lib/components/owners/OwnerExportPage.svelte';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<div class="w-full h-full p-5 flex flex-row space-x-3">
    <OwnerExportPage />
</div>