<script lang="ts">
    import { postCreateInstitute } from "$lib/api/InstitutesAPI";
    import CardTitle from "$lib/components/elements/CardTitle.svelte";
    import type { CreateInstituteDto } from "$lib/types/api/Institute";
    import Icon from "@iconify/svelte";

    let { updateInstitutes } = $props();
    let newInstituteName: string = $state("");

    const onSaveButtonClicked = async () => {
        const newInstitute: CreateInstituteDto = {
            instituteName: newInstituteName
        }
        
        await postCreateInstitute(newInstitute);
        resetInputFields();
        updateInstitutes();
    }

    const resetInputFields = () => {
        newInstituteName = "";
    }
</script>

<div class="flex flex-col space-y-5 h-full w-full p-5">
    <CardTitle text="Create"/>
    <div class="flex flex-col space-y-5">
        <label class="label">
            <span>Name</span>
            <input bind:value={newInstituteName} class="input" type="text" placeholder="Institute Name" />
        </label>
    </div>
    <div class="grow"></div>
    <div class="flex flex-row space-x-5">
        <button onclick={resetInputFields} type="button" class="btn preset-tonal-surface basis-1/2">
            <Icon icon="material-symbols:reset-settings-rounded" width="24" height="24" />
            <span>Reset</span>
        </button>
        <button onclick={onSaveButtonClicked} type="button" class="btn preset-tonal-success basis-1/2">
            <Icon icon="material-symbols:save-rounded" width="24" height="24" />
            <span>Save</span>
        </button>
    </div>
</div>