import { getAllAccounts } from "$lib/api/AccountsAPI";
import { getAllCategories } from "$lib/api/CategoriesAPI";
import { getAllPayees } from "$lib/api/PayeeAPI";
import { getAllTransactions } from "$lib/api/TransactionAPI";
import type { GetAccountDto } from "$lib/types/api/Account";
import type { GetCategoryDto } from "$lib/types/api/Category";
import type { GetPayeeDto } from "$lib/types/api/Payee";
import type { GetTransactionDto } from "$lib/types/api/Transaction";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
    const transactions: GetTransactionDto[] = await getAllTransactions();
    const accounts: GetAccountDto[] = await getAllAccounts();
    const payees: GetPayeeDto[] = await getAllPayees();
    const categories: GetCategoryDto[] = await getAllCategories();
    return {
        transactions: transactions,
        accounts: accounts,
        payees: payees,
        categories: categories
    };
}