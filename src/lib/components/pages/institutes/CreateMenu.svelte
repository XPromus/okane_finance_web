<script lang="ts">
    import { postCreateInstitute } from "$lib/api/InstitutesAPI";
    import CardTitle from "$lib/components/elements/CardTitle.svelte";
    import InputField from "$lib/components/InputField.svelte";
    import type { CreateInstituteDto } from "$lib/types/api/Institute";

    let { updateInstitutes } = $props();

    let newInstituteName: string = $state("");

    const onSaveButtonClicked = async () => {
        const newInstitute: CreateInstituteDto = {
            instituteName: newInstituteName
        }
        
        await postCreateInstitute(newInstitute);
        updateInstitutes();
    }

    const resetInputFields = () => {
        newInstituteName = "";
    }
</script>

<div class="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 w-full p-4 text-center flex flex-col space-y-5 drop-shadow-sm">
    <CardTitle text="Create Institute"/>
    <div class="flex flex-col space-y-1">
        <InputField bind:value={newInstituteName} type="text" placeholder="Institute Name" optional={false}/>
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
