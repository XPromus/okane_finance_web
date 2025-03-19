<script lang="ts">
    import { putEditCategory } from "$lib/api/CategoriesAPI";
    import CloseButton from "$lib/components/elements/buttons/CloseButton.svelte";
    import SaveButton from "$lib/components/elements/buttons/SaveButton.svelte";
    import CardTitle from "$lib/components/elements/CardTitle.svelte";
    import InputField from "$lib/components/InputField.svelte";
    import type { EditCategoryDto, GetCategoryDto } from "$lib/types/api/Category";
    import { onMount } from "svelte";

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

<div class="basis-1/5 card preset-filled-surface-100-900 border-[1px] border-surface-200-800 p-4 text-center flex flex-col space-y-5">
    <CardTitle text="Edit"/>
    <InputField bind:value={currentCategoryName} type="text" placeholder="Institute Name" optional={false}/>
    <div class="flex flex-row space-x-5 w-full">
        <CloseButton close={close}/>
        <SaveButton save={onSaveButtonClicked}/>
    </div>
</div>
