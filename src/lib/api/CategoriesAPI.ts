import { baseURL } from "$lib/config/consts";
import type { CreateCategoryDto, EditCategoryDto, GetCategoryDto } from "$lib/types/api/Category";
import { deleteRequest, getRequest, postRequest, putRequest } from "./generic/GenericAPI";
import { getURLSearchParams } from "./generic/SearchParamsCreator";

const apiBasePath: string = "/categories";
const apiURL: string = `${baseURL}${apiBasePath}`;

export const getAllCategories = async (): Promise<GetCategoryDto[]> => {
    return await getRequest<GetCategoryDto[]>(
        apiURL, 
        undefined
    );
}

export const getCategories = async (
    id?: string,
    categoryName?: string
): Promise<GetCategoryDto[]> => {
    const params: URLSearchParams = getURLSearchParams([
        ["id", id],
        ["categoryName", categoryName]
    ]);

    return await getRequest<GetCategoryDto[]>(
        apiURL,
        params
    );
}

export const postCreateCategory = async (
    createCategoryDto: CreateCategoryDto
): Promise<GetCategoryDto> => {
    return await postRequest<CreateCategoryDto, GetCategoryDto>(
        apiURL,
        createCategoryDto
    );
}

export const putEditCategory = async (
    id: string,
    editCategoryDto: EditCategoryDto
): Promise<GetCategoryDto> => {
    const url = `${apiURL}/${id}`;
    return await putRequest<EditCategoryDto, GetCategoryDto>(
        url,
        editCategoryDto
    );
}

export const deleteCategory = async (
    id: string
): Promise<boolean> => {
    const url = `${apiURL}/${id}`;
    return await deleteRequest(url);
}
