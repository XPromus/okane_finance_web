import { getAllOwners } from "$lib/api/OwnerAPI";
import type { GetOwnerDto, Owner, OwnerGetResponseReturn } from "$lib/types/api/Owner";
import type { PageLoad } from "./$types"

export const load: PageLoad = async () => {
	const owners: GetOwnerDto[] = await getAllOwners()
	const returnValue: OwnerGetResponseReturn = {
		owners: owners
	}
	return returnValue
};