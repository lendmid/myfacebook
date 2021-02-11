import React, {useEffect} from 'react';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import s from './Profile.module.css';
import AddPost from './AddPost/AddPost';
import ShortInformation from "./ShortInformation/ShortInformation";
import {compose} from "redux";
import {connect} from "react-redux";
import {getProfile, IPost, IProfile, savePhoto, updateStatus} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import Post from "./Post/Post";
import {AppStateType} from "../../redux/redux-store";
import Preloader from "../common/Preloader/Preloader";
import {IMatch} from "../../interfaces/IMatch";


interface IProps extends RouteComponentProps<IMatch> {
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

    let isOwner = (userId === match.params.userId);

    return (
        <div className={s.profile}>
            <ProfileHeader profile={profile}
                           updateStatus={updateStatus}
                           savePhoto={savePhoto}
                           isOwner={isOwner}
            />
            <div className={s.profile_information}>
                <ShortInformation placeOfWork={profile.placeOfWork}
                                  liveIn={profile.liveIn}
                                  isOwner={isOwner}/>
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
    userId: state.auth.userId,
    isLoading: state.profilePage.isLoading,
});

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfile, updateStatus, savePhoto}),
    withRouter,
)(Profile)