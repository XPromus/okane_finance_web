<script lang="ts">
    import { Navigation } from "@skeletonlabs/skeleton-svelte";
    import { _ } from "svelte-i18n";
    
    type TabData = {
		url: string,
		text: string,
		icon: string
	};

    const headerTabs: TabData[] = [
        {url: "/", text: $_("navigation.home.title"), icon: "material-symbols:home-rounded"}
    ];

	const tabData: TabData[] = [
        {url: "/transactions", text: $_("navigation.transactions.title"), icon: "material-symbols:attach-money-rounded"},
        {url: "/subscriptions", text: $_("navigation.subscriptions.title"), icon: "material-symbols:time-auto-rounded"},
        {url: "/stocks", text: $_("navigation.stocks.title"), icon: "material-symbols:finance-mode-rounded"},
        {url: "/data/owners", text: $_("navigation.data.title"), icon: "material-symbols:database-outline"}
	];

    const footerTabs: TabData[] = [
        {url: "/docs", text: $_("navigation.docs.title"), icon: "material-symbols:book-2-rounded"}
    ]
</script>

<Navigation.Rail classes="preset-filled-surface-200-800">
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
