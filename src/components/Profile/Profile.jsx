import React from 'react';
import MyPosts from './MyPosts/MyPost';
import s from './MyPosts/MyPost.module.css';


const Profile = () => {
    return (
        <div className="{s.content}">
            <div>
                <img src="https://lh3.googleusercontent.com/proxy/xo-pJolXYCdI1W9WSymYXWcpdBrdC0EQU6Tsm6jHXMW3nrb1hhD1Q1OMTRsfX58UHN5frHc3kZndyQFcAjz1AnkS5C76nF1V3C3eAmwPDpCAQgiBHmvnGKGrvEoJKfqLpwFQl40" alt="face" />
            </div>
            <div className="">
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}
export default Profile;