import { baseURL } from "$lib/config/consts"
import type { EditAccountDto } from "$lib/types/api/Account"
import type { CreateBudgetDto, GetBudgetDto } from "$lib/types/api/Budget"

const controllerURL = "/budgets"

export const getAllBudgets = async (): Promise<GetBudgetDto[]> => {
    const url = baseURL + controllerURL
	const response = await fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	})
	const owners: GetBudgetDto[] = await response.json()
	return owners
}

export const getBudgets = async (
    id: string | undefined,
    budgetName: string | undefined,
    maxValue: number | undefined,
): Promise<GetBudgetDto[]> => {
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
	const owners: GetBudgetDto[] = await response.json()
	return owners
}

export const postCreateBudget = async (
    budgetDto: CreateBudgetDto
): Promise<GetBudgetDto> => {
    const response = await fetch(baseURL + controllerURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(budgetDto)
    });

    const responseData: GetBudgetDto = await response.json()
    return responseData;
}

export const putUpdateBudget = async (
    id: string,
    budgetDto: EditAccountDto
): Promise<GetBudgetDto> => {
    const response = await fetch(baseURL + controllerURL + "/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(budgetDto)
    });

    const responseData: GetBudgetDto = await response.json()
    return responseData;
}

export const deleteBudget = async (id: string): Promise<boolean> => {
    const response = await fetch(baseURL + controllerURL + "/" + id, {
        method: "DELETE",
    });

    return response.ok
}
