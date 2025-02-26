import type {Depot} from "$lib/types/api/Depot";

export type StockOrder = {
    id: string,
    isin: string,
    wkn: string,
    stockName: string,
    numberOfStocks: number,
    buyInPrice: number,
    fees: number,
    tradeDate: Date,
    targetDepot: Depot
}

export type StockOrderDto = {
    isin: string,
    wkn: string,
    stockName: string,
    numberOfStocks: number,
    buyInPrice: number,
    fees: number,
    tradeDate: Date,
    targetDepotId: string
}