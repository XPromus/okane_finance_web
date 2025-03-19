<script lang="ts">
    import { deleteCategory, getAllCategories } from "$lib/api/CategoriesAPI";
    import ListEntry from "$lib/components/pages/categories/ListEntry.svelte";
    import CreateMenu from "$lib/components/pages/categories/CreateMenu.svelte";
    import EditMenu from "$lib/components/pages/categories/EditMenu.svelte";
    import type { GetCategoryDto } from "$lib/types/api/Category";
    import type { PageData } from "./$types";
    import DataContainer from "$lib/components/elements/DataContainer.svelte";

    let { data }: { data: PageData } = $props();
    let categories: GetCategoryDto[] = $state(data.categories);

    let selectedCategory: GetCategoryDto | undefined = $state(undefined);
    let showAddMenu: boolean = $state(false);
    let showEditMenu: boolean = $state(false);

    const onDeleteButtonClicked = async (target: GetCategoryDto) => {
        await deleteCategory(target.id);
        updateCategories();
    }

    const toggleEditMenu = (target: GetCategoryDto) => {
        selectedCategory = target;
        showEditMenu = !showEditMenu;
    }

    const closeEditMenu = () => {
        selectedCategory = undefined;
        showEditMenu = false;
    }

    const updateCategories = async () => {
        categories = await getAllCategories();
    }

</script>

<DataContainer bind:showAddMenu bind:showEditMenu>
    {#snippet addMenuButton()}
        <button onclick={() => {showAddMenu = !showAddMenu}} type="button" class="btn preset-filled-primary-500">
            Add Category
        </button>
    {/snippet}
    {#snippet addMenu()}
        <CreateMenu {updateCategories} />
    {/snippet}
    {#snippet list()}
        {#each categories as category}
            <div class="flex flex-row space-x-1">
                <ListEntry {category} />
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <button onclick={() => {onDeleteButtonClicked(category)}} class="btn-icon preset-filled-error-500">
                    <iconify-icon icon="material-symbols:delete-rounded" width="24" height="24"></iconify-icon>
                </button>
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <button onclick={() => {toggleEditMenu(category)}} class="btn-icon preset-filled-primary-500">
                    <iconify-icon icon="material-symbols:edit-rounded" width="24" height="24"></iconify-icon>
                </button>
            </div>
        {/each}
    {/snippet}
    {#snippet editMenu()}
        {#if selectedCategory !== undefined}
            <EditMenu category={selectedCategory} {updateCategories} close={closeEditMenu} />
        {/if}
    {/snippet}
</DataContainer>
