<script lang="ts">
  	import { AppRail, AppRailAnchor, AppRailTile } from '@skeletonlabs/skeleton';
    import Icon from "@iconify/svelte";
    import { setContext } from 'svelte';
    import type { LayoutProps } from '../$types';
    import type { CurrentTileType } from '$lib/types/context/AppRailCurrentTile';
    import { goto } from '$app/navigation';
    
    let currentTile: CurrentTileType = $state({ currentTile: 0 });
    let { children }: LayoutProps = $props();

    setContext("currentTile", currentTile)

    const onAppTileClicked = (url: string) => {
        goto(url)
    }
</script>

<div class="w-full h-full flex flex-row">
    <div class="flex flex-col bg-surface-200">
        <button class="p-2 variant-soft-primary">
            <Icon icon="material-symbols:account-balance-rounded" width="24" height="24" />
        </button>
    </div>
    <div class="grow">
        {@render children()}
    </div>
</div>
