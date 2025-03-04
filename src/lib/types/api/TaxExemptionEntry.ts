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

export type CreateTaxExemptionEntryDto = {
    taxValue: number,
    depotID: string
}

export type EditTaxExemptionEntryDto = {
    taxValue: number | undefined,
    depotID: string | undefined
}

export type GetTaxExemptionEntryDto = {
    id: string,
    taxValue: number,
    depotID: string
}
