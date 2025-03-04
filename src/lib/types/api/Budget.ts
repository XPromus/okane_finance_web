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

export type CreateBudgetDto = {
    budgetName: string,
    maxValue: number
}

export type EditBudgetDto = {
    budgetName: string | undefined,
    maxValue: number | undefined
}

export type GetBudgetDto = {
    id: string,
    budgetName: string,
    maxValue: number,
    targetCategoryIDs: string[]
}
