import {getAuthUserData} from "./authReducer";


const INITIALIZED_SUCCESS = 'myFacebook/app/INITIALIZED_SUCCESS';

export type InitialStateType = {
    initialized: boolean,
}

const initialState: InitialStateType = {
    initialized: false,
}

const appReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}

type initializedSuccessType = {
    type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = (): initializedSuccessType => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    
    Promise.all([promise]).then(r => {
        dispatch(initializedSuccess());
    })
}

export default appReducer;
