import React, {useEffect, useState} from 'react';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import s from './Profile.module.css';
import AddPost from './AddPost/AddPost';
import ShortInformation from "./ShortInformation/ShortInformation";
import {compose} from "redux";
import {connect} from "react-redux";
import {getProfile, getStatus, savePhoto, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import Post from "./Post/Post";
import {AppStateType} from "../../redux/redux-store";

// import Preloader from "../common/Preloader/Preloader";

interface IProps {
    id: string
    userId: string
    match: any

    getProfile(): void
}


const Profile = React.memo((props: IProps) => {


    let [updatePhotoPopup, setUpdatePhotoPopup] = useState(false);
    let {profile, getProfile, userId, match} = props;


    let isOwner = (userId === match.params.userId);
    debugger
    // let {match, userId, profile, isLoading, getProfile, getStatus} = props;

    useEffect(() => getProfile(), [getProfile]);

    // props.posts = profile && profile.posts.map(post => <PostConrainer message={post.message} likesCount={post.likesCount}
    //                         key={post.id} id={post.id}/>)

    // if (!profile || isLoading) return <Preloader/>;

    // let {posts} = props;

    return (
        <div className={s.profile}>
            <ProfileHeader {...props}
                           updatePhotoPopup={updatePhotoPopup}
                           setUpdatePhotoPopup={setUpdatePhotoPopup}
                           isOwner={isOwner}
            />
            <div className={s.profile_information}>
                <ShortInformation {...props} />
                <AddPost/>
                {profile && profile.posts &&
                profile.posts.map(p => {
                    return <Post message={p.message} key={p.id} id={p.id} date={p.date} firstName={profile.firstName}
                                 lastName={profile.lastName}/>
                })}
            </div>
        </div>
    )
})

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    userId: state.auth.userId,
    isLoading: state.profilePage.isLoading,
});

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
)(Profile)
