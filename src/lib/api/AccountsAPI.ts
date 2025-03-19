import { baseURL } from "$lib/config/consts"
import type { Account, AccountDto, CreateAccountDto, EditAccountDto, GetAccountDto } from "$lib/types/api/Account"

const apiBasePath: string = "/accounts";

export const getAllAccounts = async (): Promise<GetAccountDto[]> => {
    const url = baseURL + "/accounts"
	const response = await fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	})
	const accounts: GetAccountDto[] = await response.json()
	return accounts
}

export const getAccounts = async (
    id: string | undefined,
    accountName: string | undefined,
    startingBalance: number | undefined,
    instituteID: string | undefined,
    ownerID: string | undefined,
): Promise<GetAccountDto[]> => {
    const params: Record<string, string | number | undefined> = {
        id: id,
        accountName: accountName,
        startingBalance: startingBalance,
        instituteID: instituteID,
        ownerID: ownerID
    }

    const url = baseURL + "/accounts" + "?" + params.toString()
	const response = await fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		},
        
	})
	const owners: GetAccountDto[] = await response.json()
	return owners
}

export const postCreateAccount = async (accountDto: CreateAccountDto): Promise<GetAccountDto> => {
    const response = await fetch(baseURL + "/accounts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(accountDto)
    });

    const responseData: GetAccountDto = await response.json()
    return responseData;
}

export const putUpdateAccount = async (id: string, accountDto: EditAccountDto): Promise<GetAccountDto> => {
    const response = await fetch(baseURL + "/accounts/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(accountDto)
    });

    const responseData: GetAccountDto = await response.json()
    return responseData;
}

export const deleteAccount = async (id: string): Promise<boolean> => {
    const response = await fetch(baseURL + "/accounts/" + id, {
        method: "DELETE",
    });

    return response.ok
}
