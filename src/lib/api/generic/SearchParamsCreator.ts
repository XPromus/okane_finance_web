export type SearchParamInput = [key: string, value?: any];

export const getURLSearchParams = (
    input: SearchParamInput[]
): URLSearchParams => {
    const searchParams = new URLSearchParams();
    input.forEach((element) => {
        if (element[1]) searchParams.append(element[0], element[1]);
    });
    return searchParams;
}
