import type {GetInstituteDto} from "$lib/types/api/Institute";
import { getAllInstitutes } from "$lib/api/InstitutesAPI";
import type { PageLoad } from "./$types"

export const load: PageLoad = async () => {
    const institutes: GetInstituteDto[] = await getAllInstitutes();
    return { institutes }
};