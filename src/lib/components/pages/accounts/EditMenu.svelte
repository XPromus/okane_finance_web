<script lang="ts">
    import { putUpdateAccount } from "$lib/api/AccountsAPI";
    import CloseButton from "$lib/components/elements/buttons/CloseButton.svelte";
    import SaveButton from "$lib/components/elements/buttons/SaveButton.svelte";
    import Card from "$lib/components/elements/Card.svelte";
    import CardTitle from "$lib/components/elements/CardTitle.svelte";
    import InputField from "$lib/components/InputField.svelte";
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
            <InputField bind:value={accountName} type="text" placeholder={$_("data.accounts.editMenu.accountNamePlaceholder.title")} optional={false}/>
            <InputField bind:value={accountStartingBalance} type="number" placeholder={$_("data.accounts.editMenu.startingBalancePlaceholder.title")} optional={false}/>
            <select bind:value={accountInstituteId} class="select" placeholder={$_("data.accounts.editMenu.institutePlaceholder.title")}>
                {#each institutes as institute }
                    <option value={institute.id}></option>
                {/each}
            </select>
            <select bind:value={accountOwnerId} class="select" placeholder={$_("data.accounts.editMenu.ownerPlaceholder.title")}>
                {#each owners as owner }
                    <option value={owner.id}></option>
                {/each}
            </select>
        </div>
    {/snippet}
    {#snippet footer()}
        <div class="flex flex-row space-x-5 w-full">
            <CloseButton close={close}/>
            <SaveButton save={onSaveButtonClicked}/>
        </div>
    {/snippet}
</Card>
