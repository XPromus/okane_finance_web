import type {Owner} from "$lib/types/api/Owner";
import type {Institute} from "$lib/types/api/Institute";
import type {TaxExemptionEntry} from "$lib/types/api/TaxExemptionEntry";
import type {StockOrder} from "$lib/types/api/StockOrder";

export type Depot = {
    id: string,
    institute: Institute,
    owner: Owner,
    taxExemptionEntry: TaxExemptionEntry,
    stockOrders: StockOrder[]
}

export type DepotDto = {
    ownerId: string,
    instituteId: string,
    taxExemptionEntryId: string
}

export type CreateDepotDto = {
    instituteID: string,
    depotName: string,
    ownerID: string,
    taxExemptionEntryID: string | undefined
}

export type EditDepotDto = {
    instituteID: string | undefined,
    depotName: string | undefined,
    ownerID: string | undefined,
    taxExemptionEntryID: string | undefined
}

export type GetDepotDto = {
    id: string,
    depotName: string,
    instituteID: string,
    ownerID: string,
    taxExemptionEntryID: string | undefined,
    stockOrderIDs: string[]
}
