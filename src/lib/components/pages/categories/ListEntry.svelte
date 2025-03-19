<script lang="ts">
    import type { GetCategoryDto } from "$lib/types/api/Category";

    let { category }: { category: GetCategoryDto } = $props();
</script>

<div class="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 w-full p-1 drop-shadow-sm">
    {category.categoryName}
</div>