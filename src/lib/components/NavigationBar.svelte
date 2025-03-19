<script lang="ts">
    import { Navigation } from "@skeletonlabs/skeleton-svelte";
    
    type TabData = {
		url: string,
		text: string,
		icon: string
	};

    const headerTabs: TabData[] = [
        {url: "/", text: "Home", icon: "material-symbols:home-rounded"}
    ];

	const tabData: TabData[] = [
        {url: "/transactions", text: "Transactions", icon: "material-symbols:attach-money-rounded"},
        {url: "/stocks", text: "Stocks", icon: "material-symbols:finance-mode-rounded"},
        {url: "/data/owners", text: "Data", icon: "material-symbols:database-outline"}
	];

    const footerTabs: TabData[] = [
        {url: "/docs", text: "Docs", icon: "material-symbols:book-2-rounded"}
    ]
</script>

<Navigation.Rail classes="bg-surface-200">
    {#snippet header()}
        {#each headerTabs as tab}
            <Navigation.Tile label={tab.text} href={tab.url}>
                <iconify-icon icon={tab.icon} width="32" height="32"></iconify-icon>
            </Navigation.Tile>
        {/each}
    {/snippet}
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
