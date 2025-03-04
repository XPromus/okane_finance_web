import type { UUID } from "crypto";
import type { Transaction } from "./Transaction";

export type Payee = {
    id: UUID,
    payeeName: string,
    transactions: Transaction[]
}

export type PayeeDto = {
    payeeName: string
}

export type CreatePayeeDto = {
    payeeName: string
}

export type EditPayeeDto = {
    payeeName: string | undefined
}

export type GetPayeeDto = {
    id: string,
    payeeName: string,
    transactionIDs: string[]
}
