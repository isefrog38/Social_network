import React from "react";
import s from './Settings.module.css'
import {useDispatch} from "react-redux";
import {logOutTC} from "../../Thunk/Login_Thunk";
import {ClearButton} from "../SmallComponents/ClearButton/ClearButton";
import {AuthRedirect} from "../../HOC/AuthRedirect";

const Setting = () => {

    const dispatch = useDispatch();

    const onClickLogOutHandler = () => dispatch(logOutTC());

    return (
        <div className={s.main_block_settings}>
            <div className={s.small_main_block}>
                <ClearButton
                    disabled={false}
                    name={"LogOut"}
                    onClick={onClickLogOutHandler}
                />
            </div>
        </div>
    )
}


export default AuthRedirect(Setting);