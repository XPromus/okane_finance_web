<script lang="ts">
    import { postCreateOwner } from "$lib/api/OwnerAPI";
    import type { OwnerDto } from "$lib/types/api/Owner";
    import Icon from "@iconify/svelte";
    import {Avatar, ProgressBar} from "@skeletonlabs/skeleton";
    import ErrorChip from "$lib/components/ErrorChip.svelte";
    import SuccessChip from "$lib/components/SuccessChip.svelte";


    let newOwnerFirstName: string = $state("");
    let newOwnerLastName: string = $state("");
    let newOwnerDate: Date = $state(new Date());

    const completedValueMax: number = 2;
    let completedValue: number = $derived(
        0 + ((newOwnerFirstName !== "") ? 1 : 0)
        + ((newOwnerLastName !== "") ? 1 : 0)
    );

    const onSaveButtonClicked = async () => {
        const ownerToSave: OwnerDto = {
            firstName: newOwnerFirstName,
            lastName: newOwnerLastName,
            birthday: newOwnerDate
        }

        const newOwner = await postCreateOwner(ownerToSave)
        resetInputFields()
    }

    const resetInputFields = () => {
        newOwnerFirstName = "";
        newOwnerLastName = "";
        newOwnerDate = new Date()
    }

    const getNewOwnerInitials = (): string => {
        return newOwnerFirstName[0] + newOwnerLastName[0]
    }
</script>

<div class="card w-full h-full p-5 flex flex-col space-y-5">
    <div class="flex flex-row">
        <Avatar initials={getNewOwnerInitials()} background="bg-primary-500" width="w-32"/>
    </div>
    <div class="flex flex-col space-y-5">
        <label class="label">
            <span>First Name</span>
            <input bind:value={newOwnerFirstName} class="input" type="text" placeholder="first name" />
        </label>
        <label class="label">
            <span>Last Name</span>
            <input bind:value={newOwnerLastName} class="input" type="text" placeholder="last name" />
        </label>
        <label class="label">
            <span>Birthday</span>
            <input bind:value={newOwnerDate} class="input" type="date" placeholder="birthday" />
        </label>
    </div>
    {#if completedValue !== completedValueMax}
        <ProgressBar meter="variant-filled-error" track="variant-soft-error" value={completedValue} max={completedValueMax} />
    {:else}
        <ProgressBar meter="variant-filled-success" track="variant-soft-success" value={completedValue} max={completedValueMax} />
    {/if}
    <div class="w-full flex flex-row space-x-5">
        {#if newOwnerFirstName === ""}
            <ErrorChip text="Enter Owner First Name"/>
        {:else}
            <SuccessChip text="Owner First Name"/>
        {/if}
        {#if newOwnerLastName === ""}
            <ErrorChip text="Enter Owner Last Name"/>
        {:else}
            <SuccessChip text="Owner Last Name"/>
        {/if}
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