<script lang="ts">
    import { deleteInstitute, getAllInstitutes } from "$lib/api/InstitutesAPI";
    import DataContainer from "$lib/components/elements/DataContainer.svelte";
    import CreateMenu from "$lib/components/pages/institutes/CreateMenu.svelte";
    import EditMenu from "$lib/components/pages/institutes/EditMenu.svelte";
    import ListEntry from "$lib/components/pages/institutes/ListEntry.svelte";
    import type { GetInstituteDto } from "$lib/types/api/Institute";
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();
    let institutes: GetInstituteDto[] = $state(data.institutes);

    let selectedInstitute: GetInstituteDto | undefined = $state(undefined);
    let showAddMenu: boolean = $state(false);
    let showEditMenu: boolean = $state(false);

    const onDeleteInstituteButtonClicked = async (institute: GetInstituteDto) => {
        await deleteInstitute(institute.id);
        updateInstitutes();
    }

    const toggleInstituteEdit = (institute: GetInstituteDto) => {
        selectedInstitute = institute;
        showEditMenu = !showEditMenu;
    }

    const closeInstituteEdit = () => {
        selectedInstitute = undefined;
        showEditMenu = false;
    }

    const updateInstitutes = async () => {
        institutes = await getAllInstitutes();
    }
</script>

<DataContainer bind:showAddMenu bind:showEditMenu>
    {#snippet addMenuButton()}
        <button onclick={() => {showAddMenu = !showAddMenu}} type="button" class="btn preset-filled-primary-500">
            Add Institute
        </button>
    {/snippet}
    {#snippet addMenu()}
        <CreateMenu {updateInstitutes} />
    {/snippet}
    {#snippet list()}
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
    {/snippet}
    {#snippet editMenu()}
        {#if selectedInstitute !== undefined}
            <EditMenu institute={selectedInstitute} {updateInstitutes} close={closeInstituteEdit} />
        {/if}
    {/snippet}
</DataContainer>
