export type StockOrderDto = {
    id: string,
    isin: string,
    wkn: string,
    tickerSymbol: string,
    stockName: string,
    numberOfStocks: number,
    buyInPrice: number,
    fees: number,
    tradeDate: Date,
    targetDepotID: string
}

export type CreateStockOrderDto = {
    isin: string,
    wkn: string,
    tickerSymbol: string,
    stockName: string,
    numberOfStocks: number,
    buyInPrice: number,
    fees: number,
    tradeDate: Date,
    targetDepotID: string
}

export type EditStockOrderDto = {
    isin?: string,
    wkn?: string,
    tickerSymbol?: string,
    stockName?: string,
    numberOfStocks?: number,
    buyInPrice?: number,
    fees?: number,
    tradeDate?: Date,
    targetDepotID?: string
}

export type GetStockOrderDto = {
    id: string,
    isin: string,
    wkn: string,
    tickerSymbol: string,
    stockName: string,
    numberOfStocks: number,
    buyInPrice: number,
    fees: number,
    tradeDate: string,
    targetDepotID: string
}
