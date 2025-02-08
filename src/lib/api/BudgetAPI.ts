import { baseURL } from "$lib/config/consts"
import type { Budget, BudgetDto } from "$lib/types/api/Budget"
import type { Owner, OwnerDto } from "$lib/types/api/Owner"

const controllerURL = "/budgets"

export const getAllBudgets = async (): Promise<Budget[]> => {
    const url = baseURL + controllerURL
	const response = await fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	})
	const owners: Budget[] = await response.json()
	return owners
}

export const getBudgets = async (
    id: string | undefined,
    budgetName: string | undefined,
    maxValue: number | undefined,
): Promise<Budget[]> => {
    const params: Record<string, string | number | undefined> = {
        id: id,
        budgetName: budgetName,
        maxValue: maxValue,
    }

    const url = baseURL + controllerURL + "?" + params.toString()
	const response = await fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		},
        
	})
	const owners: Budget[] = await response.json()
	return owners
}

export const postCreateBudget = async (budgetDto: BudgetDto): Promise<Budget> => {
    const response = await fetch(baseURL + controllerURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(budgetDto)
    });

    const responseData: Promise<Budget> = response.json()
    return responseData;
}

export const putUpdateBudget = async (budgetDto: BudgetDto, id: string): Promise<Budget> => {
    const response = await fetch(baseURL + controllerURL + "/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(budgetDto)
    });

    const responseData: Promise<Budget> = response.json()
    return responseData;
}

export const deleteBudget = async (id: string): Promise<boolean> => {
    const response = await fetch(baseURL + controllerURL + "/" + id, {
        method: "DELETE",
    });

    return response.ok
}

export const addCategories = async (id: string, categories: string[]): Promise<Budget> => {
    const response = await fetch(baseURL + controllerURL + "/" + id + "/categories", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(categories)
    });

    const responseData: Promise<Budget> = response.json()
    return responseData;
}
