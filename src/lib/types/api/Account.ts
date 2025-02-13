import type { UUID } from "crypto"
import type { Transaction } from "./Transaction"
import type { Owner } from "./Owner"

export type Account = {
    id: UUID | undefined,
    accountName: string,
    startingBalance: number,
    institute: string,
    transactions: Transaction[],
    owner: Owner
}

export type AccountGetResponseReturn = {
    accounts: Account[]
}

export type AccountDto = {
    accountName: string,
    startingBalance: number,
    institute: string,
    ownerId: string,
}

export type AccountReturnType = {
    accounts: Account[]
}