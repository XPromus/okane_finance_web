<script lang="ts">
    import { goto } from '$app/navigation';
    import { page } from '$app/state';
    import { onMount } from 'svelte';

    let { children } = $props();

    let currentPage = $state(0);
    const tabData = [
        { text: "Owners", route: "/owners" },
        { text: "Institutes", route: "/institutes" },
        { text: "Accounts", route: "/accounts" },
        { text: "Categories", route: "/categories" },
        { text: "Payees", route: "/payees" },
    ];

    const buttonVersionActive: string = "btn preset-filled grow";
    const buttonVersionInactive: string = "btn hover:preset-tonal grow";

    const onTabButtonClicked = (index: number) => {
        currentPage = index;
        goto("/data" + tabData[index].route);
    }

    onMount(() => {
        const currentPageUrl: string = page.url.pathname.split("/").pop()!!;
        console.log(currentPageUrl);
        for (let i = 0; i < tabData.length; i++) {
            const element = tabData[i];
            if (`/${currentPageUrl}` === element.route) {
                currentPage = i;
                break;
            }            
        }
    })
</script>

<div class="flex flex-col w-full h-full">
    <div class="flex flex-row space-x-5 p-2 border-b border-surface-300">
        {#each tabData as tab, i}
            {#if currentPage == i}
                <button type="button" class={buttonVersionActive}>{tab.text}</button>
            {:else}
                <button onclick={() => {onTabButtonClicked(i)}} type="button" class={buttonVersionInactive}>{tab.text}</button>
            {/if}
        {/each}
    </div>
    {@render children()}
</div>
