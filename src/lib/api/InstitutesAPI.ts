import type {CreateInstituteDto, EditInstituteDto, GetInstituteDto} from "$lib/types/api/Institute";
import {baseURL} from "$lib/config/consts";

const apiBasePath: string = "/institutes";

export const getAllInstitutes = async (): Promise<GetInstituteDto[]> => {
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
): Promise<GetInstituteDto[]> => {
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
    instituteDto: CreateInstituteDto
): Promise<GetInstituteDto> => {
    const url = `${baseURL}${apiBasePath}`;

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(instituteDto)
    });

    return await response.json();
}

export const putUpdateInstitute = async (
    id: string,
    instituteDto: EditInstituteDto
): Promise<GetInstituteDto> => {
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