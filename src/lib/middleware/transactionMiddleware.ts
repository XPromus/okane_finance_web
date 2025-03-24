import { getAccounts } from "$lib/api/AccountsAPI";
import { getPayees } from "$lib/api/PayeeAPI";
import type { GetTransactionDto } from "$lib/types/api/Transaction";

export type TransactionListEntryType = {
    name: string,
    payee: string,
    account: string,
    amount: number
}

export const getTransactionListEntryData = async (
    transactions: GetTransactionDto[]
): Promise<TransactionListEntryType[]> => {
    const transactionData = await Promise.all(transactions.map(async (transaction) => {
        const payee = (await getPayees(transaction.targetPayeeID, undefined))[0].payeeName;
        const account = (await getAccounts(transaction.targetAccountID))[0].accountName
        return {
            name: transaction.transactionName,
            payee: payee,
            account: account,
            amount: transaction.amount
        }
    }))

    return transactionData;
}