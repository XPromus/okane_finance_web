import { baseURL } from "$lib/config/consts";
import type { GetTaxExemptionMaximumDto } from "$lib/types/api/TaxExemptionMaximum";
import { getRequest } from "./generic/GenericAPI";

const apiBasePath: string = "/tax-exemption/maximum";
const apiURL: string = `${baseURL}${apiBasePath}`;

export const getTaxExemptionMaximumStatus = async (): Promise<GetTaxExemptionMaximumDto> => {
    return await getRequest<GetTaxExemptionMaximumDto>(
        apiURL, 
        undefined
    );
}
