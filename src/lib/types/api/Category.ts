import type { UUID } from "crypto";
import type { Budget } from "./Budget";

export type Category = {
    id: UUID | undefined,
    categoryName: string,
    transactions: string[],
    parentCategory: Category | undefined,
    childCategory: Category | undefined,
    targetBudget: Budget | undefined
}