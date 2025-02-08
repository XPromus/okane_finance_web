import { getAllOwners } from "$lib/api/OwnerAPI";
import type { Owner, OwnerGetResponseReturn } from "$lib/types/api/Owner";
import type { PageLoad } from "./$types"

export const load: PageLoad = async ({ params }) => {
	const owners: Owner[] = await getAllOwners()
	const returnValue: OwnerGetResponseReturn = {
		owners: owners
	}
	return returnValue
};