import { baseURL } from "$lib/config/consts"
import type { CreateAccountDto, EditAccountDto, GetAccountDto } from "$lib/types/api/Account"
import { deleteRequest, getRequest, postRequest, putRequest } from "./generic/GenericAPI";
import { getURLSearchParams } from "./generic/SearchParamsCreator";

const apiBasePath: string = "/accounts";
const apiURL: string = `${baseURL}${apiBasePath}`;

export const getAllAccounts = async (): Promise<GetAccountDto[]> => {
    return await getRequest<GetAccountDto[]>(
        apiURL, 
        undefined
    );
}

export const getAccounts = async (
    id?: string,
    accountName?: string,
    startingBalance?: number,
    instituteID?: string,
    ownerID?: string,
): Promise<GetAccountDto[]> => {
    const params: URLSearchParams = getURLSearchParams([
        ["id", id],
        ["accountName", accountName],
        ["startingBalance", startingBalance],
        ["instituteID", instituteID],
        ["ownerID", ownerID]    
    ]);

	return await getRequest<GetAccountDto[]>(
        apiURL, 
        params
    );
}

export const postCreateAccount = async (
    createAccountDto: CreateAccountDto
): Promise<GetAccountDto> => {
    return await postRequest<CreateAccountDto, GetAccountDto>(
        apiURL,
        createAccountDto
    );
}

export const putUpdateAccount = async (
    id: string, 
    editAccountDto: EditAccountDto
): Promise<GetAccountDto> => {
    const url = `${apiURL}/${id}`;
    return await putRequest<EditAccountDto, GetAccountDto>(
        url,
        editAccountDto
    );
}

export const deleteAccount = async (
    id: string
): Promise<boolean> => {
    const url = `${apiURL}/${id}`;
    return await deleteRequest(url);
}
