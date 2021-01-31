import React, {useEffect, useState} from 'react';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import s from './Profile.module.css';
import AddPost from './AddPost/AddPost';
import ShortInformation from "./ShortInformation/ShortInformation";
import {compose} from "redux";
import {connect} from "react-redux";
import {getProfile, IPost, IProfile, savePhoto, updateStatus} from "../../redux/profileReducer";
import {withRouter, RouteComponentProps} from "react-router-dom";
import Post from "./Post/Post";
import {AppStateType} from "../../redux/redux-store";
import Preloader from "../common/Preloader/Preloader";

// import Preloader from "../common/Preloader/Preloader";

interface IProps extends RouteComponentProps {
    userId: string
    profile: IProfile
    isLoading: boolean

    getProfile(): void

    updateStatus(): void

    savePhoto(): void
}


const Profile = React.memo(({isLoading, match, userId, profile, getProfile, updateStatus, savePhoto}: IProps) => {

    useEffect(getProfile, [getProfile]);
    if (!profile || isLoading) return <Preloader/>;

    //,
    debugger
    // @ts-ignore
    let isOwner = (userId === match.params.userId);

    return (
        <div className={s.profile}>
            <ProfileHeader photo={profile.photo}
                           firstName={profile.firstName}
                           lastName={profile.lastName}
                           status={profile.status}
                           updateStatus={updateStatus}
                           savePhoto={savePhoto}
                           isOwner={isOwner}
            />
            <div className={s.profile_information}>
                {/*<ShortInformation {...props} />*/}
                <AddPost/>
                {profile.posts && (profile.posts as Array<IPost>).map((p: IPost) => {
                        return <Post key={p.id}
                                     id={p.id}
                                     message={p.message}
                                     date={p.date}
                                     firstName={profile.firstName}
                                     lastName={profile.lastName}/>
                    }
                )}
            </div>
        </div>
    )
})

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    isLoading: state.profilePage.isLoading,
});

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfile, updateStatus, savePhoto}),
    withRouter,
)(Profile)
