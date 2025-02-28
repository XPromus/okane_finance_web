import { getOwners } from '$lib/api/OwnerAPI';
import type { GetOwnerDto } from '$lib/types/api/Owner';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    const targetOwner: GetOwnerDto[] = await getOwners(
        params.id,
        undefined,
        undefined,
        undefined
    )
    return { targetOwner };
}