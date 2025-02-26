import type {Depot} from "$lib/types/api/Depot";

export type TaxExemptionEntry = {
    id: string,
    taxValue: number,
    depot: Depot
}

export type TaxExemptionEntryDto = {
    value: number,
    depotId: string
}