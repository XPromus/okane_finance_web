import { baseURL } from "$lib/config/consts";
import type { CreateDepotDto, EditDepotDto, GetDepotDto } from "$lib/types/api/Depot";
import { deleteRequest, getRequest, postRequest, putRequest } from "./generic/GenericAPI";

const apiBasePath: string = "/depot";

export const getAllDepots = async (): Promise<GetDepotDto[]> => {
    const url = `${baseURL}${apiBasePath}`;
    return await getRequest<GetDepotDto[]>(url, undefined);
}

export const getDepots = async (
    id: string | undefined,
    depotName: string | undefined,
    instituteID: string | undefined,
    ownerID: string | undefined,
    taxExemptionEntryID: string | undefined
): Promise<GetDepotDto[]> => {
    const url = `${baseURL}${apiBasePath}`;
    const record: Record<string, string | undefined> = {
        id: id,
        depotName: depotName,
        instituteID: instituteID,
        ownerID: ownerID,
        taxExemptionEntryID: taxExemptionEntryID
    };
    return await getRequest<GetDepotDto[]>(url, record);
}

export const postCreateDepot = async (
    createDepotDto: CreateDepotDto
): Promise<GetDepotDto> => {
    const url = `${baseURL}${apiBasePath}`;
    return await postRequest<CreateDepotDto, GetDepotDto>(
        url,
        createDepotDto
    );
}

export const putEditDepot = async (
    id: string,
    editDepotDto: EditDepotDto
): Promise<GetDepotDto> => {
    const url = `${baseURL}${apiBasePath}/${id}`;
    return await putRequest<EditDepotDto, GetDepotDto>(
        url,
        editDepotDto
    );
}

export const deleteDepot = async (
    id: string
): Promise<boolean> => {
    const url = `${baseURL}${apiBasePath}/${id}`;
    return await deleteRequest(url);
}
