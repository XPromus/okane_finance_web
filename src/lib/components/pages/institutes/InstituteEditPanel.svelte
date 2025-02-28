<script lang="ts">
    import { deleteInstitute, putUpdateInstitute } from "$lib/api/InstitutesAPI";
    import CardTitle from "$lib/components/elements/CardTitle.svelte";
    import type { EditInstituteDto } from "$lib/types/api/Institute";
    import Icon from "@iconify/svelte";

    let { institutes, updateInstitutes } = $props();

    let activeInstituteId: string = $state("");
    let newInstituteName: string = $state("");

    const onDeleteButtonClicked = async () => {
        await deleteInstitute(activeInstituteId);
        resetInputFields();
        updateInstitutes();
    }

    const onSaveButtonClicked = async () => {
        const instituteToSave: EditInstituteDto = {
            instituteName: newInstituteName
        };

        await putUpdateInstitute(activeInstituteId, instituteToSave)
        resetInputFields();
        updateInstitutes();
    }

    const resetInputFields = () => {
        newInstituteName = "";
        activeInstituteId = "";
    }
</script>

<div class="flex flex-col space-y-5 h-full w-full p-5">
    <CardTitle text="Edit"/>
    <select bind:value={activeInstituteId} class="input" disabled={institutes.length <= 0}>
        {#each institutes as institute }
            <option value={institute.id}>{institute.instituteName}</option>
        {/each}
    </select>
    {#if activeInstituteId === "" || activeInstituteId === undefined}
        <span>Select Institute</span>
    {:else}
        <div class="flex flex-col space-y-1">
            <p>Institute Name</p>
            <input bind:value={newInstituteName} class="input" title="Input (text)" type="text" placeholder="input text" disabled={activeInstituteId === "" || activeInstituteId === undefined}/>
        </div>
        <div class="grow"></div>
        <div class="flex flex-row space-x-5">
            <button onclick={onDeleteButtonClicked} type="button" class="btn variant-soft-error basis-1/4">
                <Icon icon="material-symbols:delete-forever-rounded" width="24" height="24" />
                <span>Delete</span>
            </button>
            <button onclick={resetInputFields} type="button" class="btn variant-soft-surface basis-1/2">
                <Icon icon="material-symbols:reset-settings-rounded" width="24" height="24" />
                <span>Reset</span>
            </button>
            <button onclick={onSaveButtonClicked} type="button" class="btn variant-soft-success basis-1/2">
                <Icon icon="material-symbols:save-rounded" width="24" height="24" />
                <span>Save</span>
            </button>
        </div>
    {/if}
</div>