import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import axios from "axios";
import Post from '././Posts/Post';
import Profile from "./Profile";
import {setProfile} from "../../redux/profileReducer";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : 2;
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId).then(response => {
            this.props.setProfile(response.data)
        })
    }
    
    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id} />),
        profile: state.profilePage.profile,
    }
}
//в контейнерную компоненту закинуться данные из урла
let WithUrlDataProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setProfile,
})(WithUrlDataProfileContainer);
