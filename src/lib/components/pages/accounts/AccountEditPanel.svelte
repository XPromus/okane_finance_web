<script lang="ts">
    import { putUpdateAccount } from "$lib/api/AccountsAPI";
    import CardTitle from "$lib/components/elements/CardTitle.svelte";
    import type { CreateAccountDto } from "$lib/types/api/Account";
    import Icon from "@iconify/svelte";

    let { accounts, institutes, owners, updateAccounts } = $props();

    let activeAccountId: string = $state("")
    let newAccountName: string = $state("");
    let newAccountInstituteId: string = $state("");
    let newAccountStartingBalance: number = $state(0);
    let newAccountOwnerId: string = $state("");

    const resetInputFields = () => {
        newAccountName = "";
        newAccountInstituteId = "";
        newAccountStartingBalance = 0;
        newAccountOwnerId = "";
    }

    const onSaveButtonClicked = async () => {
        const accountToSave: CreateAccountDto = {
            accountName: newAccountName,
            startingBalance: newAccountStartingBalance,
            instituteID: newAccountInstituteId,
            ownerID: newAccountOwnerId
        };

        const newAccount = await putUpdateAccount(accountToSave, activeAccountId);
        console.log(newAccount.id)
        resetInputFields();

        updateAccounts();
    }
</script>

<div class="flex flex-col space-y-5 h-full w-full p-5">
    <CardTitle text="Edit"/>
    <select bind:value={activeAccountId} class="input" disabled={accounts.length <= 0}>
        {#each accounts as account}
            <option value={account.id}>{account.accountName}</option>
        {/each}
    </select>
    <div class="flex flex-row space-x-5 w-full">
        <div class="flex flex-col space-y-1 basis-1/2">
            <p>Account Name</p>
            <input bind:value={newAccountName} class="input" title="Input (text)" type="text" placeholder="input text" />
        </div>
        <div class="flex flex-col space-y-1 basis-1/2">
            <p>Starting Balance</p>
            <div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
                <div class="input-group-shim">
                    <Icon icon="material-symbols:euro-symbol-rounded" width="24" height="24" />
                </div>
                <input bind:value={newAccountStartingBalance} type="number" placeholder="Starting Balance" />
                <select>
                    <option>€</option>
                </select>
            </div>
        </div>
    </div>
    <div class="flex flex-row space-x-5 w-full">
        <div class="flex flex-col space-y-1 basis-1/2">
            <p>Institute</p>
            <select bind:value={newAccountInstituteId} class="select">
                {#each institutes as institute}
                    <option value={institute.id}>{institute.name}</option>
                {/each}
            </select>
        </div>
        <div class="flex flex-col space-y-1 basis-1/2">
            <p>Account Owner</p>
            <select bind:value={newAccountOwnerId} class="select">
                {#each owners as owner}
                    <option value={owner.id}>{owner.firstName} {owner.lastName}</option>
                {/each}
            </select>
        </div>
    </div>
    <div class="grow"></div>
    <div class="flex flex-row space-x-5">
        <button onclick={resetInputFields} type="button" class="btn preset-tonal-surface basis-1/2">
            <Icon icon="material-symbols:reset-settings-rounded" width="24" height="24" />
            <span>Reset</span>
        </button>
        <button onclick={onSaveButtonClicked} type="button" class="btn preset-tonal-success basis-1/2">
            <Icon icon="material-symbols:save-rounded" width="24" height="24" />
            <span>Save</span>
        </button>
    </div>
</div>