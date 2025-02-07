<script lang="ts">
    import Icon from "@iconify/svelte";
    import { Avatar } from "@skeletonlabs/skeleton";

    type MockOwner = {
        firstName: string,
        lastName: string,
        accountBalance: number
    }

    const mockOwners: MockOwner[] = [
        { firstName: "John", lastName: "Doe", accountBalance: 10000 },
        { firstName: "Max", lastName: "Mustermann", accountBalance: 182376 },
        { firstName: "Max", lastName: "Mustermann", accountBalance: -12376 },
        { firstName: "Max", lastName: "Mustermann", accountBalance: 0 }
    ]

    const getOwnerInitials = (owner: MockOwner): string => {
        return owner.firstName[0] + owner.lastName[0]
    }
</script>

<div class="basis-1/2">
    <div class="flex flex-col space-y-3">
        {#each mockOwners as owner }
            <button onclick={() => {alert("Owner")}} class="w-full flex flex-row space-x-5 card card-hover p-2">
                <Avatar initials={getOwnerInitials(owner)} background="bg-primary-500" width="w-10" />
                <span class="content-center grow text-left">{owner.firstName} {owner.lastName}</span>
                {#if owner.accountBalance > 0}
                    <span class="h3 text-success-500 content-center text-center basis-1/5">{owner.accountBalance} €</span>
                {:else if owner.accountBalance == 0}
                    <span class="h3 text-warning-500 content-center text-center basis-1/5">{owner.accountBalance} €</span>
                {:else if owner.accountBalance < 0}    
                    <span class="h3 text-error-500 content-center text-center basis-1/5">{owner.accountBalance} €</span> 
                {/if}
            </button>
        {/each}
    </div>
</div>
<div class="basis-1/2 h-full">
    <div class="card h-full p-5 flex flex-col space-y-5">
        <div class="flex flex-row">
            <Avatar initials="JD" background="bg-primary-500" width="w-32"/>
            <div class="grow">

            </div>
            <div class="flex flex-col space-y-2 justify-center">
                <button type="button" class="btn variant-filled">
                    <Icon icon="material-symbols:upload" width="24" height="24" />
                    <span>Upload Avatar</span>
                </button>
                <button type="button" class="btn variant-filled-error">
                    <Icon icon="material-symbols:hide-image-outline-rounded" width="24" height="24" />
                    <span>Clear Avatar</span>
                </button>
            </div>
        </div>
        <div class="flex flex-col space-y-5">
            <label class="label">
                <span>First Name</span>
                <input class="input" type="text" placeholder="first name" />
            </label>
            <label class="label">
                <span>Last Name</span>
                <input class="input" type="text" placeholder="last name" />
            </label>
            <label class="label">
                <span>Birthday</span>
                <input class="input" type="date" placeholder="birthday" />
            </label>
        </div>
        <div class="grow"></div>
        <div class="flex flex-row space-x-5">
            <button type="button" class="btn variant-soft-error basis-1/4">
                <Icon icon="material-symbols:delete-forever-rounded" width="24" height="24" />
                <span>Delete</span>
            </button>
            <button type="button" class="btn variant-soft-surface basis-1/4">
                <Icon icon="material-symbols:reset-settings-rounded" width="24" height="24" />
                <span>Reset</span>
            </button>
            <button type="button" class="btn variant-soft-success basis-1/2">
                <Icon icon="material-symbols:save-rounded" width="24" height="24" />
                <span>Save</span>
            </button>
        </div>
    </div>
</div>