import { baseURL } from "$lib/config/consts"
import type { Owner, OwnerDto, OwnerGetResponseReturn } from "$lib/types/api/Owner"

export const getAllOwners = async (): Promise<Owner[]> => {
    const url = baseURL + "/owners"
	const response = await fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	})
	const owners: Owner[] = await response.json()
	return owners
}

export const postCreateOwner = async (ownerDto: OwnerDto): Promise<Owner> => {
    const response = await fetch(baseURL + "/owners", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(ownerDto)
    });

    const responseData: Promise<Owner> = response.json()
    return responseData;
}

export const putUpdateOwner = async (ownerDto: OwnerDto, id: string): Promise<Owner> => {
    const response = await fetch(baseURL + "/owners/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(ownerDto)
    });

    const responseData: Promise<Owner> = response.json()
    return responseData;
}

export const deleteOwner = async (id: string): Promise<boolean> => {
    const response = await fetch(baseURL + "/owners/" + id, {
        method: "DELETE",
    });

    return response.ok
}