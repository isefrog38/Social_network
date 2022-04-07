let GET_NEWS = "GET_NEWS";

export type NewsResponseType = {
    title: string
    content: string
    data: string
};
type GetNewsActionType = ReturnType<typeof getNewsAC>;
export type NewsActionType = GetNewsActionType;
export type NewsInitialStateType = [
    {
        title: string
        content: string
        data: string
    }
]


// @ts-ignore
const NewsState: NewsInitialStateType = [
    {title: "HI BRO", content: "BLABLA CONTENT", data: "01.02.2022"},
    {title: "HI BRO1", content: "BLABLA CONTENT1", data: "01.02.20221"}
]


export const NewsReducer = (state = NewsState, action: NewsActionType): NewsInitialStateType => {
    switch (action.type) {
        case GET_NEWS :
            // @ts-ignore
            return [
                ...state,
                // @ts-ignore
                ...action.payload
            ]
        default:
            return state
    }
}

export const getNewsAC = (payload: {title: string, content: string, data: string}) => {
    return {type: GET_NEWS, payload} as const
}