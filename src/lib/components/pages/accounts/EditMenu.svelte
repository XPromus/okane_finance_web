<script lang="ts">
    import { putUpdateAccount } from "$lib/api/AccountsAPI";
    import CloseButton from "$lib/components/elements/buttons/CloseButton.svelte";
    import SaveButton from "$lib/components/elements/buttons/SaveButton.svelte";
    import Card from "$lib/components/elements/Card.svelte";
    import CardTitle from "$lib/components/elements/CardTitle.svelte";
    import InputField from "$lib/components/InputField.svelte";
    import SelectField from "$lib/components/SelectField.svelte";
    import { mapInstituteToSelectFieldData, mapOwnerToSelectFieldData } from "$lib/model/selectFieldMapper";
    import type { EditAccountDto, GetAccountDto } from "$lib/types/api/Account";
    import type { GetInstituteDto } from "$lib/types/api/Institute";
    import type { GetOwnerDto } from "$lib/types/api/Owner";
    import { onMount } from "svelte";
    import { _ } from "svelte-i18n";

    let { 
        account,
        institutes, 
        owners,
        update,
        close
    }: { 
        account: GetAccountDto,
        institutes: GetInstituteDto[], 
        owners: GetOwnerDto[],
        update: any,
        close: any
    } = $props();

    let accountId: string = $state("");
    let accountName: string = $state("");
    let accountInstituteId: string = $state("");
    let accountStartingBalance: number = $state(0);
    let accountOwnerId: string = $state("");

    const onSaveButtonClicked = async () => {
        const accountToSave: EditAccountDto = {
            accountName: accountName,
            startingBalance: accountStartingBalance,
            instituteID: accountInstituteId,
            ownerID: accountOwnerId
        };

        await putUpdateAccount(accountId, accountToSave);
        update()
    }

    onMount(() => {
        accountId = account.id;
        accountName = account.accountName;
        accountInstituteId = account.instituteID;
        accountStartingBalance = account.startingBalance;
        accountOwnerId = account.ownerID
    })
</script>

<Card classes="basis-1/5">
    {#snippet title()}
        <CardTitle text={$_("data.accounts.editMenu.title.title")}/>
    {/snippet}
    {#snippet content()}
        <div class="flex flex-col space-y-1">
            <InputField
                label={$_("data.accounts.editMenu.accountNamePlaceholder.title")} 
                bind:value={accountName} 
                type="text" 
                placeholder={$_("data.accounts.editMenu.accountNamePlaceholder.title")} 
                optional={false}
            />
            <InputField 
                label={$_("data.accounts.editMenu.startingBalancePlaceholder.title")}
                bind:value={accountStartingBalance} 
                type="number" 
                placeholder={$_("data.accounts.editMenu.startingBalancePlaceholder.title")} 
                optional={false}
            />
            <SelectField 
                bind:selected={accountInstituteId}
                label={$_("data.accounts.editMenu.institutePlaceholder.title")}
                data={mapInstituteToSelectFieldData(institutes)}
                placeholder={$_("data.accounts.editMenu.institutePlaceholder.title")}
                optional={false}
            />
            <SelectField 
                bind:selected={accountOwnerId}
                label={$_("data.accounts.editMenu.ownerPlaceholder.title")}
                data={mapOwnerToSelectFieldData(owners)}
                placeholder={$_("data.accounts.editMenu.ownerPlaceholder.title")}
                optional={false}
            />
        </div>
    {/snippet}
    {#snippet footer()}
        <div class="flex flex-row space-x-5 w-full">
            <CloseButton close={close}/>
            <SaveButton save={onSaveButtonClicked}/>
        </div>
    {/snippet}
</Card>
