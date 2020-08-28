import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Post from '././Posts/Post';
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profileReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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

let mapStateToProps = (state) => ({
    posts: state.profilePage.posts.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id} />),
    profile: state.profilePage.profile,
})

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
