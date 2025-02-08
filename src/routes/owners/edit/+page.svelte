<script lang="ts">
    import OwnerEditPage from '$lib/components/owners/OwnerEditPage.svelte';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<div class="w-full h-full p-5 flex flex-row space-x-3">
    <OwnerEditPage owners={data.owners} />
</div>