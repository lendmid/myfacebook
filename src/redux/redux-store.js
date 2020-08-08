import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messegesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messegesReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);
window.store = store;

export default store;
