<script lang="ts">
    import { putUpdateInstitute } from "$lib/api/InstitutesAPI";
    import CardTitle from "$lib/components/elements/CardTitle.svelte";
    import InputField from "$lib/components/InputField.svelte";
    import type { EditInstituteDto, GetInstituteDto } from "$lib/types/api/Institute";
    import { onMount } from "svelte";

    let { institute, updateInstitutes, close }: { institute: GetInstituteDto, updateInstitutes: any, close: any } = $props();
    
    let currentInstituteId: string = $state("");
    let currentInstituteName: string = $state("");

    const onSaveButtonClicked = async () => {
        const instituteToSave: EditInstituteDto = {
            instituteName: currentInstituteName
        };

        await putUpdateInstitute(currentInstituteId, instituteToSave);
        updateInstitutes();
    }

    onMount(() => {
        currentInstituteId = institute.id;
        currentInstituteName = institute.instituteName;
    });
</script>

<div class="basis-1/5 card preset-filled-surface-100-900 border-[1px] border-surface-200-800 p-4 text-center flex flex-col space-y-5">
    <CardTitle text="Edit"/>
    <InputField bind:value={currentInstituteName} type="text" placeholder="Institute Name" optional={false}/>
    <div class="flex flex-row space-x-5 w-full">
        <button onclick={close} type="button" class="btn preset-tonal-surface grow">Close</button>
        <button onclick={onSaveButtonClicked} type="button" class="btn preset-tonal-success grow">Save</button>
    </div>
</div>