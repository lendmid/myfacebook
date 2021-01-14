import React, {useEffect, useState} from 'react';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import s from './Profile.module.css';
import AddPostContainer from './AddPost/AddPostContainer';
import ShortInformation from "./ShortInformation/ShortInformation";
import {compose} from "redux";
import {connect} from "react-redux";
import {getProfile, getStatus, savePhoto, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import Post from "./Post/Post";
// import Preloader from "../common/Preloader/Preloader";


const Profile = React.memo((props) => {


    let [updatePhotoPopup, setUpdatePhotoPopup] = useState(false);
    let {profile, getProfile} = props;
    // let {match, userId, profile, isLoading, getProfile, getStatus} = props;

    useEffect(() => getProfile(), [getProfile]);

    // props.posts = profile && profile.posts.map(post => <PostConrainer message={post.message} likesCount={post.likesCount}
    //                         key={post.id} id={post.id}/>)

    // if (!profile || isLoading) return <Preloader/>;
    // isOwner={userId === Number(match.params.userId)}

    // let {posts} = props;

    return (
        <div className={s.profile}>
            <ProfileHeader {...props}
                           updatePhotoPopup={updatePhotoPopup}
                           setUpdatePhotoPopup={setUpdatePhotoPopup}/>
            <div className={s.profile_information}>
                <ShortInformation {...props} />
                <AddPostContainer/>
                {profile && profile.posts &&
                profile.posts.map(p => <Post message={p.message} key={p.id} date={p.date} firstName={profile.firstName}
                                             lastName={profile.lastName}/>)}
            </div>
        </div>
    )
})

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    userId: state.auth.userId,
    isLoading: state.profilePage.isLoading,
});

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
)(Profile)
