<script lang="ts">
    import { postCreateAccount } from "$lib/api/AccountsAPI";
    import ResetButton from "$lib/components/elements/buttons/ResetButton.svelte";
    import SaveButton from "$lib/components/elements/buttons/SaveButton.svelte";
    import Card from "$lib/components/elements/Card.svelte";
    import CardTitle from "$lib/components/elements/CardTitle.svelte";
    import InputField from "$lib/components/InputField.svelte";
    import type { CreateAccountDto } from "$lib/types/api/Account";
    import type { GetInstituteDto } from "$lib/types/api/Institute";
    import type { GetOwnerDto } from "$lib/types/api/Owner";
    import { _ } from "svelte-i18n";

    let { 
        institutes, 
        owners,
        update 
    }: { 
        institutes: GetInstituteDto[], 
        owners: GetOwnerDto[],
        update: any
    } = $props();

    let newAccountName: string = $state("");
    let newAccountInstituteId: string = $state("");
    let newAccountStartingBalance: number = $state(0);
    let newAccountOwnerId: string = $state("");

    const onSaveButtonClicked = async () => {
        const accountToSave: CreateAccountDto = {
            accountName: newAccountName,
            startingBalance: newAccountStartingBalance,
            instituteID: newAccountInstituteId,
            ownerID: newAccountOwnerId
        };

        await postCreateAccount(accountToSave);
        update();
    }

    const resetInputFields = () => {
        newAccountName = "";
        newAccountInstituteId = "";
        newAccountStartingBalance = 0;
        newAccountOwnerId = "";
    }
</script>

<Card>
    {#snippet title()}
        <CardTitle text={$_("data.accounts.createMenu.title.title")}/>
    {/snippet}
    {#snippet content()}
        <div class="flex flex-col space-y-1">
            <InputField bind:value={newAccountName} type="text" placeholder={$_("data.accounts.createMenu.accountNamePlaceholder.title")} optional={false}/>
            <InputField bind:value={newAccountStartingBalance} type="number" placeholder={$_("data.accounts.createMenu.startingBalancePlaceholder.title")} optional={false}/>
            <select bind:value={newAccountInstituteId} class="select" placeholder={$_("data.accounts.createMenu.institutePlaceholder.title")}>
                {#each institutes as institute }
                    <option value={institute.id}>
                        {institute.instituteName}
                    </option>
                {/each}
            </select>
            <select bind:value={newAccountOwnerId} class="select" placeholder={$_("data.accounts.createMenu.ownerPlaceholder.title")}>
                {#each owners as owner }
                    <option value={owner.id}>
                        {owner.firstName} {owner.lastName}
                    </option>
                {/each}
            </select>
        </div>
    {/snippet}
    {#snippet footer()}
        <div class="flex flex-row space-x-5">
            <ResetButton reset={resetInputFields} />
            <SaveButton save={onSaveButtonClicked} />
        </div>
    {/snippet}
</Card>
