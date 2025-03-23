import { getAllAccounts } from "$lib/api/AccountsAPI";
import { getAllCategories } from "$lib/api/CategoriesAPI";
import { getAllPayees } from "$lib/api/PayeeAPI";
import type { GetAccountDto } from "$lib/types/api/Account";
import type { GetCategoryDto } from "$lib/types/api/Category";
import type { GetPayeeDto } from "$lib/types/api/Payee";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
    const accounts: GetAccountDto[] = await getAllAccounts();
    const payees: GetPayeeDto[] = await getAllPayees();
    const categories: GetCategoryDto[] = await getAllCategories();
    return {
        accounts: accounts,
        payees: payees,
        categories: categories
    };
}