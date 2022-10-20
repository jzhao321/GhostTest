export interface UserDataID {
    name: string
    value: string
}

export interface UserDataName {
    first: string
    last: string
    title: string
}

export interface UserDataResults {
    id: UserDataID
    name: UserDataName
    email: string
}

export interface UserData {
    results: UserDataResults[]
}