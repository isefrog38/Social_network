let GET_NEWS = "GET_NEWS";

export type NewsResponseType = {
    title: string
    content: string
    data: string
};
type GetNewsActionType = ReturnType<typeof getNewsAC>;
export type NewsActionType = GetNewsActionType;
export type NewsInitialStateType = Array<NewsResponseType>;


const NewsState: NewsInitialStateType = [

];


export const NewsReducer = (state = NewsState, action: NewsActionType): NewsInitialStateType => {
    switch (action.type) {
        case GET_NEWS :
            return [
                action.payload,
                ...state,
            ]
        default:
            return state
    }
}

export const getNewsAC = (payload: { title: string, content: string, data: string }) => {
    return {type: GET_NEWS, payload} as const
}


