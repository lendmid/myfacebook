import {getAuthUserData} from "./authReducer";


const INITIALIZED_SUCCESS = 'myFacebook/app/INITIALIZED_SUCCESS';

const initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
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

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    
    Promise.all([promise]).then(r => {
        dispatch(initializedSuccess());
    })
}

export default appReducer;
