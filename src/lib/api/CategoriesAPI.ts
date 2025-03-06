import { baseURL } from "$lib/config/consts";
import type { CreateCategoryDto, EditCategoryDto, GetCategoryDto } from "$lib/types/api/Category";
import { deleteRequest, getRequest, postRequest, putRequest } from "./generic/GenericAPI";

const apiBasePath: string = "/categories";

export const getAllCategories = async (): Promise<GetCategoryDto[]> => {
    const url = `${baseURL}${apiBasePath}`;
    return await getRequest<GetCategoryDto[]>(url, undefined);
}

export const getCategories = async (
    id: string | undefined,
    categoryName: string | undefined
): Promise<GetCategoryDto[]> => {
    const url = `${baseURL}${apiBasePath}`;
    const record: Record<string, string | undefined> = {
        id: id,
        categoryName: categoryName
    };
    return await getRequest<GetCategoryDto[]>(url, record);
}

export const postCreateCategory = async (
    createCategoryDto: CreateCategoryDto
): Promise<GetCategoryDto> => {
    const url = `${baseURL}${apiBasePath}`;
    return await postRequest<CreateCategoryDto, GetCategoryDto>(
        url, 
        createCategoryDto
    );
}

export const putEditCategory = async (
    id: string,
    editCategoryDto: EditCategoryDto
): Promise<GetCategoryDto> => {
    const url = `${baseURL}${apiBasePath}/${id}`;
    return await putRequest<EditCategoryDto, GetCategoryDto>(
        url,
        editCategoryDto
    );
}

export const deleteCategory = async (
    id: string
): Promise<boolean> => {
    const url = `${baseURL}${apiBasePath}/${id}`;
    return await deleteRequest(url);
}
