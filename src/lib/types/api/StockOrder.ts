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

export type CreateStockOrderDto = {
    isin: string,
    wkn: string,
    stockName: string,
    numberOfStocks: number,
    buyInPrice: number,
    fees: number,
    tradeDate: Date,
    targetDepotID: string
}

export type EditStockOrderDto = {
    isin: string | undefined,
    wkn: string | undefined,
    stockName: string | undefined,
    numberOfStocks: number | undefined,
    buyInPrice: number | undefined,
    fees: number | undefined,
    tradeDate: Date | undefined,
    targetDepotID: string | undefined
}

export type GetStockOrderDto = {
    id: string,
    isin: string,
    wkn: string,
    stockName: string,
    numberOfStocks: number,
    buyInPrice: number,
    fees: number,
    tradeDate: Date,
    targetDepotID: string
}
