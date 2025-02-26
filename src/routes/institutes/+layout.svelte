<script lang="ts">
    import {AppRail, AppRailTile} from "@skeletonlabs/skeleton";
    import Icon from "@iconify/svelte";
    import {goto} from "$app/navigation";
    import type {CurrentTileType} from "$lib/types/context/AppRailCurrentTile";
    import {setContext} from "svelte";

    let currentTile: CurrentTileType = $state({ currentTile: 0 });
    let { children } = $props();

    setContext("currentTile", currentTile)

    const onAppTileClicked = (url: string) => {
        goto(url)
    }
</script>

<div class="flex flex-row w-full h-full space-x-5">
    <AppRail>
        <AppRailTile on:click={() => onAppTileClicked("/institutes/overview")} bind:group={currentTile.currentTile} name="tile-1" value={0} title="tile-1">
            <svelte:fragment slot="lead">
                <span class="flex justify-center w-full">
                    <Icon icon="material-symbols:view-headline-rounded" width="24" height="24" />
                </span>
            </svelte:fragment>
            <span>Overview</span>
        </AppRailTile>
        <AppRailTile on:click={() => onAppTileClicked("/institutes/add")} bind:group={currentTile.currentTile} name="tile-2" value={1} title="tile-2">
            <svelte:fragment slot="lead">
                <span class="flex justify-center w-full">
                    <Icon icon="material-symbols:add-2-rounded" width="24" height="24" />
                </span>
            </svelte:fragment>
            <span>Add</span>
        </AppRailTile>
        <AppRailTile on:click={() => onAppTileClicked("/institutes/edit")} bind:group={currentTile.currentTile} name="tile-3" value={2} title="tile-3">
            <svelte:fragment slot="lead">
                <span class="flex justify-center w-full">
                    <Icon icon="material-symbols:person-edit-rounded" width="24" height="24" />
                </span>
            </svelte:fragment>
            <span>Edit</span>
        </AppRailTile>
    </AppRail>
    <div class="grow">
        {@render children()}
    </div>
</div>