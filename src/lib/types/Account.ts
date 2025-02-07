import type { UUID } from "crypto"
import type { Transaction } from "./Transaction"
import type { Owner } from "./Owner"

export type Account = {
    id: UUID | undefined,
    accountName: string,
    transactions: Transaction[],
    owner: Owner
}