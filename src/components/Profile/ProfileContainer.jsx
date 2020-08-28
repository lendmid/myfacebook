import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Post from '././Posts/Post';
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profileReducer";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : 2;
        this.props.getUserProfile(userId);
    }
    
    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

let AuthRedirectComponent = withAuthRedirectComponent(ProfileContainer);

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id} />),
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
    }
}
//в контейнерную компоненту закинуться данные из урла
let WithUrlDataProfileContainer = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {
    getUserProfile,
})(WithUrlDataProfileContainer);
