<script lang="ts">
    import { putUpdateInstitute } from "$lib/api/InstitutesAPI";
    import CloseButton from "$lib/components/elements/buttons/CloseButton.svelte";
    import SaveButton from "$lib/components/elements/buttons/SaveButton.svelte";
    import Card from "$lib/components/elements/Card.svelte";
    import CardTitle from "$lib/components/elements/CardTitle.svelte";
    import InputField from "$lib/components/InputField.svelte";
    import type { EditInstituteDto, GetInstituteDto } from "$lib/types/api/Institute";
    import { onMount } from "svelte";
    import { _ } from "svelte-i18n";

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

<Card classes="basis-1/5">
    {#snippet title()}
        <CardTitle text={$_("data.institutes.editMenu.title.title")}/>
    {/snippet}
    {#snippet content()}
        <InputField 
            label={$_("data.institutes.editMenu.instituteNamePlaceholder.title")}
            bind:value={currentInstituteName} 
            type="text" 
            placeholder={$_("data.institutes.editMenu.instituteNamePlaceholder.title")} 
            optional={false}
        />
    {/snippet}
    {#snippet footer()}
        <div class="flex flex-row space-x-5 w-full">
            <CloseButton close={close}/>
            <SaveButton save={onSaveButtonClicked}/>
        </div>
    {/snippet}
</Card>
