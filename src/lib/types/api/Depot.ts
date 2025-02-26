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