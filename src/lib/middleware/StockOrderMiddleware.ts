import type { GetStockOrderDto, StockOrderDto } from "$lib/types/api/StockOrder";
import { mapGetStockOrderDtoToStockOrderDto } from "./mapper/StockOrderMapper";

export const getStockOrderDtos = (
    getStockOrderDtos: GetStockOrderDto[]
): StockOrderDto[] => {
    return getStockOrderDtos.map((element) => {
        return mapGetStockOrderDtoToStockOrderDto(element);
    })
}