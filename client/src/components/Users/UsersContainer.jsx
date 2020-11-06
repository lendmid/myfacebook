import React, {useEffect} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {requestUsers} from "../../redux/usersReducer";
import {getCurrentPage, getPageSize, getTotalUsersCount, getUsers} from "../../redux/usersSelectors";
import {getProfile, getStatus} from "../../redux/profileReducer";
import User from "./User/User";
import Users from "./Users";
import PostConrainer from "../Profile/Post/PostContainer";


// class UsersContainer extends React.PureComponent {
//     refreshProfile = () => {
//         if (!this.props.match.params.userId) return;
//         let userId = Number(this.props.match.params.userId);
//         this.props.getProfile(userId).then(() => {
//             this.props.getStatus(userId);
//         });
//     }
//
//     componentDidMount() {
//         if (!this.props.users.length) this.props.requestUsers(this.props.currentPage, this.props.pageSize)
//         this.refreshProfile();
//     }
//
//     componentDidUpdate = (prevProps) => {
//         if (this.props.match.params.userId !== prevProps.match.params.userId) this.refreshProfile();
//     };
//
//     onPageChanged = (pageNumber) => {
//         this.props.requestUsers(pageNumber, this.props.pageSize);
//     }
//
//     render() {
//         return <Users {...this.props}
//                       profile={!this.props.match.params.userId ? null : this.props.profile}
//                       onPageChanged={this.onPageChanged}
//         />
//     }
// }

// tried writing on Hook; will refactoring later; showed warning:
// "React Hook useEffect has a missing dependency: 'props'. Either include it or remove the dependency array.
// However, 'props' will change when *any* prop changes, so the preferred fix is to destructure the 'props' object outside of the useEffect call and refer to those specific props inside useEffect  react-hooks/exhaustive-deps"

const UsersContainer = React.memo(({match, users, profile, getProfile, getStatus, requestUsers, currentPage, pageSize}) => {
    
    let refreshProfile = () => {
        if (!match.params.userId) return;
        let userId = Number(match.params.userId);
        getProfile(userId).then(() => {
            getStatus(userId);
        });
    };
    useEffect(() => {
        // if (users.length === 0) requestUsers(currentPage, pageSize);
        requestUsers(currentPage, pageSize);
        refreshProfile();
    }, []);
    
    useEffect(() => {
        refreshProfile();
    }, [match.params.userId]);
    
    
    
    // useEffect(() => {
    //     if (!props.users.length) props.requestUsers(props.currentPage, props.pageSize)
    //     if (!props.match.params.userId) return;
    //     let userId = Number(props.match.params.userId);
    //     props.getProfile(userId);
    //     props.getStatus(userId);
    // }, [props.match.params.userId])
    
    
    let onPageChanged = (pageNumber) => {
        requestUsers(pageNumber, pageSize);
    };
    
    return <Users {...props}
                  profile={!match.params.userId ? null : profile}
                  onPageChanged={onPageChanged} />
});



const mapStateToProps = (state) => ({
    users: getUsers(state).map((user) => <User key={user.id} userId={user.id} name={user.name}
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
