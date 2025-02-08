<script lang="ts">
  	import { LightSwitch, TabAnchor, TabGroup } from '@skeletonlabs/skeleton';
	import '../app.css';
  	import { page } from '$app/stores';
  	import Icon from '@iconify/svelte';

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

	const getTopLevelPath = (path: string): string => {
		const splitPath = path.split("/")
		return splitPath[1]
	}

	let { children } = $props();
</script>

<div class="w-screen h-screen flex flex-col">
	<div class="p-2 flex flex-row px-5">
		<div class="flex flex-row justify-start content-center basis-1/5">
			<!--<span class="h3">Okane</span>-->
		</div>
		<div class="flex flex-row grow justify-center content-center basis-3/5">
			<TabGroup>
				<TabAnchor href="/" selected={$page.url.pathname === "/"}>
					<Icon icon="material-symbols:home" width=24 height=24 />
				</TabAnchor>
				{#each tabData as data, i }
					<TabAnchor href={data.url} selected={getTopLevelPath($page.url.pathname) === getTopLevelPath(data.url)}>
						<span>{data.text}</span>
					</TabAnchor>
				{/each}
			</TabGroup>
		</div>
		<div class="flex flex-row justify-end content-center items-center basis-1/5">
			<LightSwitch />
		</div>
	</div>
	<div class="grow">
		{@render children()}
	</div>
</div>
