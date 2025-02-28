import { baseURL } from "$lib/config/consts"
import type { CreateOwnerDto, EditOwnerDto, GetOwnerDto, Owner } from "$lib/types/api/Owner"

export const getAllOwners = async (): Promise<GetOwnerDto[]> => {
    const url = baseURL + "/owners"
	const response = await fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	})
	const owners: GetOwnerDto[]= await response.json()
	return owners
}

export const getOwners = async (
    id: string | undefined,
    firstName: string | undefined,
    lastName: string | undefined,
    birthday: Date | undefined,
): Promise<GetOwnerDto[]> => {
    const params: Record<string, string | Date | undefined> = {
        id: id,
        firstName: firstName,
        lastName: lastName,
        birthday: birthday
    }

    const url = baseURL + "/owners" + "?" + params.toString()
	const response = await fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		},
        
	})
	const owners: GetOwnerDto[] = await response.json()
	return owners
}

export const postCreateOwner = async (ownerDto: CreateOwnerDto): Promise<GetOwnerDto> => {
    const response = await fetch(baseURL + "/owners", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(ownerDto)
    });

    const responseData: GetOwnerDto = await response.json()
    return responseData;
}

export const putUpdateOwner = async (ownerDto: EditOwnerDto, id: string): Promise<GetOwnerDto> => {
    const response = await fetch(baseURL + "/owners/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(ownerDto)
    });

    const responseData: GetOwnerDto = await response.json()
    return responseData;
}

export const deleteOwner = async (id: string): Promise<boolean> => {
    const response = await fetch(baseURL + "/owners/" + id, {
        method: "DELETE",
    });

    return response.ok
}
