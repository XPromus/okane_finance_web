import type { UUID } from "crypto"
import type { Category } from "./Category"

export type Budget = {
    id: UUID,
    budgetName: string,
    maxValue: number,
    targetCategories: Category[]
}

export type BudgetDto = {
    budgetName: string,
    maxValue: number,
}