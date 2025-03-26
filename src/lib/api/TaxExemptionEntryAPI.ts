import { baseURL } from "$lib/config/consts";
import type { CreateTaxExemptionEntryDto, EditTaxExemptionEntryDto, GetTaxExemptionEntryDto } from "$lib/types/api/TaxExemptionEntry";
import { deleteRequest, getRequest, postRequest, putRequest } from "./generic/GenericAPI";
import { getURLSearchParams } from "./generic/SearchParamsCreator";

const apiBasePath: string = "/tax-exemption/entry";
const apiURL: string = `${baseURL}${apiBasePath}`;

export const getAllTaxExemptionEntries = async (): Promise<GetTaxExemptionEntryDto[]> => {
    return await getRequest<GetTaxExemptionEntryDto[]>(
        apiURL, 
        undefined
    );
}

export const getTaxExemptionEntries = async (
    id?: string,
    value?: number,
    depotID?: string
): Promise<GetTaxExemptionEntryDto[]> => {
    const params = getURLSearchParams([
        ["id", id],
        ["value", value],
        ["depotID", depotID]
    ]);

    return await getRequest<GetTaxExemptionEntryDto[]>(
        apiURL, 
        params
    ); 
}

export const postCreateTaxExemptionEntry = async (
    createTaxExemptionDto: CreateTaxExemptionEntryDto
): Promise<GetTaxExemptionEntryDto> => {
    return await postRequest<CreateTaxExemptionEntryDto, GetTaxExemptionEntryDto>(
        apiURL,
        createTaxExemptionDto
    );
}

export const putEditTaxExemptionEntry = async (
    id: string,
    editTaxExemptionEntryDto: EditTaxExemptionEntryDto
): Promise<GetTaxExemptionEntryDto> => {
    const url = `${apiURL}/${id}`;
    return await putRequest<EditTaxExemptionEntryDto, GetTaxExemptionEntryDto>(
        url,
        editTaxExemptionEntryDto
    );
}

export const deleteTaxExemptionEntry = async (
    id: string
): Promise<boolean> => {
    const url = `${apiURL}/${id}`;
    return await deleteRequest(url);
}
