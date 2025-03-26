import { baseURL } from "$lib/config/consts";
import type { CreateStockOrderDto, EditStockOrderDto, GetStockOrderDto } from "$lib/types/api/StockOrder";
import { deleteRequest, getRequest, postRequest, putRequest } from "./generic/GenericAPI";
import { getURLSearchParams } from "./generic/SearchParamsCreator";

const apiBasePath: string = "/stock-order";
const apiURL: string = `${baseURL}${apiBasePath}`;

export const getAllStockOrders = async (): Promise<GetStockOrderDto[]> => {
    return await getRequest<GetStockOrderDto[]>(
        apiURL, 
        undefined
    );
}

export const getStockOrders = async (
    id?: string,
    isin?: string,
    wkn?: string,
    tickerSymbol?: string,
    stockName?: string,
    numberOfStocks?: number,
    buyInPrice?: number,
    fees?: number,
    tradeDate?: Date,
    targetDepotID?: string
): Promise<GetStockOrderDto[]> => {
    const params: URLSearchParams = getURLSearchParams([
        ["id", id],
        ["isin", isin],
        ["wkn", wkn],
        ["tickerSymbol", tickerSymbol],
        ["stockName", stockName],
        ["numberOfStocks", numberOfStocks],
        ["buyInPrice", buyInPrice],
        ["fees", fees],
        ["tradeDate", tradeDate],
        ["targetDepotID", targetDepotID]
    ]);

    return await getRequest<GetStockOrderDto[]>(
        apiURL,
        params
    );
}

export const postCreateStockOrder = async (
    createStockOrderDto: CreateStockOrderDto
): Promise<GetStockOrderDto> => {
    return await postRequest<CreateStockOrderDto, GetStockOrderDto>(
        apiURL,
        createStockOrderDto
    );
}

export const putEditStockOrder = async (
    id: string,
    editStockOrderDto: EditStockOrderDto
): Promise<GetStockOrderDto> => {
    const url = `${apiURL}/${id}`;
    return await putRequest<EditStockOrderDto, GetStockOrderDto>(
        url,
        editStockOrderDto
    );
}

export const deleteStockOrder = async (
    id: string
): Promise<boolean> => {
    const url = `${apiURL}/${id}`;
    return await deleteRequest(url);
}
