import {connect} from "react-redux";
import {Navbar} from "./Navbar";
import {AppStateType} from "../../redax/redux-store";
import {SideBarType} from "../../redax/SideBar-reducer";
import {NavigateBarType} from "../../redax/Navigate-reducer";

export type NavbarContainerProps = MapStateToPropsType;
type MapStateToPropsType = {
    navigateBar: NavigateBarType[]
    sideBar: Array<SideBarType>
}

const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        navigateBar: state.NavigateBarReducer.navigateBar,
        sideBar: state.SideBarReducer.sideBar
    }
}

export const NavbarContainer = connect(MapStateToProps)(Navbar);