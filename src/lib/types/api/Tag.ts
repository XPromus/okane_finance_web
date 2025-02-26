import type { UUID } from "crypto"
import type { Transaction } from "./Transaction"

export type Tag = {
    id: UUID | undefined,
    tagName: string,
    transactions: Transaction[]
}

export type TagDto = {
    tagName: string
}