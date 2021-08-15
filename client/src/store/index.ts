import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form"

import profileReducer from "./reducers/profile.reducer";
import {messagesReducer} from "./reducers/messages.reducer";
import usersReducer from "./reducers/users.reducer";
import {authReducer} from "./reducers/auth.reducer";
import logger from "redux-logger";


const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
});


export const composeEnhancers = (
    window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, logger))
);

export default store;
export type AppStateType = ReturnType<typeof rootReducer>


