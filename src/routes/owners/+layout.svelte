<script lang="ts">
    import Icon from "@iconify/svelte";
    import { onMount, setContext } from 'svelte';
    import type { LayoutProps } from '../$types';
    import type { CurrentTileType } from '$lib/types/context/AppRailCurrentTile';
    import { goto } from '$app/navigation';
    import { page } from "$app/state";
    
    let currentTile: CurrentTileType = $state({ currentTile: 0 });
    let { children }: LayoutProps = $props();

    type TabData = {
		url: string,
		icon: string
	};

	const tabData: TabData[] = [
		{url: "/owners/overview", icon: "material-symbols:patient-list-rounded"},
		{url: "/owners/add", icon: "material-symbols:add-rounded"},
		{url: "/owners/edit", icon: "material-symbols:person-edit-rounded"}
	];

    setContext("currentTile", currentTile)

    let activeTab = $state(0);
    const onTabButtonClicked = (url: string, index: number) => {
        goto(url);
        activeTab = index;
    }

    onMount(() => {
        for (let i = 0; i < tabData.length; i++) {
            const element = tabData[i];
            if (element.url === page.url.pathname) {
                activeTab = i;
                break;
            }
        }
    });
</script>

<div class="w-full h-full flex flex-row">
    <div class="flex flex-col bg-surface-200 space-y-2 p-2">
        {#each tabData as tab, i }
            {#if i == activeTab}
                <button onclick={() => { onTabButtonClicked(tab.url, i) }} class="p-2 rounded-lg variant-ghost-primary">
                    <Icon icon={tab.icon} width="24" height="24" />
                </button>
            {:else}
                <button onclick={() => { onTabButtonClicked(tab.url, i) }} class="p-2 rounded-lg variant-ringed-surface hover:variant-ghost-surface">
                    <Icon icon={tab.icon} width="24" height="24" />
                </button>
            {/if}
        {/each}
    </div>
    <div class="grow">
        {@render children()}
    </div>
</div>
