import React from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
});

export let withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            debugger
            if (!this.props.isAuth) return <Redirect to={'/signIn'} />
            return <Component {...this.props} />
        }
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}
