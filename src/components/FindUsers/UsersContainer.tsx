import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redax/redux-store";
import {
    followAC,
    InitialUsersStateType,
    setActivePageUsersAC, setToggleFetchingAC, setTotalCountPagesAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redax/Users-reducer";
import {Users} from "./Users/Users";
import {Preloader} from "../Preloader/Preloader";
import {getUsers, onPageChanged} from "../../Api/Api";

type UsersClassPropsType = {
    unfollow: (id: number) => void
    follow: (id: number) => void
    users: UserType[]
    setUsers: (users: UserType[]) => void
    totalUsersCountPage: number
    sizeUsersPage: number
    setActivePage: (page: number) => void
    activePage: number
    setTotalCountPages: (totalCount: number) => void
    isFetching: boolean
    showPreloader: (isFetching: boolean) => void
}

class UsersClassContainer extends React.Component<UsersClassPropsType> {

    defaultAvatar = "https://as2.ftcdn.net/v2/jpg/03/08/68/53/1000_F_308685322_QENNJlJFHONQ8FVP2xVsiez6x1almqo2.jpg";

    componentDidMount() {
        this.props.showPreloader(true)
        getUsers(this.props.activePage, this.props.sizeUsersPage)
            .then(data => {
                this.props.showPreloader(false);
                this.props.setUsers(data.items);
                this.props.setTotalCountPages(data.totalCount);
            });
    }

    onClickHandler = (page: number) => {
        this.props.setActivePage(page)
        this.props.showPreloader(true)
        onPageChanged(page, this.props.sizeUsersPage)
            .then(data => {
                this.props.showPreloader(false)
                this.props.setUsers(data.items)
            });
    }

    render() {

        let calculationPage = Math.ceil(this.props.totalUsersCountPage / this.props.sizeUsersPage);
        let pages = [];
        for (let i = 1; i <= calculationPage; i++) {
            pages.push(i)
        }

        return (
            <div style={{display: "flex", justifyContent: "center"}}>
                {this.props.isFetching
                    ? <Preloader/>
                    : <Users
                        setActivePage={this.props.setActivePage}
                        pages={pages}
                        unfollow={this.props.unfollow}
                        follow={this.props.follow}
                        users={this.props.users}
                        onClickHandler={this.onClickHandler}
                        activePage={this.props.activePage}
                        defaultAvatar={this.defaultAvatar}
                    />
                }
            </div>
        )
    }
}

export const UsersContainer = React.memo(() => {

    const dispatch = useDispatch();
    const stateUsers = useSelector<AppStateType, InitialUsersStateType>(state => state.UsersReducer)

    const follow = useCallback((userId: number) => dispatch(followAC(userId)), [dispatch]);
    const unfollow = useCallback((userId: number) => dispatch(unfollowAC(userId)), [dispatch]);
    const setUsers = useCallback((users: UserType[]) => dispatch(setUsersAC(users)), [dispatch]);
    const setActivePage = useCallback((page: number) => dispatch(setActivePageUsersAC(page)), [dispatch]);
    const setTotalCountPages = useCallback((totalCount: number) => dispatch(setTotalCountPagesAC(totalCount)), [dispatch]);
    const showPreloader = useCallback((isFetching: boolean) => dispatch(setToggleFetchingAC(isFetching)), [dispatch]);

    return (
        <UsersClassContainer
            unfollow={unfollow}
            follow={follow}
            users={stateUsers.users}
            setUsers={setUsers}
            totalUsersCountPage={stateUsers.totalUsersCountPage}
            sizeUsersPage={stateUsers.sizeUsersPage}
            setActivePage={setActivePage}
            activePage={stateUsers.activePage}
            setTotalCountPages={setTotalCountPages}
            isFetching={stateUsers.isFetching}
            showPreloader={showPreloader}
        />
    )
})