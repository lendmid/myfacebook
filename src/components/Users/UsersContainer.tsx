import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {requestUsers} from "../../redux/usersReducer";
import {getCurrentPage, getPageSize, getTotalUsersCount, getUsersSelector} from "../../redux/usersSelectors";
import {getProfile, getStatus} from "../../redux/profileReducer";
import User from "./User/User";
import Users from "./Users";
import PostConrainer from "../Profile/Post/PostContainer";
import {ProfileType, UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";


type PropsType = {
    match: any
    currentPage: number
    pageSize: number
    users: Array<UserType>
    profile: ProfileType

    getProfile(userId: number | string): any | void
    getStatus(userId: number | string): void
    requestUsers(currentPage: number, pageSize: number): void

    // isOwner: boolean
    // userId: number
}

class UsersContainer extends React.PureComponent<PropsType> {
    refreshProfile = () => {
        if (!this.props.match.params.userId) return;
        let userId = Number(this.props.match.params.userId);
        this.props.getProfile(userId).then(() => {
            this.props.getStatus(userId);
        });
    }
    
    componentDidMount() {
        if (!this.props.users.length) this.props.requestUsers(this.props.currentPage, this.props.pageSize)
        this.refreshProfile();
    }

    componentDidUpdate = (prevProps: any) => {
        if (this.props.match.params.userId !== prevProps.match.params.userId) this.refreshProfile();
    };

    onPageChanged = (pageNumber: number) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }
    
    render() {
        return <Users {...this.props}
                      profile={!this.props.match.params.userId ? null : this.props.profile}
                      onPageChanged={this.onPageChanged}
                      isOwner={false} />
    }
}

const mapStateToProps = (state: AppStateType) => ({
    users: getUsersSelector(state).map((user: UserType) => <User key={user.id} userId={user.id} name={user.name}
                                                                 status={user.status} photo={user.photos.large} />),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    posts: state.profilePage.posts.map(post => <PostConrainer message={post.message} likesCount={post.likesCount} key={post.id} id={post.id} />),
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isLoading: state.profilePage.isLoading,
})

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, requestUsers}),
    withRouter,
)(UsersContainer)


// tried writing on Hook; will refactoring later; showed warning:
// "React Hook useEffect has a missing dependency: 'props'. Either include it or remove the dependency array.
// However, 'props' will change when *any* prop changes, so the preferred fix is to destructure the 'props' object outside of the useEffect call and refer to those specific props inside useEffect  react-hooks/exhaustive-deps"

// const UsersContainer = React.memo((props) => {
//
//     useEffect(() => {
//         if (!props.users.length) props.requestUsers(props.currentPage, props.pageSize)
//         if (!props.match.params.userId) return;
//         let userId = Number(props.match.params.userId);
//         props.getProfile(userId);
//         props.getStatus(userId);
//     }, [props.match.params.userId])
//
//     let onPageChanged = (pageNumber) => {
//         props.requestUsers(pageNumber, props.pageSize);
//     }
//
//     return <Users {...props}
//                   profile={!props.match.params.userId ? null : props.profile}
//                   onPageChanged={onPageChanged} />
// })
