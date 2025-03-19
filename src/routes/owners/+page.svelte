<script lang="ts">
    import { getAllOwners } from "$lib/api/OwnerAPI";
    import OwnerAddPage from "$lib/components/pages/owners/OwnerAddPage.svelte";
    import OwnerEditPage from "$lib/components/pages/owners/OwnerEditPage.svelte";
    import OwnerOverviewPage from "$lib/components/pages/owners/OwnerOverviewPage.svelte";
    import { setContext } from "svelte";
    import type { PageData } from './$types';
    import type { GetOwnerDto } from "$lib/types/api/Owner";
    import CreateOwnerContainer from "$lib/components/pages/owners/CreateOwnerContainer.svelte";
    import OwnerListEntry from "$lib/components/pages/owners/OwnerListEntry.svelte";

    let { data }: { data: PageData } = $props();
    let owners: GetOwnerDto[] = $state(data.owners)
    
    let showOwnerAdd: boolean = $state(false);
    let showOwnerEdit: boolean = $state(false);

    const updateOwners = async () => {
        owners = await getAllOwners()
    }
</script>

<div class="w-full h-full flex flex-row">
    <div class="grow flex flex-col space-y-5">
        <button onclick={() => {showOwnerAdd = !showOwnerAdd}} class="bg-slate-500 p-1">
            Add User
        </button>
        {#if showOwnerAdd}
            <CreateOwnerContainer {updateOwners} />
        {/if}
        {#each owners as owner}
            <div class="flex flex-row space-x-1">
                <OwnerListEntry {owner} />
                <button onclick={() => {showOwnerEdit = !showOwnerEdit}} class="p-1">
                    Edit
                </button>
            </div>
            
        {/each}
    </div>
    {#if showOwnerEdit}
        <div class="basis-1/5 h-full bg-slate-200">
            Edit
        </div>
    {/if}
</div>
