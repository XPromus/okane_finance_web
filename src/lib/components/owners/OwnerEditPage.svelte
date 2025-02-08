<script lang="ts">
    import { deleteOwner, getAllOwners, putUpdateOwner } from "$lib/api/OwnerAPI";
    import type { Owner, OwnerDto } from "$lib/types/api/Owner";
    import Icon from "@iconify/svelte";
    import { Avatar } from "@skeletonlabs/skeleton";

    let { owners } = $props()
    let ownerTyped: Owner[] = $derived(owners)

    const getOwnerInitials = (firstName: string, lastName: string): string => {
        return firstName[0] + lastName[0]
    }

    let currentOwnerId: string = $state("");
    let currentOwnerFirstName: string = $state("");
    let currentOwnerLastName: string = $state("");
    let currentOwnerDate: Date | undefined = $state(new Date());

    const onOwnerButtonClicked = (newOwner: Owner) => {
        currentOwnerId = newOwner.id
        currentOwnerFirstName = newOwner.firstName
        currentOwnerLastName = newOwner.lastName
        currentOwnerDate = newOwner.birthday
    }

    const onSaveButtonClicked = async () => {
        const ownerToUpdate: OwnerDto = {
            firstName: currentOwnerFirstName,
            lastName: currentOwnerLastName,
            birthday: currentOwnerDate
        }

        const updatedOwner: Owner = await putUpdateOwner(ownerToUpdate, currentOwnerId);
        owners = await getAllOwners()
    }

    const onDeleteButtonClicked = async () => {
        const status: boolean = await deleteOwner(currentOwnerId)
    }
</script>

<div class="basis-1/2">
    <div class="flex flex-col space-y-3">
        {#each ownerTyped as owner}
            <button onclick={() => {onOwnerButtonClicked(owner)}} class="w-full flex flex-row space-x-5 card card-hover p-2">
                <Avatar initials={getOwnerInitials(owner.firstName, owner.lastName)} background="bg-primary-500" width="w-10" />
                <span class="content-center grow text-left">{owner.firstName} {owner.lastName}</span>
            </button>
        {/each}
    </div>
</div>
<div class="basis-1/2 h-full">
    <div class="card h-full relative">
        <div class="p-5 h-full flex flex-col space-y-5">
            <div class="flex flex-row">
                <Avatar initials={getOwnerInitials(currentOwnerFirstName, currentOwnerLastName)} background="bg-primary-500" width="w-32"/>
                <div class="grow">

                </div>
                <div class="flex h-fit">
                    <button onclick={() => {currentOwnerId = ""}} type="button" class="btn-icon variant-soft-surface ">
                        <Icon icon="material-symbols:close-rounded" width="24" height="24" />
                    </button>
                </div>
            </div>
            <div class="flex flex-col space-y-5">
                <label class="label">
                    <span>First Name</span>
                    <input bind:value={currentOwnerFirstName} class="input" type="text" placeholder="first name" disabled={currentOwnerId === ""} />
                </label>
                <label class="label">
                    <span>Last Name</span>
                    <input bind:value={currentOwnerLastName} class="input" type="text" placeholder="last name" disabled={currentOwnerId === ""} />
                </label>
                <label class="label">
                    <span>Birthday</span>
                    <input bind:value={currentOwnerDate} class="input" type="date" placeholder="birthday" disabled={currentOwnerId === ""} />
                </label>
            </div>
            <div class="grow"></div>
            <div class="flex flex-row space-x-5">
                <button onclick={onDeleteButtonClicked} type="button" class="btn variant-soft-error basis-1/4" disabled={currentOwnerId === ""}>
                    <Icon icon="material-symbols:delete-forever-rounded" width="24" height="24" />
                    <span>Delete</span>
                </button>
                <button type="button" class="btn variant-soft-surface basis-1/4" disabled={currentOwnerId === ""}>
                    <Icon icon="material-symbols:reset-settings-rounded" width="24" height="24" />
                    <span>Reset</span>
                </button>
                <button onclick={onSaveButtonClicked} type="button" class="btn variant-soft-success basis-1/2" disabled={currentOwnerId === ""}>
                    <Icon icon="material-symbols:save-rounded" width="24" height="24" />
                    <span>Save</span>
                </button>
            </div>
        </div>
        {#if currentOwnerId === ""}
            <div class="z-0 absolute inset-0 card variant-glass-surface flex justify-center items-center">
                <h2 class="h2">select owner to edit</h2>
            </div>
        {/if}
    </div>
</div>