import {connect} from "react-redux";
import Navbar from "./Navbar";
import {AppStateType} from "../../redax/redux-store";
import {SideBarType} from "../../redax/SideBar-reducer";

export type NavbarContainerProps = MapStateToPropsType;
type MapStateToPropsType = {
    sideBar: Array<SideBarType>
}

const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        sideBar: state.SideBarReducer.sideBar
    }
}

export const NavbarContainer = connect(MapStateToProps)(Navbar);