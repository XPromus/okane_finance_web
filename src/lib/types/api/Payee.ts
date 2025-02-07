import type { UUID } from "crypto";
import type { Transaction } from "./Transaction";

export type Payee = {
    id: UUID | undefined,
    payeeName: string,
    transactions: Transaction[]
}