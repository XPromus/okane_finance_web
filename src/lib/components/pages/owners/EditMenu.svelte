<script lang="ts">
    import { putUpdateOwner } from "$lib/api/OwnerAPI";
    import CloseButton from "$lib/components/elements/buttons/CloseButton.svelte";
    import SaveButton from "$lib/components/elements/buttons/SaveButton.svelte";
    import CardTitle from "$lib/components/elements/CardTitle.svelte";
    import InputField from "$lib/components/InputField.svelte";
    import type { EditOwnerDto, GetOwnerDto } from "$lib/types/api/Owner";
    import { onMount } from "svelte";
    import { _ } from "svelte-i18n";

    let { owner, updateOwners, close }: { owner: GetOwnerDto, updateOwners: any, close: any } = $props();

    let currentOwnerId: string = $state("");
    let currentOwnerFirstName: string = $state("");
    let currentOwnerLastName: string = $state("");
    let currentOwnerDate: Date | undefined = $state(new Date());

    const onSaveButtonClicked = async () => {
        const ownerToUpdate: EditOwnerDto = {
            firstName: currentOwnerFirstName,
            lastName: currentOwnerLastName,
            birthday: currentOwnerDate
        }

        await putUpdateOwner(ownerToUpdate, currentOwnerId);
        await updateOwners();
    }

    onMount(() => {
        currentOwnerId = owner.id;
        currentOwnerFirstName = owner.firstName,
        currentOwnerLastName = owner.lastName,
        currentOwnerDate = owner.birthday
    })
</script>

<div class="basis-1/5 card preset-filled-surface-100-900 border-[1px] border-surface-200-800 p-4 text-center flex flex-col space-y-5">
    <CardTitle text={$_("data.owners.editMenu.title.title")}/>
    <InputField bind:value={currentOwnerFirstName} type="text" placeholder={$_("data.owners.createMenu.firstNamePlaceholder.title")} optional={false}/>
    <InputField bind:value={currentOwnerLastName} type="text" placeholder={$_("data.owners.createMenu.lastNamePlaceholder.title")} optional={false}/>
    <InputField bind:value={currentOwnerDate} type="date" placeholder={$_("data.owners.createMenu.birthdayPlaceholder.title")} optional={true}/>
    <div class="flex flex-row space-x-5 w-full">
        <CloseButton close={close}/>
        <SaveButton save={onSaveButtonClicked}/>
    </div>
</div>
