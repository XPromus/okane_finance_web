import type { UUID } from "crypto"
import type { Account } from "./Account"
import type { Category } from "./Category"
import type { Payee } from "./Payee"
import type { Tag } from "./Tag"

export type Transaction = {
    id: UUID | undefined,
    transactionName: string,
    doneDate: Date,
    finishedDate: Date | undefined,
    amount: number,
    targetAccount: Account | undefined,
    targetPayee: Payee | undefined,
    targetCategory: Category | undefined,
    targetTags: Tag[]
}