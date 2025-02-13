import {getAllAccounts} from "$lib/api/AccountsAPI";
import type {Account} from "$lib/types/api/Account";
import type {PageLoad} from "./$types";
import type {Owner} from "$lib/types/api/Owner";
import {getAllOwners} from "$lib/api/OwnerAPI";

export const load: PageLoad = async ({ params }) => {
    const owners: Owner[] = await getAllOwners()
    const accounts: Account[] = await getAllAccounts()

    return {
        accounts: accounts,
        owners: owners
    }
}