import {useSelector} from "react-redux";
import {Navbar} from "./Navbar";
import {AppStateType} from "../../redax/redux-store";
import {NavigateBarType} from "../../redax/Navigate-reducer";
import {SideBarType} from "../../redax/SideBar-reducer";

export const NavbarContainer = () => {

    let stateNavBar = useSelector<AppStateType, NavigateBarType[]>(state => state.NavigateBarReducer.navigateBar)
    let stateSideBar = useSelector<AppStateType, SideBarType[]>(state => state.SideBarReducer.sideBar)

    return (
        <div>
            <Navbar sideBar={stateSideBar} navigateBar={stateNavBar}/>
        </div>
    )
}

