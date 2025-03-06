import { baseURL } from "$lib/config/consts";
import type { CreatePayeeDto, EditPayeeDto, GetPayeeDto } from "$lib/types/api/Payee";
import { deleteRequest, getRequest, postRequest, putRequest } from "./generic/GenericAPI";

const apiBasePath: string = "/payees";

export const getAllPayees = async (): Promise<GetPayeeDto[]> => {
    const url = `${baseURL}${apiBasePath}`;
    return await getRequest<GetPayeeDto[]>(url, undefined);
}

export const getPayees = async (
    id: string | undefined,
    payeeName: string | undefined
): Promise<GetPayeeDto[]> => {
    const url = `${baseURL}${apiBasePath}`;
    const record: Record<string, string | undefined> = {
        id: id,
        payeeName: payeeName
    };
    return await getRequest<GetPayeeDto[]>(url, record);
}

export const postCreatePayee = async (
    createPayeeDto: CreatePayeeDto
): Promise<GetPayeeDto> => {
    const url = `${baseURL}${apiBasePath}`;
    return await postRequest<CreatePayeeDto, GetPayeeDto>(
        url,
        createPayeeDto
    );
}

export const putEditPayee = async (
    id: string,
    editPayeeDto: EditPayeeDto
): Promise<GetPayeeDto> => {
    const url = `${baseURL}${apiBasePath}/${id}`;
    return await putRequest<EditPayeeDto, GetPayeeDto>(
        url,
        editPayeeDto
    );
}

export const deletePayee = async (
    id: string
): Promise<boolean> => {
    const url = `${baseURL}${apiBasePath}/${id}`;
    return await deleteRequest(url);
}
