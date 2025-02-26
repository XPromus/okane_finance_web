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