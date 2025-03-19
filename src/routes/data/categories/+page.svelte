<script lang="ts">
    import { deleteCategory, getAllCategories } from "$lib/api/CategoriesAPI";
    import CategoryListEntry from "$lib/components/pages/categories/ListEntry.svelte";
    import CreateCategoryContainer from "$lib/components/pages/categories/CreateMenu.svelte";
    import EditCategoryContainer from "$lib/components/pages/categories/EditMenu.svelte";
    import type { GetCategoryDto } from "$lib/types/api/Category";
    import type { PageData } from "./$types";

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

<div class="w-full h-full flex flex-row p-2 space-x-5">
    <div class="grow flex flex-col space-y-1">
        <button onclick={() => {showAddMenu = !showAddMenu}} type="button" class="btn preset-filled-primary-500">
            Add Category
        </button>
        {#if showAddMenu}
            <CreateCategoryContainer {updateCategories} />
        {/if}
        {#each categories as category}
            <div class="flex flex-row space-x-1">
                <CategoryListEntry {category} />
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
    </div>
    {#if showEditMenu && selectedCategory !== undefined}
        <EditCategoryContainer category={selectedCategory} {updateCategories} close={closeEditMenu} />
    {/if}
</div>
