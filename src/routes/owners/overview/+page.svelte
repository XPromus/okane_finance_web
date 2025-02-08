<script lang="ts">
    import OwnerOverviewPage from '$lib/components/owners/OwnerOverviewPage.svelte';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<div class="w-full h-full p-5 flex flex-row space-x-3">
    <OwnerOverviewPage />
</div>