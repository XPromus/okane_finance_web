import { getAllAccounts } from "$lib/api/AccountsAPI";
import type { Account, AccountGetResponseReturn } from "$lib/types/api/Account";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
    const accounts: Account[] = await getAllAccounts()
    return {
        accounts: accounts
    }
}