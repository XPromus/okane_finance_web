import { baseURL } from "$lib/config/consts";
import type { CreateTransactionDto, EditTransactionDto, GetTransactionDto } from "$lib/types/api/Transaction";
import { deleteRequest, getRequest, postRequest, putRequest } from "./generic/GenericAPI";
import { getURLSearchParams } from "./generic/SearchParamsCreator";

const apiBasePath: string = "/transactions";
const apiURL: string = `${baseURL}${apiBasePath}`;

export const getAllTransactions = async (): Promise<GetTransactionDto[]> => {
    return await getRequest<GetTransactionDto[]>(
        apiURL, 
        undefined
    ); 
}

export const getTransactions = async (
    id?: string,
    transactionName?: string,
    doneDate?: Date,
    finishedDate?: Date,
    amount?: number
): Promise<GetTransactionDto[]> => {
    const params: URLSearchParams = getURLSearchParams([
        ["id", id],
        ["transactionName", transactionName],
        ["doneDate", doneDate?.toDateString()],
        ["finishedDate", finishedDate?.toDateString()],
        ["amount", amount]
    ]);

    return await getRequest<GetTransactionDto[]>(
        apiURL,
        params
    );
}

export const postCreateTransaction = async (
    createTransactionDto: CreateTransactionDto
): Promise<GetTransactionDto> => {
    return await postRequest<CreateTransactionDto, GetTransactionDto>(
        apiURL,
        createTransactionDto
    );
}

export const putEditTransaction = async (
    id: string,
    editTransactionDto: EditTransactionDto
): Promise<GetTransactionDto> => {
    const url = `${apiURL}/${id}`;
    return await putRequest<EditTransactionDto, GetTransactionDto>(
        url,
        editTransactionDto
    );
}

export const deleteTransaction = async (
    id: string
): Promise<boolean> => {
    const url = `${apiURL}/${id}`;
    return await deleteRequest(url);
}
