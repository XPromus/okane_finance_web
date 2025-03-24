import type { GetAccountDto } from "$lib/types/api/Account";
import type { GetInstituteDto } from "$lib/types/api/Institute";
import type { GetOwnerDto } from "$lib/types/api/Owner";
import type { SelectFieldData } from "$lib/types/components/selectField";

export const mapInstituteToSelectFieldData = (
    institutes: GetInstituteDto[]
): SelectFieldData[] => {
    return institutes.map((institute) => {
        return {
            name: institute.instituteName,
            value: institute.id
        };
    });
}

export const mapOwnerToSelectFieldData = (
    owners: GetOwnerDto[]
): SelectFieldData[] => {
    return owners.map((owner) => {
        return {
            name: `${owner.firstName} ${owner.lastName}`,
            value: owner.id
        };
    });
}

export const mapAccountsToSelectFieldData = (
    accounts: GetAccountDto[]
): SelectFieldData[] => {
    return accounts.map((account) => {
        return {
            name: account.accountName,
            value: account.id
        };
    });
}
