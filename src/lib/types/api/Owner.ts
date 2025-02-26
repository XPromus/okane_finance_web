import type { UUID } from "crypto"
import type { Account } from "./Account"
import type {Depot} from "$lib/types/api/Depot";

export type Owner = {
    id: UUID,
    firstName: string,
    lastName: string,
    birthday: Date | undefined,
    accounts: Account[],
    depots: Depot[]
}

export type OwnerGetResponseReturn = {
    owners: Owner[]
}

export type OwnerDto = {
    firstName: string,
    lastName: string,
    birthday: Date | undefined,
}
