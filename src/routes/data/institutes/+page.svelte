<script lang="ts">
    import { deleteInstitute, getAllInstitutes } from "$lib/api/InstitutesAPI";
    import CreateMenu from "$lib/components/pages/institutes/CreateMenu.svelte";
    import EditMenu from "$lib/components/pages/institutes/EditMenu.svelte";
    import ListEntry from "$lib/components/pages/institutes/ListEntry.svelte";
    import type { GetInstituteDto } from "$lib/types/api/Institute";
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();
    let institutes: GetInstituteDto[] = $state(data.institutes);

    let selectedInstitute: GetInstituteDto | undefined = $state(undefined);
    let showInstituteAdd: boolean = $state(false);

    let showInstituteEdit: boolean = $state(false);

    const onDeleteInstituteButtonClicked = async (institute: GetInstituteDto) => {
        await deleteInstitute(institute.id);
        updateInstitutes();
    }

    const toggleInstituteEdit = (institute: GetInstituteDto) => {
        selectedInstitute = institute;
        showInstituteEdit = !showInstituteEdit;
    }

    const closeInstituteEdit = () => {
        selectedInstitute = undefined;
        showInstituteEdit = false;
    }

    const updateInstitutes = async () => {
        institutes = await getAllInstitutes();
    }
</script>

<div class="w-full h-full flex flex-row p-2 space-x-5">
    <div class="grow flex flex-col space-y-1">
        <button onclick={() => {showInstituteAdd = !showInstituteAdd}} type="button" class="btn preset-filled-primary-500">
            Add Institute
        </button>
        {#if showInstituteAdd}
            <CreateMenu {updateInstitutes} />
        {/if}
        {#each institutes as institute}
            <div class="flex flex-row space-x-1">
                <ListEntry {institute} />
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <button onclick={() => {onDeleteInstituteButtonClicked(institute)}} class="btn-icon preset-filled-error-500">
                    <iconify-icon icon="material-symbols:delete-rounded" width="24" height="24"></iconify-icon>
                </button>
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <button onclick={() => {toggleInstituteEdit(institute)}} class="btn-icon preset-filled-primary-500">
                    <iconify-icon icon="material-symbols:edit-rounded" width="24" height="24"></iconify-icon>
                </button>
            </div>
        {/each}
    </div>
    {#if showInstituteEdit && selectedInstitute !== undefined}
        <EditMenu institute={selectedInstitute} {updateInstitutes} close={closeInstituteEdit} />
    {/if}
</div>
