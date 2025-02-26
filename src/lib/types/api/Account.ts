import type { UUID } from "crypto"
import type { Transaction } from "./Transaction"
import type { Owner } from "./Owner"

export type Account = {
    id: UUID,
    accountName: string,
    startingBalance: number,
    institute: string,
    transactions: Transaction[],
    owner: Owner
}

export type AccountDto = {
    accountName: string,
    startingBalance: number,
    instituteId: string,
    ownerId: string,
}

export type AccountGetResponseReturn = {
    accounts: Account[]
}

export type AccountReturnType = {
    accounts: Account[]
}