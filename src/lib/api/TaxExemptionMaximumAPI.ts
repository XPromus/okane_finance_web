import { baseURL } from "$lib/config/consts";
import type { GetTaxExemptionMaximumDto } from "$lib/types/api/TaxExemptionMaximum";
import { getRequest } from "./generic/GenericAPI";

const apiBasePath: string = "/tax-exemption/maximum";

export const getTaxExemptionMaximumStatus = async (): Promise<GetTaxExemptionMaximumDto> => {
    const url = `${baseURL}${apiBasePath}`;
    return await getRequest<GetTaxExemptionMaximumDto>(url, undefined);
}
