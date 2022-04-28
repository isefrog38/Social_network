import React, {FC} from "react";
import s from './Settings.module.css'
import {useDispatch} from "react-redux";
import {logOutTC} from "../../Thunk/Login_Thunk";
import {ClearButton} from "../SmallComponents/ClearButton/ClearButton";
import {AuthRedirect} from "../../HOC/AuthRedirect";
import {initialStateAuthorizationType} from "../../Reducers-Store/Authorization-reducer";

type SettingsType = {
    stateAuth: initialStateAuthorizationType
}

const Setting: FC<SettingsType> = ({stateAuth}) => {

    const dispatch = useDispatch();

    const onClickLogOutHandler = () => dispatch(logOutTC());

    return (
        <div className={s.main_block_settings}>
            <div className={s.small_main_block}>
                <div className={s.log_data_block}>
                    <div className={s.text_log_data}>
                        Email : <a href={`https://mail.google.com/mail/${stateAuth.email}`} className={s.to_up_block}>{stateAuth.email}</a>
                    </div>
                    <div className={s.text_log_data}>
                        Your Id number is : <span className={s.to_up_block}>{stateAuth.id}</span>
                    </div>
                    <div className={s.button}>
                        <ClearButton
                            disabled={false}
                            name={"LogOut"}
                            onClick={onClickLogOutHandler}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AuthRedirect(Setting);