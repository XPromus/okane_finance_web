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