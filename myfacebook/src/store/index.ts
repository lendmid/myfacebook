import {AnyAction, Middleware} from "redux";
import logger from "redux-logger";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from './auth/auth.reducer.slice'


const middlewares: Middleware[] = [];
if (process.env.NODE_ENV === 'development') middlewares.push(logger);


const reducers = {
    authReducer
    // profilePage: profileReducer,
    // messagesPage: messagesReducer,
    // usersPage: usersReducer,
};

const rootReducer = combineReducers<typeof reducers>(reducers);


const resettableRootReducer = (state: ReturnType<typeof rootReducer> | undefined, action: AnyAction) => {
    if (action.type === 'resetAppState') {
        return rootReducer(undefined, action);
    }

    return rootReducer(state, action);
};


export const setupStore = () => configureStore({
    reducer: resettableRootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(...middlewares)
});


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch']
