import {getAuthUserData} from "./authReducer";


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

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

// export let signIn = (email, password, rememberMe) => (dispatch) => {
//     authAPI.signIn(email, password, rememberMe).then(response => {
//         if (response.data.resultCode === 0) {
//             dispatch(getAuthUserData());
//         } else {
//             let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
//             dispatch(stopSubmit("signIn", {_error: message}));
//         }
//     })
// }
//
// export let signOut = () => (dispatch) => {
//     authAPI.signOut().then(response => {
//         if (response.data.resultCode === 0) {
//             dispatch(setUserData(null, null, null, false))
//         }
//     })
// }

export default appReducer;
