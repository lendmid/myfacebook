import {createStore, combineReducers} from "redux";
import profileReducers from "./profileReducer";
import messegesReducers from "./messagesReducer";

let reducers = combineReducers({
    profilePage: profileReducers,
    messagesPage: messegesReducers,
});

let store = createStore(reducers);
window.store = store;

export default store;
