<script lang="ts">
    import type { PageData } from './$types';
    import sparkasse_logo from "$lib/images/sparkasse-logo.svg";
    import type {Account, AccountDto} from "$lib/types/api/Account";
    import Icon from "@iconify/svelte";
    import {postCreateAccount, putUpdateAccount} from "$lib/api/AccountsAPI";
    import type {Owner} from "$lib/types/api/Owner";

    let { data }: { data: PageData } = $props()

    let activeAccountId: string = $state("")
    let newAccountName: string = $state("");
    let newAccountInstitute: string = $state("");
    let newAccountStartingBalance: number = $state(0);
    let newAccountOwnerId: string = $state("");

    const onAccountButtonClicked = (newAccount: Account) => {
        activeAccountId = newAccount.id,
        newAccountName = newAccount.accountName,
        newAccountInstitute = newAccount.institute,
        newAccountStartingBalance = newAccount.startingBalance,
        newAccountOwnerId = newAccount.owner.id
    }

    const resetInputFields = () => {
        newAccountName = "";
        newAccountInstitute = "";
        newAccountStartingBalance = 0;
        newAccountOwnerId = "";
    }

    const onSaveButtonClicked = async () => {
        if (!checkFieldsCompleted()) {
            alert("ENTER DATA YOU DIPSHIT!")
            return;
        }

        const accountToSave: AccountDto = {
            accountName: newAccountName,
            startingBalance: newAccountStartingBalance,
            institute: newAccountInstitute,
            ownerId: newAccountOwnerId
        };

        const newAccount = await putUpdateAccount(accountToSave, activeAccountId);
        console.log(newAccount.id)
        resetInputFields();
    }

    const checkFieldsCompleted = (): boolean => {
        return newAccountName != "" && newAccountInstitute != "" && newAccountOwnerId != ""
    }
</script>

<div class="w-full h-full p-5 flex flex-row space-x-5">
    <div class="basis-1/2 card p-5 flex flex-col">
        {#each data.accounts as account}
            <button onclick={() => onAccountButtonClicked(account)} class="card card-hover p-2 flex flex-row space-x-5 max-h-8 align-middle">
                <img src={sparkasse_logo} alt="Logo Sparkasse" />
                <span>{account.accountName}</span>
            </button>
        {/each}
    </div>
    <div class="basis-1/2 card p-5 flex flex-col">
        {#if activeAccountId !== ""}
            <div class="flex flex-col space-y-1">
                <p>Account Name</p>
                <input bind:value={newAccountName} class="input" title="Input (text)" type="text" placeholder="input text" />
            </div>
            <div class="flex flex-col space-y-1">
                <p>Institute</p>
                <input bind:value={newAccountInstitute} class="input" title="Input (text)" type="text" placeholder="input text" />
            </div>
            <div class="flex flex-col space-y-1">
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
            <div class="flex flex-col space-y-1">
                <p>Account Owner</p>
                <select bind:value={newAccountOwnerId} class="select">
                    {#each data.owners as owner, i }
                        <option value={owner.id}>{owner.firstName} {owner.lastName}</option>
                    {/each}
                </select>
            </div>
            <div class="grow"></div>
            <div class="flex flex-row space-x-5">
                <button onclick={resetInputFields} type="button" class="btn variant-soft-surface basis-1/2">
                    <Icon icon="material-symbols:reset-settings-rounded" width="24" height="24" />
                    <span>Reset</span>
                </button>
                <button onclick={onSaveButtonClicked} type="button" class="btn variant-soft-success basis-1/2">
                    <Icon icon="material-symbols:save-rounded" width="24" height="24" />
                    <span>Save</span>
                </button>
            </div>
        {/if}
    </div>
</div>