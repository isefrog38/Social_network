
export type ResponseType = {
    resultCode: number
    messages: Array<string>,
    data: {
        userId: number
    }
}

export type ResponseGetAuthType = {
    resultCode: number
    messages: string[]
    data: {
        id: number
        email: string
        login: string
    }
}