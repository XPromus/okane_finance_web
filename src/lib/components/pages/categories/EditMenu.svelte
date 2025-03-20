<script lang="ts">
    import { putEditCategory } from "$lib/api/CategoriesAPI";
    import CloseButton from "$lib/components/elements/buttons/CloseButton.svelte";
    import SaveButton from "$lib/components/elements/buttons/SaveButton.svelte";
    import Card from "$lib/components/elements/Card.svelte";
    import CardTitle from "$lib/components/elements/CardTitle.svelte";
    import InputField from "$lib/components/InputField.svelte";
    import type { EditCategoryDto, GetCategoryDto } from "$lib/types/api/Category";
    import { onMount } from "svelte";
    import { _ } from "svelte-i18n";

    let { category, updateCategories, close }: { category: GetCategoryDto, updateCategories: any, close: any } = $props();
    
    let currentCategoryId: string = $state("");
    let currentCategoryName: string = $state("");

    const onSaveButtonClicked = async () => {
        const categoryToSave: EditCategoryDto = {
            categoryName: currentCategoryName,
            parentCategoryID: undefined,
            childCategoryID: undefined,
            targetBudgetID: undefined
        };

        await putEditCategory(currentCategoryId, categoryToSave);
        updateCategories();
    }

    onMount(() => {
        currentCategoryId = category.id;
        currentCategoryName = category.categoryName;
    });
</script>

<Card classes="basis-1/5">
    {#snippet title()}
        <CardTitle text={$_("data.categories.editMenu.title.title")}/>
    {/snippet}
    {#snippet content()}
        <InputField bind:value={currentCategoryName} type="text" placeholder={$_("data.categories.editMenu.categoryNamePlaceholder.title")} optional={false}/>
    {/snippet}
    {#snippet footer()}
        <div class="flex flex-row space-x-5 w-full">
            <CloseButton close={close}/>
            <SaveButton save={onSaveButtonClicked}/>
        </div>
    {/snippet}
</Card>
