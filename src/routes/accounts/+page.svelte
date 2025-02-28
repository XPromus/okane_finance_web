<script lang="ts">
    import { getAllAccounts } from '$lib/api/AccountsAPI';
    import { getAllInstitutes } from '$lib/api/InstitutesAPI';
    import { getAllOwners } from '$lib/api/OwnerAPI';
    import AccountCreatePanel from '$lib/components/pages/accounts/AccountCreatePanel.svelte';
    import AccountEditPanel from '$lib/components/pages/accounts/AccountEditPanel.svelte';
    import AccountOverviewPanel from '$lib/components/pages/accounts/AccountOverviewPanel.svelte';
    import type { GetAccountDto } from '$lib/types/api/Account';
    import type { GetInstituteDto } from '$lib/types/api/Institute';
    import type { GetOwnerDto } from '$lib/types/api/Owner';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
    let accounts: GetAccountDto[] = $state(data.accounts);
    let owners: GetOwnerDto[] = $state(data.owners);
    let institutes: GetInstituteDto[] = $state(data.institutes);

    const updateInstitutes = async () => {
        institutes = await getAllInstitutes();
    }

    const updateOwners = async () => {
        owners = await getAllOwners();
    }

    const updateAccounts = async () => {
        accounts = await getAllAccounts();
    }
</script>

<div class="w-full h-full flex flex-row space-x-5">
    <div class="card basis-1/2">
        <AccountOverviewPanel {accounts}/>
    </div>
    <div class="basis-1/2 flex flex-col space-y-5">
        <div class="card basis-1/2">
            <AccountCreatePanel {institutes} {owners} {updateInstitutes} {updateOwners} />
        </div>
        <div class="card basis-1/2">
            <AccountEditPanel {accounts} {institutes} {owners} {updateAccounts} />
        </div>
    </div>
</div>
