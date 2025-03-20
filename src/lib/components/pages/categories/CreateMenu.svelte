<script lang="ts">
    import { postCreateCategory } from "$lib/api/CategoriesAPI";
    import ResetButton from "$lib/components/elements/buttons/ResetButton.svelte";
    import SaveButton from "$lib/components/elements/buttons/SaveButton.svelte";
    import Card from "$lib/components/elements/Card.svelte";
    import CardTitle from "$lib/components/elements/CardTitle.svelte";
    import InputField from "$lib/components/InputField.svelte";
    import type { CreateCategoryDto } from "$lib/types/api/Category";
    import { _ } from "svelte-i18n";

    let { updateCategories } = $props();

    let newCategoryName: string = $state("");

    let selectedIcon: number = $state(0);
    const newCategoryIconOptions: string[] = [
        "material-symbols:fork-spoon-rounded",
        "material-symbols:fork-spoon-rounded",
        "material-symbols:fork-spoon-rounded",
        "material-symbols:fork-spoon-rounded"
    ]

    const onSaveButtonClicked = async () => {
        const newCategory: CreateCategoryDto = {
            categoryName: newCategoryName,
            parentCategoryID: undefined,
            childCategoryID: undefined,
            targetBudgetID: undefined
        }
        
        await postCreateCategory(newCategory);
        updateCategories();
    }

    const resetInputFields = () => {
        newCategoryName = "";
    }
</script>

<Card>
    {#snippet title()}
        <CardTitle text={$_("data.categories.createMenu.title.title")} />
    {/snippet}
    {#snippet content()}
        <div class="flex flex-col space-y-5">
            <div class="flex flex-col space-y-1">
                <InputField bind:value={newCategoryName} type="text" placeholder={$_("data.categories.createMenu.categoryNamePlaceholder.title")} optional={false}/>
            </div>
            <div class="flex flex-row space-x-5">
                {#each newCategoryIconOptions as iconOption, i}
                    {#if i == selectedIcon}
                        <div class="relative inline-block">
                            <span class="badge-icon preset-filled-success-500 absolute -right-2 top-5 z-10">
                                <iconify-icon icon="material-symbols:check-small-rounded" width="20" height="20"></iconify-icon>
                            </span>
                                <!-- svelte-ignore a11y_consider_explicit_label -->
                            <button type="button" class="btn-icon preset-outlined-surface-500 rounded-full">
                                <iconify-icon icon={iconOption} width="24" height="24"></iconify-icon>
                            </button>
                        </div>
                    {:else}
                        <!-- svelte-ignore a11y_consider_explicit_label -->
                        <button onclick={() => {selectedIcon = i}} type="button" class="btn-icon preset-outlined-surface-500 rounded-full">
                            <iconify-icon icon={iconOption} width="24" height="24"></iconify-icon>
                        </button>
                    {/if}
                {/each}
            </div>
        </div>
    {/snippet}
    {#snippet footer()}
        <div class="flex flex-row space-x-5">
            <ResetButton reset={resetInputFields} />
            <SaveButton save={onSaveButtonClicked} />
        </div>
    {/snippet}
</Card>
