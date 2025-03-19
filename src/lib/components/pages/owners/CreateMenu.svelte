<script lang="ts">
    import { postCreateOwner } from "$lib/api/OwnerAPI";
    import CardTitle from "$lib/components/elements/CardTitle.svelte";
    import InputField from "$lib/components/InputField.svelte";
    import type { CreateOwnerDto } from "$lib/types/api/Owner";
    
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

<div class="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 w-full p-4 text-center flex flex-col space-y-5 drop-shadow-sm">
    <CardTitle text="Create User"/>
    <div class="flex flex-col space-y-1">
        <InputField bind:value={newOwnerFirstName} type="text" placeholder="First Name" optional={false}/>
        <InputField bind:value={newOwnerLastName} type="text" placeholder="Last Name" optional={false}/>
        <InputField bind:value={newOwnerDate} type="date" placeholder="Last Name" optional={true}/>
    </div>
    <div class="flex flex-row space-x-5">
        <button onclick={resetInputFields} type="button" class="btn preset-tonal-surface basis-1/2">
            <iconify-icon icon="material-symbols:reset-settings-rounded" width="24" height="24"></iconify-icon>
            <span>Reset</span>
        </button>
        <button onclick={onSaveButtonClicked} type="button" class="btn preset-tonal-success basis-1/2">
            <iconify-icon icon="material-symbols:save-rounded" width="24" height="24"></iconify-icon>
            <span>Save</span>
        </button>
    </div>
</div>