import { baseURL } from "$lib/config/consts"
import type { EditAccountDto } from "$lib/types/api/Account"
import type { CreateBudgetDto, EditBudgetDto, GetBudgetDto } from "$lib/types/api/Budget"
import { deleteRequest, getRequest, postRequest, putRequest } from "./generic/GenericAPI";
import { getURLSearchParams } from "./generic/SearchParamsCreator";

const apiBasePath = "/budgets";
const apiURL: string = `${baseURL}/${apiBasePath}`;

export const getAllBudgets = async (): Promise<GetBudgetDto[]> => {
	return await getRequest<GetBudgetDto[]>(
        apiURL, 
        undefined
    );
}

export const getBudgets = async (
    id?: string,
    budgetName?: string,
    maxValue?: number,
): Promise<GetBudgetDto[]> => {
    const params: URLSearchParams = getURLSearchParams([
        ["id", id],
        ["budgetName", budgetName],
        ["maxValue", maxValue]
    ]);

	return await getRequest<GetBudgetDto[]>(
        apiURL, 
        params
    );
}

export const postCreateBudget = async (
    createBudgetDto: CreateBudgetDto
): Promise<GetBudgetDto> => {
    return await postRequest<CreateBudgetDto, GetBudgetDto>(
        apiURL,
        createBudgetDto
    );
}

export const putUpdateBudget = async (
    id: string,
    editBudgetDto: EditBudgetDto
): Promise<GetBudgetDto> => {
    const url = `${apiURL}/${id}`;
    return await putRequest<EditBudgetDto, GetBudgetDto>(
        url,
        editBudgetDto
    )
}

export const deleteBudget = async (
    id: string
): Promise<boolean> => {
    const url = `${apiURL}/${id}`;
    return await deleteRequest(url);
}
