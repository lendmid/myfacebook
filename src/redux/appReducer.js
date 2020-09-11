import {getAuthUserData} from "./authReducer";


const INITIALIZED_SUCCESS = 'myFacebook/app/INITIALIZED_SUCCESS';

let initialState = {
    initialized: false,
}

let appReducer = (state = initialState, action) => {
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

export let initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export let initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    
    Promise.all([promise]).then(r => {
        dispatch(initializedSuccess());
    })
}

export default appReducer;
