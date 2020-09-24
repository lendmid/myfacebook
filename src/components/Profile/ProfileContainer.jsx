import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {getProfile, getStatus, savePhoto, updateStatus} from "../../redux/profileReducer";
import {compose} from "redux";
import Preloader from "../common/Preloader/Preloader";
import PostConrainer from "./Post/PostContainer";


class ProfileContainer extends React.PureComponent {
    refreshProfile = () => {
        if (!this.props.match.params.userId) return
        let userId = Number(this.props.match.params.userId);
        if (!userId) userId = this.props.authorizedUserId;
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }
    
    componentDidMount = () => {
        this.refreshProfile();
    };
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) this.refreshProfile();
    }
    
    render() {
        if (!this.props.profile || this.props.isLoading) return <Preloader />
        return <Profile {...this.props}
                        isOwner={this.props.authorizedUserId === Number(this.props.match.params.userId)} />;
    }
}


let mapStateToProps = (state) => ({
    posts: state.profilePage.posts.map(post => <PostConrainer message={post.message} likesCount={post.likesCount} key={post.id} id={post.id} />),
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.authorizedUserId,
    isLoading: state.profilePage.isLoading,
})

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
)(ProfileContainer)


// tried writing on Hook; will rewrite later; showed warning:
// "React Hook useEffect has a missing dependency: 'props'. Either include it or remove the dependency array.
// However, 'props' will change when *any* prop changes, so the preferred fix is to destructure the 'props' object outside of the useEffect call and refer to those specific props inside useEffect  react-hooks/exhaustive-deps"

// const ProfileContainer = React.memo(({profile, authorizedUserId, ...props}) => {
//
//     useEffect(() => {
//         if (!props.match.params.userId) return;
//         if (profile && profile.userId === authorizedUserId) return;
//         let userId = Number(props.match.params.userId);
//         props.getProfile(userId);
//         props.getStatus(userId);
//     }, [profile, authorizedUserId])
//
//     if (!profile) return <Preloader/>
//
//     return <Profile {...props}
//                     profile={profile}
//                     isOwner={authorizedUserId === Number(props.match.params.userId)} />;
// })
