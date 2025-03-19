<script lang="ts">
    import { postCreateOwner } from "$lib/api/OwnerAPI";
    import CardTitle from "$lib/components/elements/CardTitle.svelte";
    import InputField from "$lib/components/InputField.svelte";
    import type { CreateOwnerDto } from "$lib/types/api/Owner";
    import Icon from "@iconify/svelte";

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

<div class="card flex flex-col space-y-5 w-full h-fit p-5">
    <CardTitle text="Create User"/>
    <div class="flex flex-col space-y-1">
        <InputField bind:value={newOwnerFirstName} type="text" placeholder="First Name" optional={false}/>
        <InputField bind:value={newOwnerLastName} type="text" placeholder="Last Name" optional={false}/>
        <InputField bind:value={newOwnerDate} type="date" placeholder="Last Name" optional={true}/>
    </div>
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