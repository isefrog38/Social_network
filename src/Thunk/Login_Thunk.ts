import {AuthAPI} from "../Api/Api";
import {AppThunk} from "../Reducers-Store/store";
import {setAuthUserDataAC} from "../Reducers-Store/Authorization-reducer";

export const AuthMeTC = (): AppThunk => async dispatch => {
    const response = await AuthAPI.AuthUser()
    if (response.resultCode === 0) {
        let {login, email, id} = response.data
        dispatch(setAuthUserDataAC({id, email, login, isAuth: true}))
    }
}

export const getAccountAuthTC = (values: { email: string, password: string, rememberMe: boolean, captcha: boolean }): AppThunk => async dispatch => {
    const response = await AuthAPI.SignIn(values.email, values.password, values.rememberMe, values.captcha);
    const responseAuth = await AuthAPI.AuthUser();
    if (response.resultCode === 0) {
        let {login, email, id} = responseAuth.data
        dispatch(setAuthUserDataAC({id, email, login, isAuth: true}))
    }
}

export const logOutTC = (): AppThunk => async dispatch => {
    const response = await AuthAPI.LogOut()
    if (response.resultCode === 0) {
        dispatch(setAuthUserDataAC({id: null, email: null, login: null, isAuth: false}))
    }
}
