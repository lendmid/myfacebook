import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form"

import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";
import {authReducer} from "./authReducer";
import appReducer from "./appReducer";
import logger from "redux-logger";


const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
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


