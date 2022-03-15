let SET_USER_DATA = "SET_USER_DATA";

type ActionType = SetUserDataAC;
export type initialStateAuthorizationType = {
    id: number | null
    email: string | null
    login: string | null
    isFetching: boolean
    isAuth: boolean
};
type DataType = {
    id: number
    email: string
    login: string
};
type SetUserDataAC = ReturnType<typeof setAuthUserDataAC>;
let initialStateAuthorization: initialStateAuthorizationType = {
    /*userId: 38,
    email: 'pavel@virtualbrest.com',
    login: 'IseFrog',
    isFetching: false*/
    id: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false,
};

export const AuthorizationReducer = (state = initialStateAuthorization, action: ActionType): initialStateAuthorizationType => {
    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserDataAC = (data: DataType) => {
    return {type: SET_USER_DATA, data} as const
}