<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/state";
    import { onMount } from "svelte";

    let activeTab = $state(0);

    type TabData = {
		url: string,
		text: string,
		icon: string
	};

	const tabData: TabData[] = [
		{url: "/owners", text: "Owners", icon: "material-symbols:person"},
		{url: "/institutes", text: "Institutes", icon: ""},
		{url: "/accounts", text: "Accounts", icon: "material-symbols:person"},
		{url: "/transactions", text: "Transactions", icon: "material-symbols:person"},
		{url: "/payees", text: "Payees", icon: "material-symbols:person"},
		{url: "/categories", text: "Categories", icon: "material-symbols:person"},
		{url: "/tags", text: "Tags", icon: "material-symbols:person"},
        {url: "/stocks", text: "Stocks", icon: "material-symbols:person"}
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

<div class="w-full h-fit flex flex-col bg-surface-200">
    <div class="w-full border-b-2 border-surface-500">
        <div class="flex flex-row space-x-1 px-2 pt-2">
            {#each tabData as tab, i}
                {#if i == activeTab}
                    <button onclick={() => { onTabButtonClicked(tab.url, i) }} class="grow p-1 rounded-t-lg variant-ghost-primary">
                        {tab.text}
                    </button>
                {:else}
                    <button onclick={() => { onTabButtonClicked(tab.url, i) }} class="grow p-1 rounded-t-lg variant-ringed-surface hover:variant-ghost-surface">
                        {tab.text}
                    </button>
                {/if}
            {/each}
        </div>
    </div>
</div>