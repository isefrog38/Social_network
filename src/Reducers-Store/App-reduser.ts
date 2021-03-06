let IS_FETCHING = "samurai_network/isGlobalAppFetching/IS_FETCHING";

export type AppActionType = ReturnType<typeof isFetchingNewsAC> ;

export type AppInitialStateType = {
    isFetching: boolean
};

const AppState: AppInitialStateType = {
    isFetching: false
};


export const AppReducer = (state = AppState, action: AppActionType): AppInitialStateType => {
    switch (action.type) {
        case IS_FETCHING :
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const isFetchingNewsAC = (isFetching: boolean) => ({type: IS_FETCHING, isFetching} as const );



