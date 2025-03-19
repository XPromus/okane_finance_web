<script lang="ts">
    import { postCreateOwner } from "$lib/api/OwnerAPI";
    import CardTitle from "$lib/components/elements/CardTitle.svelte";
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

        const newOwner = await postCreateOwner(ownerToSave)
        resetInputFields();
        await updateOwners();
    }

    const resetInputFields = () => {
        newOwnerFirstName = "";
        newOwnerLastName = "";
        newOwnerDate = new Date()
    }
</script>

<div class="flex flex-col space-y-5 w-full h-full p-5">
    <CardTitle text="Add"/>
    <div class="flex flex-col space-y-1">
        <span>First Name</span>
        <input bind:value={newOwnerFirstName} class="input w-full" type="text" placeholder="first name" />
    </div>
    <div class="flex flex-col space-y-1">
        <span>Last Name</span>
        <input bind:value={newOwnerLastName} class="input w-full" type="text" placeholder="last name" />
    </div>
    <div class="flex flex-col space-y-1">
        <span>Birthday</span>
        <input bind:value={newOwnerDate} class="input w-full" type="date" placeholder="birthday" />
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