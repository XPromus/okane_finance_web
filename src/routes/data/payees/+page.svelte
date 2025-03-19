<script lang="ts">
    import type { PageData } from './$types';
    import type { GetPayeeDto } from "$lib/types/api/Payee";
    import { deletePayee, getAllPayees } from "$lib/api/PayeeAPI";
    import CreateMenu from "$lib/components/pages/payees/CreateMenu.svelte";
    import ListEntry from "$lib/components/pages/payees/ListEntry.svelte";
    import EditMenu from "$lib/components/pages/payees/EditMenu.svelte";

    let { data }: { data: PageData } = $props();
    let payees: GetPayeeDto[] = $state(data.payees)
    
    let selectedPayee: GetPayeeDto | undefined = $state(undefined);
    let showAddMenu: boolean = $state(false);
    
    let showEditMenu: boolean = $state(false);

    const onDeleteButtonClicked = async (payee: GetPayeeDto) => {
        await deletePayee(payee.id);
        updatePayees();
    }

    const toggleEditMenu = (payee: GetPayeeDto) => {
        selectedPayee = payee;
        showEditMenu = !showEditMenu;
    }

    const closeEditMenu = () => {
        selectedPayee = undefined;
        showEditMenu = false;
    }

    const updatePayees = async () => {
        payees = await getAllPayees()
    }
</script>

<div class="w-full h-full flex flex-row p-2 space-x-5">
    <div class="grow flex flex-col space-y-1">
        <button onclick={() => {showAddMenu = !showAddMenu}} type="button" class="btn preset-filled-primary-500">
            Add Payee
        </button>
        {#if showAddMenu}
            <CreateMenu update={updatePayees} />
        {/if}
        {#each payees as payee}
            <div class="flex flex-row space-x-1">
                <ListEntry {payee} />
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <button onclick={() => {onDeleteButtonClicked(payee)}} class="btn-icon preset-filled-error-500">
                    <iconify-icon icon="material-symbols:delete-rounded" width="24" height="24"></iconify-icon>
                </button>
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <button onclick={() => {toggleEditMenu(payee)}} class="btn-icon preset-filled-primary-500">
                    <iconify-icon icon="material-symbols:edit-rounded" width="24" height="24"></iconify-icon>
                </button>
            </div>
        {/each}
    </div>
    {#if showEditMenu && selectedPayee !== undefined}
        <EditMenu payee={selectedPayee} update={updatePayees} close={closeEditMenu}/>
    {/if}
</div>
