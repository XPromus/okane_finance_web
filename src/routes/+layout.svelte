<script lang="ts">
  	import { AppRail, AppRailAnchor, AppRailTile, LightSwitch, Tab, TabGroup } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	import '../app.css';

	type TabData = {
		url: string,
		text: string
	}

	const tabData: TabData[] = [
		{url: "/owners", text: "Owners"},
		{url: "/accounts", text: "Accounts"},
		{url: "/transactions", text: "Transactions"},
		{url: "/payees", text: "Payees"},
		{url: "/categories", text: "Categories"},
		{url: "/tags", text: "Tags"}
	]

	let { children } = $props();
	let currentTile: number = $state(0);
	let tabSet: number = $state(0);

	$effect(() => {
		goto(tabData[tabSet].url)
	});
</script>

<div class="w-screen h-screen flex flex-col">
	<div class="p-2 flex flex-row">
		<div class="flex flex-row">
			<span class="h3">Okane</span>
		</div>
		<div class="flex flex-row grow">
			<TabGroup>
				{#each tabData as data, i }
					<Tab bind:group={tabSet} name="{data.text}Tab" value={i}>
						<span>{data.text}</span>
					</Tab>
				{/each}
			</TabGroup>
		</div>
		<div class="flex flex-row">
			<LightSwitch />
		</div>
	</div>
	<div class="flex flex-row w-full h-full">
		<div>
			<AppRail>
				<svelte:fragment slot="lead">
					<AppRailAnchor href="/" >(icon)</AppRailAnchor>
				</svelte:fragment>
				<!-- --- -->
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
				<!-- --- -->
				<svelte:fragment slot="trail">
					<AppRailAnchor href="/" target="_blank" title="Account">(icon)</AppRailAnchor>
				</svelte:fragment>
			</AppRail>
		</div>
		<div>
			{@render children()}
		</div>
	</div>
</div>

