import type {Account} from "$lib/types/api/Account";
import type {Depot} from "$lib/types/api/Depot";

export type Institute = {
    id: string,
    name: string,
    accounts: Account[],
    depots: Depot[]
}

export type InstituteDto = {
    name: string
}

export type CreateInstituteDto = {
    instituteName: string
}

export type EditInstituteDto = {
    instituteName: string | undefined
}

export type GetInstituteDto = {
    id: string,
    instituteName: string,
    accountIDs: string[],
    depotIDs: string[]
}
