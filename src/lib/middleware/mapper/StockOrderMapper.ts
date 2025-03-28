import type { GetStockOrderDto, StockOrderDto } from "$lib/types/api/StockOrder";

export const mapGetStockOrderDtoToStockOrderDto = (
    getStockOrderDto: GetStockOrderDto
): StockOrderDto => {
    return {
        id: getStockOrderDto.id,
        isin: getStockOrderDto.isin,
        wkn: getStockOrderDto.wkn,
        tickerSymbol: getStockOrderDto.tickerSymbol,
        stockName: getStockOrderDto.stockName,
        numberOfStocks: getStockOrderDto.numberOfStocks,
        buyInPrice: getStockOrderDto.buyInPrice,
        fees: getStockOrderDto.fees,
        tradeDate: new Date(getStockOrderDto.tradeDate),
        targetDepotID: getStockOrderDto.targetDepotID
    }
}
