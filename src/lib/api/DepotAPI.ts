import { baseURL } from "$lib/config/consts";
import type { CreateDepotDto, EditDepotDto, GetDepotDto } from "$lib/types/api/Depot";
import { deleteRequest, getRequest, postRequest, putRequest } from "./generic/GenericAPI";
import { getURLSearchParams } from "./generic/SearchParamsCreator";

const apiBasePath: string = "/depot";
const apiURL: string = `${baseURL}${apiBasePath}`;

export const getAllDepots = async (): Promise<GetDepotDto[]> => {
    return await getRequest<GetDepotDto[]>(
        apiURL,
        undefined
    );
}

export const getDepots = async (
    id?: string,
    depotName?: string,
    instituteID?: string,
    ownerID?: string,
    taxExemptionEntryID?: string
): Promise<GetDepotDto[]> => {
    const params: URLSearchParams = getURLSearchParams([
        ["id", id],
        ["depotName", depotName],
        ["instituteID", instituteID],
        ["ownerID", ownerID],
        ["taxExemptionEntryID", taxExemptionEntryID]
    ]);

    return await getRequest<GetDepotDto[]>(
        apiURL,
        params
    )
}

export const postCreateDepot = async (
    createDepotDto: CreateDepotDto
): Promise<GetDepotDto> => {
    return await postRequest<CreateDepotDto, GetDepotDto>(
        apiURL,
        createDepotDto
    );
}

export const putEditDepot = async (
    id: string,
    editDepotDto: EditDepotDto
): Promise<GetDepotDto> => {
    const url = `${apiURL}/${id}`;
    return await putRequest<EditDepotDto, GetDepotDto>(
        url,
        editDepotDto
    );
}

export const deleteDepot = async (
    id: string
): Promise<boolean> => {
    const url = `${apiURL}/${id}`;
    return await deleteRequest(url);
}
