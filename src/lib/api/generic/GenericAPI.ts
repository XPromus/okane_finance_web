export const getRequest = async <ResponseType>(
    url: string, 
    searchParams: URLSearchParams | undefined
): Promise<ResponseType> => {
    const searchParamsString: string = (searchParams) ? searchParams.toString() : "";
    const requestURL: string = `${url}?${searchParamsString}`;
    const response = await fetch(
        requestURL, 
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
    
    const responseData: ResponseType = await response.json();
    return responseData;
}

export const postRequest = async <InputType, ResponseType>(
    url: string,
    input: InputType
): Promise<ResponseType> => {
    const response = await fetch(
        url,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(input)
        }
    )

    const responseData: ResponseType = await response.json();
    return responseData;
}

export const putRequest = async <InputType, ResponseType>(
    url: string,
    input: InputType
): Promise<ResponseType> => {
    const response = await fetch(
        url,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(input)
        }
    );

    const responseData: ResponseType = await response.json();
    return responseData;
}

export const deleteRequest = async (url: string): Promise<boolean> => {
    const response = await fetch(url, {
        method: "DELETE",
    });
    return response.ok;
}
