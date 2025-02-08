<script lang="ts">
    import type { Owner } from "$lib/types/api/Owner";
    import Icon from "@iconify/svelte";
    import { Avatar } from "@skeletonlabs/skeleton";

    let { owners } = $props()
    let hoveredButton: number = $state(-1)

    let currentOwnerIndex: number = $state(-1)
    let currentOwnerId: string = $state("")

    const getOwnerInitials = (firstName: string, lastName: string): string => {
        return firstName[0] + lastName[0]
    }

    const onOwnerButtonClicked = (newOwner: Owner, id: number) => {
        if (currentOwnerId == newOwner.id) {
            currentOwnerId = ""
            currentOwnerIndex = -1
        } else {
            currentOwnerId = newOwner.id
            currentOwnerIndex = id
        }
    }
</script>

<div class="grow flex flex-col space-y-3">
    {#each owners as owner, i}
        <button onclick={() => {onOwnerButtonClicked(owner, i)}} onmouseenter={() => {hoveredButton = i}} onmouseleave={() => {hoveredButton = -1}} class="w-full flex flex-row space-x-5 card card-hover p-2">
            <Avatar initials={getOwnerInitials(owner.firstName, owner.lastName)} background="bg-primary-500" width="w-10" />
            <span class="content-center grow text-left">{owner.firstName} {owner.lastName}</span>
            {#if hoveredButton == i}
                {#if owner.id === currentOwnerId}
                    <div class="content-center justify-center">
                        <Icon icon="material-symbols:arrow-menu-open-rounded" width="24" height="24" />
                    </div>
                {:else}
                    <div class="content-center justify-center">
                        <Icon icon="material-symbols:arrow-menu-close-rounded" width="24" height="24" />
                    </div>
                {/if}
            {/if}
        </button>
    {/each}
</div>

{#if currentOwnerId !== "" && currentOwnerIndex != -1}
    <div class="basis-1/2 card p-5">
        <header class="flex flex-row">
            <Avatar initials={getOwnerInitials(owners[currentOwnerIndex].firstName, owners[currentOwnerIndex].lastName)} background="bg-primary-500" width="w-10" />
            <span class="content-center grow text-center">{owners[currentOwnerIndex].firstName} {owners[currentOwnerIndex].lastName}</span>
        </header>
        <section>

        </section>
    </div>
{/if}