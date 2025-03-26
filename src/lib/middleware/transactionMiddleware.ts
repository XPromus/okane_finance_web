import { getAccounts } from "$lib/api/AccountsAPI";
import { getPayees } from "$lib/api/PayeeAPI";
import type { GetTransactionDto } from "$lib/types/api/Transaction";

export type TransactionListEntryType = {
    name: string,
    payee: string,
    account: string,
    amount: number
}

export type TransactionsByDate = {
    date: Date,
    transactions: GetTransactionDto[]
}

export type TransactionListEntryByDate = {
    date: Date
    transactionListEntries: TransactionListEntryType[]
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

export const getTransactionListEntryDataSortedByDate = async (
    transactions: TransactionsByDate[]
): Promise<TransactionListEntryByDate[]> => {
    const returnList: TransactionListEntryByDate[] = await Promise.all(
        transactions.map(
            async (transactionsByDate) => {
                return {
                    date: transactionsByDate.date,
                    transactionListEntries: await Promise.all(
                        transactionsByDate.transactions.map(
                            async (transaction) => {
                                const payee = (await getPayees(transaction.targetPayeeID, undefined))[0].payeeName;
                                const account = (await getAccounts(transaction.targetAccountID))[0].accountName
                                return {
                                    name: transaction.transactionName,
                                    payee: payee,
                                    account: account,
                                    amount: transaction.amount
                                }
                            }
                        )
                    )
                }
            }
        )
    )
    return returnList;
}

export const sortTransactionsIntoDateGroupsByDoneDate = (
    toSort: GetTransactionDto[]
): TransactionsByDate[] => {
    const sortedTransactions = sortTransactionsByDoneDate(toSort);
    const returnList: TransactionsByDate[] = [];
    sortedTransactions.forEach((transaction) => {
        if (returnList.length === 0) {
            returnList.push({
                date: transaction.doneDate,
                transactions: [transaction]
            });
        }

        const lastElement = returnList[returnList.length - 1];
        if (lastElement.date == transaction.doneDate) {
            lastElement.transactions.push(transaction);
        } else {
            returnList.push({
                date: transaction.doneDate,
                transactions: [transaction]
            });
        }
    });

    return returnList;
}

const sortTransactionsByDoneDate = (
    toSort: GetTransactionDto[]
): GetTransactionDto[] => {
    toSort.sort((a, b) => {
        const keyA = new Date(a.doneDate);
        const keyB = new Date(b.doneDate);
        if (keyA < keyB) {
            return -1;
        } else if (keyA > keyB) {
            return 1;
        } else {
            return 0;
        }
    });
    return toSort;
}
