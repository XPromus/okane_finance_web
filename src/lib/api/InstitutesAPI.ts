import type {CreateInstituteDto, EditInstituteDto, GetInstituteDto} from "$lib/types/api/Institute";
import {baseURL} from "$lib/config/consts";
import { deleteRequest, getRequest, postRequest, putRequest } from "./generic/GenericAPI";
import { getURLSearchParams } from "./generic/SearchParamsCreator";

const apiBasePath: string = "/institutes";
const apiURL: string = `${baseURL}${apiBasePath}`;

export const getAllInstitutes = async (): Promise<GetInstituteDto[]> => {
    return await getRequest<GetInstituteDto[]>(
        apiURL,
        undefined
    )
}

export const getInstitutes = async (
    id?: string,
    name?: string
): Promise<GetInstituteDto[]> => {
    const params: URLSearchParams = getURLSearchParams([
        ["id", id],
        ["name", name]
    ]);

    return await getRequest<GetInstituteDto[]>(
        apiURL,
        params
    );
}

export const postCreateInstitute = async (
    createInstituteDto: CreateInstituteDto
): Promise<GetInstituteDto> => {
    return await postRequest<CreateInstituteDto, GetInstituteDto>(
        apiURL,
        createInstituteDto
    );
}

export const putUpdateInstitute = async (
    id: string,
    instituteDto: EditInstituteDto
): Promise<GetInstituteDto> => {
    const url = `${apiURL}/${id}`;
    return await putRequest<EditInstituteDto, GetInstituteDto>(
        url,
        instituteDto
    );
}

export const deleteInstitute = async (
    id: string
): Promise<boolean> => {
    const url = `${apiURL}/${id}`;
    return await deleteRequest(id);
}
