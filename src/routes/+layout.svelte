<script lang="ts">
  	import { LightSwitch, TabAnchor, TabGroup } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	import '../app.css';
  	import { page } from '$app/stores';

	type TabData = {
		url: string,
		text: string,
		icon: string
	}

	const tabData: TabData[] = [
		{url: "/owners", text: "Owners", icon: "material-symbols:person"},
		{url: "/accounts", text: "Accounts", icon: "material-symbols:person"},
		{url: "/transactions", text: "Transactions", icon: "material-symbols:person"},
		{url: "/payees", text: "Payees", icon: "material-symbols:person"},
		{url: "/categories", text: "Categories", icon: "material-symbols:person"},
		{url: "/tags", text: "Tags", icon: "material-symbols:person"}
	]

	let { children } = $props();
	
	let tabSet: number = $state(0);

	$effect(() => {
		goto(tabData[tabSet].url)
	});
</script>

<div class="w-screen h-screen flex flex-col">
	<div class="p-2 flex flex-row">
		<div class="flex flex-row justify-start content-center">
			<span class="h3">Okane</span>
		</div>
		<div class="flex flex-row grow justify-center content-center">
			<TabGroup>
				{#each tabData as data, i }
					<TabAnchor href={data.url} selected={$page.url.pathname === data.url}>
						<span>{data.text}</span>
					</TabAnchor>
				{/each}
			</TabGroup>
		</div>
		<div class="flex flex-row justify-end content-center">
			<LightSwitch />
		</div>
	</div>
	<div class="flex flex-row w-full h-full">
		{@render children()}
	</div>
</div>

