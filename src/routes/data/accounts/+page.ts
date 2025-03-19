import { getAllAccounts } from "$lib/api/AccountsAPI";
import { getAllInstitutes } from "$lib/api/InstitutesAPI";
import { getAllOwners } from "$lib/api/OwnerAPI";
import type { GetAccountDto } from "$lib/types/api/Account";
import type { GetInstituteDto } from "$lib/types/api/Institute";
import type { GetOwnerDto } from "$lib/types/api/Owner";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
    const owners: GetOwnerDto[] = await getAllOwners();
    const institutes: GetInstituteDto[] = await getAllInstitutes();
    const accounts: GetAccountDto[] = await getAllAccounts();
    return { owners, institutes, accounts };
}