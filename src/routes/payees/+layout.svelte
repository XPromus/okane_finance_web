<script lang="ts">
  	import { AppRail, AppRailAnchor, AppRailTile } from '@skeletonlabs/skeleton';
    import Icon from "@iconify/svelte";
    let currentTile: number = $state(0);
    let { children } = $props();
</script>

<div class="flex flex-row w-full h-full">
    <AppRail>
        <svelte:fragment slot="lead">
            <AppRailAnchor href="/" >(icon)</AppRailAnchor>
        </svelte:fragment>
        <AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
            <svelte:fragment slot="lead">(icon)</svelte:fragment>
            <span>Tile 1</span>
        </AppRailTile>
        <AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">
            <svelte:fragment slot="lead">(icon)</svelte:fragment>
            <span>Tile 2</span>
        </AppRailTile>
        <AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3">
            <svelte:fragment slot="lead">(icon)</svelte:fragment>
            <span>Tile 3</span>
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