<script lang="ts">
    import type { PageData } from './$types';
    import type {Institute, InstituteDto} from "$lib/types/api/Institute";
    import {putUpdateInstitute} from "$lib/api/InstitutesAPI";
    import Icon from "@iconify/svelte";

    let { data }: { data: PageData } = $props();

    let activeInstituteId: string = $state("");
    let newInstituteName: string = $state("");

    const onInstituteButtonClicked = (newInstitute: Institute) => {
        activeInstituteId = newInstitute.id;
        newInstituteName = newInstitute.name;
    }

    const resetInputFields = () => {
        newInstituteName = "";
        activeInstituteId = "";
    }

    const onSaveButtonClicked = async () => {
        const instituteToSave: InstituteDto = {
            instituteName: newInstituteName
        };

        const newInstitute = await putUpdateInstitute(
            activeInstituteId,
            instituteToSave
        );

        resetInputFields();
    }
</script>

<div class="w-full h-full p-5 flex flex-row space-x-5">
    <div class="basis-1/2 card p-5 flex flex-col space-y-1">
        {#each data.institutes as institute}
            <button onclick={() => onInstituteButtonClicked(institute)} class="card card-hover p-2 flex flex-row space-x-5 max-h-8 align-middle">
                <span>{institute.name}</span>
            </button>
        {/each}
    </div>
    <div class="basis-1/2 card p-5 flex flex-col">
        {#if activeInstituteId !== ""}
            <div class="flex flex-col space-y-1">
                <p>Institute Name</p>
                <input bind:value={newInstituteName} class="input" title="Input (text)" type="text" placeholder="input text" />
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
        {/if}
    </div>
</div>