<script lang="ts">
    import type { PageProps } from './$types';
    import { getContext } from "svelte";
    import type { CurrentTileType } from "$lib/types/context/AppRailCurrentTile";
    import OwnerOverviewPage from "$lib/components/owners/OwnerOverviewPage.svelte";
    import OwnerAddPage from '$lib/components/owners/OwnerAddPage.svelte';
    import OwnerExportPage from '$lib/components/owners/OwnerExportPage.svelte';
    import OwnerImportPage from '$lib/components/owners/OwnerImportPage.svelte';
    import OwnerEditPage from '$lib/components/owners/OwnerEditPage.svelte';

    let { data }: PageProps = $props();
    const currentTile: CurrentTileType = getContext("currentTile")

    $effect(() =>  {
        console.log(currentTile.currentTile)
    })
</script>

<div class="w-full h-full p-5 flex flex-row space-x-3">
    {#if currentTile.currentTile == 0}
        <OwnerOverviewPage />
    {:else if currentTile.currentTile == 1}
        <OwnerAddPage />
    {:else if currentTile.currentTile == 2}
        <OwnerEditPage />
    {:else if currentTile.currentTile == 3}
        <OwnerExportPage />
    {:else if currentTile.currentTile == 4}
        <OwnerImportPage />
    {/if}
</div>
