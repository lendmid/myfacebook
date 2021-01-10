import profileReducer, {addPostCreator, deletePostCreator} from "../profileReducer";
import React from "react";


const state = {
    posts: [
        {
            id: 3,
            message: "Sint aliquid cumque quae minima ipsum nisi placeat illum culpa!",
        },
        {
            id: 2,
            message: "Animi accusamus necessitatibus consectetur natus sequi adipisci explicabo quis quidem et quibusdam.",
        },
        {
            id: 1,
            message: "Temporibus quos culpa molestiae quasi perspiciatis voluptatum? Lorem ipsum dolor sit amet.",
        },
    ],
}

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostCreator("new post text for test")
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(4);
});

it('message of new posts should be correct', () => {
    // 1. test data
    let action = addPostCreator("new post text for test")
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts[0].message).toBe("new post text for test");
});

it('after deleting length of message should be decrement', () => {
    // 1. test data
    let action = deletePostCreator(1);
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(2);
});

