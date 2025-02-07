import type { Owner, OwnerGetResponseReturn } from "$lib/types/Owner";
import type { PageLoad } from "./$types"

export const load: PageLoad = async ({ params }) => {
	const url = "http://localhost:8080/owners"
	const response = await fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	})
	const owners: Owner[] = await response.json()
	const returnValue: OwnerGetResponseReturn = {
		owners: owners
	}
	return returnValue
};
