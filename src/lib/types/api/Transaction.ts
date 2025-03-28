export type CreateTransactionDto = {
    transactionName: string,
    doneDate: Date,
    finishedDate?: Date,
    amount: number,
    targetAccountID: string,
    targetPayeeID: string,
    targetCategoryID?: string
}

export type EditTransactionDto = {
    transactionName?: string,
    doneDate?: Date,
    finishedDate?: Date,
    amount?: number,
    targetAccountID?: string,
    targetPayeeID?: string,
    targetCategoryID?: string
}

export type GetTransactionDto = {
    id: string,
    transactionName: string,
    doneDate: string,
    finishedDate: string | undefined,
    amount: number,
    targetAccountID: string,
    targetPayeeID: string,
    targetCategoryID: string | undefined
}

export type TransactionDto = {
    id: string,
    transactionName: string,
    doneDate: Date,
    finishedDate: Date | undefined,
    amount: number,
    targetAccountID: string,
    targetPayeeID: string,
    targetCategoryID: string | undefined
}
