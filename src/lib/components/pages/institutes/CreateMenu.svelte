<script lang="ts">
    import { postCreateInstitute } from "$lib/api/InstitutesAPI";
    import ResetButton from "$lib/components/elements/buttons/ResetButton.svelte";
    import SaveButton from "$lib/components/elements/buttons/SaveButton.svelte";
    import CardTitle from "$lib/components/elements/CardTitle.svelte";
    import InputField from "$lib/components/InputField.svelte";
    import type { CreateInstituteDto } from "$lib/types/api/Institute";
    import { _ } from "svelte-i18n";

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
    <CardTitle text={$_("data.institutes.createMenu.title.title")}/>
    <div class="flex flex-col space-y-1">
        <InputField bind:value={newInstituteName} type="text" placeholder={$_("data.institutes.createMenu.instituteNamePlaceholder.title")} optional={false}/>
    </div>
    <div class="flex flex-row space-x-5">
        <ResetButton reset={resetInputFields} />
        <SaveButton save={onSaveButtonClicked} />
    </div>
</div>
