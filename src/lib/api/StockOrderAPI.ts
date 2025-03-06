import { baseURL } from "$lib/config/consts";
import type { CreateStockOrderDto, EditStockOrderDto, GetStockOrderDto } from "$lib/types/api/StockOrder";
import { deleteRequest, getRequest, postRequest, putRequest } from "./generic/GenericAPI";

const apiBasePath: string = "/stock-order";

export const getAllStockOrders = async (): Promise<GetStockOrderDto[]> => {
    const url = `${baseURL}${apiBasePath}`;
    return await getRequest<GetStockOrderDto[]>(url, undefined);
}

export const getStockOrders = async (
    id: string | undefined,
    isin: string | undefined,
    wkn: string | undefined,
    stockName: string | undefined,
    numberOfStocks: number | undefined,
    buyInPrice: number | undefined,
    fees: number | undefined,
    tradeDate: Date | undefined,
    targetDepotID: string | undefined
): Promise<GetStockOrderDto[]> => {
    const url = `${baseURL}${apiBasePath}`;
    const record: Record<string, string | number | Date | undefined> = {
        id: id,
        isin: isin,
        wkn: wkn,
        stockName: stockName,
        numberOfStocks: numberOfStocks,
        buyInPrice: buyInPrice,
        fees: fees,
        tradeDate: tradeDate,
        targetDepotID: targetDepotID
    };
    return await getRequest<GetStockOrderDto[]>(url, record);
}

export const postCreateStockOrder = async (
    createStockOrderDto: CreateStockOrderDto
): Promise<GetStockOrderDto> => {
    const url = `${baseURL}${apiBasePath}`;
    return await postRequest<CreateStockOrderDto, GetStockOrderDto>(
        url,
        createStockOrderDto
    );
}

export const putEditStockOrder = async (
    id: string,
    editStockOrderDto: EditStockOrderDto
): Promise<GetStockOrderDto> => {
    const url = `${baseURL}${apiBasePath}/${id}`;
    return await putRequest<EditStockOrderDto, GetStockOrderDto>(
        url,
        editStockOrderDto
    );
}

export const deleteStockOrder = async (
    id: string
): Promise<boolean> => {
    const url = `${baseURL}${apiBasePath}/${id}`;
    return await deleteRequest(url);
}
