<script lang="ts">
    import Icon from "@iconify/svelte";
    import type { PageData } from './$types';
    import type { AccountDto } from "$lib/types/api/Account";
    import { postCreateAccount } from "$lib/api/AccountsAPI";
    let { data }: { data: PageData } = $props();

    let newAccountName: string = $state("");
    let newAccountInstitute: string = $state("");
    let newAccountStartingBalance: number = $state(0);
    let newAccountOwnerId: string = $state("");

    const resetInputFields = () => {
        newAccountName = "";
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

        const newAccount = await postCreateAccount(accountToSave);
        console.log(newAccount.id)
        resetInputFields();
    }

    const checkFieldsCompleted = (): boolean => {
        return newAccountName != "" && newAccountInstitute != "" && newAccountOwnerId != ""
    }
</script>

<div class="p-5 flex flex-col space-y-5 h-full card">
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
</div>