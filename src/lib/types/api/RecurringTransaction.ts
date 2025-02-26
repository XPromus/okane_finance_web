import type {Account} from "$lib/types/api/Account";
import type {Payee} from "$lib/types/api/Payee";
import type {Category} from "$lib/types/api/Category";
import type {Tag} from "$lib/types/api/Tag";

export type RecurringTransaction = {
    id: string
    transactionName: string,
    amount: number,
    dayOfTheMonth: number,
    monthInterval: number,
    dayOfTheWeek: number,
    weekInterval: number,
    recurringUntil: Date,
    targetAccount: Account,
    targetPayee: Payee,
    targetCategory: Category,
    targetTags: Tag[]
}

export type RecurringTransactionDto = {
    transactionName: string,
    amount: number,
    dayOfTheMonth: number,
    monthInterval: number,
    dayOfTheWeek: number,
    weekInterval: number,
    recurringUntil: Date,
    accountId: string,
    payeeId: string,
    categoryId: string,
    tagIds: string[]
}