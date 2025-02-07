<script lang="ts">
  	import { AppRail, AppRailAnchor, AppRailTile } from '@skeletonlabs/skeleton';
    import Icon from "@iconify/svelte";
    import { setContext } from 'svelte';
    import type { LayoutProps } from '../$types';
    import type { CurrentTileType } from '$lib/types/context/AppRailCurrentTile';
    
    let currentTile: CurrentTileType = $state({ currentTile: 0 });
    let { children }: LayoutProps = $props();

    setContext("currentTile", currentTile)
</script>

<div class="flex flex-row w-full h-full">
    <AppRail>
        <AppRailTile bind:group={currentTile.currentTile} name="tile-1" value={0} title="tile-1">
            <svelte:fragment slot="lead">
                <span class="flex justify-center w-full">
                    <Icon icon="material-symbols:view-headline-rounded" width="24" height="24" />
                </span>
            </svelte:fragment>
            <span>Overview</span>
        </AppRailTile>
        <AppRailTile bind:group={currentTile.currentTile} name="tile-2" value={1} title="tile-2">
            <svelte:fragment slot="lead">
                <span class="flex justify-center w-full">
                    <Icon icon="material-symbols:add-2-rounded" width="24" height="24" />
                </span>
            </svelte:fragment>
            <span>Add</span>
        </AppRailTile>
        <AppRailTile bind:group={currentTile.currentTile} name="tile-2" value={2} title="tile-2">
            <svelte:fragment slot="lead">
                <span class="flex justify-center w-full">
                    <Icon icon="material-symbols:person-edit-rounded" width="24" height="24" />
                </span>
            </svelte:fragment>
            <span>Edit</span>
        </AppRailTile>
        <AppRailTile bind:group={currentTile.currentTile} name="tile-3" value={3} title="tile-3">
            <span class="flex justify-center w-full">
                <Icon icon="material-symbols:file-export-rounded" width="24" height="24" />
            </span>
            <span>Export</span>
        </AppRailTile>
        <AppRailTile bind:group={currentTile.currentTile} name="tile-3" value={4} title="tile-3">
            <span class="flex justify-center w-full">
                <Icon icon="material-symbols:database-upload-rounded" width="24" height="24" />
            </span>
            <span>Import</span>
        </AppRailTile>

        <svelte:fragment slot="trail">
            <AppRailAnchor href="/settings" target="_blank" title="Account">
                <svelte:fragment slot="lead">
                    <Icon icon="material-symbols:settings" width="24" height="24" />
                </svelte:fragment>
	            <span>Settings</span>
            </AppRailAnchor>
        </svelte:fragment>
    </AppRail>
    <div class="grow">
        {@render children()}
    </div>
</div>