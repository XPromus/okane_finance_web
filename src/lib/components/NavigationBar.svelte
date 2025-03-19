<script lang="ts">
    import { Navigation } from "@skeletonlabs/skeleton-svelte";
    
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
	];

    const footerTabs: TabData[] = [
        {url: "/docs", text: "Docs", icon: "material-symbols:book-2-rounded"}
    ]
</script>

<Navigation.Rail classes="bg-surface-200">
    {#snippet tiles()}
        {#each tabData as tab}
            <Navigation.Tile label={tab.text} href={tab.url}>
                <iconify-icon icon={tab.icon} width="32" height="32"></iconify-icon>
            </Navigation.Tile>
        {/each}
    {/snippet}
    {#snippet footer()}
        {#each footerTabs as tab}
            <Navigation.Tile label={tab.text} href={tab.url}>
                <iconify-icon icon={tab.icon} width="32" height="32"></iconify-icon>
            </Navigation.Tile>
        {/each}
    {/snippet}
</Navigation.Rail>
