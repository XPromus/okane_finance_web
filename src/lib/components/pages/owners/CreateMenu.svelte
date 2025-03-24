<script lang="ts">
    import { postCreateOwner } from "$lib/api/OwnerAPI";
    import ResetButton from "$lib/components/elements/buttons/ResetButton.svelte";
    import SaveButton from "$lib/components/elements/buttons/SaveButton.svelte";
    import Card from "$lib/components/elements/Card.svelte";
    import CardTitle from "$lib/components/elements/CardTitle.svelte";
    import InputField from "$lib/components/InputField.svelte";
    import type { CreateOwnerDto } from "$lib/types/api/Owner";
    import { _ } from "svelte-i18n";

    let { updateOwners } = $props();

    let newOwnerFirstName: string = $state("");
    let newOwnerLastName: string = $state("");
    let newOwnerDate: Date = $state(new Date());

    const onSaveButtonClicked = async () => {
        const ownerToSave: CreateOwnerDto = {
            firstName: newOwnerFirstName,
            lastName: newOwnerLastName,
            birthday: newOwnerDate
        }

        await postCreateOwner(ownerToSave)
        await updateOwners();
    }

    const resetInputFields = () => {
        newOwnerFirstName = "";
        newOwnerLastName = "";
        newOwnerDate = new Date()
    }
</script>

<Card>
    {#snippet title()}
        <CardTitle text={$_("data.owners.createMenu.title.title")}/>
    {/snippet}
    {#snippet content()}
        <div class="flex flex-col space-y-1">
            <InputField 
                label={$_("data.owners.createMenu.firstNamePlaceholder.title")} 
                bind:value={newOwnerFirstName} 
                type="text" 
                placeholder={$_("data.owners.createMenu.firstNamePlaceholder.title")} 
                optional={false}
            />
            <InputField
                label={$_("data.owners.createMenu.lastNamePlaceholder.title")} 
                bind:value={newOwnerLastName} 
                type="text" 
                placeholder={$_("data.owners.createMenu.lastNamePlaceholder.title")} 
                optional={false}
            />
            <InputField
                label={$_("data.owners.createMenu.birthdayPlaceholder.title")} 
                bind:value={newOwnerDate} 
                type="date" 
                placeholder={$_("data.owners.createMenu.birthdayPlaceholder.title")} 
                optional={true}
            />
        </div>
    {/snippet}
    {#snippet footer()}
        <div class="flex flex-row space-x-5">
            <ResetButton reset={resetInputFields} />
            <SaveButton save={onSaveButtonClicked} />
        </div>
    {/snippet}
</Card>
