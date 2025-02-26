import {getAllAccounts} from "$lib/api/AccountsAPI";
import type {Account} from "$lib/types/api/Account";
import type {PageLoad} from "./$types";
import type {Owner} from "$lib/types/api/Owner";
import {getAllOwners} from "$lib/api/OwnerAPI";
import type {Institute} from "$lib/types/api/Institute";
import {getAllInstitutes} from "$lib/api/InstitutesAPI";

export const load: PageLoad = async ({ params }) => {
    const owners: Owner[] = await getAllOwners();
    const institutes: Institute[] = await getAllInstitutes();
    const accounts: Account[] = await getAllAccounts();

    return {
        owners: owners,
        institutes: institutes,
        accounts: accounts,
    }
}