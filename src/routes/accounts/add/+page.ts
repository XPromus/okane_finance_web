import {getAllAccounts} from "$lib/api/AccountsAPI";
import {getAllOwners} from "$lib/api/OwnerAPI";
import type {Account} from "$lib/types/api/Account";
import type {Owner} from "$lib/types/api/Owner";
import type {PageLoad} from "./$types";

export const load: PageLoad = async ({ params }) => {
    const owners: Owner[] = await getAllOwners()
    const accounts: Account[] = await getAllAccounts()

    return {
        accounts: accounts,
        owners: owners
    }
}