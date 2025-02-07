import type { UUID } from "crypto"
import type { Account } from "./Account"

export type Owner = {
    id: UUID | undefined,
    firstName: string,
    lastName: string,
    birthday: Date | undefined,
    accounts: Account[]
}

export type OwnerGetResponseReturn = {
    owners: Owner[]
}

export type OwnerDto = {
    firstName: string,
    lastName: string,
    birthday: Date,
}
