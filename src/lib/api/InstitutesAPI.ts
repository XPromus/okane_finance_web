import type {Institute, InstituteDto} from "$lib/types/api/Institute";
import {baseURL} from "$lib/config/consts";

const apiBasePath: string = "/institutes";

export const getAllInstitutes = async (): Promise<Institute[]> => {
    const url = `${baseURL}${apiBasePath}`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await response.json()
}

export const getInstitutes = async (
    id: string | undefined,
    name: string | undefined
): Promise<Institute[]> => {
    const params: Record<string, string | undefined> = {
        id: id,
        name: name
    };
    const url = `${baseURL}${apiBasePath}?${params.toString()}`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    return await response.json()
}

export const postCreateInstitute = async (
    instituteDto: InstituteDto
): Promise<Response> => {
    const url = `${baseURL}${apiBasePath}`;

    return await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(instituteDto)
    })
}

export const putUpdateInstitute = async (
    id: string,
    instituteDto: InstituteDto
): Promise<Institute> => {
    const url = `${baseURL}${apiBasePath}/${id}`;

    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(instituteDto)
    });

    return await response.json()
}

export const deleteInstitute = async (
    id: string
): Promise<boolean> => {
    const url = `${baseURL}${apiBasePath}/${id}`;

    const response = await fetch(url, {
        method: "DELETE"
    });

    return response.ok
}