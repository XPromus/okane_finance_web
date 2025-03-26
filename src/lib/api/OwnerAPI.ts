import { baseURL } from "$lib/config/consts"
import type { CreateOwnerDto, EditOwnerDto, GetOwnerDto, Owner } from "$lib/types/api/Owner"
import { getRequest, postRequest, putRequest } from "./generic/GenericAPI";
import { getURLSearchParams } from "./generic/SearchParamsCreator";

const apiBasePath: string = "/owners";
const apiURL: string = `${baseURL}${apiBasePath}`;

export const getAllOwners = async (): Promise<GetOwnerDto[]> => {
    return await getRequest<GetOwnerDto[]>(
        apiURL,
        undefined
    );
}

export const getOwners = async (
    id?: string,
    firstName?: string,
    lastName?: string,
    birthday?: Date,
): Promise<GetOwnerDto[]> => {
    const params: URLSearchParams = getURLSearchParams([
        ["id", id],
        ["firstName", firstName],
        ["lastName", lastName],
        ["birthday", birthday]
    ]);

    return await getRequest<GetOwnerDto[]>(
        apiURL,
        params
    );
}

export const postCreateOwner = async (
    createOwnerDto: CreateOwnerDto
): Promise<GetOwnerDto> => {
    return await postRequest<CreateOwnerDto, GetOwnerDto>(
        apiURL,
        createOwnerDto
    );
}

export const putUpdateOwner = async (
    id: string,
    editOwnerDto: EditOwnerDto
): Promise<GetOwnerDto> => {
    const url = `${apiURL}/${id}`;
    return await putRequest<EditOwnerDto, GetOwnerDto>(
        url,
        editOwnerDto
    );
}

export const deleteOwner = async (
    id: string
): Promise<boolean> => {
    const url = `${apiURL}/${id}`;
    return await deleteOwner(url);
}
