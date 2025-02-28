<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/state";
    import Icon from "@iconify/svelte";
    import { onMount } from "svelte";

    let activeTab = $state(0);

    type TabData = {
		url: string,
		text: string,
		icon: string
	};

	const tabData: TabData[] = [
        {url: "/", text: "Home", icon: "material-symbols:home-rounded"},
		{url: "/owners", text: "Owners", icon: "material-symbols:person-rounded"},
        {url: "/institutes", text: "Institutes", icon: "material-symbols:house-rounded"},
        {url: "/accounts", text: "Accounts", icon: "material-symbols:account-balance-rounded"},
        {url: "/payees", text: "Payees", icon: "material-symbols:group-rounded"},
        {url: "/transactions", text: "Transactions", icon: "material-symbols:attach-money-rounded"},
        {url: "/categories", text: "Categories", icon: "material-symbols:category-rounded"},
        {url: "/stocks", text: "Stocks", icon: "material-symbols:finance-mode-rounded"},
        {url: "/docs", text: "Documentation", icon: "material-symbols:book-2-rounded"}
	];

    const getTopLevelPath = (path: string): string => {
		const splitPath = path.split("/")
		return splitPath[1]
	}

    const onTabButtonClicked = (url: string, index: number) => {
        goto(url);
        activeTab = index;
    }

    onMount(() => {
        const path = getTopLevelPath(page.url.pathname);
        for (let i = 0; i < tabData.length; i++) {
            const element = tabData[i];
            if (getTopLevelPath(element.url) === path) {
                activeTab = i;
                break;
            }
        }        
    })
</script>

<div class="flex flex-col bg-surface-100 space-y-2 p-2">
    {#each tabData as tab, i }
        {#if i == tabData.length - 1}
            <div class="grow"></div>
            {#if i == activeTab}
                <button onclick={() => { onTabButtonClicked(tab.url, i) }} class="p-2 rounded-lg variant-soft-primary">
                    <Icon icon="material-symbols:book-2-rounded" width="24" height="24" />
                </button>
            {:else}
                <button onclick={() => { onTabButtonClicked(tab.url, i) }} class="p-2 rounded-lg variant-soft-surface hover:variant-ghost-surface">
                    <Icon icon="material-symbols:book-2-rounded" width="24" height="24" />
                </button>
            {/if}
        {:else}
            {#if i == activeTab}
                <button onclick={() => { onTabButtonClicked(tab.url, i) }} class="p-2 rounded-lg variant-soft-primary">
                    <Icon icon={tab.icon} width="24" height="24" />
                </button>
            {:else}
                <button onclick={() => { onTabButtonClicked(tab.url, i) }} class="p-2 rounded-lg variant-soft-surface hover:variant-ghost-surface">
                    <Icon icon={tab.icon} width="24" height="24" />
                </button>
            {/if}
        {/if}
    {/each}
</div>