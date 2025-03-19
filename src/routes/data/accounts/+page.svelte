<script lang="ts">
    import { deleteAccount, getAllAccounts } from '$lib/api/AccountsAPI';
    import DataContainer from '$lib/components/elements/DataContainer.svelte';
    import CreateMenu from '$lib/components/pages/accounts/CreateMenu.svelte';
    import EditMenu from '$lib/components/pages/accounts/EditMenu.svelte';
    import ListEntry from '$lib/components/pages/accounts/ListEntry.svelte';
    import type { GetAccountDto } from '$lib/types/api/Account';
    import type { GetInstituteDto } from '$lib/types/api/Institute';
    import type { GetOwnerDto } from '$lib/types/api/Owner';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
    let accounts: GetAccountDto[] = $state(data.accounts);
    let owners: GetOwnerDto[] = $state(data.owners);
    let institutes: GetInstituteDto[] = $state(data.institutes);

    let selectedAccount: GetAccountDto | undefined = $state(undefined);
    let showAddMenu: boolean = $state(false);
    let showEditMenu: boolean = $state(false);

    const onDeleteButtonClicked = async (account: GetAccountDto) => {
        await deleteAccount(account.id);
        updateAccounts();
    }

    const toggleEditMenu = (account: GetAccountDto) => {
        selectedAccount = account;
        showEditMenu = !showEditMenu;
    }

    const closeEditMenu = () => {
        selectedAccount = undefined;
        showEditMenu = false;
    }

    const updateAccounts = async () => {
        accounts = await getAllAccounts();
    }
</script>

<DataContainer bind:showAddMenu bind:showEditMenu>
    {#snippet addMenuButton()}
        <button onclick={() => {showAddMenu = !showAddMenu}} type="button" class="btn preset-filled-primary-500">
            Add Account
        </button>
    {/snippet}
    {#snippet addMenu()}
        <CreateMenu institutes={institutes} owners={owners} update={updateAccounts} />
    {/snippet}
    {#snippet list()}
        {#each accounts as account}
            <div class="flex flex-row space-x-1">
                <ListEntry {account} />
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <button onclick={() => {onDeleteButtonClicked(account)}} class="btn-icon preset-filled-error-500">
                    <iconify-icon icon="material-symbols:delete-rounded" width="24" height="24"></iconify-icon>
                </button>
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <button onclick={() => {toggleEditMenu(account)}} class="btn-icon preset-filled-primary-500">
                    <iconify-icon icon="material-symbols:edit-rounded" width="24" height="24"></iconify-icon>
                </button>
            </div>
        {/each}
    {/snippet}
    {#snippet editMenu()}
        {#if selectedAccount !== undefined}
            <EditMenu account={selectedAccount} institutes={institutes} owners={owners} update={updateAccounts} close={closeEditMenu}/>
        {/if}
    {/snippet}
</DataContainer>
