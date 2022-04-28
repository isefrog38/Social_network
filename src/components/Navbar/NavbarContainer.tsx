import {useSelector} from "react-redux";
import {Navbar} from "./Navbar";
import {AppStateType} from "../../Reducers-Store/store";
import {NavigateBarType} from "../../Reducers-Store/Navigate-reducer";
import {SideBarType} from "../../Reducers-Store/SideBar-reducer";

export const NavbarContainer = () => {

    let stateNavBar = useSelector<AppStateType, NavigateBarType[]>(state => state.NavigateBarReducer.navigateBar)
    let stateSideBar = useSelector<AppStateType, SideBarType[]>(state => state.SideBarReducer.sideBar)

    return (
        <div>
            <Navbar sideBar={stateSideBar} navigateBar={stateNavBar}/>
        </div>
    )
}

