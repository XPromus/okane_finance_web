import type {PageLoad} from "../../../../.svelte-kit/types/src/routes/institutes/overview/$types";
import type {Institute} from "$lib/types/api/Institute";
import {getAllInstitutes} from "$lib/api/InstitutesAPI";

export const load: PageLoad = async ({ params }) => {
    const institutes: Institute[] = await getAllInstitutes()
    return {
        institutes: institutes
    }
}