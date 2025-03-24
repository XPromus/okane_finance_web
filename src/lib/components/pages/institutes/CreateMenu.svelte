<script lang="ts">
    import { postCreateInstitute } from "$lib/api/InstitutesAPI";
    import ResetButton from "$lib/components/elements/buttons/ResetButton.svelte";
    import SaveButton from "$lib/components/elements/buttons/SaveButton.svelte";
    import Card from "$lib/components/elements/Card.svelte";
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

<Card>
    {#snippet title()}
        <CardTitle text={$_("data.institutes.createMenu.title.title")}/>
    {/snippet}
    {#snippet content()}
        <div class="flex flex-col space-y-1">
            <InputField
                label={$_("data.institutes.createMenu.instituteNamePlaceholder.title")} 
                bind:value={newInstituteName} 
                type="text" 
                placeholder={$_("data.institutes.createMenu.instituteNamePlaceholder.title")} 
                optional={false}
            />
        </div>
    {/snippet}
    {#snippet footer()}
        <div class="flex flex-row space-x-5">
            <ResetButton reset={resetInputFields} />
            <SaveButton save={onSaveButtonClicked} />
        </div>
    {/snippet}
</Card>
