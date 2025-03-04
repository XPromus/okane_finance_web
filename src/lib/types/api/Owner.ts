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
    owners: GetOwnerDto[]
}

export type CreateOwnerDto = {
    firstName: string,
    lastName: string,
    birthday: Date | undefined
}

export type EditOwnerDto = {
    firstName: string | undefined,
    lastName: string | undefined,
    birthday: Date | undefined
}

export type GetOwnerDto = {
    id: string,
    firstName: string,
    lastName: string,
    birthday: Date | undefined,
    accountIDs: string[],
    depotIDs: string[]
}
