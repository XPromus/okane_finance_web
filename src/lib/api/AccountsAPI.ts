import { baseURL } from "$lib/config/consts"
import type { Account, AccountDto } from "$lib/types/api/Account"

export const getAllAccounts = async (): Promise<Account[]> => {
    const url = baseURL + "/accounts"
	const response = await fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	})
	const accounts: Account[] = await response.json()
	return accounts
}

export const getAccounts = async (
    id: string | undefined,
    accountName: string | undefined,
): Promise<Account[]> => {
    const params: Record<string, string | undefined> = {
        id: id,
        accountName: accountName,
    }

    const url = baseURL + "/accounts" + "?" + params.toString()
	const response = await fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		},
        
	})
	const owners: Account[] = await response.json()
	return owners
}

export const postCreateAccount = async (accountDto: AccountDto): Promise<Account> => {
    const response = await fetch(baseURL + "/accounts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(accountDto)
    });

    const responseData: Promise<Account> = response.json()
    return responseData;
}

export const putUpdateAccount = async (accountDto: AccountDto, id: string): Promise<Account> => {
    const response = await fetch(baseURL + "/accounts/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(accountDto)
    });

    const responseData: Promise<Account> = response.json()
    return responseData;
}

export const deleteAccount = async (id: string): Promise<boolean> => {
    const response = await fetch(baseURL + "/accounts/" + id, {
        method: "DELETE",
    });

    return response.ok
}

export const addTransactions = async (id: string, transactions: string[]): Promise<Account> => {
    const response = await fetch(baseURL + "/accounts/" + id + "/transactions", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transactions)
    });

    const responseData: Promise<Account> = response.json()
    return responseData;
}
