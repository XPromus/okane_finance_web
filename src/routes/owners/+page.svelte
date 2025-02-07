<script lang="ts">
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

<div class="w-full h-full p-5 flex flex-row space-x-3">
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
        <div class="card h-full">
            
        </div>
    </div>
</div>