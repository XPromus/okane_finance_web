import type { GetTransactionDto, TransactionDto } from "$lib/types/api/Transaction";

export const mapGetTransactionDtoToTransactionDto = (
    getTransactionDto: GetTransactionDto 
): TransactionDto => {
    return {
        id: getTransactionDto.id,
        transactionName: getTransactionDto.transactionName,
        doneDate: new Date(getTransactionDto.doneDate),
        finishedDate: getOptionalDate(getTransactionDto.finishedDate),
        amount: getTransactionDto.amount,
        targetAccountID: getTransactionDto.targetAccountID,
        targetPayeeID: getTransactionDto.targetPayeeID,
        targetCategoryID: getTransactionDto.targetCategoryID
    };
}

const getOptionalDate = (
    date: string | undefined
): Date | undefined => {
    if (date) {
        return new Date(date);
    } else {
        return undefined;
    }
}
