<script lang="ts">
    import { deleteOwner, putUpdateOwner } from "$lib/api/OwnerAPI";
    import CardTitle from "$lib/components/elements/CardTitle.svelte";
    import type { EditOwnerDto, GetOwnerDto } from "$lib/types/api/Owner";
    import Icon from "@iconify/svelte";

    let { owners, updateOwners } = $props();

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

    const onDeleteButtonClicked = async () => {
        await deleteOwner(currentOwnerId);
        await updateOwners();
    }
</script>

<div class="flex flex-col space-y-5 h-full w-full p-5">
    <CardTitle text="Edit"/>
    <select bind:value={currentOwnerId} class="input" disabled={owners.length == 0}>
        {#each owners as owner }
            <option value={owner.id}>{owner.firstName} {owner.lastName}</option>
        {/each}
    </select>
    <div class="flex flex-col space-y-1">
        <span>First Name</span>
        <input bind:value={currentOwnerFirstName} class="input" type="text" placeholder="first name" disabled={currentOwnerId === ""} />
    </div>
    <div class="flex flex-col space-y-1">
        <span>Last Name</span>
        <input bind:value={currentOwnerLastName} class="input" type="text" placeholder="last name" disabled={currentOwnerId === ""} />
    </div>
    <div class="flex flex-col space-y-1">
        <span>Birthday</span>
        <input bind:value={currentOwnerDate} class="input" type="date" placeholder="birthday" disabled={currentOwnerId === ""} />
    </div>
    <div class="grow"></div>
    <div class="flex flex-row space-x-5">
        <button onclick={onDeleteButtonClicked} type="button" class="btn preset-tonal-error basis-1/4" disabled={currentOwnerId === ""}>
            <Icon icon="material-symbols:delete-forever-rounded" width="24" height="24" />
            <span>Delete</span>
        </button>
        <button type="button" class="btn preset-tonal-surface basis-1/4" disabled={currentOwnerId === ""}>
            <Icon icon="material-symbols:reset-settings-rounded" width="24" height="24" />
            <span>Reset</span>
        </button>
        <button onclick={onSaveButtonClicked} type="button" class="btn preset-tonal-success basis-1/2" disabled={currentOwnerId === ""}>
            <Icon icon="material-symbols:save-rounded" width="24" height="24" />
            <span>Save</span>
        </button>
    </div>
</div>
