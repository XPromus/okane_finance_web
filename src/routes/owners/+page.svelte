<script lang="ts">
    import { getAllOwners } from "$lib/api/OwnerAPI";
    import type { PageData } from './$types';
    import type { GetOwnerDto } from "$lib/types/api/Owner";
    import CreateOwnerContainer from "$lib/components/pages/owners/CreateOwnerContainer.svelte";
    import OwnerListEntry from "$lib/components/pages/owners/OwnerListEntry.svelte";
    import EditOwnerContainer from "$lib/components/pages/owners/EditOwnerContainer.svelte";

    let { data }: { data: PageData } = $props();
    let owners: GetOwnerDto[] = $state(data.owners)
    
    let selectedOwner: GetOwnerDto | undefined = $state(undefined);
    let showOwnerAdd: boolean = $state(false);
    
    let showOwnerEdit: boolean = $state(false);

    const toggleOwnerEdit = (owner: GetOwnerDto) => {
        selectedOwner = owner;
        showOwnerEdit = !showOwnerEdit;
    }

    const closeOwnerEdit = () => {
        selectedOwner = undefined;
        showOwnerEdit = false;
    }

    const updateOwners = async () => {
        owners = await getAllOwners()
    }
</script>

<div class="w-full h-full flex flex-row p-5 space-x-5">
    <div class="grow flex flex-col space-y-1">
        <button onclick={() => {showOwnerAdd = !showOwnerAdd}} type="button" class="btn preset-filled-primary-500">
            Add Owner
        </button>
        {#if showOwnerAdd}
            <CreateOwnerContainer {updateOwners} />
        {/if}
        {#each owners as owner}
            <div class="flex flex-row space-x-1">
                <OwnerListEntry {owner} />
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <button class="btn-icon preset-filled-error-500">
                    <iconify-icon icon="material-symbols:delete-rounded" width="24" height="24"></iconify-icon>
                </button>
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <button onclick={() => {toggleOwnerEdit(owner)}} class="btn-icon preset-filled-primary-500">
                    <iconify-icon icon="material-symbols:edit-rounded" width="24" height="24"></iconify-icon>
                </button>
            </div>
            
        {/each}
    </div>
    {#if showOwnerEdit && selectedOwner !== undefined}
        <EditOwnerContainer owner={selectedOwner} {updateOwners} close={closeOwnerEdit}/>
    {/if}
</div>
