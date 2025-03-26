import { baseURL } from "$lib/config/consts";
import type { CreatePayeeDto, EditPayeeDto, GetPayeeDto } from "$lib/types/api/Payee";
import { deleteRequest, getRequest, postRequest, putRequest } from "./generic/GenericAPI";
import { getURLSearchParams } from "./generic/SearchParamsCreator";

const apiBasePath: string = "/payees";
const apiURL: string = `${baseURL}${apiBasePath}`;

export const getAllPayees = async (): Promise<GetPayeeDto[]> => {
    return await getRequest<GetPayeeDto[]>(
        apiURL, 
        undefined
    );
}

export const getPayees = async (
    id?: string,
    payeeName?: string
): Promise<GetPayeeDto[]> => {
    const params: URLSearchParams = getURLSearchParams([
        ["id", id],
        ["payeeName", payeeName]
    ]);

    return await getRequest<GetPayeeDto[]>(
        apiURL,
        params
    );
}

export const postCreatePayee = async (
    createPayeeDto: CreatePayeeDto
): Promise<GetPayeeDto> => {
    return await postRequest<CreatePayeeDto, GetPayeeDto>(
        apiURL,
        createPayeeDto
    );
}

export const putEditPayee = async (
    id: string,
    editPayeeDto: EditPayeeDto
): Promise<GetPayeeDto> => {
    const url = `${apiURL}/${id}`;
    return await putRequest<EditPayeeDto, GetPayeeDto>(
        url,
        editPayeeDto
    );
}

export const deletePayee = async (
    id: string
): Promise<boolean> => {
    const url = `${apiURL}/${id}`;
    return await deleteRequest(url);
}
