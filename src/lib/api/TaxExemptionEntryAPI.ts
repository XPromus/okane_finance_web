import { baseURL } from "$lib/config/consts";
import type { CreateTaxExemptionEntryDto, EditTaxExemptionEntryDto, GetTaxExemptionEntryDto } from "$lib/types/api/TaxExemptionEntry";
import { deleteRequest, getRequest, postRequest, putRequest } from "./generic/GenericAPI";

const apiBasePath: string = "/tax-exemption/entry";

export const getAllTaxExemptionEntries = async (): Promise<GetTaxExemptionEntryDto[]> => {
    const url = `${baseURL}${apiBasePath}`;
    return await getRequest<GetTaxExemptionEntryDto[]>(url, undefined);
}

export const getTaxExemptionEntries = async (
    id: string | undefined,
    value: number | undefined,
    depotID: string | undefined
): Promise<GetTaxExemptionEntryDto[]> => {
    const url = `${baseURL}${apiBasePath}`;
    const record: Record<string, string | number | undefined> = {
        id: id,
        value: value,
        depotID: depotID
    };
    return await getRequest<GetTaxExemptionEntryDto[]>(url, record); 
}

export const postCreateTaxExemptionEntry = async (
    createTaxExemptionDto: CreateTaxExemptionEntryDto
): Promise<GetTaxExemptionEntryDto> => {
    const url = `${baseURL}${apiBasePath}`;
    return await postRequest<CreateTaxExemptionEntryDto, GetTaxExemptionEntryDto>(
        url,
        createTaxExemptionDto
    );
}

export const putEditTaxExemptionEntry = async (
    id: string,
    editTaxExemptionEntryDto: EditTaxExemptionEntryDto
): Promise<GetTaxExemptionEntryDto> => {
    const url = `${baseURL}${apiBasePath}/${id}`;
    return await putRequest<EditTaxExemptionEntryDto, GetTaxExemptionEntryDto>(
        url,
        editTaxExemptionEntryDto
    );
}

export const deleteTaxExemptionEntry = async (
    id: string
): Promise<boolean> => {
    const url = `${baseURL}${apiBasePath}/${id}`;
    return await deleteRequest(url);
}
