import type { UUID } from "crypto";
import type { Budget } from "./Budget";
import type {Transaction} from "$lib/types/api/Transaction";

export type Category = {
    id: UUID,
    categoryName: string,
    transactions: Transaction[],
    parentCategory: Category | undefined,
    childCategory: Category | undefined,
    targetBudget: Budget | undefined
}

export type CategoryDto = {
    categoryName: string,
    budgetId: string,
    parentCategoryId: string,
    childCategoryId: string
}

export type CreateCategoryDto = {
    categoryName: string,
    parentCategoryID: string | undefined,
    childCategoryID: string | undefined,
    targetBudgetID: string | undefined
}

export type EditCategoryDto = {
    categoryName: string | undefined,
    parentCategoryID: string | undefined,
    childCategoryID: string | undefined,
    targetBudgetID: string | undefined
}

export type GetCategoryDto = {
    id: string,
    categoryName: string,
    transactionIDs: string[],
    parentCategoryID: string,
    childCategoryID: string,
    targetBudgetID: string
}
