import { baseURL } from "$lib/config/consts";
import type { CreateTransactionDto, EditTransactionDto, GetTransactionDto } from "$lib/types/api/Transaction";
import { deleteRequest, getRequest, postRequest, putRequest } from "./generic/GenericAPI";

const apiBasePath: string = "/transactions";

export const getAllTransactions = async (): Promise<GetTransactionDto[]> => {
    const url = `${baseURL}${apiBasePath}`;
    return await getRequest<GetTransactionDto[]>(url, undefined);
}

export const getTransactions = async (
    id: string | undefined,
    transactionName: string | undefined,
    doneDate: Date | undefined,
    finishedDate: Date | undefined,
    amount: number | undefined
): Promise<GetTransactionDto[]> => {
    const url = `${baseURL}${apiBasePath}`;
    const record: Record<string, string | Date | number | undefined> = {
        id: id,
        transactionName: transactionName,
        doneDate: doneDate,
        finishedDate: finishedDate,
        amount: amount
    };
    return await getRequest<GetTransactionDto[]>(url, record);
}

export const postCreateTransaction = async (
    createTransactionDto: CreateTransactionDto
): Promise<GetTransactionDto> => {
    const url = `${baseURL}${apiBasePath}`;
    return await postRequest<CreateTransactionDto, GetTransactionDto>(
        url,
        createTransactionDto
    );
}

export const putEditTransaction = async (
    id: string,
    editTransactionDto: EditTransactionDto
): Promise<GetTransactionDto> => {
    const url = `${baseURL}${apiBasePath}/${id}`;
    return await putRequest<EditTransactionDto, GetTransactionDto>(
        url,
        editTransactionDto
    );
}

export const deleteTransaction = async (
    id: string
): Promise<boolean> => {
    const url = `${baseURL}${apiBasePath}/${id}`;
    return await deleteRequest(url);
}
