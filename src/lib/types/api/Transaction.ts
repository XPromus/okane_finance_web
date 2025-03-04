import type { UUID } from "crypto"
import type { Account } from "./Account"
import type { Category } from "./Category"
import type { Payee } from "./Payee"
import type { Tag } from "./Tag"

export type Transaction = {
    id: UUID,
    transactionName: string,
    doneDate: Date,
    finishedDate: Date | undefined,
    amount: number,
    targetAccount: Account | undefined,
    targetPayee: Payee | undefined,
    targetCategory: Category | undefined,
    targetTags: Tag[]
}

export type TransactionDto = {
    transactionName: string,
    doneDate: string,
    finishedDate: string,
    amount: number,
    accountId: string,
    payeeId: string,
    categoryId: string,
    tagIds: string[]
}

export type CreateTransactionDto = {
    transactionName: string,
    doneDate: Date,
    finishedDate: Date | undefined,
    amount: number,
    targetAccountID: string,
    targetPayeeID: string,
    targetCategoryID: string | undefined
}

export type EditTransactionDto = {
    transactionName: string | undefined,
    doneDate: Date | undefined,
    finishedDate: Date | undefined,
    amount: number | undefined,
    targetAccountID: string | undefined,
    targetPayeeID: string | undefined,
    targetCategoryID: string | undefined
}

export type GetTransactionDto = {
    id: string,
    transactionName: string,
    doneDate: Date,
    finishedDate: Date | undefined,
    amount: number,
    targetAccountID: string,
    targetPayeeID: string,
    targetCategoryID: string | undefined
}
