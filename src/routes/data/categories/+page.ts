import { getAllCategories } from "$lib/api/CategoriesAPI";
import type { GetCategoryDto } from "$lib/types/api/Category";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
    const categories: GetCategoryDto[] = await getAllCategories();
    return {
        categories: categories
    };
}